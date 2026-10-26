import MiniSearch from "minisearch";
import { artigos, categorias, type Bloco } from "@/content/suporte/artigos";
import { rejeicoes } from "@/content/suporte/rejeicoes";
import { videos } from "@/content/suporte/videos";

export type Resultado = {
  id: string;
  tipo: "artigo" | "rejeicao" | "video";
  titulo: string;
  detalhe: string;
  href: string;
};

type Documento = Resultado & { texto: string; codigo: string };

const textoDoCorpo = (corpo: Bloco[]) =>
  corpo.map((b) => ("texto" in b ? b.texto : b.itens.join(" "))).join(" ");

/** Remove acentos e padroniza para a busca encontrar "rejeicao" e "rejeição". */
const normalizar = (termo: string) =>
  termo
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();

function documentos(): Documento[] {
  return [
    ...artigos.map((a) => ({
      id: `a-${a.slug}`,
      tipo: "artigo" as const,
      titulo: a.titulo,
      detalhe: categorias[a.categoria].nome,
      href: `/suporte/${a.slug}`,
      texto: `${a.resumo} ${a.termos.join(" ")} ${textoDoCorpo(a.corpo)}`,
      codigo: (a.codigos ?? []).join(" "),
    })),
    ...rejeicoes.map((r) => ({
      id: `r-${r.codigo}`,
      tipo: "rejeicao" as const,
      titulo: `${r.codigo} · ${r.descricao}`,
      detalhe: "Código da SEFAZ",
      href: `/suporte/rejeicoes#c${r.codigo}`,
      texto: `${r.significado} ${r.passos.join(" ")}`,
      codigo: String(r.codigo),
    })),
    ...videos.map((v) => ({
      id: `v-${v.id}`,
      tipo: "video" as const,
      titulo: v.titulo,
      detalhe: "Vídeo",
      href: `/suporte/videos#${v.id}`,
      texto: v.titulo,
      codigo: "",
    })),
  ];
}

let indice: MiniSearch<Documento> | null = null;

function obterIndice() {
  if (indice) return indice;
  indice = new MiniSearch<Documento>({
    fields: ["codigo", "titulo", "texto"],
    storeFields: ["tipo", "titulo", "detalhe", "href"],
    processTerm: normalizar,
    searchOptions: {
      boost: { codigo: 6, titulo: 3 },
      prefix: true,
      fuzzy: (termo) => (/^\d+$/.test(termo) ? false : termo.length > 4 ? 0.2 : false),
      combineWith: "AND",
    },
  });
  indice.addAll(documentos());
  return indice;
}

export function buscar(consulta: string, limite = 8): Resultado[] {
  const q = consulta.trim();
  if (q.length < 2) return [];
  const idx = obterIndice();
  let achados = idx.search(q);
  // Se a busca exigindo todas as palavras não achar nada, aceita qualquer uma
  if (!achados.length) achados = idx.search(q, { combineWith: "OR" });
  return achados.slice(0, limite).map((r) => ({
    id: String(r.id),
    tipo: r.tipo,
    titulo: r.titulo,
    detalhe: r.detalhe,
    href: r.href,
  }));
}
