export function TituloSecao({
  titulo,
  texto,
  escuro = false,
  id,
  centro = false,
}: {
  /** Mantido por compatibilidade; o título fala por si */
  rotulo?: string;
  titulo: string;
  texto?: string;
  escuro?: boolean;
  id?: string;
  centro?: boolean;
}) {
  return (
    <div className={centro ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2
        id={id}
        className={`text-[2.1rem] font-extrabold tracking-[-0.03em] sm:text-[2.75rem] ${escuro ? "text-on-brand" : "text-ink"}`}
      >
        {titulo}
      </h2>
      {texto && (
        <p className={`mt-4 text-lg leading-relaxed sm:text-xl ${escuro ? "text-on-brand-muted" : "text-muted"}`}>{texto}</p>
      )}
    </div>
  );
}
