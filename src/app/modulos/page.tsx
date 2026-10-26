import type { Metadata } from "next";
import Link from "next/link";
import { gruposModulos, modulos, type Modulo } from "@/content/modulos";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";

export const metadata: Metadata = {
  title: "Módulos fiscais e financeiros",
  description:
    "NF-e, NFC-e com contingência offline, cupom SAT, MDF-e, SPED, GNRE, certificado digital, boleto, TEF, nuvem e integração com e-commerce no ERP SIMCO.",
};

const grupos = Object.keys(gruposModulos) as Modulo["grupo"][];

export default function Modulos() {
  return (
    <>
      <section className="border-b border-line pb-12 pt-14">
        <div className="wrap">
          <p className="rotulo text-signal-ink">Módulos</p>
          <h1 className="mt-4 max-w-3xl text-[2.4rem] font-extrabold sm:text-[3rem]">
            Tudo o que a SEFAZ e o banco pedem, dentro do mesmo sistema
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink/75">
            Os módulos funcionam com todos os segmentos e acompanham as mudanças da legislação, sem custo de desenvolvimento
            interno para a sua empresa.
          </p>
          <nav aria-label="Ir para o módulo" className="mt-8 flex flex-wrap gap-2">
            {modulos.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="inline-flex min-h-10 items-center rounded-sm border border-line bg-surface px-3 font-mono text-sm hover:border-ink"
              >
                {m.sigla}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {grupos.map((g, gi) => (
        <section
          key={g}
          aria-labelledby={`grupo-${g}`}
          className={`py-16 md:py-20 ${gi % 2 === 1 ? "border-y border-line bg-surface" : ""}`}
        >
          <div className="wrap">
            <h2 id={`grupo-${g}`} className="text-[1.8rem] font-bold sm:text-[2.2rem]">
              {gruposModulos[g]}
            </h2>
            <div className="mt-8 border-t-2 border-ink">
              {modulos
                .filter((m) => m.grupo === g)
                .map((m) => (
                  <article
                    key={m.id}
                    id={m.id}
                    className="grid scroll-mt-32 gap-x-10 gap-y-4 border-b border-line py-8 md:grid-cols-[13rem_minmax(0,1fr)_minmax(0,1fr)]"
                  >
                    <div>
                      <h3 className="font-display text-2xl font-bold [font-stretch:118%]">{m.sigla}</h3>
                      {m.modelo && <p className="mt-1 font-mono text-xs text-muted">documento modelo {m.modelo}</p>}
                    </div>
                    <div>
                      <p className="font-semibold">{m.nome}</p>
                      <p className="mt-2 text-ink/75">{m.resumo}</p>
                    </div>
                    <ul className="grid content-start gap-2 text-[0.95rem] text-ink/80">
                      {m.itens.map((i) => (
                        <li key={i} className="flex gap-2.5">
                          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 bg-signal-ink" />
                          {i}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-line bg-sunken py-12">
        <p className="wrap text-ink/80">
          Teve uma rejeição da SEFAZ?{" "}
          <Link href="/suporte/rejeicoes" className="link font-medium text-navy">
            Consulte o que cada código significa
          </Link>
          .
        </p>
      </section>
      <ChamadaOrcamento />
    </>
  );
}
