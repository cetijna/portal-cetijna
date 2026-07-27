import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

export function ArquivoHistoricoPage() {
  return (
    <PageShell section="Notícias e Eventos" title="Arquivo Histórico">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Registros e marcos da trajetória do CETI José Nogueira de Aguiar. O acervo será ampliado
          com documentos, fotos e memórias da comunidade.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {noticiasContent.arquivo.map((a) => (
            <article key={a.year} className="bg-white p-6 border-t-2 border-[#003366] shadow-sm">
              <div className="text-3xl font-light text-[#003366]">{a.year}</div>
              <div className="mt-2 text-sm text-slate-600">{a.title}</div>
            </article>
          ))}
        </div>
        <Link
          to="/a-escola/historia"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver história da escola →
        </Link>
      </div>
    </PageShell>
  );
}
