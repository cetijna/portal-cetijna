import { PageShell } from "@/components/PageShell";
import { ensinoContent } from "@/data/content";

export function MaterialApoioPage() {
  return (
    <PageShell section="Ensino" title="Material de Apoio">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Materiais complementares para estudo serão reunidos aqui por disciplina e curso.
        </p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {ensinoContent.material.map((m) => (
            <li key={m.title} className="flex flex-col sm:flex-row sm:items-center gap-3 p-5">
              <div className="flex-1">
                <h2 className="font-semibold text-[#003366]">{m.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{m.description}</p>
              </div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 self-start">
                {m.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
