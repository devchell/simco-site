export type Modulo = {
  id: string;
  sigla: string;
  /** Modelo do documento fiscal eletrônico, quando houver */
  modelo?: string;
  nome: string;
  resumo: string;
  itens: string[];
  grupo: "fiscal" | "financeiro" | "operacao";
};

export const modulos: Modulo[] = [
  {
    id: "nfe",
    sigla: "NF-e",
    modelo: "55",
    nome: "Nota Fiscal Eletrônica",
    resumo: "Emissão e consulta de NF-e integradas ao pedido de venda, sem redigitar nada.",
    itens: [
      "Emissão a partir do pedido de venda",
      "XML e DANFE enviados por e-mail ao cliente e à contabilidade",
      "Consulta da situação da nota na SEFAZ",
    ],
    grupo: "fiscal",
  },
  {
    id: "nfce",
    sigla: "NFC-e",
    modelo: "65",
    nome: "Nota Fiscal de Consumidor Eletrônica",
    resumo: "Venda ao consumidor final com contingência offline: a nota continua saindo mesmo sem internet ou com a SEFAZ fora do ar.",
    itens: ["Contingência offline integrada", "Emissão direto do caixa", "Conformidade com as regras da SEFAZ"],
    grupo: "fiscal",
  },
  {
    id: "sat",
    sigla: "CF-e SAT",
    modelo: "59",
    nome: "Cupom Fiscal Eletrônico SAT",
    resumo: "Cupom fiscal pelo equipamento SAT, integrado ao ERP e compatível com os equipamentos Sweda.",
    itens: [
      "Integrado ao ERP completo",
      "Envio de XML para cliente e contabilidade",
      "Atualização semestral da tabela IBPT, em junho e dezembro",
    ],
    grupo: "fiscal",
  },
  {
    id: "mdfe",
    sigla: "MDF-e",
    modelo: "58",
    nome: "Manifesto Eletrônico de Documentos Fiscais",
    resumo: "Vincula as notas transportadas à carga do veículo. Válido em todos os estados.",
    itens: ["Emissão vinculada às NF-e da carga", "Assinatura digital do emitente", "Autorização pelo ambiente da SEFAZ"],
    grupo: "fiscal",
  },
  {
    id: "sped",
    sigla: "SPED",
    nome: "Escrituração Fiscal Digital",
    resumo: "Geração do arquivo do SPED Fiscal a partir do que já está no sistema, com a apuração de ICMS e IPI.",
    itens: [
      "Blocos 0, C, D, E, G, H, K, 1 e 9",
      "Documentos de mercadorias e serviços",
      "Inventário físico e controle de produção e estoque",
    ],
    grupo: "fiscal",
  },
  {
    id: "gnre",
    sigla: "GNRE",
    nome: "Guia Nacional de Recolhimento",
    resumo: "A guia de tributo estadual é preenchida automaticamente a partir da própria NF-e, para o estado de destino.",
    itens: ["Preenchimento automático pela NF-e", "Menos erro de digitação na guia"],
    grupo: "fiscal",
  },
  {
    id: "certificado",
    sigla: "e-CNPJ",
    nome: "Certificado Digital",
    resumo: "A SIMCO é agente autorizado para emissão de certificado digital, em parceria com a Autêntica. Tudo por videoconferência.",
    itens: ["Emissão por videoconferência", "Atendimento de quem já conhece o seu sistema"],
    grupo: "fiscal",
  },
  {
    id: "cobranca-bancaria",
    sigla: "Boleto",
    nome: "Cobrança bancária",
    resumo: "Boleto gerado na empresa, arquivo de remessa enviado ao banco e conciliação sem digitar no site do banco.",
    itens: [
      "Integração com os principais bancos",
      "Aviso automático ao cliente com o boleto anexado",
      "Extrato para conferência diária e mensal",
    ],
    grupo: "financeiro",
  },
  {
    id: "tef",
    sigla: "TEF",
    nome: "Pagamento com cartão integrado",
    resumo: "Venda no cartão integrada ao caixa: o valor vai direto para a maquininha e o pagamento volta registrado no sistema.",
    itens: ["Menos erro de digitação no caixa", "Controle financeiro das vendas no cartão", "Mais segurança contra fraudes"],
    grupo: "financeiro",
  },
  {
    id: "cloud",
    sigla: "Nuvem",
    nome: "Sistema na nuvem",
    resumo: "O sistema roda num servidor na nuvem: sem servidor na loja, com backup diário e acesso de qualquer lugar com internet.",
    itens: ["Backup diário acompanhado", "Antivírus e proteção contra ataques", "Menos gasto com servidor e rede"],
    grupo: "operacao",
  },
  {
    id: "ecommerce",
    sigla: "E-commerce",
    nome: "Integração com loja virtual",
    resumo: "Integração com a plataforma Magento: pedidos, clientes, estoque e catálogo sincronizados com o ERP.",
    itens: [
      "Pedido pago na loja entra direto no sistema",
      "Estoque atualizado na loja para não vender o que acabou",
      "Catálogo e preços cadastrados num lugar só",
    ],
    grupo: "operacao",
  },
  {
    id: "mobile",
    sigla: "App",
    nome: "Aplicativos para celular",
    resumo: "Aplicativos sob medida para força de vendas, inventário de estoque e controle de visitas em campo.",
    itens: ["Força de vendas", "Estoque e inventário", "Controle de visitas"],
    grupo: "operacao",
  },
];

export const gruposModulos = {
  fiscal: "Documentos e obrigações fiscais",
  financeiro: "Financeiro e pagamentos",
  operacao: "Operação e integrações",
} as const;
