import { PageShell } from "@/components/PageShell";
import { ensinoContent } from "@/data/content";

export function DisciplinasPage() {
  return (
    <PageShell section="Ensino" title="Disciplinas">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Visão geral dos componentes curriculares. A grade completa por curso e série será
          detalhada pela coordenação pedagógica.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {ensinoContent.disciplinas.map((g) => (
            <section key={g.grupo} className="bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#003366] mb-3">{g.grupo}</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                {g.itens.map((item) => (
                  <li key={item} className="border-b border-slate-100 pb-2 last:border-0">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
