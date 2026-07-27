import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import { PageShell } from "@/components/PageShell";
import { contatoContent } from "@/data/content";

export function FaleConoscoPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <PageShell section="Contato" title="Fale Conosco">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4 text-slate-700">
          <p className="leading-relaxed">
            Envie sua mensagem para a escola. Este formulário é uma prévia da interface; o envio
            real será integrado em uma etapa posterior.
          </p>
          <div className="bg-white p-5 shadow-sm space-y-2 text-sm">
            <div>
              <span className="font-semibold text-[#003366]">E-mail: </span>
              <a href={`mailto:${contatoContent.email}`} className="hover:underline">
                {contatoContent.email}
              </a>
            </div>
            <div>
              <span className="font-semibold text-[#003366]">Endereço: </span>
              {contatoContent.endereco}
            </div>
            <Link to="/contato/localizacao" className="inline-block text-[#003366] hover:underline">
              Ver localização →
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-sm space-y-4">
          {sent ? (
            <p className="text-sm text-slate-700 leading-relaxed">
              Obrigado pelo interesse. Em breve o formulário estará conectado ao canal oficial de
              atendimento. Por enquanto, utilize o e-mail{" "}
              <a href={`mailto:${contatoContent.email}`} className="text-[#003366] hover:underline">
                {contatoContent.email}
              </a>
              .
            </p>
          ) : (
            <>
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-slate-700 mb-1">
                  Nome
                </label>
                <input
                  id="nome"
                  name="nome"
                  required
                  className="w-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#003366]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#003366]"
                />
              </div>
              <div>
                <label htmlFor="assunto" className="block text-sm font-medium text-slate-700 mb-1">
                  Assunto
                </label>
                <input
                  id="assunto"
                  name="assunto"
                  required
                  className="w-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#003366]"
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block text-sm font-medium text-slate-700 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  required
                  rows={5}
                  className="w-full border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:border-[#003366] resize-y"
                />
              </div>
              <button
                type="submit"
                className="bg-[#003366] text-white text-xs font-bold tracking-widest uppercase px-5 py-3 hover:bg-[#00264d] transition"
              >
                Enviar mensagem
              </button>
            </>
          )}
        </form>
      </div>
    </PageShell>
  );
}
