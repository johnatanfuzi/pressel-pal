import { Check, Star } from "lucide-react";
import { getProfileName, getResultBullets, type QuizAnswers } from "./quizConfig";

export function ResultScreen({ answers, onGo }: { answers: QuizAnswers; onGo: () => void }) {
  const profile = getProfileName(answers);
  const bullets = getResultBullets(answers);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-3 duration-500">
      <p className="text-xs font-black uppercase tracking-widest text-orange">
        Análise concluída
      </p>
      <h1 className="mt-2 text-balance text-3xl font-black leading-tight text-brand-dark">
        Seu perfil: {profile}
      </h1>
      <p className="mt-3 text-sm font-semibold text-muted-foreground">
        Montamos um plano de receitas na air fryer com base nas suas respostas.
      </p>

      <ul className="mt-6 flex flex-col gap-3">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex gap-3 rounded-2xl border border-border bg-card p-4 text-left shadow-soft"
          >
            <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary">
              <Check className="h-4 w-4 text-primary-foreground" />
            </span>
            <span className="min-w-0 text-sm font-semibold text-brand-dark">{b}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-cream p-3 text-xs font-bold text-brand-dark">
        <span className="flex">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-4 w-4 fill-orange text-orange" />
          ))}
        </span>
        Mais de 12.000 pessoas já montaram o plano delas
      </div>

      <button
        type="button"
        onClick={onGo}
        className="mt-6 min-h-[60px] w-full rounded-2xl bg-orange px-6 text-lg font-black text-white shadow-cta transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/40 active:scale-[0.99]"
      >
        Ver meu plano de receitas
      </button>
    </div>
  );
}
