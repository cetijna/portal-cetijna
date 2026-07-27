import { useState, type FormEvent } from "react";
import { PageShell } from "@/components/PageShell";
import { alunosContent, contatoContent } from "@/data/content";

export function DenunciasSugestoesPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell section="Alunos e Famílias" title="Denúncias e Sugestões">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <p className="text-slate-700 leading-relaxed">{alunosContent.denuncias.intro}</p>
          <ul className="bg-white p-5 shadow-sm space-y-3 text-sm">
            {alunosContent.denuncias.canais.map((c) => (
              <li key={c.label}>
                <span className="font-semibold text-[#003366]">{c.label}: </span>
                {c.value}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-sm space-y-4">
          {sent ? (
            <p className="text-sm text-slate-700 leading-relaxed">
              Registro recebido nesta prévia. Para atendimento imediato, escreva para{" "}
              <a href={`mailto:${contatoContent.email}`} className="text-[#003366] hover:underline">
                {contatoContent.email}
              </a>
              .
            </p>
          ) : (
            <>
              <div>
                <label htmlFor="tipo" className="block text-sm font-medium text-slate-700 mb-1">
                  Tipo
                </label>
                <select
                  id="tipo"
                  name="tipo"
                  className="w-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#003366]"
                >
                  <option>Sugestão</option>
                  <option>Reclamação</option>
                  <option>Denúncia</option>
                </select>
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={6}
                  className="w-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#003366] resize-y"
                />
              </div>
              <button
                type="submit"
                className="bg-[#003366] text-white text-xs font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#00264d] transition"
              >
                Enviar
              </button>
            </>
          )}
        </form>
      </div>
    </PageShell>
  );
}
