import { empresa } from "@/content/site";

export type Canal = "vendas" | "suporte";

export function linkWhatsApp(canal: Canal, mensagem?: string) {
  const numero = canal === "vendas" ? empresa.whatsappVendas.numero : empresa.whatsappSuporte.numero;
  const base = `https://wa.me/${numero}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}

/** Monta uma mensagem em linhas "Rótulo: valor", ignorando campos vazios. */
export function montarMensagem(titulo: string, campos: Record<string, string | undefined>) {
  const linhas = Object.entries(campos)
    .filter(([, valor]) => valor && valor.trim())
    .map(([rotulo, valor]) => `*${rotulo}:* ${valor!.trim()}`);
  return [titulo, "", ...linhas].join("\n");
}
