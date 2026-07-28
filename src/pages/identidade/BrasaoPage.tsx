import { Link } from "react-router-dom";
import { brasao, brasaoAplicacao } from "@/assets/brand";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function BrasaoPage() {
  return (
    <PageShell section="Identidade Visual" title="Brasão Oficial">
      <div className="space-y-10">
        <p className="text-slate-700 leading-relaxed">{identidadeContent.brasao.intro}</p>

        <div className="bg-white p-10 shadow-sm flex justify-center">
          <img
            src={brasao}
            alt="Brasão oficial do CETI José Nogueira de Aguiar"
            className="w-56 md:w-72 h-auto object-contain"
          />
        </div>

        <section>
          <h2 className="text-[#003366] text-xl font-semibold mb-3">Aplicação</h2>
          <p className="text-sm text-slate-600 mb-4">
            Exemplo de uso do brasão em uniformes e peças institucionais.
          </p>
          <div className="rounded-sm overflow-hidden shadow-sm">
            <img
              src={brasaoAplicacao}
              alt="Brasão aplicado em camisa institucional"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </section>

        <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest uppercase">
          <Link to="/identidade/versao-negativa" className="text-[#003366] hover:underline">
            Versão negativa →
          </Link>
          <Link to="/identidade/arquivos" className="text-[#003366] hover:underline">
            Arquivos para download →
          </Link>
          <Link to="/identidade/manual-de-uso" className="text-[#003366] hover:underline">
            Manual de uso →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
