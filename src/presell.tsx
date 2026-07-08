import maeOrando from "@/assets/mae-orando.jpg";
import { getCtaLink } from "./links";

const oracoes = [
  {
    titulo: "Pela proteção",
    texto:
      "Peça a Deus que envie Seus anjos para guardar seu filho em todos os caminhos, dia e noite.",
  },
  {
    titulo: "Pelas escolhas",
    texto:
      "Interceda para que ele tenha sabedoria e discernimento diante das decisões da vida.",
  },
  {
    titulo: "Pela fé",
    texto:
      "Ore para que o Espírito Santo desperte no coração do seu filho o desejo de conhecer a Deus.",
  },
];

export function Presell() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero com imagem de fundo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={maeOrando}
            alt="Mãe cristã orando pelo seu filho"
            width={1024}
            height={1024}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/85 via-navy/70 to-navy/95" />
        </div>

        <div className="relative mx-auto max-w-2xl px-6 py-20 sm:py-28 text-center text-cream">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold">
            ✦ Guia de Fé para Mães ✦
          </p>
          <h1 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1.05]">
            A Oração de Uma Mãe{" "}
            <em className="not-italic text-gold">Nunca Volta Vazia</em>
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-cream/85 max-w-xl mx-auto">
            Descubra como transformar a sua fé em um escudo diário sobre a vida
            do seu filho.
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-6 py-14 sm:py-20">
        {/* Acolhimento */}
        <p className="text-center text-[17px] sm:text-lg leading-relaxed text-foreground/85 max-w-2xl mx-auto">
          Se você carrega no peito o medo silencioso pelo caminho do seu filho,
          saiba que <strong className="text-navy">você não está sozinha</strong>.
          Milhares de mães dobram os joelhos hoje pelo mesmo motivo — e Deus
          escuta cada uma delas.
        </p>

        {/* 3 formas de orar */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center">
            3 formas de orar pelo seu filho hoje
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gold" />

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {oracoes.map((o) => (
              <div
                key={o.titulo}
                className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-navy/10 text-center transition-shadow hover:shadow-soft"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-gold/20 text-gold text-lg">
                  ✦
                </div>
                <h3 className="mt-4 font-serif text-2xl text-navy">
                  {o.titulo}
                </h3>
                <p className="mt-2 text-foreground/75 leading-relaxed text-[15px]">
                  {o.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Citação bíblica */}
        <section className="mt-14">
          <div className="rounded-3xl bg-navy text-cream p-8 sm:p-10 text-center shadow-soft">
            <p className="text-gold text-[11px] font-bold uppercase tracking-[0.3em]">
              Palavra de Deus
            </p>
            <blockquote className="mt-5 font-serif text-2xl sm:text-3xl italic leading-snug">
              “Eu contenderei com os que contendem contigo,
              e os teus filhos, eu mesmo os salvarei.”
            </blockquote>
            <footer className="mt-5 text-sm font-semibold tracking-wide text-gold">
              — Isaías 49:25
            </footer>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 text-center">
          <a
            href={getCtaLink()}
            className="group relative inline-block overflow-hidden rounded-full bg-gold px-12 py-5 text-lg sm:text-xl font-bold uppercase tracking-wide text-navy shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
          >
            <span className="relative z-10">Saiba mais →</span>
            <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[500%]" />
          </a>
          <p className="mt-4 text-sm text-foreground/60">
            Comece hoje a orar com direção pelo seu filho.
          </p>
        </section>
      </article>

      {/* Rodapé */}
      <footer className="border-t border-navy/10 bg-cream/50">
        <div className="mx-auto max-w-3xl px-6 py-8 text-center text-xs sm:text-sm text-foreground/60">
          <p className="font-serif text-lg text-navy">
            A Oração de Uma Mãe Nunca Volta Vazia
          </p>
          <nav className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#" className="hover:text-navy transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-navy transition-colors">
              Termos de Uso
            </a>
          </nav>
          <p className="mt-6 text-[11px] text-foreground/40">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
