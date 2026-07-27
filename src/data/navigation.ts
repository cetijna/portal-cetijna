export type NavItem = {
  label: string;
  path: string;
};

export type NavSection = {
  label: string;
  path?: string;
  children?: NavItem[];
};

export const navigation: NavSection[] = [
  { label: "Início", path: "/" },
  {
    label: "A Escola",
    children: [
      { label: "Sobre", path: "/a-escola/sobre" },
      { label: "História", path: "/a-escola/historia" },
      { label: "Equipe Gestora", path: "/a-escola/equipe-gestora" },
      { label: "Estrutura", path: "/a-escola/estrutura" },
      { label: "Documentos Institucionais", path: "/a-escola/documentos" },
    ],
  },
  {
    label: "Alunos e Famílias",
    children: [
      { label: "Comunicados", path: "/alunos/comunicados" },
      { label: "Calendário Escolar", path: "/alunos/calendario" },
      { label: "Horários de Aula", path: "/alunos/horarios" },
      { label: "Normas da Escola", path: "/alunos/normas" },
      { label: "Achados e Perdidos", path: "/alunos/achados-e-perdidos" },
      { label: "Denúncias e Sugestões", path: "/alunos/denuncias-e-sugestoes" },
    ],
  },
  {
    label: "Ensino",
    children: [
      { label: "Modalidades", path: "/ensino/modalidades" },
      { label: "Disciplinas", path: "/ensino/disciplinas" },
      { label: "Projetos", path: "/ensino/projetos" },
      { label: "Eletivas", path: "/ensino/eletivas" },
      { label: "Material de Apoio", path: "/ensino/material-de-apoio" },
    ],
  },
  {
    label: "Notícias e Eventos",
    children: [
      { label: "Notícias", path: "/noticias" },
      { label: "Eventos", path: "/noticias/eventos" },
      { label: "Galeria", path: "/noticias/galeria" },
      { label: "Interclasse", path: "/noticias/interclasse" },
      { label: "Arquivo Histórico", path: "/noticias/arquivo-historico" },
    ],
  },
  {
    label: "Identidade Visual",
    children: [
      { label: "Brasão Oficial", path: "/identidade/brasao" },
      { label: "Logo da Escola", path: "/identidade/logo" },
      { label: "Jubileu de Ouro", path: "/identidade/jubileu-de-ouro" },
      { label: "Versão Negativa", path: "/identidade/versao-negativa" },
      { label: "Arquivos para Download", path: "/identidade/arquivos" },
      { label: "Manual de Uso", path: "/identidade/manual-de-uso" },
    ],
  },
  {
    label: "Contato",
    children: [
      { label: "Fale Conosco", path: "/contato" },
      { label: "Localização", path: "/contato/localizacao" },
      { label: "Redes Sociais", path: "/contato/redes-sociais" },
    ],
  },
];

/** Flat list of all routable pages (excludes Início). */
export function getAllPages(): Array<NavItem & { section: string }> {
  return navigation.flatMap((section) => {
    if (!section.children) return [];
    return section.children.map((child) => ({
      ...child,
      section: section.label,
    }));
  });
}

export function findPageByPath(pathname: string) {
  return getAllPages().find((page) => page.path === pathname);
}
