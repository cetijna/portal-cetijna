import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { usePageTitle } from "@/hooks/usePageTitle";

type PageShellProps = {
  section: string;
  title: string;
  children: ReactNode;
};

export function PageShell({ section, title, children }: PageShellProps) {
  usePageTitle(title);

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
      <div className="max-w-4xl mx-auto px-6 py-12">{children}</div>
    </div>
  );
}
