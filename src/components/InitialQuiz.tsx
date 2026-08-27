import { useCallback, useEffect, useRef, useState } from "react";

import { UniclinicLogo } from "@/components/UniclinicLogo";
import { useTrackedUrl } from "@/lib/use-tracked-url";

const STAGING_URL = "https://uniclinic.cloud";
const STORAGE_KEY = "quizUniclinic";

const QUESTIONS = [
  {
    id: "perfil",
    title: "Qual o seu papel na clínica?",
    subtitle: "Assim ajustamos o que faz sentido para a sua rotina.",
    options: [
      "Médico dono da clínica",
      "Gestor ou administrador",
      "Responsável pela operação",
      "Outro",
    ],
  },
  {
    id: "gargalo",
    title: "Hoje, o que mais consome tempo da sua equipe?",
    subtitle: "Escolha o ponto que mais pesa na rotina.",
    options: [
      "Agenda, confirmações e faltas",
      "Prontuários e informações espalhadas",
      "Cobranças e financeiro",
      "Relatórios e visão da operação",
    ],
  },
  {
    id: "controle",
    title: "Como a clínica é controlada atualmente?",
    subtitle: "Seja sincero, é só para entender o cenário.",
    options: [
      "Papel, WhatsApp e planilhas",
      "Um sistema, mas com controles paralelos",
      "Um sistema que já centraliza tudo",
      "Estou estruturando agora",
    ],
  },
] as const;

export function InitialQuiz({ onSkip }: { onSkip: () => void }) {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const ctaUrl = useTrackedUrl(STAGING_URL);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const handleSelect = useCallback(
    (index: number) => {
      const question = QUESTIONS[step];
      if (!question) return;
      setSelected(index);
      const next = { ...answers, [question.id]: question.options[index]! };
      setAnswers(next);

      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        if (step >= QUESTIONS.length - 1) {
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
          } catch {
            /* localStorage indisponivel */
          }
          setDone(true);
        } else {
          setStep((current) => Math.min(current + 1, QUESTIONS.length - 1));
        }
        setSelected(null);
      }, 250);
    },
    [answers, step],
  );

  const question = QUESTIONS[step]!;
  const progress = done ? 100 : Math.round((step / QUESTIONS.length) * 100);

  return (
    <div id="initial-quiz" className="fixed inset-0 z-[60] flex flex-col bg-navy-deep text-navy-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(800px 420px at 10% -10%, color-mix(in oklab, var(--blue) 45%, transparent), transparent 70%), radial-gradient(600px 380px at 100% 100%, color-mix(in oklab, var(--green) 28%, transparent), transparent 70%)",
        }}
      />

      <div className="relative h-1.5 w-full bg-white/10" role="presentation">
        <div
          className="h-full bg-green transition-[width] duration-500 ease-out"
          style={{ width: `${done ? 100 : progress}%` }}
        />
      </div>

      <div className="relative flex items-center justify-between px-5 py-5 sm:px-8">
        <UniclinicLogo tone="light" />
        <button
          type="button"
          onClick={onSkip}
          className="text-xs font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-white"
        >
          Pular
        </button>
      </div>

      <div className="relative flex flex-1 items-center overflow-y-auto px-5 pb-10 sm:px-8">
        <div className="mx-auto w-full max-w-2xl">
          {!done ? (
            <div key={question.id} className="reveal">
              <p className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-green">
                Pergunta {step + 1} de {QUESTIONS.length}
              </p>
              <h1 className="mt-5 text-2xl font-extrabold leading-[1.12] tracking-[-0.02em] text-balance sm:text-4xl">
                {question.title}
              </h1>
              <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                {question.subtitle}
              </p>

              <div className="mt-8 space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleSelect(index)}
                    aria-pressed={selected === index}
                    className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-5 text-left text-base font-semibold transition-all duration-200 active:scale-[0.99] ${
                      selected === index
                        ? "border-green bg-green/20 text-white"
                        : "border-white/15 bg-white/5 text-white/90 hover:-translate-y-0.5 hover:border-green/50 hover:bg-white/10"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`grid size-8 shrink-0 place-items-center rounded-lg text-xs font-extrabold transition-colors ${
                        selected === index
                          ? "bg-green text-navy-deep"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="leading-snug">{option}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="reveal text-center">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-green">
                Diagnóstico inicial
              </p>
              <h1 className="mt-4 text-2xl font-extrabold leading-[1.12] tracking-[-0.02em] text-balance sm:text-4xl">
                Sua clínica tem pontos de operação que merecem mais clareza.
              </h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-[1.7] text-white/75">
                Pelo que você respondeu, parte da rotina ainda depende de controles espalhados. O
                Uniclinic reúne agenda, pacientes, atendimentos, financeiro e relatórios em um único
                ambiente para facilitar o acompanhamento do dia a dia.
              </p>

              <div className="mt-9 flex flex-col items-center gap-4">
                <a href={ctaUrl} className="btn btn-green w-full max-w-sm">
                  Acessar o Uniclinic
                </a>
                <button
                  type="button"
                  onClick={onSkip}
                  className="text-sm font-semibold text-white/65 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white"
                >
                  Ver antes como o Uniclinic funciona
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
