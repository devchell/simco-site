export function TituloSecao({
  rotulo,
  titulo,
  texto,
  escuro = false,
  id,
}: {
  rotulo: string;
  titulo: string;
  texto?: string;
  escuro?: boolean;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className={`rotulo ${escuro ? "text-signal" : "text-signal-ink"}`}>{rotulo}</p>
      <h2 id={id} className={`mt-3 text-[2rem] font-bold sm:text-[2.5rem] ${escuro ? "text-on-navy" : ""}`}>
        {titulo}
      </h2>
      {texto && <p className={`mt-4 text-lg ${escuro ? "text-on-navy-muted" : "text-ink/70"}`}>{texto}</p>}
    </div>
  );
}
