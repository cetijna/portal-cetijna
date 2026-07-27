import students from "@/assets/students.jpg";
import { PageShell } from "@/components/PageShell";
import { escolaContent } from "@/data/content";

export function EstruturaPage() {
  return (
    <PageShell section="A Escola" title="Estrutura">
      <div className="space-y-10">
        <p className="text-slate-700 leading-relaxed">
          Nossa estrutura física apoia o ensino médio técnico integrado, com espaços para aulas
          teóricas, práticas laboratoriais e convivência estudantil.
        </p>

        <div className="rounded-sm overflow-hidden">
          <img
            src={students}
            alt="Ambiente escolar do CETI"
            width={1024}
            height={1024}
            loading="lazy"
            className="w-full h-64 object-cover"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {escolaContent.estrutura.map((item) => (
            <article key={item.title} className="bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-[#003366]">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
