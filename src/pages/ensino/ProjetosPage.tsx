import { PageShell } from "@/components/PageShell";
import { ensinoContent } from "@/data/content";

export function ProjetosPage() {
  return (
    <PageShell section="Ensino" title="Projetos">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Projetos pedagógicos e mostras que conectam o aprendizado em sala às práticas da
          comunidade.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {ensinoContent.projetos.map((p) => (
            <article key={p.title} className="bg-white p-5 shadow-sm border-t-2 border-[#003366]">
              <h2 className="font-semibold text-[#003366]">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
