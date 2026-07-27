import { Route, Routes } from "react-router-dom";
import { PlaceholderPage } from "@/components/PlaceholderPage";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getAllPages } from "@/data/navigation";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  const pages = getAllPages();

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        {pages.map((page) => (
          <Route key={page.path} path={page.path.slice(1)} element={<PlaceholderPage />} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
