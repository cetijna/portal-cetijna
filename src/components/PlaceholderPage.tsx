import { Link, useLocation } from "react-router-dom";
import { findPageByPath } from "@/data/navigation";

export function PlaceholderPage() {
  const { pathname } = useLocation();
  const page = findPageByPath(pathname);

  const title = page?.label ?? "Página";
  const section = page?.section ?? "Portal";

  return (
    <div className="bg-slate-50 min-h-[50vh]">
      <div className="bg-[#003366] text-white px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <nav
            className="text-xs tracking-widest uppercase text-white/70 mb-4"
            aria-label="Breadcrumb"
          >
            <Link to="/" className="hover:text-white">
              Início
            </Link>
            <span className="mx-2 opacity-50">›</span>
            <span>{section}</span>
            <span className="mx-2 opacity-50">›</span>
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-light tracking-wide">{title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="text-slate-600 leading-relaxed max-w-xl mx-auto">
          Conteúdo em elaboração. Em breve esta página terá informações atualizadas sobre{" "}
          <strong className="text-[#003366] font-semibold">{title}</strong>.
        </p>
        <Link
          to="/"
          className="inline-block mt-8 text-xs font-bold tracking-widest text-[#003366] uppercase hover:underline"
        >
          Voltar ao início →
        </Link>
      </div>
    </div>
  );
}
