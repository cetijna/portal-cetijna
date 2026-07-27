import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { escolaContent } from "@/data/content";

export function DocumentosPage() {
  return (
    <PageShell section="A Escola" title="Documentos Institucionais">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Aqui serão disponibilizados os documentos oficiais da escola para consulta da comunidade.
          Enquanto os arquivos finais são publicados, consulte também as seções de alunos e ensino.
        </p>

        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {escolaContent.documentos.map((doc) => (
            <li key={doc.title} className="flex flex-col sm:flex-row sm:items-center gap-3 p-5">
              <div className="flex-1">
                <h2 className="font-semibold text-[#003366]">{doc.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{doc.description}</p>
              </div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 self-start">
                {doc.status}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-4 text-xs font-bold tracking-widest uppercase">
          <Link to="/alunos/normas" className="text-[#003366] hover:underline">
            Normas da escola →
          </Link>
          <Link to="/alunos/calendario" className="text-[#003366] hover:underline">
            Calendário escolar →
          </Link>
        </div>
      </div>
    </PageShell>
  );
}
