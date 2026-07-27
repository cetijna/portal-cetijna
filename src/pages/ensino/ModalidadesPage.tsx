import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { ensinoContent } from "@/data/content";

export function ModalidadesPage() {
  return (
    <PageShell section="Ensino" title="Modalidades">
      <div className="space-y-10">
        <p className="text-slate-700 leading-relaxed">
          O CETI oferece ensino médio técnico integrado, unindo formação geral e capacitação
          profissional.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {ensinoContent.modalidades.map((m) => (
            <article key={m.title} className="bg-white p-5 shadow-sm border-t-2 border-[#003366]">
              <h2 className="font-semibold text-[#003366]">{m.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{m.text}</p>
            </article>
          ))}
        </div>

        <section>
          <h2 className="text-[#003366] text-xl font-semibold mb-4">Cursos técnicos</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ensinoContent.cursos.map((c, i) => (
              <article
                key={c.title}
                className="p-6 text-white"
                style={{
                  background: `linear-gradient(135deg, ${
                    ["#1a8fb8", "#d97757", "#4a90a4", "#0055aa"][i]
                  }, #003366)`,
                }}
              >
                <h3 className="text-2xl font-light">{c.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest opacity-90">{c.level}</p>
                <p className="mt-3 text-sm opacity-90 leading-relaxed">{c.text}</p>
              </article>
            ))}
          </div>
          <Link
            to="/ensino/disciplinas"
            className="inline-block mt-6 text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
          >
            Ver disciplinas →
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
