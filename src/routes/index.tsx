import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { InitialQuiz } from "@/components/InitialQuiz";
import { UniclinicLogo } from "@/components/UniclinicLogo";
import { useTrackedUrl } from "@/lib/use-tracked-url";
import ogImage from "@/assets/og-uniclinic.jpg";


const SITE = "https://uniclinic.cloud";
const WPP_HERO =
  "https://wa.me/5548991242304?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20UniClinic%20e%20solicitar%20o%20teste%20de%205%20dias.";
const WPP_TESTE =
  "https://wa.me/5548991242304?text=Ol%C3%A1%2C%20quero%20solicitar%20o%20teste%20de%205%20dias%20do%20UniClinic.";
const WPP_SIMPLE = "https://wa.me/5548991242304";
const OG_ABSOLUTE = `https://pressel-pal.lovable.app${ogImage}`;

const TITLE = "UniClinic | Descubra o gasto invisível da sua clínica";
const DESCRIPTION =
  "Agenda ociosa, retrabalho e informações espalhadas podem dificultar a gestão. Conheça o UniClinic e teste a plataforma por 5 dias.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://meuairfryer.shop/" },
      { property: "og:image", content: OG_ABSOLUTE },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_ABSOLUTE },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: PresellPage,
});

const SINAIS = [
  "Horários ociosos na agenda.",
  "Pacientes que faltam sem confirmação.",
  "Informações espalhadas em papéis, mensagens e planilhas.",
  "Cobranças e pendências acompanhadas manualmente.",
  "Equipe sobrecarregada com tarefas repetidas.",
  "Dificuldade para enxergar a operação como um todo.",
];

const BENEFICIOS = [
  ["Mais organização", "Informações importantes reunidas em um ambiente único."],
  ["Menos retrabalho", "Menor dependência de controles paralelos e tarefas repetidas."],
  [
    "Mais clareza",
    "Visão mais organizada sobre atendimentos, contratos, finanças e pendências.",
  ],
  [
    "Mais segurança operacional",
    "Processos mais claros, usuários, funções e histórico das atividades.",
  ],
  [
    "Rotina mais fluida",
    "Menos tempo procurando informações e mais foco no que precisa ser feito.",
  ],
  [
    "Decisões mais conscientes",
    "Dados organizados para apoiar médicos donos de clínica e gestores.",
  ],
];

const ANTES = [
  "Informações em vários lugares.",
  "Dependência de papéis e mensagens.",
  "Pendências difíceis de localizar.",
  "Acompanhamento financeiro manual.",
  "Decisões baseadas em percepção.",
  "Retrabalho frequente.",
];

const DEPOIS = [
  "Informações centralizadas.",
  "Rotina mais organizada.",
  "Pendências mais visíveis.",
  "Melhor acompanhamento da operação.",
  "Processos mais claros.",
  "Mais controle para a gestão.",
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`size-5 shrink-0 ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function WhatsIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.53 3.68 1.46 5.2L2 22l5.1-1.6a9.9 9.9 0 0 0 4.94 1.3c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm0 17.8c-1.6 0-3.1-.44-4.38-1.2l-.32-.2-3.02.95.95-2.94-.2-.32a7.94 7.94 0 0 1-1.24-4.25c0-4.42 3.6-8.02 8.03-8.02 4.43 0 8.03 3.6 8.03 8.02 0 4.43-3.6 8.02-8.03 8.02Zm4.5-5.9c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.12-.12.26-.3.4-.46.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.8-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.7 4.12 3.68 2.42.98 2.42.66 2.86.62.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function PresellPage() {
  const siteUrl = useTrackedUrl(SITE);
  const [showQuiz, setShowQuiz] = useState(true);

  useEffect(() => {
    try {
      if (localStorage.getItem("quizUniclinic")) setShowQuiz(false);
    } catch {
      /* localStorage indisponivel */
    }
  }, []);


  return (
    <>
      <main className="pb-24 md:pb-0">
        {/* 1. PRIMEIRA DOBRA */}
        <section className="relative overflow-hidden bg-navy-deep text-navy-foreground">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(900px 480px at 15% -10%, color-mix(in oklab, var(--blue) 45%, transparent), transparent 70%), radial-gradient(700px 420px at 95% 20%, color-mix(in oklab, var(--green) 30%, transparent), transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 md:pb-24 md:pt-10">
            <UniclinicLogo tone="light" />

            <div className="mt-12 grid items-center gap-12 md:mt-16 md:grid-cols-[1.05fr_0.95fr]">
              <div className="reveal">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-green">
                  O gasto invisível da clínica
                </p>
                <h1 className="mt-5 text-[2.1rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-[3.4rem]">
                  Quanto dinheiro sua clínica perde sem perceber?
                </h1>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  Nem toda perda aparece como uma despesa. Ela pode estar em um horário vazio, em
                  uma consulta não confirmada, em uma cobrança esquecida ou em horas de retrabalho.
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                  O UniClinic ajuda sua clínica a organizar a operação e enxergar melhor o que
                  acontece todos os dias.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={siteUrl}
                    className="inline-flex items-center justify-center rounded-xl bg-green px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-navy-deep shadow-cta transition-transform hover:-translate-y-0.5"
                  >
                    Conhecer o UniClinic
                  </a>
                  <a
                    href={WPP_HERO}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                  >
                    <WhatsIcon />
                    Falar pelo WhatsApp
                  </a>
                </div>
                <p className="mt-4 text-sm text-white/70">
                  Teste o UniClinic por 5 dias antes de decidir.
                </p>
              </div>

              {/* ESPACO PARA IMAGEM / MOCKUP REAL DO SISTEMA */}
              <div className="reveal rounded-3xl border border-white/15 bg-white/5 p-4 backdrop-blur-sm">
                <div className="grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-navy/60 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                      Rotina fragmentada
                    </p>
                    <div className="mt-3 space-y-2">
                      {["Papel", "WhatsApp", "Planilha", "Memória"].map((item) => (
                        <div
                          key={item}
                          className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-sm text-white/70"
                        >
                          <span>{item}</span>
                          <span className="h-1 w-16 rounded bg-white/15" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-2xl border border-green/30 bg-green/10 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-green">
                      Operação organizada
                    </p>
                    <p className="mt-3 text-sm text-white/80">
                      Espaço reservado para imagem ou mockup real do sistema (substituir por
                      screenshot oficial).
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. IDENTIFICACAO */}
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
            Uma clínica movimentada também pode operar no escuro.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Quando agenda, pacientes, atendimentos, contratos e finanças são controlados em lugares
            diferentes, a equipe passa a depender de memória, mensagens, papéis e planilhas.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            O resultado é uma rotina com pequenas falhas que consomem tempo, aumentam o retrabalho e
            dificultam a gestão.
          </p>
          <blockquote className="mt-9 border-l-4 border-green pl-5 text-lg font-bold text-primary sm:text-2xl">
            Onde a informação se espalha, o controle desaparece.
          </blockquote>
        </section>

        {/* 3. SINAIS */}
        <section className="border-y border-border bg-secondary/60 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Você reconhece alguma destas situações?
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {SINAIS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-base text-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1 size-2 shrink-0 rounded-full bg-blue"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg font-bold text-primary sm:text-xl">
              O que não é acompanhado dificilmente é corrigido.
            </p>
          </div>
        </section>

        {/* 4. APRESENTACAO */}
        <section className="bg-navy py-16 text-navy-foreground md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-4xl">
              Primeiro, sua clínica precisa enxergar.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              O UniClinic reúne os principais processos da clínica em um único ambiente.
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Agenda, pacientes, atendimentos, prontuários, prescrições, exames, procedimentos,
              contratos, financeiro, relatórios e gestão operacional passam a fazer parte de uma
              rotina mais organizada.
            </p>
            <p className="mt-8 text-lg font-bold text-green sm:text-2xl">
              Clareza não é um detalhe da gestão. É o começo do controle.
            </p>

            {/* ESPACO PARA SCREENSHOTS REAIS DO SISTEMA (substituir os placeholders) */}
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {["Agenda", "Atendimentos", "Relatórios"].map((label) => (
                <figure
                  key={label}
                  className="flex aspect-[4/3] flex-col justify-end rounded-2xl border border-white/15 bg-white/5 p-5"
                >
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/50">
                    Screenshot
                  </span>
                  <figcaption className="mt-1 text-sm font-semibold text-white/85">
                    {label} — espaço reservado
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* 5. BENEFICIOS */}
        <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Uma operação mais organizada muda toda a clínica.
          </h2>
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFICIOS.map(([title, text]) => (
              <div key={title}>
                <Check className="text-green" />
                <h3 className="mt-3 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. COMPARACAO */}
        <section className="border-y border-border bg-secondary/60 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="max-w-3xl text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
              O objetivo não é digitalizar a bagunça. É organizar a operação.
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-7">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Antes
                </h3>
                <ul className="mt-5 space-y-3">
                  {ANTES.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1.5 rounded-full bg-border" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-3xl border border-green/40 bg-green-soft p-7 shadow-soft">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Com UniClinic
                </h3>
                <ul className="mt-5 space-y-3">
                  {DEPOIS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-medium text-primary">
                      <Check className="text-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
              Estes pontos representam objetivos e possibilidades de uma operação organizada, não
              resultados garantidos.
            </p>
          </div>
        </section>

        {/* 7. TESTE DE 5 DIAS */}
        <section className="bg-navy-deep py-16 text-navy-foreground md:py-24">
          <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[auto_1fr]">
            <div className="flex items-center gap-4">
              <span className="text-[5.5rem] font-extrabold leading-none text-green md:text-[8rem]">
                5
              </span>
              <span className="text-sm font-bold uppercase leading-tight tracking-[0.18em] text-white/70">
                dias
                <br />
                de teste
              </span>
            </div>
            <div>
              <h2 className="text-2xl font-extrabold tracking-tight sm:text-4xl">
                Não decida apenas pela apresentação. Use o sistema.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Teste o UniClinic por 5 dias, navegue pelos módulos e avalie como a plataforma pode
                contribuir para a organização da sua clínica.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteUrl}
                  className="inline-flex items-center justify-center rounded-xl bg-green px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-navy-deep shadow-cta transition-transform hover:-translate-y-0.5"
                >
                  Solicitar teste de 5 dias
                </a>
                <a
                  href={WPP_TESTE}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
                >
                  <WhatsIcon />
                  Falar com a equipe
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 8. CTA FINAL */}
        <section className="mx-auto max-w-3xl px-5 py-16 text-center sm:px-8 md:py-24">
          <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
            Sua clínica vai continuar administrando sintomas ou começar a tratar a causa?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Organize a operação antes que pequenos vazamentos se transformem em grandes perdas de
            eficiência.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={siteUrl}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-extrabold uppercase tracking-wide text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              Conhecer o UniClinic
            </a>
            <a
              href={WPP_SIMPLE}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-primary/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-primary transition-colors hover:bg-secondary"
            >
              <WhatsIcon />
              Chamar no WhatsApp
            </a>
          </div>
          <div className="mt-9 space-y-1 text-sm text-muted-foreground">
            <p>
              WhatsApp:{" "}
              <a className="font-semibold text-primary underline" href={WPP_SIMPLE}>
                (48) 99124-2304
              </a>
            </p>
            <p>
              Site:{" "}
              <a className="font-semibold text-primary underline" href={siteUrl}>
                https://uniclinic.cloud
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a
                className="font-semibold text-primary underline"
                href="https://instagram.com/sistema.uniclinic"
              >
                @sistema.uniclinic
              </a>
            </p>
          </div>
          <p className="mt-8 text-lg font-bold text-green sm:text-xl">
            Clareza para gerir. Organização para crescer.
          </p>
        </section>

        {/* RODAPE */}
        <footer className="border-t border-border bg-secondary/60 py-10">
          <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 text-sm text-muted-foreground sm:px-8">
            <UniclinicLogo />
            <p className="font-semibold text-primary">UniClinic - Gestão para Clínicas</p>
            <p>
              Site:{" "}
              <a className="underline" href={siteUrl}>
                https://uniclinic.cloud
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a className="underline" href="https://instagram.com/sistema.uniclinic">
                @sistema.uniclinic
              </a>
            </p>
          </div>
        </footer>
      </main>

      {/* CTA FIXO MOBILE */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-navy-deep/95 p-3 backdrop-blur md:hidden">
        <div className="flex items-center gap-2">
          <a
            href={siteUrl}
            className="flex-1 rounded-xl bg-green px-4 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-navy-deep"
          >
            Testar por 5 dias
          </a>
          <a
            href={WPP_TESTE}
            aria-label="Falar pelo WhatsApp"
            className="grid size-12 shrink-0 place-items-center rounded-xl border border-white/25 text-white"
          >
            <WhatsIcon />
          </a>
        </div>
      </div>
    </>
  );
}
