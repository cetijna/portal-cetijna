import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

export function NoticiasPage() {
  return (
    <PageShell section="Notícias e Eventos" title="Notícias">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Atualizações da comunidade escolar, comunicados em destaque e registros de atividades.
        </p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {noticiasContent.noticias.map((n) => (
            <li key={n.titulo} className="p-5">
              <div className="text-[11px] uppercase tracking-widest text-[#003366] font-semibold">
                {n.data}
              </div>
              <h2 className="mt-1 font-semibold text-slate-800">{n.titulo}</h2>
              <p className="mt-2 text-sm text-slate-600">{n.texto}</p>
            </li>
          ))}
        </ul>
        <Link
          to="/noticias/eventos"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver agenda de eventos →
        </Link>
      </div>
    </PageShell>
  );
}
