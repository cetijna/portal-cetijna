import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getAllPages } from "@/data/navigation";
import { DocumentosPage } from "@/pages/a-escola/DocumentosPage";
import { EquipeGestoraPage } from "@/pages/a-escola/EquipeGestoraPage";
import { EstruturaPage } from "@/pages/a-escola/EstruturaPage";
import { HistoriaPage } from "@/pages/a-escola/HistoriaPage";
import { SobrePage } from "@/pages/a-escola/SobrePage";
import { FaleConoscoPage } from "@/pages/contato/FaleConoscoPage";
import { LocalizacaoPage } from "@/pages/contato/LocalizacaoPage";
import { RedesSociaisPage } from "@/pages/contato/RedesSociaisPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

const concretePages: Record<string, ReactNode> = {
  "/a-escola/sobre": <SobrePage />,
  "/a-escola/historia": <HistoriaPage />,
  "/a-escola/equipe-gestora": <EquipeGestoraPage />,
  "/a-escola/estrutura": <EstruturaPage />,
  "/a-escola/documentos": <DocumentosPage />,
  "/contato": <FaleConoscoPage />,
  "/contato/localizacao": <LocalizacaoPage />,
  "/contato/redes-sociais": <RedesSociaisPage />,
};

export default function App() {
  const pages = getAllPages();

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        {pages.map((page) => (
          <Route
            key={page.path}
            path={page.path.slice(1)}
            element={concretePages[page.path] ?? <PlaceholderPage />}
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
