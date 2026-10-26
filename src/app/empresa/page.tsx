import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { TituloSecao } from "@/components/TituloSecao";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { empresa, anosDeMercado } from "@/content/site";
import { parceiros } from "@/content/parceiros";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "A SIMCO desenvolve software de gestão para pequenas e médias empresas desde 1998, em Vargem Grande Paulista (SP), com mais de 500 sistemas vendidos no Brasil.",
};

const valores = [
  {
    titulo: "Ética e transparência",
    texto: "Agir com transparência com clientes, parceiros e colaboradores.",
  },
  {
    titulo: "Qualidade e usabilidade",
    texto: "Buscar qualidade e facilidade de uso nas ferramentas que entregamos.",
  },
  {
    titulo: "Conhecimento da equipe",
    texto: "Manter a equipe bem informada para dar o suporte adequado, principalmente nas exigências legais.",
  },
  {
    titulo: "Rapidez e determinação",
    texto: "Resolver com agilidade, sempre com foco na atividade principal da empresa do cliente.",
  },
];

export default function PaginaEmpresa() {
  return (
    <>
      <section className="border-b border-line bg-sunken pb-14 pt-16">
        <div className="wrap">
          <h1 className="max-w-3xl text-[2.5rem] font-extrabold tracking-[-0.035em] sm:text-[3.4rem]">
            Software de gestão feito em Vargem Grande Paulista desde {empresa.fundacao}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            A SIMCO é uma empresa de desenvolvimento de sistemas. Há {anosDeMercado} anos criamos programas que dão ao
            pequeno e ao médio empresário as informações de que ele precisa para gerenciar e controlar o negócio, com
            agilidade e atendimento personalizado.
          </p>
          <p className="mt-4 max-w-2xl text-ink/75">
            Foram mais de {empresa.sistemasVendidos} sistemas vendidos em todo o território nacional. Nossa equipe
            procura entender o que cada cliente precisa antes de propor a solução.
          </p>
        </div>
      </section>

      <section aria-labelledby="titulo-missao" className="py-16 md:py-24">
        <div className="wrap grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
          <div>
            <h2 id="titulo-missao" className="mt-3 text-[2rem] font-bold sm:text-[2.5rem]">
              Software de gestão em que dá para confiar
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Desenvolver software de gestão com qualidade e confiabilidade para pequenas e médias empresas,
              permitindo o controle e o crescimento do negócio.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-extrabold">Valores</h3>
            <ul className="mt-4 border-t-2 border-ink">
              {valores.map((v) => (
                <li key={v.titulo} className="border-b border-line py-5">
                  <div>
                    <p className="font-display text-xl font-bold">{v.titulo}</p>
                    <p className="mt-1 text-ink/75">{v.texto}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="parceiros"
        aria-labelledby="titulo-parceiros"
        className="scroll-mt-28 border-y border-line bg-surface py-16 md:py-24"
      >
        <div className="wrap">
          <TituloSecao
            id="titulo-parceiros"
            rotulo="Parceiros"
            titulo="Empresas que trabalham junto com a SIMCO"
            texto="Equipamentos e componentes que se integram ao sistema."
          />
          <ul className="mt-12 border-t-2 border-ink">
            {parceiros.map((p) => (
              <li
                key={p.nome}
                className="grid items-center gap-x-10 gap-y-4 border-b border-line py-8 md:grid-cols-[14rem_minmax(0,1fr)_auto]"
              >
                <Image
                  src={p.logo}
                  alt={`Logotipo da ${p.nome}`}
                  width={p.largura}
                  height={p.altura}
                  sizes="224px"
                  className="h-auto max-h-16 w-auto max-w-[14rem] object-contain object-left"
                />
                <div>
                  <h3 className="text-xl font-bold">{p.nome}</h3>
                  <p className="mt-1 text-ink/75">{p.texto}</p>
                </div>
                <a
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link inline-flex min-h-11 items-center gap-1.5 font-semibold text-navy"
                >
                  Site da {p.nome}
                  <ArrowUpRight size={16} aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="trabalhe-conosco" aria-labelledby="titulo-trabalhe" className="scroll-mt-28 py-16 md:py-24">
        <div className="wrap grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="titulo-trabalhe" className="mt-3 text-[2rem] font-bold sm:text-[2.5rem]">
              Faça parte do nosso time
            </h2>
            <p className="mt-4 text-lg text-ink/75">
              Nossa sede fica em {empresa.endereco.cidade}, na região metropolitana de São Paulo. Se você quer
              trabalhar com desenvolvimento de sistemas ERP, envie seu currículo.
            </p>
          </div>
          <div>
            <p className="text-ink/75">Mande o currículo para o e-mail abaixo, com o assunto &ldquo;Currículo&rdquo;.</p>
            <a
              href={`mailto:${empresa.email}?subject=Curr%C3%ADculo`}
              className="btn btn-primario mt-5 !h-auto !whitespace-normal break-all py-3 text-center"
            >
              Enviar currículo para {empresa.email}
            </a>
          </div>
        </div>
      </section>

      <ChamadaOrcamento />
    </>
  );
}
