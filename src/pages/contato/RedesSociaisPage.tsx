import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { contatoContent } from "@/data/content";

export function RedesSociaisPage() {
  return (
    <PageShell section="Contato" title="Redes Sociais">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Acompanhe novidades, eventos e comunicados pelos canais oficiais da escola. Os links serão
          atualizados assim que forem confirmados pela gestão.
        </p>

        <ul className="grid sm:grid-cols-3 gap-4">
          {contatoContent.redes.map((rede) => (
            <li key={rede.label} className="bg-white p-6 shadow-sm border-t-2 border-[#003366]">
              <h2 className="font-semibold text-[#003366] text-lg">{rede.label}</h2>
              <p className="mt-2 text-sm text-slate-500">{rede.note}</p>
              {rede.url !== "#" ? (
                <a
                  href={rede.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-xs font-bold tracking-widest uppercase text-[#003366] hover:underline"
                >
                  Acessar →
                </a>
              ) : (
                <span className="inline-block mt-4 text-xs font-bold tracking-widest uppercase text-slate-400">
                  Em breve
                </span>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/noticias"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver notícias e eventos →
        </Link>
      </div>
    </PageShell>
  );
}
