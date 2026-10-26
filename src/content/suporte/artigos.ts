export type Categoria = "emissao" | "cadastros" | "vendas" | "remoto";

export const categorias: Record<Categoria, { nome: string; descricao: string }> = {
  emissao: { nome: "Emissão fiscal", descricao: "NF-e, NFC-e, certificado digital e SEFAZ" },
  cadastros: { nome: "Cadastros", descricao: "Clientes, produtos e fornecedores" },
  vendas: { nome: "Vendas e pedidos", descricao: "Pedidos, devoluções e cotações" },
  remoto: { nome: "Acesso remoto", descricao: "Como receber ajuda direto no seu computador" },
};

export type Bloco =
  | { tipo: "p"; texto: string }
  | { tipo: "passos"; itens: string[] }
  | { tipo: "lista"; itens: string[] }
  | { tipo: "titulo"; texto: string }
  | { tipo: "aviso"; texto: string };

export type Artigo = {
  slug: string;
  titulo: string;
  categoria: Categoria;
  resumo: string;
  /** Palavras que o cliente costuma digitar ao procurar este assunto */
  termos: string[];
  corpo: Bloco[];
  codigos?: number[];
  videos?: string[];
  acoes?: { rotulo: string; href: string }[];
};

export const artigos: Artigo[] = [
  {
    slug: "nota-denegada",
    titulo: "Minha nota ficou com a situação Denegada",
    categoria: "emissao",
    resumo: "A SEFAZ negou o uso da nota por irregularidade fiscal no CNPJ do cliente ou da sua empresa.",
    termos: ["denegada", "uso denegado", "irregularidade", "302", "301", "110"],
    corpo: [
      {
        tipo: "p",
        texto:
          "Denegada é a situação que a SEFAZ dá à nota quando existe alguma irregularidade fiscal no CNPJ. Na maioria dos casos o problema está no cadastro do cliente (destinatário) na SEFAZ, e não no sistema.",
      },
      { tipo: "titulo", texto: "O que fazer" },
      {
        tipo: "passos",
        itens: [
          "Veja o código de retorno da nota. 302 indica irregularidade do destinatário (seu cliente); 301 indica irregularidade da sua empresa.",
          "Se for 302, entre em contato com o cliente e explique que, enquanto o CNPJ dele estiver irregular, não é possível emitir nota fiscal para ele.",
          "Se for 301, procure seu contador para regularizar a situação da empresa antes de emitir novas notas.",
          "Não use a nota denegada para entregar ou transportar a mercadoria.",
        ],
      },
      {
        tipo: "aviso",
        texto: "A nota denegada não pode ser cancelada nem reaproveitada: o número fica registrado na SEFAZ com essa situação.",
      },
    ],
    codigos: [110, 301, 302],
  },
  {
    slug: "botao-incluir-nao-habilita",
    titulo: "O botão Incluir não habilita ao cadastrar cliente, produto ou fornecedor",
    categoria: "cadastros",
    resumo: "Falta confirmar o nome com Enter para o sistema perguntar se deseja cadastrar.",
    termos: ["incluir", "botão desabilitado", "cadastro cliente", "cadastro produto", "fornecedor", "não salva"],
    corpo: [
      {
        tipo: "p",
        texto:
          "No cadastro de cliente, produto e fornecedor, o botão Incluir só é liberado depois que o sistema confirma que o registro ainda não existe.",
      },
      {
        tipo: "passos",
        itens: [
          "Depois de terminar a digitação, clique de novo no campo do nome.",
          "Pressione Enter.",
          "O sistema vai perguntar: \"Cliente não cadastrado. Deseja cadastrá-lo?\".",
          "Clique em Sim. O botão Incluir fica disponível.",
        ],
      },
      { tipo: "p", texto: "O mesmo vale para o cadastro de produto e de fornecedor: confirme o nome com Enter antes de incluir." },
    ],
    videos: ["xKu5OwkQZsM", "aj3-0aGJ2Wg"],
  },
  {
    slug: "cidade-nao-aceita-digitacao",
    titulo: "Não consigo digitar a cidade no cadastro do cliente",
    categoria: "cadastros",
    resumo: "O campo de cidade trabalha com letras maiúsculas. Ative o Caps Lock antes de digitar.",
    termos: ["cidade", "município", "não digita", "caps lock", "maiúscula", "cadastro cliente"],
    corpo: [
      {
        tipo: "passos",
        itens: [
          "Clique no campo Cidade.",
          "Ative a tecla Caps Lock do teclado.",
          "Digite o nome da cidade e selecione na lista.",
        ],
      },
      {
        tipo: "p",
        texto: "Se a cidade continuar sem aparecer, abra um chamado informando o nome da cidade e o estado.",
      },
    ],
    videos: ["xKu5OwkQZsM"],
  },
  {
    slug: "devolucao-pedido-nao-encontrado",
    titulo: "Devolução: o emissor mostra \"Pedido não encontrado\"",
    categoria: "vendas",
    resumo: "O pedido de devolução é um pedido para fornecedor. Ajuste o Tipo de Acesso para encontrá-lo.",
    termos: ["devolução", "pedido não encontrado", "fornecedor", "tipo de acesso", "emissor"],
    corpo: [
      {
        tipo: "p",
        texto:
          "Ao buscar o pedido de devolução no emissor de nota, o sistema procura pedidos de cliente. Como a devolução é um pedido para fornecedor, ele não aparece.",
      },
      {
        tipo: "passos",
        itens: [
          "No emissor, localize o campo Tipo de Acesso.",
          "Altere para Cliente / Fornecedor.",
          "Busque o pedido de novo pelo número.",
        ],
      },
    ],
    videos: ["Tlp1bbw5sbY"],
  },
  {
    slug: "acesso-remoto",
    titulo: "Como liberar o acesso remoto para o suporte",
    categoria: "remoto",
    resumo: "Baixe o TeamViewer QuickSupport e informe o ID e a senha ao analista da SIMCO.",
    acoes: [{ rotulo: "Baixar o TeamViewer QuickSupport", href: "https://get.teamviewer.com/w3dbyfc" }],
    termos: ["acesso remoto", "teamviewer", "remoto", "conectar", "suporte no computador", "id e senha"],
    corpo: [
      {
        tipo: "p",
        texto:
          "Com o acesso remoto, o analista vê a sua tela e resolve o problema como se estivesse ao lado do computador. Você acompanha tudo o que é feito.",
      },
      {
        tipo: "passos",
        itens: [
          "Fale com o suporte por WhatsApp ou telefone e diga que vai liberar o acesso.",
          "Baixe o TeamViewer QuickSupport pelo botão desta página e abra o arquivo. Não precisa instalar.",
          "A janela mostra um ID e uma senha. Informe os dois ao analista.",
          "Deixe o computador ligado e acompanhe o atendimento.",
          "Ao terminar, feche o programa. A senha muda a cada vez que ele é aberto.",
        ],
      },
      {
        tipo: "aviso",
        texto:
          "Só passe o ID e a senha para quem você chamou. A SIMCO nunca pede acesso ao seu computador sem que você tenha entrado em contato antes.",
      },
    ],
  },
  {
    slug: "sefaz-fora-do-ar",
    titulo: "A SEFAZ está fora do ar? Como verificar",
    categoria: "emissao",
    resumo: "Os retornos 108 e 109 indicam serviço parado na SEFAZ. Veja como confirmar e o que fazer.",
    acoes: [{ rotulo: "Painel de disponibilidade da NF-e", href: "https://www.nfe.fazenda.gov.br/portal/disponibilidade.aspx" }],
    termos: ["sefaz fora do ar", "sefaz parada", "serviço paralisado", "108", "109", "não transmite", "lentidão"],
    corpo: [
      {
        tipo: "p",
        texto:
          "Quando a nota não sai e o retorno é 108 (serviço paralisado momentaneamente) ou 109 (serviço paralisado sem previsão), o problema está no serviço da SEFAZ, não na sua nota.",
      },
      {
        tipo: "passos",
        itens: [
          "Confira a situação no painel oficial de disponibilidade da NF-e (link nesta página).",
          "Aguarde alguns minutos e transmita de novo.",
          "Para venda ao consumidor com NFC-e, o sistema tem contingência offline: a nota é emitida e enviada à SEFAZ quando o serviço voltar.",
          "Se a parada for longa e você precisar emitir NF-e, fale com o suporte antes de mudar qualquer configuração.",
        ],
      },
    ],
    codigos: [108, 109],
  },
  {
    slug: "nfce-contingencia-offline",
    titulo: "NFC-e em contingência offline: o que acontece quando a internet cai",
    categoria: "emissao",
    resumo: "O caixa continua vendendo. As notas ficam pendentes e precisam ser transmitidas quando a conexão voltar.",
    termos: ["contingência", "offline", "internet caiu", "sem internet", "nfc-e pendente", "704", "150"],
    corpo: [
      {
        tipo: "p",
        texto:
          "Com a contingência offline, a NFC-e é emitida e impressa mesmo sem internet ou com a SEFAZ fora do ar. O cupom sai com a indicação de contingência e o cliente leva a mercadoria normalmente.",
      },
      { tipo: "titulo", texto: "Quando a conexão voltar" },
      {
        tipo: "passos",
        itens: [
          "Mantenha o sistema aberto para que as notas pendentes sejam transmitidas.",
          "Confira se ficou alguma nota sem autorização.",
          "Transmita o quanto antes: a legislação dá um prazo para o envio das notas emitidas em contingência. Seu contador sabe o prazo do seu estado.",
        ],
      },
      {
        tipo: "aviso",
        texto:
          "Retorno 150 significa que a nota foi autorizada fora do prazo, mas está válida. Retorno 704 indica NFC-e enviada com atraso maior que o permitido: fale com o suporte.",
      },
    ],
    codigos: [150, 704],
  },
  {
    slug: "certificado-digital-vencido",
    titulo: "Certificado digital vencido ou inválido",
    categoria: "emissao",
    resumo: "Retornos 280 e 281 apontam problema no certificado. Veja como confirmar e renovar.",
    acoes: [{ rotulo: "Certificado digital com a SIMCO", href: "/modulos#certificado" }],
    termos: ["certificado", "certificado vencido", "e-cnpj", "a1", "a3", "token", "280", "281", "213"],
    corpo: [
      {
        tipo: "p",
        texto:
          "Toda nota é assinada com o certificado digital da empresa. Se ele vence, não está instalado ou pertence a outro CNPJ, a SEFAZ recusa a nota.",
      },
      {
        tipo: "lista",
        itens: [
          "281: certificado fora da validade.",
          "280: certificado ausente ou não reconhecido.",
          "213: o certificado é de outra empresa (raiz do CNPJ diferente).",
        ],
      },
      { tipo: "titulo", texto: "O que fazer" },
      {
        tipo: "passos",
        itens: [
          "Confira a data de validade do certificado. Se for A3 (token ou cartão), veja se está conectado.",
          "Confira se a data e a hora do computador estão corretas.",
          "Se estiver vencido, renove. A SIMCO é agente autorizado e emite o certificado por videoconferência.",
          "Depois de instalado, fale com o suporte para configurar o novo certificado no sistema.",
        ],
      },
    ],
    codigos: [213, 280, 281],
  },
  {
    slug: "cancelar-corrigir-ou-inutilizar",
    titulo: "Cancelar, corrigir ou inutilizar uma NF-e: qual usar",
    categoria: "emissao",
    resumo: "Cada situação tem o seu caminho. Escolher o errado pode gerar problema com o Fisco.",
    termos: ["cancelar nota", "cancelamento", "carta de correção", "cc-e", "inutilizar", "inutilização", "numeração pulada", "nota errada"],
    corpo: [
      { tipo: "titulo", texto: "Cancelamento" },
      {
        tipo: "p",
        texto:
          "Para nota autorizada cuja venda não aconteceu, e desde que a mercadoria não tenha saído. Precisa ser feito dentro do prazo legal, em regra até 24 horas depois da autorização.",
      },
      { tipo: "titulo", texto: "Carta de correção (CC-e)" },
      {
        tipo: "p",
        texto:
          "Corrige erros em uma nota autorizada, como endereço ou dados de transporte. Não pode alterar valores e quantidades que mudem o imposto, trocar o cliente ou o emitente, nem mudar a data de emissão ou de saída.",
      },
      { tipo: "titulo", texto: "Inutilização" },
      {
        tipo: "p",
        texto:
          "Para números da sequência que foram pulados e nunca tiveram nota autorizada. Número já usado em nota não pode ser inutilizado (retorno 241).",
      },
      {
        tipo: "aviso",
        texto: "Ficou em dúvida sobre qual se aplica ao seu caso? Fale com o seu contador antes de emitir. Os vídeos abaixo mostram o passo a passo no sistema.",
      },
    ],
    codigos: [206, 241],
    videos: ["q30H7Ip4Szw", "RkF8z-wy5F4", "rRy_FszdiNM"],
  },
  {
    slug: "nota-rejeitada",
    titulo: "Minha nota foi rejeitada: como entender o motivo",
    categoria: "emissao",
    resumo: "Toda rejeição vem com um código de três dígitos. Ele diz exatamente o que corrigir.",
    termos: ["rejeição", "rejeitada", "nota não sai", "erro na nota", "código", "cstat"],
    corpo: [
      {
        tipo: "p",
        texto:
          "Quando a SEFAZ recusa uma nota, ela devolve um código e uma descrição, por exemplo \"539 Rejeição: Duplicidade de NF-e com diferença na Chave de Acesso\". A nota rejeitada não tem validade e pode ser corrigida e enviada de novo com o mesmo número.",
      },
      {
        tipo: "passos",
        itens: [
          "Anote o código que aparece na mensagem de retorno.",
          "Procure o código na tabela de rejeições desta central para ver o que significa e o que fazer.",
          "Corrija o cadastro indicado e transmita de novo.",
          "Se o código não estiver na tabela ou o erro continuar, abra um chamado com o print da mensagem.",
        ],
      },
    ],
    codigos: [204, 215, 539, 778],
  },
];

export function buscarArtigo(slug: string) {
  return artigos.find((a) => a.slug === slug);
}
