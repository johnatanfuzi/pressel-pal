import { useState } from "react";
import { CTA_LINK } from "./links";

type Question = {
  title: string;
  subtitle?: string;
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    title: "Como está o seu filho hoje?",
    subtitle: "Escolha a opção que mais se aproxima da sua realidade.",
    options: [
      "Afastado da fé / da igreja",
      "Envolvido com vícios ou más companhias",
      "Rebelde, distante de mim",
      "Perdido, sem direção na vida",
    ],
  },
  {
    title: "Há quanto tempo você ora por ele?",
    subtitle: "Seja honesta — não existe resposta errada.",
    options: [
      "Há menos de 6 meses",
      "Entre 1 e 3 anos",
      "Mais de 5 anos",
      "Sinto que já perdi as forças pra orar",
    ],
  },
  {
    title: "Se Deus te desse uma promessa hoje, você creria?",
    subtitle: "A fé é o que move o céu.",
    options: [
      "Sim, com toda a minha força",
      "Quero crer, mas tenho medo",
      "Preciso de uma direção pra orar certo",
    ],
  },
];

export function Quiz() {
  const [step, setStep] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = QUESTIONS.length;
  const progress = finished ? 100 : Math.round((step / total) * 100);

  function select(_idx: number) {
    if (step + 1 < total) {
      setStep(step + 1);
    } else {
      setFinished(true);
    }
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="bg-foreground text-background text-center text-xs sm:text-sm font-semibold uppercase tracking-wider py-2 px-4">
        🙏 Quiz confidencial • 30 segundos
      </div>

      <div className="mx-auto max-w-xl px-5 py-8 sm:py-12">
        <div className="mb-8">
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-wider text-foreground/60">
            <span>{finished ? "Concluído" : `Pergunta ${step + 1} de ${total}`}</span>
            <span>{progress}%</span>
          </div>
          <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-foreground/10">
            <div
              className="h-full rounded-full bg-highlight transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {!finished ? (
          <section key={step} className="animate-in fade-in slide-in-from-right-4 duration-300">
            <p className="text-center text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
              ✦ Pergunta {step + 1} ✦
            </p>
            <h1 className="mt-4 text-center text-[24px] sm:text-3xl font-extrabold uppercase leading-[1.2] tracking-tight">
              {QUESTIONS[step].title}
            </h1>
            {QUESTIONS[step].subtitle && (
              <p className="mt-3 text-center font-serif text-lg sm:text-xl italic text-foreground/70">
                {QUESTIONS[step].subtitle}
              </p>
            )}

            <ul className="mt-8 space-y-3">
              {QUESTIONS[step].options.map((opt, i) => (
                <li key={opt}>
                  <button
                    type="button"
                    onClick={() => select(i)}
                    className="group flex w-full items-center gap-4 rounded-2xl bg-card p-4 text-left shadow-sm ring-1 ring-black/5 transition-all hover:-translate-y-0.5 hover:bg-highlight/5 hover:ring-highlight/40"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-foreground/5 font-bold text-foreground/70 transition-colors group-hover:bg-highlight group-hover:text-cta-foreground">
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span className="text-[15px] sm:text-base font-medium leading-snug">
                      {opt}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section className="animate-in fade-in zoom-in-95 duration-500">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-highlight/15 text-3xl">
                ✅
              </div>
              <p className="mt-4 text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gold">
                ✦ Resultado do seu diagnóstico ✦
              </p>
              <h1 className="mt-4 text-[26px] sm:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight">
                Existe uma <span className="text-highlight">palavra de Deus</span> pra sua vida hoje, mãe
              </h1>
              <p className="mt-5 font-serif text-2xl sm:text-3xl italic leading-snug text-foreground/80">
                E ela começa com <span className="text-highlight">21 dias</span> de oração com direção.
              </p>
            </div>

            <div className="mt-8 space-y-4 rounded-2xl bg-card p-6 shadow-sm ring-1 ring-black/5">
              <p className="text-[15px] sm:text-base leading-relaxed text-foreground/85">
                Com base nas suas respostas, <strong>Deus está preparando uma
                transformação</strong> na vida do seu filho — mas Ele precisa da
                sua oração <em>com direção</em>.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-foreground/85">
                Milhares de mães na mesma situação que a sua já viram filhos
                afastados retornarem, vícios serem quebrados e famílias serem
                restauradas em apenas 3 semanas.
              </p>
              <p className="text-[15px] sm:text-base leading-relaxed text-foreground/85">
                Preparamos um <strong className="text-highlight">método bíblico
                completo</strong> pra você começar essa jornada ainda hoje.
              </p>
            </div>

            <a
              href={CTA_LINK}
              className="group relative mt-8 block w-full overflow-hidden rounded-2xl bg-cta px-6 py-5 text-center text-base sm:text-xl font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-all duration-200 hover:-translate-y-0.5 hover:bg-cta-hover active:translate-y-0"
            >
              <span className="relative z-10">Quero o meu devocional ✅</span>
              <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/20 blur-md transition-transform duration-700 group-hover:translate-x-[400%]" />
            </a>

            <p className="mt-3 text-center text-xs text-foreground/60">
              🔒 Página segura • Acesso imediato
            </p>
          </section>
        )}

        <footer className="mt-16 text-center text-[11px] leading-relaxed text-foreground/50">
          <p>
            Este site não é afiliado ao Facebook ou a qualquer entidade do
            Facebook. Os resultados apresentados são individuais e podem variar.
          </p>
          <p className="mt-2">© {new Date().getFullYear()} — Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}

export function QuizThenPresell({ Presell }: { Presell: React.ComponentType }) {
  const [done, setDone] = useState(false);
  if (!done) {
    return <Quiz />;
  }
  return <Presell />;
}
