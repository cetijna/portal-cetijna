import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { escolaContent } from "@/data/content";

export function SobrePage() {
  const { sobre, missao, cursos } = escolaContent;

  return (
    <PageShell section="A Escola" title="Sobre">
      <div className="space-y-12">
        <p className="text-slate-700 leading-relaxed text-lg">{sobre.intro}</p>

        <section>
          <h2 className="text-[#003366] text-xl font-semibold mb-3">Nossa missão</h2>
          <p className="text-slate-700 leading-relaxed bg-white border-l-4 border-[#003366] p-5 shadow-sm">
            {missao}
          </p>
        </section>

        <section>
          <h2 className="text-[#003366] text-xl font-semibold mb-6">Pilares</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {sobre.pilares.map((p) => (
              <div key={p.title} className="bg-white p-5 border-t-2 border-[#003366] shadow-sm">
                <h3 className="font-semibold text-[#003366]">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[#003366] text-xl font-semibold mb-6">Em números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {sobre.stats.map((s) => (
              <div key={s.label} className="bg-[#003366] text-white p-5 text-center">
                <div className="text-3xl font-light">{s.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-widest opacity-80">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-[#003366] text-xl font-semibold mb-3">Cursos técnicos</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
            {cursos.map((c) => (
              <li key={c} className="bg-white px-4 py-3 shadow-sm">
                {c}
              </li>
            ))}
          </ul>
          <Link
            to="/ensino/modalidades"
            className="inline-block mt-4 text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
          >
            Ver modalidades de ensino →
          </Link>
        </section>
      </div>
    </PageShell>
  );
}
