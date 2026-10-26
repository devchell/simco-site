import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { Cabecalho } from "@/components/Cabecalho";
import { Rodape } from "@/components/Rodape";
import { BotaoWhatsApp } from "@/components/BotaoWhatsApp";
import { DadosEstruturados } from "@/components/DadosEstruturados";
import { empresa, siteUrl } from "@/content/site";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-archivo",
  display: "swap",
});

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plex",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const indexar = process.env.NEXT_PUBLIC_INDEXAR === "true";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SIMCO Informática | ERP para autopeças, oficinas e comércio",
    template: "%s | SIMCO Informática",
  },
  description:
    "Sistema de gestão para autopeças, oficinas mecânicas, comércio e controle de cilindros. Estoque, vendas, financeiro e emissão de NF-e e NFC-e, com suporte humano desde 1998.",
  applicationName: empresa.nome,
  robots: indexar ? { index: true, follow: true } : { index: false, follow: false },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: empresa.nome,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#f6f7f9",
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plex.variable} ${plexMono.variable}`}>
      <body className="min-h-dvh flex flex-col antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-3 focus:text-paper focus:rounded-sm"
        >
          Pular para o conteúdo
        </a>
        <Cabecalho />
        <main id="conteudo" className="flex-1">
          {children}
        </main>
        <Rodape />
        <BotaoWhatsApp />
        <DadosEstruturados />
      </body>
    </html>
  );
}
