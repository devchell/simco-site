import Link from "next/link";
import { LinkedinLogo, InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import { empresa, enderecoCompleto } from "@/content/site";
import { segmentos } from "@/content/segmentos";
import { linkWhatsApp } from "@/lib/whatsapp";

const colunas = [
  {
    titulo: "Soluções",
    links: [
      ...segmentos.map((s) => ({ href: `/solucoes/${s.slug}`, rotulo: s.nome })),
      { href: "/menu-simco", rotulo: "Menu Simco" },
      { href: "/pmmvd", rotulo: "PMMVD" },
    ],
  },
  {
    titulo: "Suporte",
    links: [
      { href: "/suporte", rotulo: "Central de suporte" },
      { href: "/suporte/rejeicoes", rotulo: "Rejeições da SEFAZ" },
      { href: "/suporte/videos", rotulo: "Vídeos e treinamentos" },
      { href: "/suporte#chamado", rotulo: "Abrir chamado" },
    ],
  },
  {
    titulo: "Empresa",
    links: [
      { href: "/empresa", rotulo: "Quem somos" },
      { href: "/empresa#parceiros", rotulo: "Parceiros" },
      { href: "/empresa#trabalhe-conosco", rotulo: "Trabalhe conosco" },
      { href: "/modulos", rotulo: "Módulos fiscais" },
      { href: "/privacidade", rotulo: "Privacidade" },
    ],
  },
];

export function Rodape() {
  return (
    <footer className="bg-navy-deep text-on-navy-muted pb-[env(safe-area-inset-bottom,0px)]">
      <div className="wrap grid gap-12 py-16 md:grid-cols-[1.3fr_repeat(3,1fr)]">
        <div className="grid content-start gap-5">
          <p className="font-display text-2xl font-bold text-on-navy [font-stretch:118%]">SIMCO Informática</p>
          <p className="max-w-xs">Sistemas de gestão para pequenas empresas, desde {empresa.fundacao}.</p>
          <dl className="grid gap-3 text-sm">
            <div>
              <dt className="rotulo text-on-navy-muted/80">Telefone</dt>
              <dd>
                <a href={empresa.telefone.href} className="text-on-navy hover:underline">
                  {empresa.telefone.exibicao}
                </a>
              </dd>
            </div>
            <div>
              <dt className="rotulo text-on-navy-muted/80">WhatsApp</dt>
              <dd className="grid">
                <a href={linkWhatsApp("vendas")} className="text-on-navy hover:underline">
                  Vendas {empresa.whatsappVendas.exibicao}
                </a>
                <a href={linkWhatsApp("suporte")} className="text-on-navy hover:underline">
                  Suporte {empresa.whatsappSuporte.exibicao}
                </a>
              </dd>
            </div>
            <div>
              <dt className="rotulo text-on-navy-muted/80">E-mail</dt>
              <dd>
                <a href={`mailto:${empresa.email}`} className="text-on-navy hover:underline">
                  {empresa.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="rotulo text-on-navy-muted/80">Atendimento</dt>
              <dd className="text-on-navy">{empresa.horario}</dd>
            </div>
          </dl>
        </div>

        {colunas.map((coluna) => (
          <nav key={coluna.titulo} aria-label={coluna.titulo}>
            <p className="rotulo mb-4 text-on-navy">{coluna.titulo}</p>
            <ul className="grid gap-2.5">
              {coluna.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-on-navy hover:underline underline-offset-4">
                    {link.rotulo}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-4 py-6 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            {empresa.razaoSocial} · CNPJ {empresa.cnpj}
            <br />
            {enderecoCompleto}
          </p>
          <div className="flex items-center gap-2">
            <a
              href={empresa.redes.linkedin}
              className="grid size-11 place-items-center rounded-sm border border-white/15 hover:bg-white/10 hover:text-on-navy"
              aria-label="LinkedIn da SIMCO"
            >
              <LinkedinLogo size={20} aria-hidden />
            </a>
            <a
              href={empresa.redes.instagram}
              className="grid size-11 place-items-center rounded-sm border border-white/15 hover:bg-white/10 hover:text-on-navy"
              aria-label="Instagram da SIMCO"
            >
              <InstagramLogo size={20} aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
