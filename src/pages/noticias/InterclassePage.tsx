import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

export function InterclassePage() {
  return (
    <PageShell section="Notícias e Eventos" title="Interclasse">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{noticiasContent.interclasse.intro}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {noticiasContent.interclasse.itens.map((i) => (
            <article key={i.title} className="bg-white p-5 shadow-sm border-t-2 border-[#003366]">
              <h2 className="font-semibold text-[#003366]">{i.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{i.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
