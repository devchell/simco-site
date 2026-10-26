import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/site";
import { segmentos } from "@/content/segmentos";
import { artigos } from "@/content/suporte/artigos";

export default function sitemap(): MetadataRoute.Sitemap {
  const rotas = [
    "",
    "/solucoes",
    ...segmentos.map((s) => `/solucoes/${s.slug}`),
    "/modulos",
    "/menu-simco",
    "/pmmvd",
    "/empresa",
    "/contato",
    "/suporte",
    "/suporte/rejeicoes",
    "/suporte/videos",
    ...artigos.map((a) => `/suporte/${a.slug}`),
    "/privacidade",
  ];
  return rotas.map((rota) => ({ url: `${siteUrl}${rota}` }));
}
