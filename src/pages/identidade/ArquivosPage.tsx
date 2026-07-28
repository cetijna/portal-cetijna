import { brasao, brasaoNegativo } from "@/assets/brand";
import { PageShell } from "@/components/PageShell";
import { identidadeContent } from "@/data/content";

type DownloadItem = {
  title: string;
  note: string;
  href?: string;
  status?: string;
};

const downloads: DownloadItem[] = [
  {
    title: "Brasão oficial (SVG)",
    href: brasao,
    note: "Versão vetorial colorida para fundos claros",
  },
  {
    title: "Brasão negativo (SVG)",
    href: brasaoNegativo,
    note: "Versão para fundos escuros",
  },
  ...identidadeContent.arquivos.map((a) => ({
    title: a.title,
    note: a.note,
    status: a.status,
  })),
];

export function ArquivosPage() {
  return (
    <PageShell section="Identidade Visual" title="Arquivos para Download">
      <div className="space-y-8">
        <p className="text-slate-700 leading-relaxed">
          Baixe os arquivos oficiais da identidade visual. Use apenas as versões publicadas aqui em
          materiais da escola.
        </p>
        <ul className="divide-y divide-slate-200 bg-white shadow-sm">
          {downloads.map((a) => (
            <li key={a.title} className="flex flex-col sm:flex-row sm:items-center gap-3 p-5">
              <div className="flex-1">
                <h2 className="font-semibold text-[#003366]">{a.title}</h2>
                <p className="mt-1 text-sm text-slate-600">{a.note}</p>
              </div>
              {a.href ? (
                <a
                  href={a.href}
                  download
                  className="text-[11px] uppercase tracking-widest font-semibold text-white bg-[#003366] px-3 py-1.5 self-start hover:bg-[#00264d]"
                >
                  Baixar
                </a>
              ) : (
                <span className="text-[11px] uppercase tracking-widest font-semibold text-slate-500 bg-slate-100 px-3 py-1.5 self-start">
                  {a.status ?? "Em breve"}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
