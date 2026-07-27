import { PageShell } from "@/components/PageShell";
import { escolaContent } from "@/data/content";

export function EquipeGestoraPage() {
  return (
    <PageShell section="A Escola" title="Equipe Gestora">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          A gestão do CETI José Nogueira de Aguiar articula as dimensões pedagógica, administrativa
          e de relacionamento com a comunidade escolar. Os nomes abaixo serão atualizados conforme a
          composição oficial vigente.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {escolaContent.equipe.map((membro) => (
            <article
              key={membro.role}
              className="bg-white p-6 shadow-sm border-t-2 border-[#003366]"
            >
              <p className="text-[11px] uppercase tracking-widest text-[#003366] font-semibold">
                {membro.role}
              </p>
              <h2 className="mt-2 text-xl font-light text-slate-800">{membro.name}</h2>
              <p className="mt-2 text-sm text-slate-500">{membro.note}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
