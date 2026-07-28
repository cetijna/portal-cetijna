import { Link } from "react-router-dom";
import { brasao } from "@/assets/brand";
import { navigation } from "@/data/navigation";

const footerSections = navigation.filter((s) =>
  ["A Escola", "Identidade Visual"].includes(s.label),
);

export function Footer() {
  return (
    <footer className="bg-white py-10 px-6 border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
        <div className="flex items-center gap-4">
          <img
            src={brasao}
            alt="Brasão CETI José Nogueira de Aguiar"
            className="w-16 h-16 object-contain"
          />
          <div>
            <div className="text-[#003366] font-bold">CETI JOSÉ NOGUEIRA</div>
            <div className="text-xs uppercase tracking-widest text-slate-500">
              Educação · Trabalho · Cidadania
            </div>
          </div>
        </div>

        {footerSections.map((section) => (
          <div key={section.label} className="text-sm">
            <div className="font-semibold text-[#003366] mb-2">{section.label}</div>
            <ul className="space-y-1.5 text-slate-600">
              {section.children?.slice(0, 4).map((child) => (
                <li key={child.path}>
                  <Link to={child.path} className="hover:text-[#003366] hover:underline">
                    {child.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="text-sm text-slate-600">
          <div className="font-semibold text-[#003366]">Contato</div>
          <ul className="mt-2 space-y-1.5">
            <li>
              <Link to="/contato" className="hover:text-[#003366] hover:underline">
                Fale Conosco
              </Link>
            </li>
            <li>
              <Link to="/contato/localizacao" className="hover:text-[#003366] hover:underline">
                Localização
              </Link>
            </li>
            <li>
              <Link to="/contato/redes-sociais" className="hover:text-[#003366] hover:underline">
                Redes Sociais
              </Link>
            </li>
          </ul>
          <div className="mt-4">CETI José Nogueira de Aguiar</div>
          <div>Esperantina — PI</div>
          <a href="mailto:contato@cetijna.edu.br" className="hover:underline">
            contato@cetijna.edu.br
          </a>
          <div className="mt-4 text-xs text-slate-400">© 2026 — Todos os direitos reservados</div>
        </div>
      </div>
    </footer>
  );
}
