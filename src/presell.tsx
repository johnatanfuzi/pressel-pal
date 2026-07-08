import maeOrando from "@/assets/mae-orando.jpg";
import { getCtaLink } from "./links";

const oracoes = [
  { titulo: "Pela proteção", texto: "Que Deus envie Seus anjos para guardar seu filho em todos os caminhos." },
  { titulo: "Pelas escolhas", texto: "Que ele tenha sabedoria e discernimento diante das decisões da vida." },
  { titulo: "Pela fé", texto: "Que o Espírito Santo desperte no coração dele o desejo de conhecer a Deus." },
];

export function Presell() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={maeOrando}
            alt="Mãe cristã orando pelo seu filho"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/75 to-navy/95" />
        </div>
        <div className="relative mx-auto max-w-2xl px-6 py-16 sm:py-20 text-center text-cream">
          <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-gold">
            ✦ Guia de Fé para Mães ✦
          </p>
          <h1 className="mt-5 font-serif text-4xl sm:text-5xl leading-[1.05]">
            A Oração de Uma Mãe{" "}
            <em className="not-italic text-gold">Nunca Volta Vazia</em>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-cream/85 max-w-lg mx-auto">
            Transforme sua fé em um escudo diário sobre a vida do seu filho.
          </p>
        </div>
      </section>

      <article className="mx-auto w-full max-w-3xl px-6 py-10 sm:py-14 flex-1">
        {/* 3 formas de orar */}
        <div className="grid gap-3 sm:grid-cols-3">
          {oracoes.map((o) => (
            <div
              key={o.titulo}
              className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-navy/10 text-center"
            >
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold">
                ✦
              </div>
              <h3 className="mt-3 font-serif text-xl text-navy">{o.titulo}</h3>
              <p className="mt-2 text-[14px] text-foreground/75 leading-relaxed">
                {o.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Citação */}
        <blockquote className="mt-10 rounded-2xl bg-navy text-cream p-6 sm:p-8 text-center shadow-soft">
          <p className="font-serif text-xl sm:text-2xl italic leading-snug">
            “Eu contenderei com os que contendem contigo, e os teus filhos, eu mesmo os salvarei.”
          </p>
          <footer className="mt-3 text-xs font-semibold tracking-wide text-gold">
            — Isaías 49:25
          </footer>
        </blockquote>

        {/* CTA */}
        <div className="mt-10 text-center">
          <a
            href={getCtaLink()}
            className="group relative inline-block overflow-hidden rounded-full bg-gold px-12 py-4 text-lg font-bold uppercase tracking-wide text-navy shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110"
          >
            <span className="relative z-10">Saiba mais →</span>
            <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[500%]" />
          </a>
        </div>
      </article>

      {/* Rodapé */}
      <footer className="border-t border-navy/10 bg-cream/50">
        <div className="mx-auto max-w-3xl px-6 py-5 text-center text-xs text-foreground/60">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href="#" className="hover:text-navy transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-navy transition-colors">Termos de Uso</a>
          </nav>
          <p className="mt-2 text-[11px] text-foreground/40">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
