import { PageShell } from "@/components/PageShell";
import { alunosContent } from "@/data/content";

export function AchadosPerdidosPage() {
  return (
    <PageShell section="Alunos e Famílias" title="Achados e Perdidos">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{alunosContent.achados.intro}</p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {alunosContent.achados.itens.map((i) => (
            <li key={i.item} className="grid sm:grid-cols-3 gap-2 p-5 text-sm">
              <span className="font-semibold text-[#003366]">{i.item}</span>
              <span className="text-slate-600">{i.local}</span>
              <span className="text-slate-500">{i.data}</span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
