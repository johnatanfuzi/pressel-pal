import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { AnalyzingScreen } from "./AnalyzingScreen";
import { ResultScreen } from "./ResultScreen";
import { QUIZ_QUESTIONS, STORAGE_KEY, type QuizAnswers } from "./quizConfig";
import { SiteFooter } from "@/components/SiteFooter";

type Stage = "questions" | "analyzing" | "result";

export function QuizPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswers>({});
  const [stage, setStage] = useState<Stage>("questions");
  const [visible, setVisible] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const question = QUIZ_QUESTIONS[index];
  const selected = (() => {
    const value = answers[question?.id];
    if (!value) return [];
    return Array.isArray(value) ? value : [value];
  })();

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 20);
    window.scrollTo({ top: 0 });
    return () => clearTimeout(t);
  }, [index, stage]);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const persist = useCallback((next: QuizAnswers) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const schedule = useCallback((fn: () => void, delay: number) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(fn, delay);
  }, []);

  const advance = useCallback(() => {
    if (index < QUIZ_QUESTIONS.length - 1) {
      setVisible(false);
      schedule(() => setIndex((i) => Math.min(i + 1, QUIZ_QUESTIONS.length - 1)), 180);
    } else {
      if (timer.current) clearTimeout(timer.current);
      // Pré-carrega a rota da oferta enquanto a tela de análise roda (3s),
      // para a transição final ser instantânea.
      void router.preloadRoute({ to: "/oferta" }).catch(() => {});
      setStage("analyzing");
    }
  }, [index, schedule, router]);

  const handleSelect = useCallback((option: string) => {
    if (question.multiple) {
      const max = question.maxSelections ?? 3;
      const isSel = selected.includes(option);
      const next = isSel
        ? selected.filter((o) => o !== option)
        : selected.length >= max
          ? selected
          : [...selected, option];
      const updated = { ...answers, [question.id]: next };
      setAnswers(updated);
      persist(updated);
      return;
    }
    const updated = { ...answers, [question.id]: option };
    setAnswers(updated);
    persist(updated);
    schedule(advance, 250);
  }, [answers, persist, question, schedule, selected, advance]);

  const goBack = useCallback(() => {
    if (index === 0) return;
    setVisible(false);
    schedule(() => setIndex((i) => Math.max(i - 1, 0)), 180);
  }, [index, schedule]);

  const goToOffer = useCallback(() => {
    const foco = answers.foco;
    navigate({
      to: "/oferta",
      search: {
        perfil: (answers.trava as string) ?? "",
        foco: Array.isArray(foco) ? foco.join(",") : ((foco as string) ?? ""),
        tempo: (answers.tempo as string) ?? "",
        pessoas: (answers.pessoas as string) ?? "",
      },
    });
    window.scrollTo({ top: 0 });
  }, [answers, navigate]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main className="flex-1">
        <div className="mx-auto flex w-full max-w-lg flex-col px-5 pb-10 pt-5">
          {stage === "questions" && (
            <>
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                <button
                  type="button"
                  onClick={goBack}
                  disabled={index === 0}
                  aria-label="Voltar para a pergunta anterior"
                  className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 disabled:opacity-0"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <ProgressBar current={index + 1} total={QUIZ_QUESTIONS.length} />
              </div>

              <div className="mt-8 flex-1">
                <QuestionCard
                  question={question}
                  selected={selected}
                  onSelect={handleSelect}
                  onContinue={advance}
                  visible={visible}
                />
              </div>
            </>
          )}

          {stage === "analyzing" && <AnalyzingScreen onDone={() => setStage("result")} />}

          {stage === "result" && (
            <div className="flex-1 pt-6">
              <ResultScreen answers={answers} onGo={goToOffer} />
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

