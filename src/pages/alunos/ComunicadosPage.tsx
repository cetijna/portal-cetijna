import { PageShell } from "@/components/PageShell";
import { alunosContent } from "@/data/content";

export function ComunicadosPage() {
  return (
    <PageShell section="Alunos e Famílias" title="Comunicados">
      <div className="space-y-6">
        <p className="text-slate-700 leading-relaxed">
          Avisos oficiais para estudantes e famílias. Novos comunicados aparecerão no topo da lista.
        </p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {alunosContent.comunicados.map((c) => (
            <li key={c.titulo} className="p-5">
              <div className="text-[11px] uppercase tracking-widest text-[#003366] font-semibold">
                {c.data}
              </div>
              <h2 className="mt-1 font-semibold text-slate-800">{c.titulo}</h2>
              <p className="mt-2 text-sm text-slate-600">{c.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
