// Códigos conferidos no Manual de Orientação do Contribuinte (MOC 7.0, Anexo I).
export type Rejeicao = {
  codigo: number;
  descricao: string;
  tipo: "sucesso" | "servico" | "denegacao" | "rejeicao";
  modelos: string[];
  significado: string;
  passos: string[];
};

export const rejeicoes: Rejeicao[] = [
  {
    "codigo": 100,
    "descricao": "Autorizado o uso da NF-e",
    "tipo": "sucesso",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "Não é erro. A SEFAZ aceitou a nota e ela está autorizada, com validade fiscal.",
    "passos": [
      "Nenhuma correção é necessária: a nota pode ser entregue ao cliente (DANFE/DANFCE ou XML).",
      "Guarde o XML autorizado; ele deve ser mantido pelo prazo exigido pela legislação (em caso de dúvida, consulte seu contador)."
    ]
  },
  {
    "codigo": 108,
    "descricao": "Serviço Paralisado Momentaneamente (curto prazo)",
    "tipo": "servico",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O serviço da SEFAZ está fora do ar por um período curto (por exemplo, manutenção). O problema não está na sua nota nem no seu cadastro.",
    "passos": [
      "Aguarde alguns minutos e tente transmitir novamente.",
      "Consulte a situação do serviço no portal oficial de disponibilidade da SEFAZ.",
      "Se precisar vender sem esperar, no caso de NFC-e consulte o suporte do seu sistema sobre emissão em contingência."
    ]
  },
  {
    "codigo": 109,
    "descricao": "Serviço Paralisado sem Previsão",
    "tipo": "servico",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O serviço da SEFAZ está fora do ar e sem previsão de volta. O problema não está na sua nota.",
    "passos": [
      "Consulte o portal oficial de disponibilidade para acompanhar o retorno do serviço.",
      "Tente transmitir novamente de tempos em tempos.",
      "Se precisar continuar vendendo, consulte o suporte do seu sistema e seu contador sobre emissão em contingência, que tem regras próprias."
    ]
  },
  {
    "codigo": 110,
    "descricao": "Uso Denegado",
    "tipo": "denegacao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "A SEFAZ recebeu a nota, mas negou o seu uso por irregularidade fiscal do emitente ou do destinatário. A nota denegada não tem validade para a operação. O motivo vem junto, nos códigos 301, 302 ou 303.",
    "passos": [
      "Veja o motivo informado (301, 302 ou 303) e consulte a explicação desse código.",
      "Não entregue nem use essa nota para circular a mercadoria.",
      "Procure seu contador para regularizar a situação fiscal antes de emitir uma nova nota."
    ]
  },
  {
    "codigo": 150,
    "descricao": "Autorizado o uso da NF-e, autorização fora de prazo",
    "tipo": "sucesso",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "Não é erro. A nota foi autorizada, mas a SEFAZ a recebeu depois do prazo normal de envio (por exemplo, emitida em contingência e transmitida com atraso). Ela continua autorizada.",
    "passos": [
      "Não é necessário reenviar a nota: ela já está autorizada.",
      "Se o atraso foi inesperado, verifique a conexão com a internet e o horário do computador.",
      "Em caso de dúvida sobre as consequências fiscais do atraso, procure seu contador."
    ]
  },
  {
    "codigo": 204,
    "descricao": "Rejeição: Duplicidade de NF-e",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "A SEFAZ já tem uma nota com o mesmo número, série e emitente. Em geral, a nota já foi enviada antes e está autorizada ou em processamento.",
    "passos": [
      "Não tente reenviar com o mesmo número: primeiro consulte a situação da nota pela chave de acesso no portal da SEFAZ.",
      "Se a nota aparecer como autorizada, ela já vale; use essa nota em vez de emitir outra.",
      "Se a consulta não esclarecer, contate o suporte do seu sistema informando o número e a série."
    ]
  },
  {
    "codigo": 206,
    "descricao": "Rejeição: NF-e já está inutilizada na Base de Dados da SEFAZ",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O número que você tentou usar já foi inutilizado (declarado como não usado) na SEFAZ. Número inutilizado não pode mais ser usado em uma nota.",
    "passos": [
      "Não tente emitir novamente com esse número.",
      "Emita a nota com o próximo número livre da série; se o sistema não avançar sozinho, contate o suporte.",
      "Em caso de dúvida sobre a numeração, procure seu contador."
    ]
  },
  {
    "codigo": 213,
    "descricao": "Rejeição: CNPJ-Base do Emitente difere do CNPJ-Base do Certificado Digital",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O certificado digital usado para assinar a nota pertence a outra empresa, não à que está emitindo (os 8 primeiros dígitos do CNPJ são diferentes).",
    "passos": [
      "Confirme se o certificado instalado é o da empresa emitente (A1 ou A3) e se o CNPJ do emitente no cadastro está correto.",
      "Se estiver usando o certificado de outra empresa, troque pelo certificado correto.",
      "Se persistir, contate o suporte do seu sistema; para questões de certificado, também a certificadora."
    ]
  },
  {
    "codigo": 215,
    "descricao": "Rejeição: Falha no schema XML",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O arquivo da nota não está no formato exigido pela SEFAZ: algum campo está faltando, fora do tamanho ou com conteúdo inválido.",
    "passos": [
      "Leia a mensagem completa de retorno: ela costuma indicar o campo com problema.",
      "Revise cadastros de produto, cliente e empresa quanto a campos vazios, caracteres estranhos ou valores fora do padrão.",
      "Se não achar o campo, contate o suporte do seu sistema com a mensagem completa."
    ]
  },
  {
    "codigo": 217,
    "descricao": "Rejeição: NF-e não consta na base de dados da SEFAZ",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "Você consultou ou tentou um pedido (consulta, cancelamento, evento) sobre uma nota que a SEFAZ não conhece. Ela pode não ter sido enviada, ter sido enviada a outra SEFAZ, ou a chave está errada.",
    "passos": [
      "Confira a chave de acesso (44 dígitos) e se o ambiente (produção ou homologação) está correto.",
      "Confirme que a nota chegou a ser transmitida; se não, ela precisa ser enviada antes de qualquer outro pedido.",
      "Se a nota deveria existir, contate o suporte do seu sistema."
    ]
  },
  {
    "codigo": 225,
    "descricao": "Rejeição: Falha no Schema XML do lote de NFe",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O lote enviado à SEFAZ tem erro de estrutura no arquivo. Parecido com o 215: algum dado está fora do formato exigido.",
    "passos": [
      "Leia a mensagem completa de retorno, que costuma apontar o campo com problema.",
      "Revise os cadastros usados na nota (produtos, cliente, empresa) procurando dados vazios ou inválidos.",
      "Se o erro continuar, contate o suporte do seu sistema com a mensagem completa."
    ]
  },
  {
    "codigo": 228,
    "descricao": "Rejeição: Data de Emissão muito atrasada",
    "tipo": "rejeicao",
    "modelos": [
      "55"
    ],
    "significado": "A nota foi enviada à SEFAZ muito tempo depois da data de emissão (o prazo geral é de 30 dias, podendo variar conforme a UF). Em NFC-e, o atraso é tratado pelo código 704.",
    "passos": [
      "Verifique se a data e a hora do computador estão corretas.",
      "Não altere a data de emissão por conta própria para contornar o erro: a data deve corresponder à operação real.",
      "Procure seu contador para saber como regularizar a operação."
    ]
  },
  {
    "codigo": 233,
    "descricao": "Rejeição: IE do destinatário não cadastrada",
    "tipo": "rejeicao",
    "modelos": [
      "55"
    ],
    "significado": "A Inscrição Estadual informada para o cliente não existe no cadastro da SEFAZ. Pode haver erro de digitação ou o cliente não possuir essa inscrição.",
    "passos": [
      "Confira a IE no cadastro do cliente; consulte a situação cadastral dele no portal da SEFAZ.",
      "Se o cliente não for contribuinte de ICMS (por exemplo, pessoa física), o cadastro dele precisa refletir isso, sem IE.",
      "Em dúvida sobre a classificação do cliente na operação, procure seu contador."
    ]
  },
  {
    "codigo": 241,
    "descricao": "Rejeição: Um número da faixa já foi utilizado",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "Você pediu para inutilizar uma faixa de números, mas pelo menos um deles já foi usado em uma nota na SEFAZ. Número já usado não pode ser inutilizado.",
    "passos": [
      "Consulte quais números da faixa já têm nota emitida.",
      "Peça a inutilização apenas dos números realmente não usados.",
      "Em dúvida, consulte seu contador ou o suporte do seu sistema."
    ]
  },
  {
    "codigo": 252,
    "descricao": "Rejeição: Ambiente informado diverge do Ambiente de recebimento",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "A nota foi enviada marcada para um ambiente (produção ou homologação/teste) diferente do ambiente da SEFAZ que a recebeu.",
    "passos": [
      "Confira se o sistema está configurado para o ambiente de produção (emissão real) ou homologação (testes), conforme o caso.",
      "Se acabou de mudar de teste para produção, revise a configuração completa de emissão.",
      "Se persistir, contate o suporte do seu sistema."
    ]
  },
  {
    "codigo": 280,
    "descricao": "Rejeição: Certificado Transmissor inválido",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O certificado digital usado na comunicação com a SEFAZ não foi aceito: está ausente, em formato incorreto ou não é um certificado válido de empresa.",
    "passos": [
      "Verifique se o certificado digital está instalado e selecionado corretamente no computador (ou o token/cartão conectado, se for A3).",
      "Confira se o certificado é de empresa e está dentro da validade.",
      "Se persistir, contate o suporte do seu sistema ou a certificadora."
    ]
  },
  {
    "codigo": 281,
    "descricao": "Rejeição: Certificado Transmissor Data Validade",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O certificado digital da empresa está vencido (ou ainda não começou a valer) e não pode ser usado para transmitir notas.",
    "passos": [
      "Confira a data de validade do certificado digital.",
      "Se vencido, renove ou adquira um novo na certificadora e instale-o no sistema.",
      "Verifique também se a data do computador está correta."
    ]
  },
  {
    "codigo": 301,
    "descricao": "Uso Denegado: Irregularidade fiscal do emitente",
    "tipo": "denegacao",
    "modelos": [
      "55"
    ],
    "significado": "A SEFAZ negou o uso da nota porque a empresa emitente está com irregularidade fiscal. A nota denegada não vale para a operação.",
    "passos": [
      "Procure imediatamente seu contador para identificar e regularizar a pendência da empresa junto à SEFAZ.",
      "Não use a nota denegada para circular a mercadoria.",
      "Após a regularização, emita nova nota conforme orientação do contador."
    ]
  },
  {
    "codigo": 302,
    "descricao": "Uso Denegado: Irregularidade fiscal do destinatário",
    "tipo": "denegacao",
    "modelos": [
      "55"
    ],
    "significado": "A SEFAZ negou o uso da nota porque o cliente (destinatário) está em situação irregular perante o Fisco, e a operação com ele não é permitida. A nota denegada não vale para a operação.",
    "passos": [
      "Não entregue a mercadoria com base nessa nota.",
      "Avise o cliente de que a situação cadastral dele precisa ser regularizada junto à SEFAZ.",
      "Procure seu contador para saber como proceder com a venda."
    ]
  },
  {
    "codigo": 539,
    "descricao": "Rejeição: Duplicidade de NF-e com diferença na Chave de Acesso",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "A SEFAZ já tem uma nota com o mesmo número e série, mas com chave de acesso diferente (por exemplo, o código numérico gerado mudou numa nova tentativa). O mesmo número não pode ter duas chaves. Esta validação é aplicada a critério da SEFAZ.",
    "passos": [
      "Não tente reenviar: consulte a situação da nota pela chave informada na mensagem de retorno.",
      "Se a nota já estiver autorizada, use a nota original em vez de reemitir.",
      "Se a consulta não esclarecer, contate o suporte do seu sistema com a mensagem completa."
    ]
  },
  {
    "codigo": 563,
    "descricao": "Rejeição: Já existe pedido de Inutilização com a mesma faixa de inutilização",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "Você pediu para inutilizar uma faixa de números que já foi inutilizada em um pedido anterior. A SEFAZ não aceita o mesmo pedido duas vezes.",
    "passos": [
      "Não é preciso repetir o pedido: a faixa já foi tratada anteriormente.",
      "Se quiser confirmar, consulte a inutilização no portal da SEFAZ.",
      "Em dúvida, consulte o suporte do seu sistema ou seu contador."
    ]
  },
  {
    "codigo": 611,
    "descricao": "Rejeição: GTIN (cEAN) inválido",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O código de barras (GTIN/EAN) cadastrado em um item da nota é inválido, porque o dígito verificador não confere. Isso é comum em peças e produtos com código digitado errado.",
    "passos": [
      "Identifique o item indicado na mensagem (nItem) e confira o código de barras no cadastro do produto.",
      "Corrija o código; se o produto não tem código de barras oficial, o campo deve ficar como \"SEM GTIN\" (conforme o sistema).",
      "Se tiver dúvida sobre qual código usar, procure seu contador."
    ]
  },
  {
    "codigo": 612,
    "descricao": "Rejeição: GTIN da unidade tributável (cEANTrib) inválido",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O código de barras (GTIN) da unidade tributável de um item é inválido, pois o dígito verificador não confere. É semelhante ao 611, mas no campo da unidade tributável.",
    "passos": [
      "Identifique o item indicado na mensagem (nItem) e confira os códigos de barras do produto.",
      "Corrija o código ou, se não houver GTIN oficial, deixe como \"SEM GTIN\" (conforme o sistema).",
      "Se persistir, contate o suporte do seu sistema."
    ]
  },
  {
    "codigo": 629,
    "descricao": "Rejeição: Valor do Produto difere do produto Valor Unitário de Comercialização e Quantidade Comercial",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "Em um item, o valor total do produto não é igual ao preço unitário multiplicado pela quantidade. Costuma ser problema de arredondamento ou de casas decimais. Esta validação é aplicada a critério da SEFAZ.",
    "passos": [
      "Identifique o item indicado na mensagem (nItem) e confira quantidade e preço unitário.",
      "Evite quantidades ou preços com mais casas decimais do que o sistema aceita.",
      "Se o cálculo parecer certo e o erro persistir, contate o suporte do seu sistema."
    ]
  },
  {
    "codigo": 703,
    "descricao": "Rejeição: Data-Hora de Emissão posterior ao horário de recebimento",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "A data e a hora da nota estão à frente do horário em que a SEFAZ a recebeu (é tolerado um adiantamento de até 5 minutos). Normalmente o relógio do computador está adiantado.",
    "passos": [
      "Acerte a data, a hora e o fuso do computador e ative a sincronização automática de horário.",
      "Tente emitir a nota novamente.",
      "Se persistir, contate o suporte do seu sistema."
    ]
  },
  {
    "codigo": 704,
    "descricao": "Rejeição: NFC-e com Data-Hora de emissão atrasada",
    "tipo": "rejeicao",
    "modelos": [
      "65"
    ],
    "significado": "A NFC-e chegou à SEFAZ com mais de 5 minutos de atraso em relação à data e hora de emissão. Normalmente o relógio do computador está atrasado ou houve demora na transmissão.",
    "passos": [
      "Acerte a data, a hora e o fuso do computador e ative a sincronização automática de horário.",
      "Verifique a conexão com a internet e tente emitir novamente.",
      "Se a venda foi feita sem internet, consulte o suporte do seu sistema sobre o procedimento de contingência."
    ]
  },
  {
    "codigo": 777,
    "descricao": "Rejeição: Obrigatória a informação do NCM completo (redação dada pela NT 2013/005 v 1.20)",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O NCM de um item está incompleto. É exigido o NCM completo, com 8 dígitos.",
    "passos": [
      "Identifique o item indicado na mensagem (nItem) e abra o cadastro do produto.",
      "Informe o NCM completo, com 8 dígitos.",
      "Em caso de dúvida sobre qual NCM usar, procure seu contador."
    ]
  },
  {
    "codigo": 778,
    "descricao": "Rejeição: Informado NCM inexistente",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "O NCM informado para um item não existe na tabela oficial. Normalmente é um erro de digitação ou um código desatualizado.",
    "passos": [
      "Identifique o item indicado na mensagem (nItem) e confira o NCM no cadastro do produto.",
      "Corrija para um NCM válido da tabela vigente.",
      "A classificação correta do produto é questão fiscal: em dúvida, procure seu contador."
    ]
  },
  {
    "codigo": 999,
    "descricao": "Rejeição: Erro não catalogado (informar a mensagem de erro capturado no tratamento da exceção)",
    "tipo": "rejeicao",
    "modelos": [
      "55",
      "65"
    ],
    "significado": "A SEFAZ encontrou um erro inesperado que não tem código próprio. A mensagem que acompanha o código costuma trazer mais detalhes do que ocorreu.",
    "passos": [
      "Leia a mensagem completa que acompanha o código 999; ela pode indicar o problema.",
      "Tente transmitir novamente após alguns minutos, pois pode ser instabilidade momentânea.",
      "Se persistir, contate o suporte do seu sistema informando a mensagem completa."
    ]
  }
];
