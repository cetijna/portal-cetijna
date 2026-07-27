import { PageShell } from "@/components/PageShell";
import { alunosContent } from "@/data/content";

export function HorariosPage() {
  return (
    <PageShell section="Alunos e Famílias" title="Horários de Aula">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{alunosContent.horarios.intro}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {alunosContent.horarios.turnos.map((t) => (
            <article key={t.nome} className="bg-white p-6 shadow-sm border-t-2 border-[#003366]">
              <h2 className="text-xl font-light text-[#003366]">{t.nome}</h2>
              <p className="mt-2 text-sm text-slate-600">{t.periodo}</p>
              <p className="mt-1 text-sm text-slate-500">{t.turmas}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
