import type { Metadata } from "next";
import Link from "next/link";
import { rejeicoes } from "@/content/suporte/rejeicoes";
import { TabelaRejeicoes } from "@/components/suporte/TabelaRejeicoes";

export const metadata: Metadata = {
  title: "Rejeições da SEFAZ: o que cada código significa",
  description:
    "Tabela dos códigos de retorno da SEFAZ para NF-e e NFC-e mais comuns no dia a dia, com explicação simples e o que fazer em cada caso.",
};

export default function Rejeicoes() {
  return (
    <>
      <section className="border-b border-line bg-surface pb-10 pt-10">
        <div className="wrap">
          <nav aria-label="Você está em" className="text-sm text-muted">
            <Link href="/suporte" className="hover:text-ink hover:underline">
              Central de suporte
            </Link>{" "}
            / <span>Rejeições da SEFAZ</span>
          </nav>
          <h1 className="mt-4 max-w-3xl text-[2rem] font-extrabold sm:text-[2.6rem]">O que significa o código da SEFAZ</h1>
          <p className="mt-4 max-w-2xl text-lg text-ink/75">
            Toda nota enviada volta com um código de três dígitos. Encontre o seu abaixo para entender o motivo e saber o que
            fazer.
          </p>
        </div>
      </section>
      <section className="py-12 md:py-16">
        <div className="wrap">
          <TabelaRejeicoes lista={rejeicoes} />
          <p className="mt-10 max-w-3xl text-sm text-muted">
            Descrições conforme a tabela oficial de códigos do Manual de Orientação do Contribuinte da NF-e (versão 7.0). As
            orientações são gerais: em questões fiscais, confirme com o seu contador.
          </p>
        </div>
      </section>
    </>
  );
}
