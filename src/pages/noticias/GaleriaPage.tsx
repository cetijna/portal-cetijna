import { brasaoAplicacao, uniforme01, uniforme02, uniforme03 } from "@/assets/brand";
import heroSchool from "@/assets/hero-school.jpg";
import heroSchool2 from "@/assets/hero-school2.jpg";
import heroSchool3 from "@/assets/hero-school3.jpg";
import students from "@/assets/students.jpg";
import { ImageGallery } from "@/components/ImageGallery";
import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

const fotos = [
  { src: heroSchool, alt: "Vista da escola" },
  { src: heroSchool2, alt: "Campus em dia ensolarado" },
  { src: heroSchool3, alt: "Ambiente de aprendizagem" },
  { src: students, alt: "Estudantes em atividade" },
  { src: brasaoAplicacao, alt: "Brasão em uniforme institucional" },
  { src: uniforme01, alt: "Escudo de esportes no uniforme" },
  { src: uniforme02, alt: "Uniforme de esportes do CETI" },
  { src: uniforme03, alt: "Aplicação do escudo no uniforme" },
];

export function GaleriaPage() {
  return (
    <PageShell section="Notícias e Eventos" title="Galeria">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{noticiasContent.galeria.intro}</p>
        <p className="text-sm text-slate-500">Clique em uma foto para ampliar e navegar pela galeria.</p>
        <ImageGallery images={fotos} />
      </div>
    </PageShell>
  );
}
