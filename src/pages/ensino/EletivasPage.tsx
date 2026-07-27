import { PageShell } from "@/components/PageShell";
import { ensinoContent } from "@/data/content";

export function EletivasPage() {
  return (
    <PageShell section="Ensino" title="Eletivas">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{ensinoContent.eletivas.intro}</p>
        <div className="grid gap-4">
          {ensinoContent.eletivas.itens.map((e) => (
            <article key={e.title} className="bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#003366]">{e.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{e.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
