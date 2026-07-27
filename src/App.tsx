import type { ReactNode } from "react";
import { Route, Routes } from "react-router-dom";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { DocumentosPage } from "@/pages/a-escola/DocumentosPage";
import { EquipeGestoraPage } from "@/pages/a-escola/EquipeGestoraPage";
import { EstruturaPage } from "@/pages/a-escola/EstruturaPage";
import { HistoriaPage } from "@/pages/a-escola/HistoriaPage";
import { SobrePage } from "@/pages/a-escola/SobrePage";
import { AchadosPerdidosPage } from "@/pages/alunos/AchadosPerdidosPage";
import { CalendarioPage } from "@/pages/alunos/CalendarioPage";
import { ComunicadosPage } from "@/pages/alunos/ComunicadosPage";
import { DenunciasSugestoesPage } from "@/pages/alunos/DenunciasSugestoesPage";
import { HorariosPage } from "@/pages/alunos/HorariosPage";
import { NormasPage } from "@/pages/alunos/NormasPage";
import { FaleConoscoPage } from "@/pages/contato/FaleConoscoPage";
import { LocalizacaoPage } from "@/pages/contato/LocalizacaoPage";
import { RedesSociaisPage } from "@/pages/contato/RedesSociaisPage";
import { DisciplinasPage } from "@/pages/ensino/DisciplinasPage";
import { EletivasPage } from "@/pages/ensino/EletivasPage";
import { MaterialApoioPage } from "@/pages/ensino/MaterialApoioPage";
import { ModalidadesPage } from "@/pages/ensino/ModalidadesPage";
import { ProjetosPage } from "@/pages/ensino/ProjetosPage";
import { HomePage } from "@/pages/HomePage";
import { ArquivosPage } from "@/pages/identidade/ArquivosPage";
import { BrasaoPage } from "@/pages/identidade/BrasaoPage";
import { JubileuPage } from "@/pages/identidade/JubileuPage";
import { LogoPage } from "@/pages/identidade/LogoPage";
import { ManualUsoPage } from "@/pages/identidade/ManualUsoPage";
import { VersaoNegativaPage } from "@/pages/identidade/VersaoNegativaPage";
import { ArquivoHistoricoPage } from "@/pages/noticias/ArquivoHistoricoPage";
import { EventosPage } from "@/pages/noticias/EventosPage";
import { GaleriaPage } from "@/pages/noticias/GaleriaPage";
import { InterclassePage } from "@/pages/noticias/InterclassePage";
import { NoticiasPage } from "@/pages/noticias/NoticiasPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

const concretePages: Record<string, ReactNode> = {
  "/a-escola/sobre": <SobrePage />,
  "/a-escola/historia": <HistoriaPage />,
  "/a-escola/equipe-gestora": <EquipeGestoraPage />,
  "/a-escola/estrutura": <EstruturaPage />,
  "/a-escola/documentos": <DocumentosPage />,
  "/alunos/comunicados": <ComunicadosPage />,
  "/alunos/calendario": <CalendarioPage />,
  "/alunos/horarios": <HorariosPage />,
  "/alunos/normas": <NormasPage />,
  "/alunos/achados-e-perdidos": <AchadosPerdidosPage />,
  "/alunos/denuncias-e-sugestoes": <DenunciasSugestoesPage />,
  "/ensino/modalidades": <ModalidadesPage />,
  "/ensino/disciplinas": <DisciplinasPage />,
  "/ensino/projetos": <ProjetosPage />,
  "/ensino/eletivas": <EletivasPage />,
  "/ensino/material-de-apoio": <MaterialApoioPage />,
  "/noticias": <NoticiasPage />,
  "/noticias/eventos": <EventosPage />,
  "/noticias/galeria": <GaleriaPage />,
  "/noticias/interclasse": <InterclassePage />,
  "/noticias/arquivo-historico": <ArquivoHistoricoPage />,
  "/identidade/brasao": <BrasaoPage />,
  "/identidade/logo": <LogoPage />,
  "/identidade/jubileu-de-ouro": <JubileuPage />,
  "/identidade/versao-negativa": <VersaoNegativaPage />,
  "/identidade/arquivos": <ArquivosPage />,
  "/identidade/manual-de-uso": <ManualUsoPage />,
  "/contato": <FaleConoscoPage />,
  "/contato/localizacao": <LocalizacaoPage />,
  "/contato/redes-sociais": <RedesSociaisPage />,
};

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        {Object.entries(concretePages).map(([path, element]) => (
          <Route key={path} path={path.slice(1)} element={element} />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
