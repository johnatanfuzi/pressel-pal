import { memo } from "react";
import { Check } from "lucide-react";
import type { QuizQuestion } from "./quizConfig";

type Props = {
  question: QuizQuestion;
  selected: string[];
  onSelect: (option: string) => void;
  onContinue: () => void;
  visible: boolean;
};

function QuestionCardBase({ question, selected, onSelect, onContinue, visible }: Props) {
  const multiple = !!question.multiple;
  const max = question.maxSelections ?? 3;

  return (
    <div
      className={`transition-all duration-300 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <h1 className="text-balance text-2xl font-black leading-tight text-brand-dark sm:text-3xl">
        {question.title}
      </h1>
      {question.subtitle && (
        <p className="mt-2 text-sm font-semibold text-muted-foreground">{question.subtitle}</p>
      )}
      <p className="mt-1 text-xs text-muted-foreground">Não existe resposta certa ou errada.</p>

      <div className="mt-6 flex flex-col gap-3" role="group" aria-label={question.title}>
        {question.options.map((option) => {
          const isSelected = selected.includes(option);
          const disabled = multiple && !isSelected && selected.length >= max;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onSelect(option)}
              disabled={disabled}
              aria-pressed={isSelected}
              className={`flex min-h-[56px] w-full items-center justify-between gap-3 rounded-2xl border-2 px-5 py-4 text-left text-base font-bold transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 active:scale-[0.99] ${
                isSelected
                  ? "border-primary bg-brand-soft text-brand-dark shadow-soft"
                  : "border-border bg-card text-brand-dark hover:border-primary/60 hover:bg-cream"
              } ${disabled ? "cursor-not-allowed opacity-40" : ""}`}
            >
              <span className="min-w-0">{option}</span>
              <span
                className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 transition-colors ${
                  isSelected ? "border-primary bg-primary" : "border-transparent"
                }`}
              >
                {isSelected && <Check className="h-4 w-4 text-primary-foreground" />}
              </span>
            </button>
          );
        })}
      </div>

      {multiple && (
        <button
          type="button"
          onClick={onContinue}
          disabled={selected.length === 0}
          className="mt-6 min-h-[56px] w-full rounded-2xl bg-orange px-6 text-lg font-black text-white shadow-cta transition-all hover:brightness-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-orange/40 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continuar
        </button>
      )}
    </div>
  );
}

export const QuestionCard = memo(QuestionCardBase);
