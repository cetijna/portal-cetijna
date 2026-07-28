import { Link, NavLink } from "react-router-dom";
import { brasao } from "@/assets/brand";
import { navigation, type NavSection } from "@/data/navigation";
import { useEffect, useId, useState } from "react";

type HeaderProps = {
  transparent?: boolean;
};

export function Header({ transparent = false }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobileSection, setOpenMobileSection] = useState<string | null>(null);
  const menuId = useId();

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const barClass = transparent
    ? "absolute top-0 left-0 right-0 z-30 text-white"
    : "sticky top-0 z-30 bg-[#003366] text-white shadow-sm";

  return (
    <header className={barClass}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 sm:px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={brasao}
            alt="Brasão CETI José Nogueira de Aguiar"
            className="w-11 h-11 object-contain drop-shadow"
          />
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide">CETI JOSÉ NOGUEIRA</div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-80 hidden sm:block">
              Educação · Trabalho · Cidadania
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
          {navigation.map((section) => (
            <DesktopNavItem
              key={section.label}
              section={section}
              open={openDesktop === section.label}
              onOpen={() => setOpenDesktop(section.label)}
              onClose={() => setOpenDesktop(null)}
            />
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-white/30 hover:bg-white/10"
          aria-expanded={mobileOpen}
          aria-controls={menuId}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="sr-only">{mobileOpen ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden className="text-lg leading-none">
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {mobileOpen && (
        <div
          id={menuId}
          className="lg:hidden absolute inset-x-0 top-full max-h-[calc(100vh-4.5rem)] overflow-y-auto bg-[#003366] border-t border-white/10 shadow-xl"
        >
          <nav className="px-4 py-3 space-y-1" aria-label="Principal mobile">
            {navigation.map((section) => {
              if (!section.children) {
                return (
                  <NavLink
                    key={section.label}
                    to={section.path ?? "/"}
                    end
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 text-sm font-semibold tracking-wide uppercase ${
                        isActive ? "bg-white/15" : "hover:bg-white/10"
                      }`
                    }
                  >
                    {section.label}
                  </NavLink>
                );
              }

              const isOpen = openMobileSection === section.label;
              return (
                <div key={section.label} className="border-b border-white/10 last:border-0">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold tracking-wide uppercase hover:bg-white/10"
                    aria-expanded={isOpen}
                    onClick={() =>
                      setOpenMobileSection((current) =>
                        current === section.label ? null : section.label,
                      )
                    }
                  >
                    {section.label}
                    <span aria-hidden className="opacity-70">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <ul className="pb-2 pl-2">
                      {section.children.map((child) => (
                        <li key={child.path}>
                          <NavLink
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className={({ isActive }) =>
                              `block px-3 py-2 text-sm ${
                                isActive
                                  ? "bg-white/15 font-medium"
                                  : "text-white/90 hover:bg-white/10"
                              }`
                            }
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

function DesktopNavItem({
  section,
  open,
  onOpen,
  onClose,
}: {
  section: NavSection;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  if (!section.children) {
    return (
      <NavLink
        to={section.path ?? "/"}
        end
        className={({ isActive }) =>
          `px-3 py-2 text-[11px] font-semibold tracking-widest uppercase hover:opacity-80 transition ${
            isActive ? "underline underline-offset-4" : ""
          }`
        }
      >
        {section.label}
      </NavLink>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) onClose();
      }}
    >
      <button
        type="button"
        className={`px-3 py-2 text-[11px] font-semibold tracking-widest uppercase hover:opacity-80 transition inline-flex items-center gap-1 ${
          open ? "opacity-80" : ""
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {section.label}
        <span aria-hidden className="text-[9px] opacity-70">
          ▼
        </span>
      </button>
      {open && (
        <div className="absolute left-0 top-full pt-1 min-w-[220px]">
          <ul className="bg-white text-slate-800 rounded-sm shadow-lg border border-slate-100 py-2">
            {section.children.map((child) => (
              <li key={child.path}>
                <NavLink
                  to={child.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm hover:bg-slate-50 ${
                      isActive ? "text-[#003366] font-semibold bg-slate-50" : ""
                    }`
                  }
                  onClick={onClose}
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
