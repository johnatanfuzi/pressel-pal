import antesDepois from "@/assets/antes-depois.jpg";

// A pressel encaminha o usuário para a página do produto.
// Basta mudar aqui se o slug da oferta mudar.
const OFFER_HREF = "#/filhodevolta";

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={OFFER_HREF}
      className="group relative block w-full overflow-hidden rounded-2xl bg-cta px-6 py-5 text-center text-base sm:text-xl font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-hover active:translate-y-0"
    >
      <span className="relative z-10">{label} ✅</span>
      <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[400%]" />
    </a>
  );
}

export function Presell() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground text-background text-center text-xs sm:text-sm font-semibold uppercase tracking-wider py-2 px-4">
        ⚠️ Atenção mãe: leia até o final antes de fechar
      </div>

      <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
          ✦ Método aprovado por milhares de mães ✦
        </p>

        <h1 className="mt-5 text-center text-[26px] sm:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight">
          Deus vai usar sua oração{" "}
          <span className="relative inline-block text-highlight">
            para tocar o coração do seu filho
            <span aria-hidden className="absolute left-0 right-0 -bottom-1 h-[3px] bg-highlight/70" />
          </span>
        </h1>

        <p className="mt-6 text-center font-serif text-2xl sm:text-3xl italic leading-snug text-foreground/80">
          Mesmo que hoje pareça impossível…
        </p>

        <p className="mt-8 text-center text-[19px] sm:text-2xl font-extrabold uppercase leading-[1.3]">
          Ore com direção por 21 dias{" "}
          <span className="text-highlight">e veja o seu filho transformado por Deus</span>{" "}
          através da oração e do jejum
        </p>

        <figure className="mt-8">
          <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
            <img
              src={antesDepois}
              alt="Antes e depois: mãe em oração pelo filho, reconciliação através da fé"
              width={1280}
              height={768}
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mt-3 grid grid-cols-2 gap-3 text-center text-[11px] sm:text-xs font-bold uppercase tracking-wider">
            <span className="rounded-full bg-foreground/5 py-1.5 text-foreground/60">Antes</span>
            <span className="rounded-full bg-highlight/10 py-1.5 text-highlight">Depois de 21 dias</span>
          </figcaption>
        </figure>

        <div className="mt-8">
          <CtaButton label="Ver o método completo" />
          <p className="mt-3 text-center text-xs text-foreground/60">
            🔒 Ambiente seguro • Acesso imediato
          </p>
        </div>

        <blockquote className="mt-12 border-l-4 border-gold pl-5 font-serif text-xl sm:text-2xl italic leading-snug text-foreground/85">
          "Tudo quanto pedirdes em oração, crendo, o recebereis."
          <footer className="mt-2 text-sm not-italic font-sans font-semibold text-gold">
            — Mateus 21:22
          </footer>
        </blockquote>

        <section className="mt-12 rounded-2xl bg-foreground p-6 text-background sm:p-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gold">
            ⏳ Últimas vagas com desconto
          </p>
          <h3 className="mt-3 text-center text-xl sm:text-2xl font-extrabold uppercase leading-tight">
            Não deixe mais um dia passar sem orar com direção pelo seu filho
          </h3>
          <p className="mt-3 text-center text-sm text-background/70">
            Cada dia perdido é um dia a mais que o inimigo age. Comece agora.
          </p>
          <div className="mt-6">
            <CtaButton label="Quero conhecer o método" />
          </div>
        </section>

        <footer className="mt-12 text-center text-[11px] leading-relaxed text-foreground/50">
          <p>Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Os resultados apresentados são individuais e podem variar.</p>
          <p className="mt-2">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
