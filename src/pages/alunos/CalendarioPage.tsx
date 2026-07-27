import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { alunosContent } from "@/data/content";

export function CalendarioPage() {
  return (
    <PageShell section="Alunos e Famílias" title="Calendário Escolar">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Principais marcos do ano letivo. O calendário oficial completo será publicado em
          Documentos Institucionais.
        </p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {alunosContent.calendario.map((item) => (
            <li key={item.item} className="flex items-center gap-5 p-5">
              <div className="bg-slate-100 px-4 py-3 text-center min-w-[70px]">
                <div className="text-[10px] font-bold text-[#003366] uppercase tracking-widest">
                  {item.mes}
                </div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-[#003366]">{item.item}</div>
              </div>
              <span className="text-[11px] uppercase tracking-widest text-slate-500">
                {item.status}
              </span>
            </li>
          ))}
        </ul>
        <Link
          to="/a-escola/documentos"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver documentos institucionais →
        </Link>
      </div>
    </PageShell>
  );
}
