import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { WhatsappLogo, Info, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { artigos, buscarArtigo, categorias, type Bloco } from "@/content/suporte/artigos";
import { rejeicoes } from "@/content/suporte/rejeicoes";
import { videos } from "@/content/suporte/videos";
import { VideoLeve } from "@/components/suporte/VideoLeve";
import { linkWhatsApp } from "@/lib/whatsapp";

type Props = { params: Promise<{ artigo: string }> };

export function generateStaticParams() {
  return artigos.map((a) => ({ artigo: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = buscarArtigo((await params).artigo);
  if (!a) return {};
  return { title: a.titulo, description: a.resumo };
}

function Corpo({ blocos }: { blocos: Bloco[] }) {
  return (
    <div className="prosa">
      {blocos.map((b, i) => {
        switch (b.tipo) {
          case "p":
            return <p key={i}>{b.texto}</p>;
          case "titulo":
            return <h2 key={i}>{b.texto}</h2>;
          case "passos":
            return (
              <ol key={i}>
                {b.itens.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            );
          case "lista":
            return (
              <ul key={i}>
                {b.itens.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            );
          case "aviso":
            return (
              <p key={i} className="flex gap-3 rounded-sm border border-signal/60 bg-signal/12 p-4">
                <Info size={22} aria-hidden className="mt-0.5 shrink-0 text-signal-ink" />
                <span>{b.texto}</span>
              </p>
            );
        }
      })}
    </div>
  );
}

export default async function PaginaArtigo({ params }: Props) {
  const a = buscarArtigo((await params).artigo);
  if (!a) notFound();
  const codigos = rejeicoes.filter((r) => a.codigos?.includes(r.codigo));
  const listaVideos = videos.filter((v) => a.videos?.includes(v.id));
  const relacionados = artigos.filter((o) => o.categoria === a.categoria && o.slug !== a.slug).slice(0, 4);

  return (
    <article className="pb-20">
      <header className="border-b border-line bg-surface pb-10 pt-10">
        <div className="wrap">
          <nav aria-label="Você está em" className="text-sm text-muted">
            <Link href="/suporte" className="hover:text-ink hover:underline">
              Central de suporte
            </Link>{" "}
            / <span>{categorias[a.categoria].nome}</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-extrabold sm:text-[2.5rem]">{a.titulo}</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/75">{a.resumo}</p>
          {a.acoes && (
            <div className="mt-6 flex flex-wrap gap-3">
              {a.acoes.map((acao) => (
                <a key={acao.href} href={acao.href} className="btn btn-primario">
                  {acao.rotulo}
                  {acao.href.startsWith("http") && <ArrowSquareOut size={18} aria-hidden />}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="wrap mt-12 grid gap-14 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="min-w-0">
          <Corpo blocos={a.corpo} />

          {codigos.length > 0 && (
            <section aria-labelledby="titulo-codigos" className="mt-12 max-w-[66ch]">
              <h2 id="titulo-codigos" className="text-xl font-bold">
                Códigos da SEFAZ ligados a este assunto
              </h2>
              <ul className="mt-4 divide-y divide-line rounded-md border border-line bg-surface">
                {codigos.map((r) => (
                  <li key={r.codigo}>
                    <Link
                      href={`/suporte/rejeicoes#c${r.codigo}`}
                      className="grid grid-cols-[3.5rem_1fr] gap-3 px-4 py-3 hover:bg-paper"
                    >
                      <span className="font-mono font-medium text-signal-ink">{r.codigo}</span>
                      <span>
                        <span className="block text-sm font-medium">{r.descricao}</span>
                        <span className="block text-sm text-muted">{r.significado}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {listaVideos.length > 0 && (
            <section aria-labelledby="titulo-videos" className="mt-12">
              <h2 id="titulo-videos" className="text-xl font-bold">
                Veja no sistema
              </h2>
              <ul className="mt-4 grid gap-6 sm:grid-cols-2">
                {listaVideos.map((v) => (
                  <li key={v.id}>
                    <VideoLeve id={v.id} titulo={v.titulo} />
                    <p className="mt-2 text-sm font-medium">{v.titulo}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <div className="grid content-start gap-6 lg:sticky lg:top-36 lg:self-start">
          <div className="rounded-md border border-line bg-surface p-5">
            <p className="font-semibold">Não resolveu?</p>
            <p className="mt-1 text-sm text-muted">Fale com o suporte. A mensagem já vai com o assunto deste artigo.</p>
            <a
              href={linkWhatsApp("suporte", `Olá! Li o artigo "${a.titulo}" na central de suporte e o problema continua.`)}
              className="btn btn-primario mt-4 w-full"
            >
              <WhatsappLogo size={20} weight="bold" aria-hidden /> Chamar o suporte
            </a>
            <Link href="/suporte#chamado" className="link mt-3 inline-block text-sm">
              Ou abra um chamado detalhado
            </Link>
          </div>
          {relacionados.length > 0 && (
            <nav aria-label="Artigos relacionados">
              <p className="rotulo text-muted">Também em {categorias[a.categoria].nome}</p>
              <ul className="mt-3 grid gap-2">
                {relacionados.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/suporte/${r.slug}`} className="text-[0.95rem] hover:text-navy hover:underline">
                      {r.titulo}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </article>
  );
}
