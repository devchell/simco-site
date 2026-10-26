import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";

export const metadata: Metadata = {
  title: "PMMVD: manutenção de veículos diesel",
  description:
    "Entenda o PMMVD, programa da CETESB que padroniza a manutenção de veículos diesel para reduzir emissões, e o sistema de controle de fumaça preta da SIMCO.",
};

const acessos = [
  {
    href: "http://simco.com.br/publicacoes/cartilha_novo_PMMVD.pdf",
    titulo: "Cartilha do PMMVD (PDF)",
    destino: "Abre o arquivo da cartilha em simco.com.br",
  },
  {
    href: "http://www.cetesb.simco.com.br/login.php",
    titulo: "Acesso ao RMO",
    destino: "Abre a página de login em cetesb.simco.com.br",
  },
];

export default function PaginaPmmvd() {
  return (
    <>
      <section className="border-b border-line pt-14 pb-12">
        <div className="wrap">
          <p className="rotulo text-signal-ink">Programa da CETESB</p>
          <h1 className="mt-3 max-w-3xl text-[2.4rem] font-extrabold sm:text-[3rem]">
            PMMVD: Programa para Melhoria da Manutenção de Veículos Diesel
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Desde 1998, o programa da CETESB regula e padroniza a reparação de veículos diesel para reduzir a emissão
            de poluentes. A SIMCO desenvolveu o sistema de controle de fumaça preta usado nesse trabalho.
          </p>
        </div>
      </section>

      <section aria-labelledby="titulo-programa" className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-2">
          <div className="prosa">
            <h2 id="titulo-programa" className="!mt-0 text-[2rem] font-bold sm:text-[2.5rem]">
              O que é o programa
            </h2>
            <p>
              O PMMVD é um programa da CETESB, a companhia ambiental do Estado de São Paulo. Existe desde 1998 e
              define como a manutenção de veículos diesel deve ser feita, para que o reparo siga um mesmo padrão e as
              emissões diminuam.
            </p>
            <p>
              A SIMCO desenvolveu o sistema de controle de fumaça preta, utilizado em parceria com o Sindirepa e a
              CETESB.
            </p>
          </div>
          <div>
            <h2 className="rotulo text-signal-ink">Documentos e acessos</h2>
            <ul className="mt-4 border-t-2 border-ink">
              {acessos.map((a) => (
                <li key={a.href} className="border-b border-line">
                  <a href={a.href} className="group flex min-h-16 items-center justify-between gap-4 py-4">
                    <span>
                      <span className="block font-display text-xl font-bold [font-stretch:118%] group-hover:text-navy">
                        {a.titulo}
                      </span>
                      <span className="block text-sm text-muted">{a.destino}</span>
                    </span>
                    <ArrowUpRight size={20} aria-hidden className="shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-oficinas" className="border-y border-line bg-surface py-16 md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="rotulo text-signal-ink">Para oficinas</p>
            <h2 id="titulo-oficinas" className="mt-3 text-[2rem] font-bold sm:text-[2.5rem]">
              Sistema de gestão para a sua oficina
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Além do controle de fumaça preta, a SIMCO tem um sistema de gestão pensado para oficinas mecânicas.
            </p>
          </div>
          <Link href="/solucoes/oficinas" className="btn btn-secundario">
            Ver o sistema para oficinas
            <ArrowRight size={18} aria-hidden />
          </Link>
        </div>
      </section>

      <ChamadaOrcamento titulo="Conheça o sistema para oficinas" negocio="Oficina mecânica" />
    </>
  );
}
