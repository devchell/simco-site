import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { segmentos } from "@/content/segmentos";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";

export const metadata: Metadata = {
  title: "Soluções por segmento",
  description:
    "ERP para autopeças, oficinas mecânicas, comércio e controle de cilindros e equipamentos.",
};

export default function Solucoes() {
  return (
    <>
      <section className="border-b border-line bg-sunken pb-14 pt-16">
        <div className="wrap">
          <h1 className="max-w-3xl text-[2.5rem] font-extrabold tracking-[-0.035em] sm:text-[3.4rem]">Escolha o seu tipo de negócio</h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            A base é a mesma: estoque, vendas, financeiro e emissão fiscal. O que muda são as telas, as buscas e os relatórios,
            pensados para a rotina de cada segmento.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <ul className="wrap grid gap-px overflow-hidden rounded-md border border-line bg-line md:grid-cols-2">
          {segmentos.map((s) => (
            <li key={s.slug} className="bg-surface">
              <Link href={`/solucoes/${s.slug}`} className="group flex h-full flex-col gap-4 p-7 hover:bg-paper md:p-9">
                <h2 className="text-2xl font-bold group-hover:text-navy">{s.nome}</h2>
                <p className="text-ink/75">{s.resumo}</p>
                <ul className="flex flex-wrap gap-2" aria-label="Termos do dia a dia">
                  {s.termos.map((t) => (
                    <li key={t} className="rounded-sm border border-line px-2 py-1 font-mono text-xs text-muted">
                      {t}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 font-semibold text-navy">
                  {s.chamada}
                  <ArrowRight size={18} aria-hidden className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="wrap mt-8 text-ink/75">
          Procurando NF-e, NFC-e, SPED, boleto ou TEF?{" "}
          <Link href="/modulos" className="link font-medium text-navy">
            Veja os módulos fiscais e financeiros
          </Link>
          , que funcionam com qualquer segmento.
        </p>
      </section>
      <ChamadaOrcamento />
    </>
  );
}
