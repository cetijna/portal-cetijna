import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroSchool from "@/assets/hero-school.jpg";
import heroSchool2 from "@/assets/hero-school2.jpg";
import heroSchool3 from "@/assets/hero-school3.jpg";
import students from "@/assets/students.jpg";
import { contatoContent, escolaContent, ensinoContent, noticiasContent } from "@/data/content";
import { usePageTitle } from "@/hooks/usePageTitle";

function splitTitle(title: string) {
  const words = title.split(" ");
  const mid = Math.ceil(words.length / 2);
  return { top: words.slice(0, mid).join(" "), bottom: words.slice(mid).join(" ") };
}

const homeStats = [
  { value: "100%", label: "ALUNOS APROVADOS NO ENSINO MÉDIO" },
  { value: "40:1", label: "RAZÃO MÉDIA DE ALUNOS POR PROFESSOR" },
  ...escolaContent.sobre.stats.map((s) => ({
    value: s.value,
    label: s.label.toUpperCase(),
  })),
].slice(0, 6);

const heroSlides = [
  {
    img: heroSchool,
    alt: "Vista aérea do CETI José Nogueira de Aguiar",
    title: "SUA ESCOLA PARA A VIDA",
    subtitle:
      "CETI José Nogueira de Aguiar — escola pública de ensino técnico integrado, formando estudantes desde 1976.",
  },
  {
    img: heroSchool2,
    alt: "Campus do CETI em dia ensolarado",
    title: "EDUCAÇÃO DE QUALIDADE",
    subtitle:
      "Infraestrutura moderna, laboratórios equipados e professores dedicados ao seu futuro.",
  },
  {
    img: heroSchool3,
    alt: "Laboratório de ciências do CETI",
    title: "APRENDIZADO PRÁTICO",
    subtitle: "Cursos técnicos integrados que preparam você para o mercado de trabalho desde cedo.",
  },
];

export function HomePage() {
  usePageTitle("Início");
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div>
      <section className="relative h-[640px] w-full overflow-hidden">
        {heroSlides.map((slide, i) => {
          const { top, bottom } = splitTitle(slide.title);
          return (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <img
                src={slide.img}
                alt={slide.alt}
                width={1920}
                height={1024}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
              <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end pb-24 px-6">
                <div className="text-white max-w-xl">
                  <h1 className="text-5xl md:text-6xl font-light tracking-tight">
                    {top} <br /> {bottom}
                  </h1>
                  <p className="mt-4 text-sm md:text-base opacity-90 leading-relaxed">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir para slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <div className="bg-[#003366] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-white/20 text-center text-sm font-semibold tracking-widest uppercase">
          <Link to="/a-escola/sobre" className="py-5 hover:bg-white/5 transition">
            Conheça
          </Link>
          <Link to="/ensino/modalidades" className="py-5 hover:bg-white/5 transition">
            Matricule-se
          </Link>
          <Link to="/contato/localizacao" className="py-5 hover:bg-white/5 transition">
            Visite
          </Link>
        </div>
      </div>

      <section className="py-14 px-6">
        <p className="max-w-4xl mx-auto text-center text-slate-700 leading-relaxed">
          <span className="font-bold text-[#003366]">Nossa Missão:</span> {escolaContent.missao}{" "}
          <Link to="/a-escola/historia" className="text-[#003366] underline underline-offset-2">
            Conheça nossa história
          </Link>
          .
        </p>
      </section>

      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ensinoContent.cursos.map((c, i) => (
            <Link
              key={c.title}
              to="/ensino/modalidades"
              className="relative h-56 rounded-sm overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, ${
                  ["#1a8fb8", "#d97757", "#4a90a4", "#0055aa"][i]
                }, #003366)`,
              }}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center p-4">
                <h3 className="text-2xl font-light">{c.title}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest opacity-90">{c.level}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#003366] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {homeStats.map((s) => (
              <div key={s.label}>
                <div className="text-4xl font-light">{s.value}</div>
                <div className="mt-2 text-[11px] uppercase tracking-widest opacity-80 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-sm overflow-hidden">
            <img
              src={students}
              alt="Estudantes do CETI em sala de informática"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-[420px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div>
            <img
              src={students}
              alt="Turmas do CETI"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-72 object-cover rounded-sm"
            />
            <h2 className="mt-6 text-[#003366] text-xl font-semibold">Turmas Ativas</h2>
            <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-700">
              <li>1º Ano A</li>
              <li>1º Ano B</li>
              <li>2º Ano A</li>
              <li>2º Ano B</li>
              <li>3º Ano A</li>
              <li>3º Ano B</li>
            </ul>
          </div>

          <div>
            <ul className="divide-y divide-slate-200">
              {noticiasContent.eventos.map((e) => (
                <li key={e.title} className="flex items-center gap-5 py-4">
                  <div className="bg-slate-100 px-4 py-3 text-center min-w-[70px]">
                    <div className="text-[10px] font-bold text-[#003366] uppercase tracking-widest">
                      {e.mes}
                    </div>
                    <div className="text-2xl font-light text-slate-800">{e.dia}</div>
                  </div>
                  <div>
                    <div className="text-[#003366] font-semibold">{e.title}</div>
                    <div className="text-xs text-slate-500 mt-1">{e.hora}</div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="text-right mt-4">
              <Link
                to="/noticias/eventos"
                className="text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
              >
                Ver eventos →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-[#003366] text-2xl font-light tracking-wide">
            ANOS IMPORTANTES
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {escolaContent.historia.map((a) => (
              <div key={a.year} className="bg-white p-6 border-t-2 border-[#003366]">
                <div className="text-3xl font-light text-[#003366]">{a.year}</div>
                <div className="mt-2 text-sm text-slate-600">{a.title}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/a-escola/historia"
              className="text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
            >
              Ver história completa →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-[#003366] text-2xl font-light tracking-wide">
            COMO CHEGAR
          </h2>
          <p className="text-center text-slate-600 mt-3 text-sm max-w-2xl mx-auto">
            O CETI José Nogueira de Aguiar está localizado em {contatoContent.endereco}. Veja o mapa
            abaixo para traçar sua rota.
          </p>
          <div className="mt-8 rounded-sm overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src={contatoContent.mapsEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do CETI José Nogueira de Aguiar"
              className="block"
            />
          </div>
          <div className="mt-6 text-center text-sm text-slate-600">
            <div className="font-semibold text-[#003366]">Endereço</div>
            <div className="mt-1">{contatoContent.endereco}</div>
            <Link
              to="/contato/localizacao"
              className="inline-block mt-3 text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
            >
              Mais informações de localização →
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-[#003366] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-white/20 text-center text-sm font-semibold tracking-widest uppercase">
          <Link to="/a-escola/sobre" className="py-5 hover:bg-white/5 transition">
            Conheça
          </Link>
          <Link to="/ensino/modalidades" className="py-5 hover:bg-white/5 transition">
            Matricule-se
          </Link>
          <Link to="/contato" className="py-5 hover:bg-white/5 transition">
            Visite
          </Link>
        </div>
      </div>
    </div>
  );
}
