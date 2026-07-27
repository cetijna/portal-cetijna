import heroSchool from "@/assets/hero-school.jpg";
import heroSchool2 from "@/assets/hero-school2.jpg";
import heroSchool3 from "@/assets/hero-school3.jpg";
import students from "@/assets/students.jpg";
import { PageShell } from "@/components/PageShell";
import { noticiasContent } from "@/data/content";

const fotos = [
  { src: heroSchool, alt: "Vista da escola" },
  { src: heroSchool2, alt: "Campus em dia ensolarado" },
  { src: heroSchool3, alt: "Ambiente de aprendizagem" },
  { src: students, alt: "Estudantes em atividade" },
];

export function GaleriaPage() {
  return (
    <PageShell section="Notícias e Eventos" title="Galeria">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">{noticiasContent.galeria.intro}</p>
        <div className="grid grid-cols-2 gap-3">
          {fotos.map((f) => (
            <img
              key={f.alt}
              src={f.src}
              alt={f.alt}
              loading="lazy"
              className="w-full h-40 sm:h-56 object-cover rounded-sm"
            />
          ))}
        </div>
      </div>
    </PageShell>
  );
}
