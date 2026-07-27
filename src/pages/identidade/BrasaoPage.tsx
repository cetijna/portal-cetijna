import logoCeti from "@/assets/logo-ceti.png";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function BrasaoPage() {
  return (
    <PageShell section="Identidade Visual" title="Brasão Oficial">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{identidadeContent.brasao.intro}</p>
        <div className="bg-white p-10 shadow-sm flex justify-center">
          <img
            src={logoCeti}
            alt="Brasão oficial do CETI José Nogueira de Aguiar"
            className="w-48 h-48 object-contain"
          />
        </div>
        <Link
          to="/identidade/manual-de-uso"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver manual de uso →
        </Link>
      </div>
    </PageShell>
  );
}
