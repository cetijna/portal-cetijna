import { Link } from "react-router-dom";
import { brasaoNegativo } from "@/assets/brand";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function VersaoNegativaPage() {
  return (
    <PageShell section="Identidade Visual" title="Versão Negativa">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{identidadeContent.negativa.intro}</p>
        <div className="bg-[#003366] p-10 shadow-sm flex justify-center">
          <img
            src={brasaoNegativo}
            alt="Brasão do CETI em versão negativa"
            className="w-56 md:w-72 h-auto object-contain"
          />
        </div>
        <p className="text-sm text-slate-500">
          Use a versão negativa sobre fundos escuros ou fotografias com baixa luminosidade.
        </p>
        <Link
          to="/identidade/brasao"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver brasão oficial →
        </Link>
      </div>
    </PageShell>
  );
}
