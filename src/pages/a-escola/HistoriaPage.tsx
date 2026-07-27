import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { escolaContent } from "@/data/content";

export function HistoriaPage() {
  return (
    <PageShell section="A Escola" title="História">
      <div className="space-y-10">
        <p className="text-slate-700 leading-relaxed">
          Ao longo de mais de cinco décadas, o CETI José Nogueira de Aguiar tem formado gerações de
          estudantes em Esperantina — PI. A linha do tempo abaixo destaca marcos importantes da
          nossa trajetória.
        </p>

        <ol className="relative border-l-2 border-[#003366]/30 space-y-8 ml-3">
          {escolaContent.historia.map((item) => (
            <li key={item.year} className="ml-6">
              <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full bg-[#003366]" />
              <div className="bg-white p-5 shadow-sm border-t-2 border-[#003366]">
                <div className="text-2xl font-light text-[#003366]">{item.year}</div>
                <h2 className="mt-1 font-semibold text-slate-800">{item.title}</h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="text-sm text-slate-500">
          Mais marcos históricos serão adicionados ao{" "}
          <Link to="/noticias/arquivo-historico" className="text-[#003366] hover:underline">
            Arquivo Histórico
          </Link>
          .
        </p>
      </div>
    </PageShell>
  );
}
