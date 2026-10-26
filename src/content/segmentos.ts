export type Bloco = { titulo: string; itens: string[] };

export type Segmento = {
  slug: string;
  nome: string;
  aba: string;
  titulo: string;
  resumo: string;
  chamada: string;
  termos: string[];
  blocos: Bloco[];
  observacao?: string;
};

export const financeiro: Bloco = {
  titulo: "Financeiro",
  itens: [
    "Contas a pagar, contas a receber e controle de despesas",
    "Fluxo de caixa sintético e detalhado",
    "Extrato bancário com conferência diária e mensal, pronto para o contador",
    "Boleto gerado na própria empresa, com o arquivo enviado direto ao banco",
    "Aviso automático ao cliente com vencimento, valor e o boleto anexado",
  ],
};

export const segmentos: Segmento[] = [
  {
    slug: "autopecas",
    nome: "Autopeças",
    aba: "Autopeças",
    titulo: "Sistema para autopeças que acha a peça pelo carro do cliente",
    resumo:
      "Pesquisa por modelo e motor que traz numa única busca todas as peças que servem, com foto e ficha técnica para o vendedor não errar no balcão.",
    chamada: "Atenda mais rápido no balcão",
    termos: ["Aplicação", "Modelo e motor", "Código do fabricante", "Similares", "Cotação"],
    blocos: [
      {
        titulo: "Vendas no balcão",
        itens: [
          "Pesquisa por código do fabricante, código interno, descrição ou aplicação",
          "Busca por modelo e motor que reúne todas as peças compatíveis",
          "Cadastro de produtos similares para oferecer alternativa quando faltar estoque",
          "Foto e características técnicas na tela de venda",
          "Envio automático da cotação para o cliente",
          "Histórico de compras e situação de crédito do cliente na mesma tela",
          "Teclas de atalho para quem atende o dia inteiro",
        ],
      },
      {
        titulo: "Estoque e compras",
        itens: [
          "Controle completo dos produtos vendidos",
          "Indicação de quando comprar, com base nas vendas",
          "Análise detalhada das vendas para decidir quanto investir",
        ],
      },
      financeiro,
    ],
  },
  {
    slug: "oficinas",
    nome: "Oficinas mecânicas",
    aba: "Oficina",
    titulo: "Sistema para oficinas com a ordem de serviço na mão",
    resumo:
      "Orçamento, ordem de serviço e histórico do veículo num só lugar. Encontre o cliente pela placa, pelo chassi, pela cor ou pelo ano do carro.",
    chamada: "Organize as ordens de serviço",
    termos: ["Placa", "Chassi", "Ordem de serviço", "Mecânico", "Histórico"],
    blocos: [
      {
        titulo: "Orçamentos e ordens de serviço",
        itens: [
          "Busca do cliente por placa, chassi, cor ou ano do veículo",
          "Serviços executados e mecânico responsável registrados na OS",
          "Histórico de serviços, peças e orçamentos de cada veículo",
          "Transferência de titularidade quando o carro troca de dono",
        ],
      },
      {
        titulo: "Gestão da oficina",
        itens: [
          "Estoque e compras de peças",
          "Emissão e consulta de NF-e integradas",
          "Relatórios de clientes, fornecedores, vendas, compras, orçamentos e pedidos",
          "Atende oficina mecânica, funilaria e loja de serviço automotivo",
        ],
      },
      financeiro,
    ],
    observacao:
      "A SIMCO desenvolveu o sistema de controle de fumaça preta usado no PMMVD, programa da CETESB com o Sindirepa, e conhece de perto a rotina de oficinas de veículos diesel.",
  },
  {
    slug: "comercio",
    nome: "Comércio",
    aba: "Comércio",
    titulo: "Sistema para comércio com nota fiscal e estoque sob controle",
    resumo:
      "Pedido de venda com NF-e, NFC-e ou cupom SAT, sugestão de compra pelo histórico de vendas e financeiro integrado ao banco.",
    chamada: "Venda e emita a nota sem complicação",
    termos: ["Pedido de venda", "NF-e", "NFC-e", "SAT", "Sugestão de compra"],
    blocos: [
      {
        titulo: "Vendas e emissão fiscal",
        itens: [
          "Pedido de venda com emissão de NF-e, NFC-e ou cupom fiscal SAT",
          "Cadastro ilimitado de clientes, produtos e transportadoras",
          "Mala direta com filtros por perfil de cliente",
          "Implantação simples e aprendizado rápido",
        ],
      },
      {
        titulo: "Estoque e compras",
        itens: [
          "Sugestão de compra com base no estoque mínimo e nas vendas dos últimos 12 meses",
          "Recebimento de mercadoria e controle de entradas e saídas",
          "Relatórios gerenciais de vendas, compras e estoque",
        ],
      },
      financeiro,
    ],
  },
  {
    slug: "controle-de-equipamentos",
    nome: "Controle de equipamentos e cilindros",
    aba: "Cilindros",
    titulo: "Controle de cilindros e equipamentos pelo número de série",
    resumo:
      "Saiba onde está cada cilindro ou equipamento, com quem está, desde quando e quanto cobrar. Locação, venda, sublocação e equipamentos de terceiros no mesmo controle.",
    chamada: "Rastreie cada equipamento",
    termos: ["Nº de série", "Patrimônio", "Locação", "Romaneio", "Sublocação"],
    blocos: [
      {
        titulo: "Rastreabilidade",
        itens: [
          "Controle por número de série e número de patrimônio",
          "Identificação e controle de equipamentos de terceiros",
          "Envio, retirada e troca registrados pelo número do pedido, com impressão de romaneio",
          "Histórico completo de cada equipamento locado ou vendido",
          "Aplicativo para consultar estoque e equipamentos em campo",
        ],
      },
      {
        titulo: "Locação e cobrança",
        itens: [
          "Locação integrada ao envio e à retirada, com faturamento por cliente",
          "Cobrança automática de locação",
          "Relatório de produtos sublocados para conferir a cobrança dos fornecedores",
          "Relatórios de distribuição por produto, cliente, fornecedor, marca ou fabricante",
        ],
      },
      financeiro,
    ],
    observacao: "Indicado para distribuidoras de gases, locadoras de equipamentos e empresas de home care.",
  },
];

export function buscarSegmento(slug: string) {
  return segmentos.find((s) => s.slug === slug);
}
