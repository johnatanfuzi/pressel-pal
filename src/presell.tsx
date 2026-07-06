import antesDepois from "@/assets/antes-depois.jpg";
import { CTA_LINK } from "./links";

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={CTA_LINK}
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
          <CtaButton label="Clique para acessar" />
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

        <section className="mt-12">
          <h2 className="text-center text-lg sm:text-2xl font-extrabold uppercase">
            O que você vai receber:
          </h2>
          <ul className="mt-6 space-y-3">
            {[
              "Guia diário de oração com direção bíblica para os 21 dias",
              "Orações específicas para o coração, mente e caminhos do seu filho",
              "Método simples de jejum que qualquer mãe consegue seguir",
              "Declarações proféticas para libertar seu filho de vícios e más companhias",
              "Testemunhos reais de mães que viram seus filhos transformados",
            ].map((item) => (
              <li key={item} className="flex gap-3 rounded-xl bg-card p-4 shadow-sm ring-1 ring-black/5">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-highlight/15 text-highlight font-bold">
                  ✓
                </span>
                <span className="text-[15px] sm:text-base leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="text-center text-lg sm:text-2xl font-extrabold uppercase">
            Mães que já viveram o milagre:
          </h2>
          <div className="mt-6 space-y-4">
            {[
              { nome: "Marta, 54 anos", texto: "Meu filho estava afastado da igreja há 8 anos. No 17º dia de oração ele me ligou chorando pedindo pra voltar pra casa. Deus é fiel!" },
              { nome: "Regina, 47 anos", texto: "Eu não sabia mais o que fazer. Comecei a orar do jeito que o guia ensina e em 3 semanas meu filho largou as drogas. Foi um milagre." },
              { nome: "Cláudia, 61 anos", texto: "Achei que era só mais um material. Mas a forma de orar com direção me deu paz. Meu filho voltou a conversar comigo depois de 2 anos." },
            ].map((d) => (
              <blockquote key={d.nome} className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-black/5">
                <div className="text-gold text-sm">★★★★★</div>
                <p className="mt-2 font-serif text-lg italic leading-snug text-foreground/85">"{d.texto}"</p>
                <footer className="mt-3 text-sm font-semibold text-foreground/70">— {d.nome}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-2xl border-2 border-dashed border-gold/60 bg-gold/5 p-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-2xl">🛡️</div>
          <h3 className="mt-3 text-lg font-extrabold uppercase">Garantia incondicional de 7 dias</h3>
          <p className="mt-2 text-sm leading-relaxed text-foreground/75">
            Se por qualquer motivo você não sentir que este material vai transformar sua oração, devolvemos 100% do seu investimento. Sem perguntas.
          </p>
        </section>

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
            <CtaButton label="Quero começar agora" />
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
