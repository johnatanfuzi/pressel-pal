import { useEffect, useState } from "react";

const PHRASES = [
  "Analisando suas respostas...",
  "Selecionando receitas para o seu tempo...",
  "Montando seu plano de 30 dias...",
];

export function AnalyzingScreen({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const [pct, setPct] = useState(4);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 1000);
    const t2 = setTimeout(() => setStep(2), 2000);
    const done = setTimeout(onDone, 3000);
    const raf = setTimeout(() => setPct(100), 60);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(done);
      clearTimeout(raf);
    };
  }, [onDone]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <div className="h-14 w-14 animate-spin rounded-full border-4 border-brand-soft border-t-primary" />
      <p
        key={step}
        className="mt-6 animate-in fade-in slide-in-from-bottom-3 text-lg font-black text-brand-dark duration-300"
        aria-live="polite"
      >
        {PHRASES[step]}
      </p>
      <div className="mt-6 h-2.5 w-full max-w-xs overflow-hidden rounded-full bg-brand-soft">
        <div
          className="h-full rounded-full bg-primary transition-all duration-[2900ms] ease-linear"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
