const ABRE = 8;
const FECHA = 18;
const DIAS = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

type Agora = { diaSemana: number; hora: number; minuto: number };

/** Hora atual em São Paulo, independente do fuso do visitante. */
export function agoraEmSaoPaulo(data = new Date()): Agora {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(data);
  const valor = (tipo: string) => partes.find((p) => p.type === tipo)?.value ?? "";
  const diaSemana = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(valor("weekday"));
  return { diaSemana, hora: Number(valor("hour")), minuto: Number(valor("minute")) };
}

export type Status = { aberto: boolean; texto: string };

export function statusAtendimento(agora: Agora = agoraEmSaoPaulo()): Status {
  const diaUtil = agora.diaSemana >= 1 && agora.diaSemana <= 5;
  if (diaUtil && agora.hora >= ABRE && agora.hora < FECHA) {
    return { aberto: true, texto: `Atendimento aberto até as ${FECHA}h` };
  }
  if (diaUtil && agora.hora < ABRE) {
    return { aberto: false, texto: `Fechado agora. Abrimos hoje às ${ABRE}h` };
  }
  // Depois das 18h ou no fim de semana: próximo dia útil
  let proximo = (agora.diaSemana + 1) % 7;
  while (proximo === 0 || proximo === 6) proximo = (proximo + 1) % 7;
  const quando = proximo === (agora.diaSemana + 1) % 7 ? "amanhã" : DIAS[proximo];
  return { aberto: false, texto: `Fechado agora. Voltamos ${quando} às ${ABRE}h` };
}
