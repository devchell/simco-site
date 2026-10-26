/*
  Telas ilustrativas do sistema, desenhadas em HTML. Os dados são exemplos
  de uso de cada segmento e não representam clientes reais.
*/

function Janela({ titulo, children }: { titulo: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-md border border-ink/15 bg-surface shadow-[0_24px_48px_-28px_oklch(0.2_0.05_258/0.45)]">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-navy-deep px-4 py-2.5 text-on-navy">
        <span className="font-mono text-xs tracking-wide">SIMCO ERP · {titulo}</span>
        <span className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-on-navy-muted/40" />
          <span className="size-2.5 rounded-full bg-on-navy-muted/40" />
          <span className="size-2.5 rounded-full bg-signal" />
        </span>
      </div>
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function Campo({ rotulo, valor, destaque = false }: { rotulo: string; valor: string; destaque?: boolean }) {
  return (
    <div className="min-w-0">
      <p className="rotulo text-[0.68rem] text-muted">{rotulo}</p>
      <p
        className={`truncate rounded-sm border px-2.5 py-1.5 text-sm ${
          destaque ? "border-navy bg-navy/5 font-medium" : "border-line bg-paper"
        }`}
      >
        {valor}
      </p>
    </div>
  );
}

function Selo({ children, tom = "neutro" }: { children: React.ReactNode; tom?: "ok" | "alerta" | "neutro" }) {
  const cores = {
    ok: "bg-ok-soft text-ok border-ok/30",
    alerta: "bg-signal/20 text-signal-ink border-signal/50",
    neutro: "bg-sunken text-muted border-line",
  };
  return <span className={`inline-flex items-center rounded-sm border px-2 py-0.5 text-xs font-medium ${cores[tom]}`}>{children}</span>;
}

const moeda = (v: number) => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function TelaAutopecas() {
  const pecas = [
    { cod: "PF-2231", desc: "Pastilha de freio dianteira", marca: "Marca A", est: 14, preco: 89.9 },
    { cod: "DF-0418", desc: "Disco de freio ventilado (par)", marca: "Marca B", est: 6, preco: 312.0 },
    { cod: "FO-1102", desc: "Filtro de óleo", marca: "Marca C", est: 41, preco: 24.5 },
    { cod: "VI-0890", desc: "Vela de ignição (jogo c/ 4)", marca: "Marca A", est: 0, preco: 118.0 },
  ];
  return (
    <Janela titulo="Venda balcão">
      <div className="grid grid-cols-3 gap-2.5">
        <Campo rotulo="Montadora" valor="Volkswagen" />
        <Campo rotulo="Modelo" valor="Gol 1.0 2015" destaque />
        <Campo rotulo="Motor" valor="1.0 12V" />
      </div>
      <p className="mt-4 mb-2 text-xs text-muted">4 peças compatíveis com a aplicação</p>
      <div className="overflow-hidden rounded-sm border border-line">
        <table className="w-full text-left text-sm">
          <thead className="bg-sunken text-xs text-muted">
            <tr>
              <th className="px-2.5 py-1.5 font-medium">Código</th>
              <th className="px-2.5 py-1.5 font-medium">Descrição</th>
              <th className="hidden px-2.5 py-1.5 text-right font-medium sm:table-cell">Estoque</th>
              <th className="px-2.5 py-1.5 text-right font-medium">Preço</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line tabular-nums">
            {pecas.map((p, i) => (
              <tr key={p.cod} className={i === 0 ? "bg-signal/12" : ""}>
                <td className="px-2.5 py-2 font-mono text-xs">{p.cod}</td>
                <td className="px-2.5 py-2">
                  {p.desc}
                  {p.est === 0 && <span className="ml-1.5 text-xs text-signal-ink">· ver similar</span>}
                </td>
                <td className="hidden px-2.5 py-2 text-right sm:table-cell">{p.est}</td>
                <td className="px-2.5 py-2 text-right">{moeda(p.preco)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs text-muted">F3 pesquisa · F5 similares · F8 cotação</span>
        <Selo tom="ok">Cotação enviada ao cliente</Selo>
      </div>
    </Janela>
  );
}

function PlacaMercosul({ placa }: { placa: string }) {
  return (
    <div className="inline-grid w-36 overflow-hidden rounded-[3px] border-2 border-ink bg-white text-center" aria-label={`Placa ${placa}`}>
      <span className="bg-[#1d4fa0] py-0.5 font-mono text-[0.55rem] font-medium tracking-[0.2em] text-white">BRASIL</span>
      <span className="py-1 font-mono text-xl font-medium tracking-[0.12em] text-ink">{placa}</span>
    </div>
  );
}

export function TelaOficina() {
  const itens = [
    { tipo: "Serviço", desc: "Troca de pastilhas dianteiras", resp: "Marcos", valor: 120 },
    { tipo: "Peça", desc: "Pastilha de freio dianteira", resp: "", valor: 89.9 },
    { tipo: "Serviço", desc: "Alinhamento e balanceamento", resp: "Rafael", valor: 140 },
  ];
  const total = itens.reduce((s, i) => s + i.valor, 0);
  return (
    <Janela titulo="Ordem de serviço">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="rotulo text-[0.68rem] text-muted">OS nº</p>
          <p className="font-mono text-2xl font-medium tabular-nums">004821</p>
        </div>
        <PlacaMercosul placa="BRA2E19" />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2.5">
        <Campo rotulo="Veículo" valor="Fiat Strada 1.4 · prata" />
        <Campo rotulo="Última visita" valor="12/03 · revisão 40 mil km" />
      </div>
      <ul className="mt-4 divide-y divide-line rounded-sm border border-line text-sm">
        {itens.map((i) => (
          <li key={i.desc} className="flex items-center justify-between gap-3 px-2.5 py-2">
            <span className="min-w-0">
              <span className="mr-2 font-mono text-[0.7rem] uppercase text-muted">{i.tipo}</span>
              {i.desc}
              {i.resp && <span className="text-muted"> · {i.resp}</span>}
            </span>
            <span className="shrink-0 tabular-nums">{moeda(i.valor)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
        <Selo tom="alerta">Aguardando aprovação do cliente</Selo>
        <span className="font-semibold tabular-nums">Total {moeda(total)}</span>
      </div>
    </Janela>
  );
}

export function TelaComercio() {
  const itens = [
    { desc: "Fita isolante 19mm x 20m", qtd: 3, un: 8.9 },
    { desc: "Disjuntor bipolar 32A", qtd: 2, un: 46.0 },
    { desc: "Cabo flexível 2,5mm (m)", qtd: 25, un: 3.2 },
  ];
  const total = itens.reduce((s, i) => s + i.qtd * i.un, 0);
  return (
    <Janela titulo="Pedido de venda">
      <ul className="divide-y divide-line text-sm">
        {itens.map((i) => (
          <li key={i.desc} className="grid grid-cols-[1fr_auto] gap-x-3 py-2">
            <span>{i.desc}</span>
            <span className="text-right tabular-nums">{moeda(i.qtd * i.un)}</span>
            <span className="text-xs text-muted tabular-nums">
              {i.qtd} × {moeda(i.un)}
            </span>
          </li>
        ))}
      </ul>
      <div className="mt-3 flex items-baseline justify-between border-t-2 border-ink pt-3">
        <span className="font-semibold">Total</span>
        <span className="font-display text-2xl font-bold tabular-nums [font-stretch:110%]">{moeda(total)}</span>
      </div>
      <div className="mt-4 rounded-sm border border-ok/30 bg-ok-soft p-3">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-ok">NFC-e autorizada</span>
          <span className="font-mono text-xs text-ok">cStat 100</span>
        </div>
        <p className="mt-1.5 break-all font-mono text-[0.68rem] leading-relaxed text-ink/70">
          3526 1007 3151 1400 0170 6500 1000 0482 1910 0048 2193
        </p>
      </div>
    </Janela>
  );
}

export function TelaCilindros() {
  const linhas = [
    { serie: "OX-77812", item: "Oxigênio 10 m³", local: "Serralheria do bairro", desde: "12/08", st: "Locado" },
    { serie: "AC-30455", item: "Acetileno 9 kg", local: "Pátio", desde: "03/09", st: "Disponível" },
    { serie: "CO-11930", item: "CO₂ 25 kg", local: "Fornecedor (sublocado)", desde: "21/07", st: "Terceiro" },
  ];
  const tom = (st: string) => (st === "Locado" ? "alerta" : st === "Disponível" ? "ok" : "neutro") as "ok" | "alerta" | "neutro";
  return (
    <Janela titulo="Rastreio de equipamentos">
      <div className="grid grid-cols-2 gap-2.5">
        <Campo rotulo="Nº de série ou patrimônio" valor="OX-77812" destaque />
        <Campo rotulo="Romaneio" valor="Pedido 18.204" />
      </div>
      <ul className="mt-4 grid gap-2">
        {linhas.map((l) => (
          <li key={l.serie} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-sm border border-line px-3 py-2 text-sm">
            <span className="font-mono text-xs">{l.serie}</span>
            <span className="min-w-0">
              <span className="block truncate">{l.item}</span>
              <span className="block truncate text-xs text-muted">
                {l.local} · desde {l.desde}
              </span>
            </span>
            <Selo tom={tom(l.st)}>{l.st}</Selo>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">Locação de agosto: 38 equipamentos faturados, cobrança enviada a 21 clientes.</p>
    </Janela>
  );
}

export function TelaRestaurante() {
  const pratos = [
    { nome: "Prato feito do dia", preco: 32.0 },
    { nome: "Parmegiana com fritas", preco: 48.0 },
    { nome: "Suco natural 500 ml", preco: 12.0 },
  ];
  return (
    <div className="grid items-end gap-5 sm:grid-cols-[minmax(0,15rem)_1fr]">
      <div className="mx-auto w-full max-w-[15rem] rounded-[1.6rem] border-[6px] border-navy-deep bg-surface p-3 shadow-[0_24px_48px_-28px_oklch(0.2_0.05_258/0.45)]">
        <div className="rounded-[1rem] bg-paper p-3">
          <p className="font-display text-base font-bold [font-stretch:110%]">Cantina da Praça</p>
          <p className="text-[0.7rem] text-muted">Cardápio digital · aberto agora</p>
          <ul className="mt-3 grid gap-2">
            {pratos.map((p, i) => (
              <li key={p.nome} className="flex items-center justify-between gap-2 rounded-sm bg-surface px-2.5 py-2 text-[0.78rem]">
                <span>{p.nome}</span>
                <span className={`grid size-6 place-items-center rounded-sm text-xs font-bold ${i === 1 ? "bg-signal" : "bg-sunken"}`}>
                  {i === 1 ? "1" : "+"}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-3 rounded-sm bg-[#1f8f4e] py-2 text-center text-[0.78rem] font-semibold text-white">
            Enviar pedido pelo WhatsApp
          </p>
        </div>
      </div>
      <div className="rounded-md border border-line bg-surface p-4 text-sm">
        <p className="rotulo text-[0.68rem] text-muted">Gestor de pedidos</p>
        <p className="mt-1 font-semibold">Pedido #0391 · Mesa 7</p>
        <p className="text-muted">1× Parmegiana com fritas</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Selo tom="ok">Comanda impressa</Selo>
          <Selo>Sem comissão por venda</Selo>
        </div>
      </div>
    </div>
  );
}
