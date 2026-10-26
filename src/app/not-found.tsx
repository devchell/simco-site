import type { Metadata } from "next";
import Link from "next/link";
import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Página não encontrada",
  description:
    "O endereço que você tentou abrir não existe ou mudou de lugar. Busque no suporte ou volte para uma das páginas principais do site da SIMCO.",
};

const links = [
  { href: "/", rotulo: "Início" },
  { href: "/solucoes", rotulo: "Soluções" },
  { href: "/suporte", rotulo: "Suporte" },
  { href: "/contato", rotulo: "Contato" },
];

export default function NaoEncontrada() {
  return (
    <section className="py-16 md:py-24">
      <div className="wrap">
        <p className="rotulo text-signal-ink">Erro 404</p>
        <h1 className="mt-3 text-[2.4rem] font-extrabold sm:text-[3rem]">Página não encontrada</h1>
        <p className="mt-5 max-w-2xl text-lg text-ink/75">
          O endereço pode ter sido digitado errado ou a página mudou de lugar. Busque o que você precisa no suporte
          ou escolha uma das páginas abaixo.
        </p>
        <form action="/suporte" method="get" role="search" className="mt-8 flex max-w-xl flex-wrap items-end gap-3">
          <div className="min-w-0 flex-1 basis-60">
            <label htmlFor="busca-404" className="mb-1.5 block text-sm font-semibold">
              Buscar no suporte
            </label>
            <input id="busca-404" name="q" type="search" className="campo" autoComplete="off" />
          </div>
          <button type="submit" className="btn btn-primario">
            <MagnifyingGlass size={18} aria-hidden />
            Buscar
          </button>
        </form>
        <nav aria-label="Páginas principais" className="mt-10">
          <ul className="flex flex-wrap gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="btn btn-secundario">
                  {l.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
