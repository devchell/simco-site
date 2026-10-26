import type { Metadata } from "next";
import Link from "next/link";
import { WhatsappLogo, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { StatusAtendimento } from "@/components/StatusAtendimento";
import { empresa, enderecoCompleto } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a SIMCO por WhatsApp, telefone ou e-mail. Veja o endereço em Vargem Grande Paulista, o horário de atendimento e os canais de vendas e de suporte.",
};

export default function PaginaContato() {
  return (
    <>
      <section className="border-b border-line bg-sunken pb-14 pt-16">
        <div className="wrap">
          <h1 className="text-[2.5rem] font-extrabold tracking-[-0.035em] sm:text-[3.4rem]">Fale com a SIMCO</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Escolha o canal conforme o assunto: vendas para conhecer o sistema, suporte para quem já é cliente.
          </p>
        </div>
      </section>

      <section aria-labelledby="titulo-canais" className="py-16 md:py-24">
        <div className="wrap">
          <h2 id="titulo-canais" className="sr-only">
            Canais de atendimento
          </h2>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="border-t-2 border-ink pt-5">
              <h3 className="mt-2 text-2xl font-bold">Quero conhecer o sistema</h3>
              <div className="mt-5 grid gap-3">
                <a
                  href={linkWhatsApp("vendas", "Olá! Gostaria de falar com a equipe de vendas.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primario"
                >
                  <WhatsappLogo size={20} weight="fill" aria-hidden />
                  WhatsApp {empresa.whatsappVendas.exibicao}
                </a>
                <a href={empresa.telefone.href} className="btn btn-secundario">
                  <Phone size={20} aria-hidden />
                  Ligar {empresa.telefone.exibicao}
                </a>
              </div>
            </div>
            <div className="border-t-2 border-ink pt-5">
              <h3 className="mt-2 text-2xl font-bold">Já uso o sistema</h3>
              <div className="mt-5 grid gap-3">
                <a
                  href={linkWhatsApp("suporte", "Olá! Preciso de suporte.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primario"
                >
                  <WhatsappLogo size={20} weight="fill" aria-hidden />
                  WhatsApp {empresa.whatsappSuporte.exibicao}
                </a>
                <Link href="/suporte" className="btn btn-secundario">
                  Central de suporte
                </Link>
                <StatusAtendimento />
              </div>
            </div>
            <div className="border-t-2 border-ink pt-5">
              <h3 className="mt-2 text-2xl font-bold">Prefiro escrever</h3>
              <div className="mt-5 grid gap-3">
                <a
                  href={`mailto:${empresa.email}`}
                  className="btn btn-secundario !h-auto !whitespace-normal break-all py-3 text-center"
                >
                  <EnvelopeSimple size={20} aria-hidden className="shrink-0" />
                  {empresa.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-onde" className="border-y border-line bg-surface py-16 md:py-24">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <h2 id="titulo-onde" className="mt-3 text-[2rem] font-bold sm:text-[2.5rem]">
              Endereço
            </h2>
            <address className="mt-4 text-lg not-italic text-ink/75">{enderecoCompleto}</address>
            <a href={empresa.mapa} target="_blank" rel="noopener noreferrer" className="btn btn-secundario mt-5">
              <MapPin size={20} aria-hidden />
              Abrir no Google Maps
            </a>
          </div>
          <div>
            <h2 className="mt-3 text-[2rem] font-bold sm:text-[2.5rem]">Atendimento</h2>
            <p className="mt-4 text-lg text-ink/75">{empresa.horario}</p>
          </div>
        </div>
      </section>

      <ChamadaOrcamento titulo="Peça uma demonstração" />
    </>
  );
}
