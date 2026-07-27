import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function ArquivosPage() {
  return (
    <PageShell section="Identidade Visual" title="Arquivos para Download">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Pacote de arquivos oficiais da identidade visual. Downloads em alta resolução serão
          liberados conforme aprovação da direção.
        </p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {identidadeContent.arquivos.map((a) => (
            <li key={a.title} className="flex flex-col sm:flex-row sm:items-center gap-3 p-5">
              <div className="flex-1">
                <h2 className="font-semibold text-[#003366]">{a.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{a.note}</p>
              </div>
              <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 self-start">
                {a.status}
              </span>
            </li>
          ))}
        </ul>
        <Link
          to="/identidade/brasao"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver brasão oficial →
        </Link>
      </div>
    </PageShell>
  );
}
