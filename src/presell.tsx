import maeOrando from "@/assets/mae-orando.jpg";
import bibliaLuz from "@/assets/biblia-luz.jpg";
import { getCtaLink } from "./links";

function CtaButton({ label = "Saiba mais" }: { label?: string }) {
  return (
    <div className="text-center">
      <a
        href={getCtaLink()}
        className="group relative inline-block w-full sm:w-auto overflow-hidden rounded-full bg-gold px-10 py-5 text-center text-lg sm:text-xl font-bold uppercase tracking-wide text-navy shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:translate-y-0"
      >
        <span className="relative z-10">{label} →</span>
        <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 blur-md transition-transform duration-700 group-hover:translate-x-[500%]" />
      </a>
    </div>
  );
}

const oracoes = [
  {
    titulo: "1. Ore pela proteção",
    texto:
      "Peça a Deus que envie Seus anjos para guardar seu filho em todos os caminhos — na escola, no trabalho, nas ruas e no descanso.",
  },
  {
    titulo: "2. Ore pelas amizades",
    texto:
      "As companhias moldam o coração. Ore para que Deus afaste as más influências e aproxime pessoas que somem para o bem.",
  },
  {
    titulo: "3. Ore pelas escolhas",
    texto:
      "Cada decisão constrói ou destrói. Interceda para que seu filho tenha sabedoria e discernimento diante das encruzilhadas da vida.",
  },
  {
    titulo: "4. Ore pela fé",
    texto:
      "Peça que o Espírito Santo desperte no coração do seu filho a sede de conhecer a Deus de verdade — não por obrigação, mas por amor.",
  },
  {
    titulo: "5. Ore pela saúde emocional",
    texto:
      "Ansiedade, tristeza e medo são reais. Ore por paz, cura interior e por uma mente saudável, cheia da presença de Deus.",
  },
];

export function Presell() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Faixa superior */}
      <div className="bg-navy text-cream text-center text-xs sm:text-sm font-semibold tracking-wide py-3 px-4">
        ✦ Um guia de fé para mães que oram pelos filhos ✦
      </div>

      <article className="mx-auto max-w-3xl px-5 py-10 sm:py-16">
        {/* Cabeçalho */}
        <header className="text-center">
          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.3em] text-gold">
            Guia de Oração
          </p>
          <h1 className="mt-5 font-serif text-4xl sm:text-6xl leading-[1.05] text-navy">
            A Oração de Uma Mãe{" "}
            <em className="not-italic text-gold">Nunca Volta Vazia</em>
          </h1>
          <p className="mt-6 text-lg sm:text-xl leading-relaxed text-foreground/75 max-w-2xl mx-auto">
            Descubra como transformar a sua fé em um escudo diário sobre a vida
            do seu filho — mesmo quando parece que ele está longe demais.
          </p>
        </header>

        {/* Imagem principal */}
        <figure className="mt-10 overflow-hidden rounded-3xl shadow-soft ring-1 ring-navy/10">
          <img
            src={maeOrando}
            alt="Mãe cristã orando com fé pelo seu filho"
            width={1024}
            height={1024}
            className="block h-auto w-full"
          />
        </figure>

        {/* Introdução */}
        <section className="mt-12 space-y-5 text-[17px] sm:text-lg leading-relaxed text-foreground/85">
          <p>
            Se você chegou até aqui, provavelmente carrega no peito uma dor que
            só uma mãe conhece: o medo silencioso pelo caminho do seu filho. As
            noites em claro, as lágrimas escondidas, aquela oração feita entre
            um suspiro e outro… tudo isso Deus vê.
          </p>
          <p>
            Você não está sozinha. Milhares de mães cristãs, em todos os cantos
            do mundo, dobram os joelhos hoje pelos mesmos motivos que você.
            Algumas oram por um filho pequeno que ainda engatinha na fé, outras
            por um filho adulto que se afastou de casa. E Deus escuta cada uma
            delas.
          </p>
          <p>
            A Palavra é clara: <em>“a oração de um justo pode muito em seus
            efeitos”</em> (Tiago 5:16). Sua oração — feita com fé, mesmo
            trêmula — move o Céu. Ela não volta vazia.
          </p>
        </section>

        {/* Por que orar */}
        <section className="mt-14">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center">
            Por que orar pelos seus filhos?
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gold" />
          <ul className="mt-8 space-y-4">
            {[
              {
                t: "Porque nenhum coração é impossível para Deus",
                d: "O mesmo Deus que transformou Saulo pode alcançar o seu filho, onde quer que ele esteja.",
              },
              {
                t: "Porque a intercessão materna tem autoridade espiritual",
                d: "A Bíblia mostra mães como Ana e Mônica cujas orações mudaram gerações inteiras.",
              },
              {
                t: "Porque a oração cria uma cobertura invisível",
                d: "Enquanto você ora, anjos são enviados, portas se fecham e caminhos se abrem — mesmo que você não veja.",
              },
              {
                t: "Porque Deus prometeu — e Ele cumpre",
                d: "“Instrui o menino no caminho em que deve andar, e ainda quando for velho não se desviará dele.” (Provérbios 22:6)",
              },
            ].map((item) => (
              <li
                key={item.t}
                className="flex gap-4 rounded-2xl bg-card p-5 sm:p-6 shadow-sm ring-1 ring-navy/10"
              >
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold font-bold">
                  ✦
                </span>
                <div>
                  <h3 className="font-semibold text-navy text-lg leading-snug">
                    {item.t}
                  </h3>
                  <p className="mt-1 text-foreground/75 leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* 5 formas */}
        <section className="mt-16">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy text-center">
            5 formas de orar pelo seu filho hoje
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gold" />
          <p className="mt-4 text-center text-foreground/70 max-w-xl mx-auto">
            Comece por uma. Ou por todas. O importante é começar.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {oracoes.map((o) => (
              <div
                key={o.titulo}
                className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-navy/10 transition-shadow hover:shadow-soft"
              >
                <h3 className="font-serif text-2xl text-navy">{o.titulo}</h3>
                <p className="mt-3 text-foreground/80 leading-relaxed">
                  {o.texto}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Citação bíblica */}
        <section className="mt-16">
          <div className="relative overflow-hidden rounded-3xl bg-navy text-cream p-8 sm:p-12 text-center shadow-soft">
            <div className="absolute inset-0 opacity-20">
              <img
                src={bibliaLuz}
                alt=""
                width={1024}
                height={1024}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative">
              <p className="text-gold text-xs font-bold uppercase tracking-[0.3em]">
                Palavra de Deus
              </p>
              <blockquote className="mt-5 font-serif text-2xl sm:text-3xl italic leading-snug">
                “Eu contenderei com os que contendem contigo,
                <br className="hidden sm:block" />
                e os teus filhos, eu mesmo os salvarei.”
              </blockquote>
              <footer className="mt-6 text-sm font-semibold tracking-wide text-gold">
                — Isaías 49:25
              </footer>
            </div>
          </div>
        </section>

        {/* Encerramento */}
        <section className="mt-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-navy">
            Comece hoje. Comece agora.
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-20 bg-gold" />
          <div className="mt-6 space-y-4 text-[17px] sm:text-lg leading-relaxed text-foreground/85 max-w-2xl mx-auto">
            <p>
              Você não precisa de palavras bonitas. Não precisa de um lugar
              especial. Precisa apenas de um coração disposto e de alguns
              minutos por dia diante de Deus, com o nome do seu filho nos
              lábios.
            </p>
            <p>
              Reserve um horário — pode ser cedo, antes que a casa acorde, ou à
              noite, antes de dormir. Abra a Bíblia. Chame o nome do seu filho.
              E confie: <strong className="text-navy">Deus está trabalhando,
              mesmo quando você não vê.</strong>
            </p>
          </div>

          <div className="mt-10">
            <CtaButton label="Saiba mais" />
            <p className="mt-4 text-sm text-foreground/60">
              Descubra o guia completo para orar com direção pelos seus filhos.
            </p>
          </div>
        </section>
      </article>

      {/* Rodapé */}
      <footer className="border-t border-navy/10 bg-cream/50">
        <div className="mx-auto max-w-3xl px-5 py-8 text-center text-xs sm:text-sm text-foreground/60">
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
            <a href="#" className="hover:text-navy transition-colors">
              Contato
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
