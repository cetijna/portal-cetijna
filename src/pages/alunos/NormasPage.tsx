import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { alunosContent } from "@/data/content";

export function NormasPage() {
  return (
    <PageShell section="Alunos e Famílias" title="Normas da Escola">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Orientações gerais de convivência e funcionamento. O regimento completo estará disponível
          em Documentos Institucionais.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {alunosContent.normas.map((n) => (
            <article key={n.titulo} className="bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-[#003366]">{n.titulo}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{n.texto}</p>
            </article>
          ))}
        </div>
        <Link
          to="/a-escola/documentos"
          className="inline-block text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Ver documentos →
        </Link>
      </div>
    </PageShell>
  );
}
