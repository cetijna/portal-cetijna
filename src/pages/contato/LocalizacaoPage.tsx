import { PageShell } from "@/components/PageShell";
import { contatoContent } from "@/data/content";

export function LocalizacaoPage() {
  return (
    <PageShell section="Contato" title="Localização">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          O CETI José Nogueira de Aguiar está localizado em Esperantina — PI. Use o mapa para traçar
          sua rota ou abra no Google Maps.
        </p>

        <div className="rounded-sm overflow-hidden border border-slate-200 shadow-sm bg-white">
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

        <div className="text-center text-sm text-slate-600">
          <div className="font-semibold text-[#003366]">Endereço</div>
          <div className="mt-1">{contatoContent.endereco}</div>
          <a
            href={contatoContent.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
          >
            Abrir no Google Maps →
          </a>
        </div>
      </div>
    </PageShell>
  );
}
