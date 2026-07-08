import { useEffect, useState } from "react";
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

/* ─────────── helpers ─────────── */

const STEPS = 10;

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
  const color =
    variant === "red"
      ? "bg-[#e11d48] hover:bg-[#be123c] shadow-[0_10px_30px_-8px_rgba(225,29,72,0.55)]"
      : "bg-[#22c55e] hover:bg-[#16a34a] shadow-[0_10px_30px_-8px_rgba(34,197,94,0.55)]";
  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative block w-full overflow-hidden rounded-full ${color} px-6 py-5 text-center text-base sm:text-xl font-bold uppercase tracking-wide text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0`}
    >
      <span className="relative z-10">{label}</span>
      <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/25 blur-md transition-transform duration-700 group-hover:translate-x-[500%]" />
    </button>
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
    <main className="min-h-screen bg-white text-black flex flex-col">
      <div className="mx-auto w-full max-w-xl px-6 py-10 sm:py-14 flex-1">
        {children}
      </div>
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-xl px-6 py-5 text-center text-xs text-black/50">
          <p className="mb-2 text-[11px] text-black/40">
            Etapa {step} de {STEPS}
          </p>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-1">
            <a href="#" className="hover:text-black transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Termos de Uso
            </a>
          </nav>
          <p className="mt-2 text-[11px] text-black/40">
            © {new Date().getFullYear()} — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

/* ─────────── páginas ─────────── */

function P1() {
  return (
    <Page step={1}>
      <h1 className="text-center text-2xl sm:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight">
        Deus vai usar sua oração{" "}
        <span className="text-[#22c55e] underline decoration-[3px] underline-offset-[6px]">
          para tocar o coração do seu filho
        </span>
      </h1>
      <p className="mt-8 text-center text-lg sm:text-2xl font-extrabold uppercase leading-snug tracking-tight">
        Ore com direção por 21 dias{" "}
        <span className="text-[#22c55e]">
          e veja o seu filho transformado por Deus
        </span>{" "}
        através da oração e do jejum
      </p>
      <figure className="mt-8 overflow-hidden rounded-3xl">
        <img src={antesDepois} alt="Antes e depois" className="block h-auto w-full" />
      </figure>
      <div className="mt-8">
        <CTA label="Clique para acessar ✅" onClick={() => goToStep(2)} />
      </div>
    </Page>
  );
}

function P2() {
  return (
    <Page step={2}>
      <h2 className="text-center text-xl sm:text-3xl font-extrabold leading-snug">
        A falta de clareza e direção na hora de orar é o que impede Deus de
        agir! Mas agora você vai aprender a orar com PROPÓSITO!
      </h2>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img02} alt="Mulher orando" className="block h-auto w-full" />
      </figure>
      <div className="mt-6">
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
  return (
    <Page step={3}>
      <h2 className="text-center text-xl sm:text-3xl font-extrabold leading-snug">
        Qual desses problemas MAIS afetam a vida do seu filho/a?
      </h2>
      <p className="mt-3 text-center text-base sm:text-lg font-semibold text-[#22c55e]">
        A sua luta espiritual será PODEROSA e DIRECIONADA!
      </p>
      <ul className="mt-6 space-y-3">
        {quizOptions.map((opt) => {
          const checked = !!selected[opt];
          return (
            <li key={opt}>
              <button
                type="button"
                onClick={() => toggle(opt)}
                className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left transition-all ${
                  checked
                    ? "border-[#22c55e] bg-[#22c55e]/10"
                    : "border-black/15 bg-white hover:border-black/30"
                }`}
              >
                <span
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-md border-2 ${
                    checked
                      ? "border-[#22c55e] bg-[#22c55e] text-white"
                      : "border-black/25 bg-white"
                  }`}
                >
                  {checked && (
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M4 10l4 4 8-8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
                <span className="text-base sm:text-lg font-medium">{opt}</span>
              </button>
            </li>
          );
        })}
      </ul>
      <div className="mt-6">
        <CTA label="Baixar devocional" onClick={() => goToStep(4)} />
      </div>
    </Page>
  );
}

function P4() {
  return (
    <Page step={4}>
      <h2 className="text-center text-xl sm:text-3xl font-extrabold leading-snug">
        Siga os <span className="font-black">3 passos do Devocional Filho Liberto</span>{" "}
        e veja o seu filho TRANSFORMADO por Deus através{" "}
        <span className="text-[#22c55e]">da Oração e Jejum!</span>
      </h2>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img04} alt="Devocional Filho Liberto" className="block h-auto w-full" />
      </figure>
      <p className="mt-6 text-center text-lg font-semibold">
        Somente <span className="text-[#22c55e]">ORANDO COM DIREÇÃO</span> você vai{" "}
        <span className="text-[#e11d48]">ALCANÇAR O PROPÓSITO.</span>
      </p>
      <div className="mt-6">
        <CTA label="Quais são os 3 passos?" onClick={() => goToStep(5)} />
      </div>
    </Page>
  );
}

function StepBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <span className="rounded-md bg-[#22c55e] px-3 py-1 text-sm font-bold text-white">
        {children}
      </span>
    </div>
  );
}

function P5() {
  return (
    <Page step={5}>
      <StepBadge>PASSO 1</StepBadge>
      <h2 className="mt-4 text-center text-xl sm:text-3xl font-extrabold leading-snug">
        Identifique o que está afastando o seu filho de Deus com o{" "}
        <span className="text-[#e11d48]">Diagnóstico das Setas Malignas.</span>
      </h2>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img05} alt="Diagnóstico das Setas Malignas" className="block h-auto w-full" />
      </figure>
      <p className="mt-6 text-center text-lg font-semibold">
        Deus vai te <span className="font-extrabold">REVELAR</span> contra{" "}
        <span className="text-[#22c55e] font-extrabold">O QUE LUTAR!</span>
      </p>
      <div className="mt-6">
        <CTA label="Quero fazer o diagnóstico ✅" onClick={() => goToStep(6)} />
      </div>
    </Page>
  );
}

function P6() {
  return (
    <Page step={6}>
      <StepBadge>PASSO 2</StepBadge>
      <h2 className="mt-4 text-center text-xl sm:text-3xl font-extrabold leading-snug">
        Faça as <span className="text-[#22c55e]">Orações Guiadas de Libertação</span>{" "}
        para Quebrar as{" "}
        <span className="text-[#e11d48] underline">Setas Malignas</span>
      </h2>
      <p className="mt-2 text-center text-base sm:text-lg font-semibold">
        que estão <span className="text-[#e11d48] font-extrabold">ATINGINDO</span> o seu filho.
      </p>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img06} alt="Orações guiadas" className="block h-auto w-full" />
      </figure>
      <div className="mt-6">
        <CTA label="Quero começar ✅" onClick={() => goToStep(7)} />
      </div>
    </Page>
  );
}

function P7() {
  return (
    <Page step={7}>
      <StepBadge>PASSO 3</StepBadge>
      <h2 className="mt-4 text-center text-xl sm:text-3xl font-extrabold leading-snug">
        Inicie o <span className="font-black">Jejum e Devocional Filho Liberto por 21 dias</span>
      </h2>
      <p className="mt-3 text-center text-lg sm:text-xl font-semibold">
        e veja Deus{" "}
        <span className="text-[#22c55e] underline">TRANSFORMAR</span> o seu filho.
      </p>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img07} alt="Devocional 21 dias" className="block h-auto w-full" />
      </figure>
      <p className="mt-6 rounded-2xl bg-[#f1f5f9] px-5 py-4 text-center text-base sm:text-lg font-semibold text-[#e11d48]">
        Você vai entender porque as suas orações não eram respondidas.
      </p>
      <div className="mt-6">
        <CTA label="Quero começar ✅" onClick={() => goToStep(8)} />
      </div>
    </Page>
  );
}

function P8() {
  return (
    <Page step={8}>
      <StepBadge>VOCÊ VAI RECEBER TAMBÉM</StepBadge>
      <h2 className="mt-4 text-center text-xl sm:text-3xl font-extrabold leading-snug">
        Campanha da Proteção Divina — Um guia com as orações poderosas que{" "}
        <span className="text-[#e11d48]">protegem seu filho</span> ⬇️
      </h2>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img08} alt="Campanha da Proteção Divina" className="block h-auto w-full" />
      </figure>
      <ul className="mt-6 space-y-2 text-center text-lg font-extrabold underline">
        <li>PROTEÇÃO FÍSICA</li>
        <li>PROTEÇÃO EMOCIONAL</li>
        <li>PROTEÇÃO ESPIRITUAL</li>
      </ul>
      <div className="mt-6">
        <CTA label="Quero salvar meu filho ✅" onClick={() => goToStep(9)} />
      </div>
    </Page>
  );
}

function P9() {
  return (
    <Page step={9}>
      <StepBadge>VOCÊ VAI RECEBER TAMBÉM</StepBadge>
      <h2 className="mt-4 text-center text-xl sm:text-3xl font-extrabold leading-snug">
        Mapa das Amizades — Descubra as{" "}
        <span className="text-[#22c55e]">
          amizades que tem afastado seu filho de Deus
        </span>{" "}
        ⬇️
      </h2>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img09} alt="Mapa das Amizades" className="block h-auto w-full" />
      </figure>
      <p className="mt-6 text-center text-lg font-semibold">
        Deus irá substituir essas pessoas 🙏
      </p>
      <div className="mt-6">
        <CTA label="Quero salvar meu filho ✅" onClick={() => goToStep(10)} />
      </div>
    </Page>
  );
}

function P10() {
  return (
    <Page step={10}>
      <h2 className="text-center text-xl sm:text-3xl font-extrabold leading-snug">
        O <span className="text-[#22c55e]">Devocional do Filho Liberto</span> é para a mãe
        que ⬇️
      </h2>
      <figure className="mt-6 overflow-hidden rounded-3xl">
        <img src={img10} alt="Para qual mãe é o devocional" className="block h-auto w-full" />
      </figure>
      <div className="mt-6">
        <CTA label="Quero começar ✅" onClick={() => goToStep(11)} />
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
