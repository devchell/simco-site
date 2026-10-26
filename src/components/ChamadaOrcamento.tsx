import { Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { FormOrcamento } from "./FormOrcamento";
import { empresa } from "@/content/site";
import { linkWhatsApp } from "@/lib/whatsapp";

export function ChamadaOrcamento({
  titulo = "Veja o sistema funcionando com os dados do seu negócio",
  negocio,
}: {
  titulo?: string;
  /** Pré-seleciona o tipo de negócio no formulário */
  negocio?: string;
}) {
  return (
    <section id="orcamento" aria-labelledby="titulo-orcamento" className="scroll-mt-24 bg-brand-900 py-20 text-on-brand md:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
        <div className="flex flex-col">
          <h2 id="titulo-orcamento" className="text-[2.1rem] font-extrabold tracking-[-0.03em] sm:text-[2.75rem]">
            {titulo}
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-on-brand-muted sm:text-xl">
            Demonstração gratuita e sem compromisso. Conte um pouco sobre a empresa e um consultor responde pelo WhatsApp
            de vendas, no horário comercial.
          </p>
          <div className="mt-10 grid max-w-md gap-3">
            <a
              href={empresa.telefone.href}
              className="flex items-center gap-4 rounded-[14px] border border-white/15 p-4 transition hover:border-white/40"
            >
              <Phone size={26} aria-hidden className="text-sky" />
              <span>
                <span className="block text-sm text-on-brand-muted">Prefere ligar?</span>
                <span className="block text-lg font-bold">{empresa.telefone.exibicao}</span>
              </span>
            </a>
            <a
              href={linkWhatsApp("vendas", "Olá! Quero conhecer o sistema da SIMCO.")}
              className="flex items-center gap-4 rounded-[14px] border border-white/15 p-4 transition hover:border-white/40"
            >
              <WhatsappLogo size={26} aria-hidden className="text-sky" />
              <span>
                <span className="block text-sm text-on-brand-muted">WhatsApp de vendas</span>
                <span className="block text-lg font-bold">{empresa.whatsappVendas.exibicao}</span>
              </span>
            </a>
          </div>
          <p className="mt-6 text-sm text-on-brand-muted">{empresa.horario}</p>
        </div>
        <div className="rounded-[20px] bg-white p-6 text-ink shadow-[var(--shadow-produto)] sm:p-9">
          <p className="text-xl font-extrabold tracking-[-0.02em]">Pedir demonstração</p>
          <p className="mt-1 text-muted">Leva menos de um minuto.</p>
          <div className="mt-6">
            <FormOrcamento negocio={negocio} />
          </div>
        </div>
      </div>
    </section>
  );
}
