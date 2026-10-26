import { FormOrcamento } from "./FormOrcamento";
import { empresa } from "@/content/site";

export function ChamadaOrcamento({
  titulo = "Veja o sistema funcionando com os dados do seu tipo de negócio",
  negocio,
}: {
  titulo?: string;
  /** Pré-seleciona o tipo de negócio no formulário */
  negocio?: string;
}) {
  return (
    <section id="orcamento" aria-labelledby="titulo-orcamento" className="scroll-mt-28 bg-navy py-20 md:py-24">
      <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
        <div>
          <p className="rotulo text-signal">Demonstração sem compromisso</p>
          <h2 id="titulo-orcamento" className="mt-3 text-[2rem] font-bold text-on-navy sm:text-[2.5rem]">
            {titulo}
          </h2>
          <p className="mt-4 text-lg text-on-navy-muted">
            Conte um pouco sobre a empresa e um consultor responde pelo WhatsApp de vendas, no horário comercial.
          </p>
          <dl className="mt-8 grid gap-4 text-on-navy-muted">
            <div>
              <dt className="rotulo">Prefere ligar?</dt>
              <dd>
                <a href={empresa.telefone.href} className="text-xl font-semibold text-on-navy hover:underline">
                  {empresa.telefone.exibicao}
                </a>
              </dd>
            </div>
            <div>
              <dt className="rotulo">Horário</dt>
              <dd className="text-on-navy">{empresa.horario}</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-md bg-navy-800 p-6 sm:p-8">
          <FormOrcamento escuro negocio={negocio} />
        </div>
      </div>
    </section>
  );
}
