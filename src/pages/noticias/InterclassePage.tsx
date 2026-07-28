import { escudoEsportes, uniforme01, uniforme02, uniforme03 } from "@/assets/brand";
import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

export function InterclassePage() {
  return (
    <PageShell section="Notícias e Eventos" title="Interclasse">
      <div className="space-y-10">
        <p className="text-slate-700 leading-relaxed">{noticiasContent.interclasse.intro}</p>

        <div className="bg-white p-8 shadow-sm flex flex-col sm:flex-row items-center gap-8">
          <img
            src={escudoEsportes}
            alt="Escudo de esportes do CETI José Nogueira de Aguiar"
            className="w-40 h-40 object-contain"
          />
          <div>
            <h2 className="text-[#003366] text-xl font-semibold">CETI Esportes</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Identidade visual das equipes e competições esportivas da escola, com o escudo oficial
              de esportes.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {noticiasContent.interclasse.itens.map((i) => (
            <article key={i.title} className="bg-white p-5 shadow-sm border-t-2 border-[#003366]">
              <h2 className="font-semibold text-[#003366]">{i.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{i.text}</p>
            </article>
          ))}
        </div>

        <section>
          <h2 className="text-[#003366] text-xl font-semibold mb-4">Uniformes</h2>
          <div className="grid sm:grid-cols-3 gap-3">
            {[
              { src: uniforme01, alt: "Detalhe do escudo no uniforme de esportes" },
              { src: uniforme02, alt: "Uniforme de esportes do CETI" },
              { src: uniforme03, alt: "Aplicação do escudo no uniforme" },
            ].map((u) => (
              <img
                key={u.alt}
                src={u.src}
                alt={u.alt}
                loading="lazy"
                className="w-full h-56 object-cover rounded-sm shadow-sm"
              />
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  );
}
