import { Link } from "react-router-dom";
import { brasao } from "@/assets/brand";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function LogoPage() {
  return (
    <PageShell section="Identidade Visual" title="Logo da Escola">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{identidadeContent.logo.intro}</p>
        <div className="bg-white p-10 shadow-sm flex flex-col sm:flex-row items-center justify-center gap-8">
          <img
            src={brasao}
            alt="Logo do CETI José Nogueira de Aguiar"
            className="w-40 h-auto object-contain"
          />
          <div className="text-center sm:text-left">
            <div className="text-[#003366] font-bold tracking-wide text-lg">CETI JOSÉ NOGUEIRA</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-1">
              Educação · Trabalho · Cidadania
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-xs">
              Combine o brasão com o nome da escola em materiais oficiais, mantendo proporções e
              área de respiro.
            </p>
          </div>
        </div>
        <Link
          to="/identidade/arquivos"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Arquivos para download →
        </Link>
      </div>
    </PageShell>
  );
}
