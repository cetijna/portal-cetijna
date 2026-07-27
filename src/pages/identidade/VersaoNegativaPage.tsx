import logoCeti from "@/assets/logo-ceti.png";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function VersaoNegativaPage() {
  return (
    <PageShell section="Identidade Visual" title="Versão Negativa">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{identidadeContent.negativa.intro}</p>
        <div className="bg-[#003366] p-10 shadow-sm flex justify-center">
          <img
            src={logoCeti}
            alt="Prévia da marca sobre fundo escuro"
            className="w-40 h-40 object-contain brightness-0 invert"
          />
        </div>
        <p className="text-sm text-slate-500">
          A prévia acima é apenas ilustrativa. Utilize os arquivos oficiais quando forem publicados.
        </p>
      </div>
    </PageShell>
  );
}
