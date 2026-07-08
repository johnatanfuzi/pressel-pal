import antesDepois from "@/assets/antes-depois.jpg";
import { getCtaLink } from "./links";

export function Presell() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">
      <div className="mx-auto w-full max-w-xl px-6 py-10 sm:py-14 flex-1">
        {/* Headline */}
        <h1 className="text-center text-2xl sm:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight">
          Deus vai usar sua oração{" "}
          <span className="text-[#22c55e] underline decoration-[3px] underline-offset-[6px]">
            para tocar o coração do seu filho
          </span>
        </h1>

        {/* Subheadline */}
        <p className="mt-8 text-center text-lg sm:text-2xl font-extrabold uppercase leading-snug tracking-tight">
          Ore com direção por 21 dias{" "}
          <span className="text-[#22c55e]">
            e veja o seu filho transformado por Deus
          </span>{" "}
          através da oração e do jejum
        </p>

        {/* Imagem antes/depois */}
        <figure className="mt-8 overflow-hidden rounded-3xl">
          <img
            src={antesDepois}
            alt="Antes e depois — mãe vendo seu filho transformado por Deus"
            width={1280}
            height={768}
            className="block h-auto w-full"
          />
        </figure>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={getCtaLink()}
            className="group relative block w-full overflow-hidden rounded-full bg-[#22c55e] px-6 py-6 text-center text-lg sm:text-2xl font-bold uppercase tracking-wide text-white shadow-[0_10px_30px_-8px_rgba(34,197,94,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16a34a] active:translate-y-0"
          >
            <span className="relative z-10">Clique para acessar ✅</span>
            <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[500%]" />
          </a>
        </div>
      </div>

      {/* Rodapé */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-xl px-6 py-5 text-center text-xs text-black/50">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href="#" className="hover:text-black transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-black transition-colors">Termos de Uso</a>
          </nav>
          <p className="mt-2 text-[11px] text-black/40">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
