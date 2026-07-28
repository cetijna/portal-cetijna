import { brasaoEsportes, uniforme01, uniforme02, uniforme03 } from "@/assets/brand";
import { ImageGallery } from "@/components/ImageGallery";
import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

const uniformes = [
  { src: uniforme01, alt: "Detalhe do escudo no uniforme de esportes" },
  { src: uniforme02, alt: "Uniforme de esportes do CETI" },
  { src: uniforme03, alt: "Aplicação do escudo no uniforme" },
];

export function InterclassePage() {
  return (
    <PageShell section="Notícias e Eventos" title="Interclasse">
      <div className="space-y-10">
        <p className="text-slate-700 leading-relaxed">{noticiasContent.interclasse.intro}</p>

        <div className="bg-white p-8 shadow-sm flex flex-col sm:flex-row items-center gap-8">
          <img
            src={brasaoEsportes}
            alt="Brasão de esportes do CETI José Nogueira de Aguiar"
            className="w-40 h-40 object-contain"
          />
          <div>
            <h2 className="text-[#003366] text-xl font-semibold">CETI Esportes</h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
              Identidade visual das equipes e competições esportivas da escola, com o brasão oficial
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
          <h2 className="text-[#003366] text-xl font-semibold mb-2">Uniformes</h2>
          <p className="text-sm text-slate-500 mb-4">
            Clique em uma foto para ampliar e navegar.
          </p>
          <ImageGallery images={uniformes} columns="3" thumbClassName="w-full h-56" />
        </section>
      </div>
    </PageShell>
  );
}
