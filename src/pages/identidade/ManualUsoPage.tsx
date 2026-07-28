import { brasao, brasaoAplicacao } from "@/assets/brand";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function ManualUsoPage() {
  return (
    <PageShell section="Identidade Visual" title="Manual de Uso">
      <div className="space-y-10">
        <p className="text-slate-700 leading-relaxed">
          Diretrizes básicas para aplicação correta da marca do CETI José Nogueira de Aguiar.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 items-center bg-white p-6 shadow-sm">
          <img src={brasao} alt="Brasão oficial" className="w-40 mx-auto h-auto object-contain" />
          <img
            src={brasaoAplicacao}
            alt="Exemplo de aplicação do brasão"
            className="w-full h-48 object-cover rounded-sm"
            loading="lazy"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {identidadeContent.manual.map((item) => (
            <article key={item.title} className="bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-[#003366]">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
