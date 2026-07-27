import logoCeti from "@/assets/logo-ceti.png";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function LogoPage() {
  return (
    <PageShell section="Identidade Visual" title="Logo da Escola">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{identidadeContent.logo.intro}</p>
        <div className="bg-white p-10 shadow-sm flex flex-col items-center gap-4">
          <img
            src={logoCeti}
            alt="Logo do CETI José Nogueira de Aguiar"
            className="w-40 h-40 object-contain"
          />
          <div className="text-center">
            <div className="text-[#003366] font-bold tracking-wide">CETI JOSÉ NOGUEIRA</div>
            <div className="text-xs uppercase tracking-[0.2em] text-slate-500 mt-1">
              Educação · Trabalho · Cidadania
            </div>
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
