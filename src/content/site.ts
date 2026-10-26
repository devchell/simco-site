export const empresa = {
  nome: "SIMCO Informática",
  razaoSocial: "Simco Informática Comércio e Serviços Ltda",
  cnpj: "07.315.114/0001-70",
  fundacao: 1998,
  sistemasVendidos: 500,
  endereco: {
    logradouro: "Rua Eucalipto, 25",
    bairro: "Jardim Floresta",
    cidade: "Vargem Grande Paulista",
    uf: "SP",
    cep: "06730-000",
  },
  telefone: { exibicao: "(11) 4158-3078", href: "tel:+551141583078" },
  whatsappVendas: { exibicao: "(11) 99628-7355", numero: "5511996287355" },
  whatsappSuporte: { exibicao: "(11) 99842-1950", numero: "5511998421950" },
  email: "suporte.web@simco.com.br",
  horario: "Segunda a sexta, das 8h às 18h",
  redes: {
    linkedin: "https://www.linkedin.com/company/simco-inform%C3%A1tica/",
    instagram: "https://www.instagram.com/simco_info/",
  },
  acessoRemoto: "https://get.teamviewer.com/w3dbyfc",
  mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Eucalipto+25+Jardim+Floresta+Vargem+Grande+Paulista+SP",
} as const;

export const anosDeMercado = new Date().getFullYear() - empresa.fundacao;

export const enderecoCompleto = `${empresa.endereco.logradouro}, ${empresa.endereco.bairro}, ${empresa.endereco.cidade} - ${empresa.endereco.uf}, CEP ${empresa.endereco.cep}`;

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://simco-site.vercel.app";

export const navegacao = [
  { href: "/solucoes", rotulo: "Soluções" },
  { href: "/modulos", rotulo: "Módulos fiscais" },
  { href: "/suporte", rotulo: "Suporte" },
  { href: "/empresa", rotulo: "Empresa" },
  { href: "/contato", rotulo: "Contato" },
] as const;
