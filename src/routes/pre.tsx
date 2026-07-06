import { createFileRoute, Link } from "@tanstack/react-router";
import antesDepois from "@/assets/antes-depois.jpg";

export const Route = createFileRoute("/pre")({
  head: () => ({
    meta: [
      { title: "Mãe, existe uma forma de Deus tocar o coração do seu filho" },
      {
        name: "description",
        content:
          "Descubra o método de oração de 21 dias que já ajudou milhares de mães a verem seus filhos transformados por Deus.",
      },
      { property: "og:title", content: "Mãe, existe uma forma de Deus tocar o coração do seu filho" },
      {
        property: "og:description",
        content:
          "Descubra o método de oração de 21 dias que já ajudou milhares de mães a verem seus filhos transformados por Deus.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrePage,
});

function PrePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground text-background text-center text-xs sm:text-sm font-semibold uppercase tracking-wider py-2 px-4">
        📖 Leitura de 2 minutos • Para mães que já tentaram de tudo
      </div>

      <article className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
          ✦ Relato de fé ✦
        </p>

        <h1 className="mt-5 text-center text-[26px] sm:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight">
          A oração que uma mãe fez em silêncio{" "}
          <span className="relative inline-block text-highlight">
            mudou o destino do filho em 21 dias
            <span aria-hidden className="absolute left-0 right-0 -bottom-1 h-[3px] bg-highlight/70" />
          </span>
        </h1>

        <p className="mt-6 text-center font-serif text-2xl sm:text-3xl italic leading-snug text-foreground/80">
          "Eu já não sabia mais o que fazer…"
        </p>

        <figure className="mt-8">
          <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
            <img
              src={antesDepois}
              alt="Mãe orando pelo filho — transformação através da fé"
              width={1280}
              height={768}
              className="block h-auto w-full"
            />
          </div>
        </figure>

        <div className="mt-8 space-y-5 text-[17px] sm:text-lg leading-relaxed text-foreground/85">
          <p>
            Se você é mãe e sente o coração apertado por causa do seu filho —
            seja por causa de <strong>vícios</strong>, <strong>más companhias</strong>,{" "}
            <strong>afastamento da fé</strong> ou <strong>rebeldia</strong> —
            este relato é para você.
          </p>
          <p>
            Milhares de mães em todo o Brasil descobriram nos últimos meses
            uma forma <em>simples</em> e <em>bíblica</em> de orar que tem
            trazido resultados que parecem impossíveis aos olhos humanos.
          </p>
          <p>
            Não é um ritual. Não é promessa vazia. É um{" "}
            <strong className="text-highlight">método de oração com direção</strong>{" "}
            baseado nas Escrituras, feito para ser aplicado por{" "}
            <strong>21 dias consecutivos</strong>.
          </p>
          <p>
            Mães relatam ter visto filhos que estavam afastados há{" "}
            <strong>anos</strong> ligarem pedindo perdão. Filhos que estavam
            nas drogas largarem tudo. Casas inteiras sendo restauradas.
          </p>
          <blockquote className="border-l-4 border-gold pl-5 font-serif text-xl italic text-foreground/85">
            "No 17º dia meu filho me ligou chorando pedindo pra voltar pra casa.
            Depois de 8 anos afastado. Deus é fiel."
            <footer className="mt-2 text-sm not-italic font-sans font-semibold text-gold">
              — Marta, 54 anos
            </footer>
          </blockquote>
          <p>
            O material foi elaborado para qualquer mãe conseguir seguir —
            mesmo que você <strong>nunca tenha feito jejum antes</strong> ou
            sinta que "não sabe orar direito".
          </p>
          <p className="text-center font-serif text-2xl italic text-highlight">
            Deus está pronto para agir. Ele só precisa da sua oração com direção.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border-2 border-highlight/30 bg-highlight/5 p-6 text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-highlight">
            👇 Veja como funciona o método completo
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-extrabold uppercase leading-tight">
            Clique no botão abaixo para conhecer os 21 dias de oração
          </h2>
          <Link
            to="/"
            className="group relative mt-6 block w-full overflow-hidden rounded-2xl bg-cta px-6 py-5 text-center text-base sm:text-xl font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-hover active:translate-y-0"
          >
            <span className="relative z-10">Quero conhecer o método ✅</span>
            <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[400%]" />
          </Link>
          <p className="mt-3 text-xs text-foreground/60">
            🔒 Página segura • Sem cadastro para continuar
          </p>
        </div>

        <footer className="mt-12 text-center text-[11px] leading-relaxed text-foreground/50">
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook. Os resultados apresentados são individuais e podem variar.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </footer>
      </article>
    </main>
  );
}
