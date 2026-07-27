import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

export function EventosPage() {
  return (
    <PageShell section="Notícias e Eventos" title="Eventos">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Agenda de atividades escolares, mostras, jogos e cerimônias ao longo do ano.
        </p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {noticiasContent.eventos.map((e) => (
            <li key={e.title} className="flex items-center gap-5 p-5">
              <div className="bg-slate-100 px-4 py-3 text-center min-w-[70px]">
                <div className="text-[10px] font-bold text-[#003366] uppercase tracking-widest">
                  {e.mes}
                </div>
                <div className="text-2xl font-light text-slate-800">{e.dia}</div>
              </div>
              <div>
                <div className="text-[#003366] font-semibold">{e.title}</div>
                <div className="text-xs text-slate-500 mt-1">{e.hora}</div>
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/alunos/calendario"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver calendário escolar →
        </Link>
      </div>
    </PageShell>
  );
}
