import { useCallback, useEffect, useState } from "react";
import heroSchool from "@/assets/hero-school.jpg";
import heroSchool2 from "@/assets/hero-school2.jpg";
import heroSchool3 from "@/assets/hero-school3.jpg";
import students from "@/assets/students.jpg";
import logoCeti from "@/assets/logo-ceti.png";

function splitTitle(title: string) {
  const words = title.split(" ");
  const mid = Math.ceil(words.length / 2);
  return { top: words.slice(0, mid).join(" "), bottom: words.slice(mid).join(" ") };
}

const navLinks = [
  { label: "História", href: "#historia" },
  { label: "Cursos", href: "#cursos" },
  { label: "Turmas", href: "#turmas" },
  { label: "Anos", href: "#anos" },
  { label: "Eventos", href: "#eventos" },
  { label: "Como Chegar", href: "#como-chegar" },
];

const cursos = [
  { title: "Desenvolvimento de Sistemas", level: "Curso Técnico Integrado" },
  { title: "Administração", level: "Curso Técnico Integrado" },
  { title: "Informática", level: "Curso Técnico Integrado" },
  { title: "Marketing", level: "Curso Técnico Integrado" },
];

const stats = [
  { value: "100%", label: "ALUNOS APROVADOS NO ENSINO MÉDIO" },
  { value: "40:1", label: "RAZÃO MÉDIA DE ALUNOS POR PROFESSOR" },
  { value: "4", label: "CURSOS TÉCNICOS OFERECIDOS" },
  { value: "14", label: "TURMAS ATIVAS" },
  { value: "50+", label: "ANOS FORMANDO ESTUDANTES" },
  { value: "1976", label: "ANO DE FUNDAÇÃO" },
];

const eventos = [
  { mes: "MAI", dia: "25", title: "Feira de Ciências", hora: "08:00 — 17:00" },
  { mes: "JUN", dia: "10", title: "Jogos Escolares", hora: "07:30 — 18:00" },
  { mes: "AGO", dia: "15", title: "Mostra de Cursos Técnicos", hora: "09:00 — 16:00" },
  { mes: "NOV", dia: "20", title: "Formatura — 3º Ano", hora: "19:00" },
];

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
    subtitle:
      "Cursos técnicos integrados que preparam você para o mercado de trabalho desde cedo.",
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <header className="absolute top-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3 text-white">
            <img
              src={logoCeti}
              alt="Brasão CETI José Nogueira de Aguiar"
              className="w-12 h-12 object-contain drop-shadow"
            />
            <div className="leading-tight">
              <div className="text-sm font-bold tracking-wide">CETI JOSÉ NOGUEIRA</div>
              <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">
                Educação · Trabalho · Cidadania
              </div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 text-white text-xs font-semibold tracking-widest uppercase">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:opacity-70 transition">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

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
          <a href="#historia" className="py-5 hover:bg-white/5 transition">
            Conheça
          </a>
          <a href="#cursos" className="py-5 hover:bg-white/5 transition">
            Matricule-se
          </a>
          <a href="#eventos" className="py-5 hover:bg-white/5 transition">
            Visite
          </a>
        </div>
      </div>

      <section id="historia" className="py-14 px-6">
        <p className="max-w-4xl mx-auto text-center text-slate-700 leading-relaxed">
          <span className="font-bold text-[#003366]">Nossa Missão:</span> O CETI José Nogueira de
          Aguiar capacita cada estudante por meio de uma formação técnica completa e inspira o amor
          pelo aprendizado ao longo da vida.
        </p>
      </section>

      <section id="cursos" className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {cursos.map((c, i) => (
            <div
              key={c.title}
              className="relative h-56 rounded-sm overflow-hidden group cursor-pointer"
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
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#003366] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10">
            {stats.map((s) => (
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

      <section id="eventos" className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          <div id="turmas">
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
              {eventos.map((e) => (
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
              <a
                href="#anos"
                className="text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
              >
                Ver Calendário →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="anos" className="bg-slate-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-[#003366] text-2xl font-light tracking-wide">
            ANOS IMPORTANTES
          </h2>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { y: "1976", t: "Fundação da escola" },
              { y: "2006", t: "Expansão das salas digitais" },
              { y: "2024", t: "Novo curso técnico integrado" },
            ].map((a) => (
              <div key={a.y} className="bg-white p-6 border-t-2 border-[#003366]">
                <div className="text-3xl font-light text-[#003366]">{a.y}</div>
                <div className="mt-2 text-sm text-slate-600">{a.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="como-chegar" className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-[#003366] text-2xl font-light tracking-wide">
            COMO CHEGAR
          </h2>
          <p className="text-center text-slate-600 mt-3 text-sm max-w-2xl mx-auto">
            O CETI José Nogueira de Aguiar está localizado em Esperantina — PI. Veja o mapa abaixo
            para traçar sua rota.
          </p>
          <div className="mt-8 rounded-sm overflow-hidden border border-slate-200 shadow-sm">
            <iframe
              src="https://maps.google.com/maps?q=-3.8936001,-42.2365656&t=&z=16&ie=UTF8&iwloc=&output=embed"
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
            <div className="mt-1">Esperantina — PI, Brasil</div>
            <a
              href="https://maps.app.goo.gl/EwTFCyee3ZYW6R6G6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
            >
              Abrir no Google Maps →
            </a>
          </div>
        </div>
      </section>

      <div className="bg-[#003366] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-3 divide-x divide-white/20 text-center text-sm font-semibold tracking-widest uppercase">
          <a href="#historia" className="py-5 hover:bg-white/5 transition">
            Conheça
          </a>
          <a href="#cursos" className="py-5 hover:bg-white/5 transition">
            Matricule-se
          </a>
          <a href="#eventos" className="py-5 hover:bg-white/5 transition">
            Visite
          </a>
        </div>
      </div>

      <footer className="bg-white py-10 px-6 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-start">
          <div className="flex items-center gap-4">
            <img
              src={logoCeti}
              alt="Brasão CETI José Nogueira de Aguiar"
              className="w-16 h-16 object-contain"
            />
            <div>
              <div className="text-[#003366] font-bold">CETI JOSÉ NOGUEIRA</div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Educação · Trabalho · Cidadania
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-600">
            <div className="font-semibold text-[#003366]">Contato</div>
            <div className="mt-2">CETI José Nogueira de Aguiar</div>
            <div>contato@cetijna.edu.br</div>
            <div className="mt-4 text-xs text-slate-400">© 2026 — Todos os direitos reservados</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
