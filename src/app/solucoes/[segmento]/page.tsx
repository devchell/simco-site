import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check } from "@phosphor-icons/react/dist/ssr";
import { buscarSegmento, segmentos } from "@/content/segmentos";
import { ChamadaOrcamento } from "@/components/ChamadaOrcamento";
import { TelaAutopecas, TelaCilindros, TelaComercio, TelaOficina } from "@/components/home/TelasDoSistema";
import { linkWhatsApp } from "@/lib/whatsapp";

const telas: Record<string, () => React.ReactElement> = {
  autopecas: TelaAutopecas,
  oficinas: TelaOficina,
  comercio: TelaComercio,
  "controle-de-equipamentos": TelaCilindros,
};

const opcaoFormulario: Record<string, string> = {
  autopecas: "Autopeças",
  oficinas: "Oficina mecânica",
  comercio: "Comércio",
  "controle-de-equipamentos": "Controle de cilindros ou equipamentos",
};

type Props = { params: Promise<{ segmento: string }> };

export function generateStaticParams() {
  return segmentos.map((s) => ({ segmento: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = buscarSegmento((await params).segmento);
  if (!s) return {};
  return { title: `ERP para ${s.nome.toLowerCase()}`, description: s.resumo };
}

export default async function PaginaSegmento({ params }: Props) {
  const s = buscarSegmento((await params).segmento);
  if (!s) notFound();
  const Tela = telas[s.slug];
  const outros = segmentos.filter((o) => o.slug !== s.slug);

  return (
    <>
      <section className="bg-brand-900 text-on-brand">
        <div className="wrap grid gap-12 pb-16 pt-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center lg:gap-16 lg:pb-20 lg:pt-16">
          <div>
            <nav aria-label="Você está em" className="text-sm text-on-brand-muted">
              <Link href="/solucoes" className="hover:text-white hover:underline">
                Soluções
              </Link>{" "}
              / <span className="text-white">{s.nome}</span>
            </nav>
            <h1 className="mt-5 text-[2.5rem] font-extrabold leading-[1.04] tracking-[-0.035em] sm:text-[3.3rem]">{s.titulo}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-on-brand-muted sm:text-xl">{s.resumo}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#orcamento" className="btn btn-branco !min-h-14 !px-7">
                Pedir demonstração
              </Link>
              <a
                href={linkWhatsApp("vendas", `Olá! Tenho uma empresa de ${s.nome.toLowerCase()} e quero conhecer o sistema.`)}
                className="btn btn-claro !min-h-14 !px-7"
              >
                Falar com vendas
              </a>
            </div>
          </div>
          <div className="min-w-0 text-ink">
            <Tela />
            <p className="mt-3 text-right text-xs text-on-brand-muted">Tela ilustrativa com dados de exemplo</p>
          </div>
        </div>
      </section>

      <section aria-labelledby="titulo-recursos" className="bg-sunken py-16 md:py-24">
        <div className="wrap">
          <h2 id="titulo-recursos" className="text-[2.1rem] font-extrabold tracking-[-0.03em] sm:text-[2.75rem]">
            O que o sistema faz no dia a dia
          </h2>
          <div className="mt-10 grid gap-x-12 gap-y-12 lg:grid-cols-3">
            {s.blocos.map((b) => (
              <div key={b.titulo} className="rounded-[18px] border border-line bg-white p-7">
                <h3 className="text-xl font-bold">{b.titulo}</h3>
                <ul className="mt-5 grid gap-3">
                  {b.itens.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.98rem] text-ink/85">
                      <Check size={18} weight="bold" aria-hidden className="mt-1 shrink-0 text-ok" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {s.observacao && (
            <p className="mt-10 max-w-4xl rounded-[14px] bg-sky-soft px-6 py-5 text-lg text-brand-900">{s.observacao}</p>
          )}
        </div>
      </section>

      <section aria-labelledby="titulo-fiscal" className="border-y border-line bg-sunken py-14">
        <div className="wrap flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <h2 id="titulo-fiscal" className="text-2xl font-bold">
              Emissão fiscal incluída
            </h2>
            <p className="mt-3 text-ink/75">
              NF-e, NFC-e com contingência offline, cupom SAT, SPED, GNRE e boleto bancário funcionam junto com o sistema, sem
              programa à parte.
            </p>
          </div>
          <Link href="/modulos" className="btn btn-secundario shrink-0">
            Ver módulos fiscais
          </Link>
        </div>
      </section>

      <section aria-labelledby="titulo-outros" className="py-14">
        <div className="wrap">
          <h2 id="titulo-outros" className="rotulo text-muted">
            Outros segmentos
          </h2>
          <ul className="mt-4 flex flex-wrap gap-3">
            {outros.map((o) => (
              <li key={o.slug}>
                <Link href={`/solucoes/${o.slug}`} className="btn btn-secundario !min-h-11 !text-[0.95rem]">
                  {o.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChamadaOrcamento titulo={`Veja o sistema para ${s.nome.toLowerCase()} funcionando`} negocio={opcaoFormulario[s.slug]} />
    </>
  );
}
