import React, { useEffect, useState } from "react";
import antesDepois from "@/assets/antes-depois.jpg";
import img02 from "@/assets/presell/02-clareza.jpg";
import img04 from "@/assets/presell/04-3passos.jpg";
import img05 from "@/assets/presell/05-passo1.jpg";
import img06 from "@/assets/presell/06-passo2.jpg";
import img07 from "@/assets/presell/07-passo3.jpg";
import img08 from "@/assets/presell/08-protecao.jpg";
import img09 from "@/assets/presell/09-amizades.jpg";
import img10 from "@/assets/presell/10-mae.jpg";
import { getCtaLink } from "./links";

/* ─────────── design tokens ─────────── */

const GREEN = "#16a34a";
const GREEN_DARK = "#15803d";
const RED = "#e11d48";
const RED_DARK = "#be123c";
const STEPS = 10;

/* ─────────── helpers ─────────── */

function goToStep(n: number) {
  if (n > STEPS) {
    window.location.href = getCtaLink();
    return;
  }
  window.location.hash = `#/p${n}`;
}

type CTAProps = {
  label: string;
  onClick: () => void;
  variant?: "green" | "red";
};

function CTA({ label, onClick, variant = "green" }: CTAProps) {
  const isRed = variant === "red";
  const bg = isRed
    ? `bg-[${RED}] hover:bg-[${RED_DARK}] focus-visible:ring-[${RED}]/40`
    : `bg-[${GREEN}] hover:bg-[${GREEN_DARK}] focus-visible:ring-[${GREEN}]/40`;
  const glow = isRed
    ? "shadow-[0_14px_40px_-12px_rgba(225,29,72,0.65),0_4px_10px_-4px_rgba(225,29,72,0.35)]"
    : "shadow-[0_14px_40px_-12px_rgba(22,163,74,0.65),0_4px_10px_-4px_rgba(22,163,74,0.35)]";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl ${bg} ${glow} px-6 py-5 text-center text-base sm:text-lg font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 min-h-14`}
    >
      <span className="relative z-10 leading-none">{label}</span>
      <svg
        className="relative z-10 h-5 w-5 transition-transform duration-200 group-hover:translate-x-1"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-[900ms] group-hover:translate-x-[500%]" />
    </button>
  );
}

function ProgressBar({ step }: { step: number }) {
  const pct = Math.round((step / STEPS) * 100);
  return (
    <div className="mb-6 sm:mb-8">
      <div className="mb-2 flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-black/50">
        <span>Etapa {step} de {STEPS}</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-black/5">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#22c55e] to-[#16a34a] transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Figure({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mt-6 overflow-hidden rounded-3xl bg-black/[0.03] ring-1 ring-black/5 shadow-[0_20px_50px_-24px_rgba(0,0,0,0.25)]">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full"
      />
    </figure>
  );
}

function Page({
  step,
  children,
}: {
  step: number;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#fafaf9] text-neutral-900 flex flex-col antialiased selection:bg-[#22c55e]/20">
      {/* subtle top accent */}
      <div className="h-1 w-full bg-gradient-to-r from-[#22c55e] via-[#16a34a] to-[#22c55e]" />
      <div className="mx-auto w-full max-w-xl px-5 sm:px-6 pt-6 sm:pt-10 pb-12 flex-1">
        <ProgressBar step={step} />
        <div key={step} className="animate-[fadeIn_.35s_ease-out]">
          {children}
        </div>
      </div>
      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto max-w-xl px-6 py-6 text-center text-xs text-black/50">
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href="#" className="hover:text-black transition-colors">
              Política de Privacidade
            </a>
            <span className="text-black/20">•</span>
            <a href="#" className="hover:text-black transition-colors">
              Termos de Uso
            </a>
          </nav>
          <p className="mt-2 text-[11px] text-black/40">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </footer>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}

function H1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="text-balance text-center text-[26px] leading-[1.15] sm:text-4xl font-extrabold tracking-tight">
      {children}
    </h1>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-balance text-center text-[22px] leading-[1.2] sm:text-3xl font-extrabold tracking-tight">
      {children}
    </h2>
  );
}

/* ─────────── páginas ─────────── */

function P1() {
  return (
    <Page step={1}>
      <H1>
        Deus vai usar sua oração{" "}
        <span className="text-[#16a34a] underline decoration-[3px] underline-offset-[6px]">
          para tocar o coração do seu filho
        </span>
      </H1>
      <p className="mt-6 text-balance text-center text-lg sm:text-2xl font-extrabold uppercase leading-snug tracking-tight">
        Ore com direção por 21 dias{" "}
        <span className="text-[#16a34a]">
          e veja o seu filho transformado por Deus
        </span>{" "}
        através da oração e do jejum
      </p>
      <Figure src={antesDepois} alt="Antes e depois" />
      <div className="mt-8">
        <CTA label="Clique para acessar" onClick={() => goToStep(2)} />
      </div>
    </Page>
  );
}

function P2() {
  return (
    <Page step={2}>
      <H2>
        A falta de clareza e direção na hora de orar é o que impede Deus de
        agir! Mas agora você vai aprender a orar com{" "}
        <span className="text-[#16a34a]">PROPÓSITO</span>.
      </H2>
      <Figure src={img02} alt="Mulher orando" />
      <div className="mt-8">
        <CTA
          label="Quero orar com propósito"
          variant="red"
          onClick={() => goToStep(3)}
        />
      </div>
    </Page>
  );
}

const quizOptions = [
  "Problemas sexuais",
  "Problemas emocionais (ansiedade, depressão etc...)",
  "Vícios: Bebida, Cigarro, Drogas, Jogos",
  "Más amizades",
  "Não leva Deus a sério",
  "Está travado na vida financeira",
  "Sofre de enfermidades",
];

function P3() {
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const toggle = (opt: string) =>
    setSelected((s) => ({ ...s, [opt]: !s[opt] }));
  const anySelected = Object.values(selected).some(Boolean);
  return (
    <Page step={3}>
      <H2>Qual desses problemas MAIS afetam a vida do seu filho/a?</H2>
      <p className="mt-3 text-center text-base sm:text-lg font-semibold text-[#16a34a]">
        A sua luta espiritual será PODEROSA e DIRECIONADA!
      </p>
      <ul className="mt-6 space-y-2.5">
        {quizOptions.map((opt) => {
          const checked = !!selected[opt];
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => toggle(opt)}
                aria-pressed={checked}
                className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all duration-150 active:scale-[0.99] ${
                  checked
                    ? "border-[#16a34a] bg-[#16a34a]/[0.08] shadow-[0_6px_18px_-10px_rgba(22,163,74,0.5)]"
                    : "border-black/10 bg-white hover:border-black/25 hover:shadow-sm"
                }`}
              >
                <span
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-md border-2 transition-colors ${
                    checked
                      ? "border-[#16a34a] bg-[#16a34a] text-white"
                      : "border-black/25 bg-white"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
                      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="text-[15px] sm:text-lg font-medium leading-snug">{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-8">
        <CTA
          label={anySelected ? "Baixar devocional" : "Continuar"}
          onClick={() => goToStep(4)}
        />
      </div>
    </Page>
  );
}

function P4() {
  return (
    <Page step={4}>
      <H2>
        Siga os <span className="font-black">3 passos do Devocional Filho Liberto</span>{" "}
        e veja o seu filho TRANSFORMADO por Deus através{" "}
        <span className="text-[#16a34a]">da Oração e Jejum!</span>
      </H2>
      <Figure src={img04} alt="Devocional Filho Liberto" />
      <p className="mt-6 text-balance text-center text-lg font-semibold">
        Somente <span className="text-[#16a34a]">ORANDO COM DIREÇÃO</span> você vai{" "}
        <span className="text-[#e11d48]">ALCANÇAR O PROPÓSITO.</span>
      </p>
      <div className="mt-8">
        <CTA label="Quais são os 3 passos?" onClick={() => goToStep(5)} />
      </div>
    </Page>
  );
}

function StepBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <span className="inline-flex items-center gap-2 rounded-full bg-[#16a34a] px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_20px_-10px_rgba(22,163,74,0.7)]">
        <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
        {children}
      </span>
    </div>
  );
}

function P5() {
  return (
    <Page step={5}>
      <StepBadge>Passo 1</StepBadge>
      <H2>
        <span className="mt-4 block">
          Identifique o que está afastando o seu filho de Deus com o{" "}
          <span className="text-[#e11d48]">Diagnóstico das Setas Malignas.</span>
        </span>
      </H2>
      <Figure src={img05} alt="Diagnóstico das Setas Malignas" />
      <p className="mt-6 text-balance text-center text-lg font-semibold">
        Deus vai te <span className="font-extrabold">REVELAR</span> contra{" "}
        <span className="text-[#16a34a] font-extrabold">O QUE LUTAR!</span>
      </p>
      <div className="mt-8">
        <CTA label="Quero fazer o diagnóstico" onClick={() => goToStep(6)} />
      </div>
    </Page>
  );
}

function P6() {
  return (
    <Page step={6}>
      <StepBadge>Passo 2</StepBadge>
      <H2>
        <span className="mt-4 block">
          Faça as <span className="text-[#16a34a]">Orações Guiadas de Libertação</span>{" "}
          para Quebrar as{" "}
          <span className="text-[#e11d48] underline">Setas Malignas</span>
        </span>
      </H2>
      <p className="mt-3 text-center text-base sm:text-lg font-semibold">
        que estão <span className="text-[#e11d48] font-extrabold">ATINGINDO</span> o seu filho.
      </p>
      <Figure src={img06} alt="Orações guiadas" />
      <div className="mt-8">
        <CTA label="Quero começar" onClick={() => goToStep(7)} />
      </div>
    </Page>
  );
}

function P7() {
  return (
    <Page step={7}>
      <StepBadge>Passo 3</StepBadge>
      <H2>
        <span className="mt-4 block">
          Inicie o <span className="font-black">Jejum e Devocional Filho Liberto por 21 dias</span>
        </span>
      </H2>
      <p className="mt-3 text-balance text-center text-lg sm:text-xl font-semibold">
        e veja Deus{" "}
        <span className="text-[#16a34a] underline">TRANSFORMAR</span> o seu filho.
      </p>
      <Figure src={img07} alt="Devocional 21 dias" />
      <p className="mt-6 rounded-2xl border border-[#e11d48]/15 bg-[#e11d48]/5 px-5 py-4 text-balance text-center text-base sm:text-lg font-semibold text-[#e11d48]">
        Você vai entender porque as suas orações não eram respondidas.
      </p>
      <div className="mt-8">
        <CTA label="Quero começar" onClick={() => goToStep(8)} />
      </div>
    </Page>
  );
}

function P8() {
  return (
    <Page step={8}>
      <StepBadge>Você vai receber também</StepBadge>
      <H2>
        <span className="mt-4 block">
          Campanha da Proteção Divina — Um guia com as orações poderosas que{" "}
          <span className="text-[#e11d48]">protegem seu filho</span>
        </span>
      </H2>
      <Figure src={img08} alt="Campanha da Proteção Divina" />
      <ul className="mt-6 grid gap-2.5 sm:grid-cols-3">
        {["Proteção Física", "Proteção Emocional", "Proteção Espiritual"].map((t) => (
          <li
            key={t}
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-center text-sm sm:text-base font-bold uppercase tracking-wide text-neutral-900 shadow-sm"
          >
            {t}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <CTA label="Quero salvar meu filho" onClick={() => goToStep(9)} />
      </div>
    </Page>
  );
}

function P9() {
  return (
    <Page step={9}>
      <StepBadge>Você vai receber também</StepBadge>
      <H2>
        <span className="mt-4 block">
          Mapa das Amizades — Descubra as{" "}
          <span className="text-[#16a34a]">
            amizades que tem afastado seu filho de Deus
          </span>
        </span>
      </H2>
      <Figure src={img09} alt="Mapa das Amizades" />
      <p className="mt-6 text-center text-lg font-semibold">
        Deus irá substituir essas pessoas 🙏
      </p>
      <div className="mt-8">
        <CTA label="Quero salvar meu filho" onClick={() => goToStep(10)} />
      </div>
    </Page>
  );
}

function P10() {
  return (
    <Page step={10}>
      <H2>
        O <span className="text-[#16a34a]">Devocional do Filho Liberto</span> é para a mãe
        que ⬇️
      </H2>
      <Figure src={img10} alt="Para qual mãe é o devocional" />
      <div className="mt-8">
        <CTA label="Quero começar agora" onClick={() => goToStep(11)} />
      </div>
    </Page>
  );
}

/* ─────────── roteador da presell ─────────── */

const PAGES: Record<string, () => React.ReactElement> = {
  "/p1": P1, "/p2": P2, "/p3": P3, "/p4": P4, "/p5": P5,
  "/p6": P6, "/p7": P7, "/p8": P8, "/p9": P9, "/p10": P10,
};

function readStepFromHash(): string {
  if (typeof window === "undefined") return "/p1";
  const h = window.location.hash.replace(/^#/, "");
  return PAGES[h] ? h : "/p1";
}

export function Presell() {
  const [path, setPath] = useState<string>(readStepFromHash);
  useEffect(() => {
    const onHash = () => setPath(readStepFromHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);
  const View = PAGES[path] ?? P1;
  return <View />;
}
