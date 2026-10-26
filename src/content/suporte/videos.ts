export type TemaVideo = "cadastros" | "vendas" | "nfe";

export type Video = { id: string; titulo: string; tema: TemaVideo };

export const temasVideo: Record<TemaVideo, string> = {
  cadastros: "Cadastros",
  vendas: "Vendas e pedidos",
  nfe: "Nota fiscal",
};

// Tutoriais publicados no canal da SIMCO no YouTube
export const videos: Video[] = [
  { id: "8PyRKeof6Xw", titulo: "Como fazer um pedido de venda", tema: "vendas" },
  { id: "I8cjWvqW2vc", titulo: "Como consultar pedidos", tema: "vendas" },
  { id: "O733Yw9reyY", titulo: "Como cancelar um pedido de venda", tema: "vendas" },
  { id: "SipYAERIl1s", titulo: "Gerar um pedido a partir de uma cotação", tema: "vendas" },
  { id: "Tlp1bbw5sbY", titulo: "Pedido de devolução por XML", tema: "vendas" },
  { id: "muzcUNhuNxc", titulo: "Pedido de venda com NF-e no Sistema Simplificado", tema: "vendas" },
  { id: "mDRg5-40FIE", titulo: "Relatórios do Sistema Simplificado", tema: "vendas" },
  { id: "xKu5OwkQZsM", titulo: "Cadastro de cliente", tema: "cadastros" },
  { id: "aj3-0aGJ2Wg", titulo: "Cadastro de produto no Sistema Simplificado", tema: "cadastros" },
  { id: "t9oZc6mLqnI", titulo: "Cadastro de vendedores", tema: "cadastros" },
  { id: "v7Sa3PPHPXY", titulo: "Cadastro de transportadora", tema: "cadastros" },
  { id: "LSozitqlXmI", titulo: "Cadastro de grupo e seção", tema: "cadastros" },
  { id: "UmsK2dHMEB8", titulo: "Cadastro de condições de pagamento", tema: "cadastros" },
  { id: "3a7qehk3DLY", titulo: "Cadastro de classificação fiscal", tema: "cadastros" },
  { id: "5aE4JV0vcug", titulo: "Cadastro de CFOP complementar", tema: "cadastros" },
  { id: "Bw1Ldl3wN6A", titulo: "Cadastro de mensagens da nota fiscal", tema: "cadastros" },
  { id: "3SkVFLFVtsE", titulo: "Aprovação de NF-e", tema: "nfe" },
  { id: "yqgQ5QFseZ8", titulo: "Gerenciador de NF-e", tema: "nfe" },
  { id: "q30H7Ip4Szw", titulo: "Cancelamento de NF-e", tema: "nfe" },
  { id: "RkF8z-wy5F4", titulo: "Carta de correção", tema: "nfe" },
  { id: "rRy_FszdiNM", titulo: "Inutilização de NF-e", tema: "nfe" },
  { id: "dJkQCzXm0XY", titulo: "NF-e complementar de valor", tema: "nfe" },
  { id: "JprbwsT89II", titulo: "NF-e complementar de ICMS", tema: "nfe" },
  { id: "CJNHscuQReo", titulo: "NF-e complementar de ICMS ST", tema: "nfe" },
  { id: "-EolgCwHvjM", titulo: "NF-e complementar de IPI", tema: "nfe" },
];
