import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

export function JubileuPage() {
  return (
    <PageShell section="Identidade Visual" title="Jubileu de Ouro">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{identidadeContent.jubileu.intro}</p>
        <div className="bg-[#003366] text-white p-10 text-center">
          <div className="text-sm uppercase tracking-[0.25em] opacity-80">Comemoração</div>
          <div className="mt-3 text-3xl font-light">Jubileu de Ouro</div>
          <p className="mt-4 text-sm opacity-90 max-w-md mx-auto">
            Identidade especial para celebrar a trajetória da escola. Arquivos oficiais em breve.
          </p>
        </div>
      </div>
    </PageShell>
  );
}
