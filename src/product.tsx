import antesDepois from "@/assets/antes-depois.jpg";
import { getCtaLink } from "./links";

function CtaButton({ label }: { label: string }) {
  return (
    <a
      href={getCtaLink()}
      className="group relative block w-full overflow-hidden rounded-2xl bg-cta px-6 py-5 text-center text-base sm:text-xl font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-hover active:translate-y-0"
    >
      <span className="relative z-10">{label} ✅</span>
      <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[400%]" />
    </a>
  );
}

export function Product() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground text-background text-center text-xs sm:text-sm font-semibold uppercase tracking-wider py-2 px-4">
        🔥 Oferta especial — vagas limitadas
      </div>

      <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
        <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
          ✦ Devocional Filho de Volta ✦
        </p>

        <h1 className="mt-5 text-center text-[26px] sm:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight">
          O plano de 21 dias que traz{" "}
          <span className="relative inline-block text-highlight">
            seu filho de volta para casa
            <span aria-hidden className="absolute left-0 right-0 -bottom-1 h-[3px] bg-highlight/70" />
          </span>
        </h1>

        <p className="mt-6 text-center font-serif text-2xl sm:text-3xl italic leading-snug text-foreground/80">
          Um passo por dia. Um milagre de cada vez.
        </p>

        <figure className="mt-8">
          <div className="overflow-hidden rounded-2xl shadow-soft ring-1 ring-black/5">
            <img
              src={antesDepois}
              alt="Devocional Filho de Volta — mãe em oração pelo filho"
              width={1280}
              height={768}
              className="block h-auto w-full"
            />
          </div>
        </figure>

        <div className="mt-8 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground/50">
            De <span className="line-through">R$ 97,00</span> por apenas
          </p>
          <p className="mt-2 text-5xl sm:text-6xl font-extrabold text-highlight">
            R$ 19,90
          </p>
          <p className="mt-1 text-sm text-foreground/60">à vista • acesso imediato</p>
        </div>

        <div className="mt-8">
          <CtaButton label="Quero o meu devocional" />
          <p className="mt-3 text-center text-xs text-foreground/60">
            🔒 Compra 100% segura • Acesso em até 2 minutos por e-mail
          </p>
        </div>

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
              "Bônus: cronograma imprimível dos 21 dias",
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
            Comece hoje a orar com direção pelo seu filho
          </h3>
          <div className="mt-6">
            <CtaButton label="Quero o meu devocional" />
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
