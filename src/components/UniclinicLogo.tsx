/**
 * LOGO OFICIAL DO UNICLINIC
 *
 * Quando o arquivo oficial for enviado:
 * 1. salve a imagem em src/assets/ (ex.: uniclinic-logo.svg ou .png)
 * 2. importe aqui:  import logo from "@/assets/uniclinic-logo.svg";
 * 3. troque o bloco marcado abaixo por:
 *      <img src={logo} alt="Uniclinic" width={180} height={40} className="h-9 w-auto" />
 *
 * Nao alterar cores, formato ou proporcao da logo oficial.
 * IMPORTANTE: o nome e uma unica palavra ("Uniclinic"), nunca separado.
 */
export function UniclinicLogo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "light" ? "text-white" : "text-primary";

  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xl font-extrabold leading-none tracking-[-0.02em] ${text}`}
      aria-label="Uniclinic"
    >
      {/* SUBSTITUIR POR <img> COM A LOGO OFICIAL */}
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-xl bg-green/15 text-green ring-1 ring-green/25"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={2.4}>
          <path d="M10 3h4v7h7v4h-7v7h-4v-7H3v-4h7z" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="whitespace-nowrap">Uniclinic</span>
    </span>
  );
}
