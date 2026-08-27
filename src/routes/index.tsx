import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { InitialQuiz } from "@/components/InitialQuiz";
import { UniclinicLogo } from "@/components/UniclinicLogo";
import { MockAgenda, MockAtendimentos, MockFinanceiro } from "@/components/Mockups";
import { useTrackedUrl } from "@/lib/use-tracked-url";
import ogImage from "@/assets/og-uniclinic.jpg";
import heroImg from "@/assets/hero-medica.jpg";
import recepcaoImg from "@/assets/recepcao-desorganizada.jpg";
import passosImg from "@/assets/recepcionista-tablet.jpg";
import medicoImg from "@/assets/medico-corredor.jpg";

const SIGNUP =
  "https://uniclinic.cloud/?utm_source=pressel&utm_medium=site&utm_campaign=uniclinic_space";
const WPP_SIMPLE =
  "https://wa.me/5548991242304?text=Ol%C3%A1%2C%20quero%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20Uniclinic.";
const OG_ABSOLUTE = `https://pressel-pal.lovable.app${ogImage}`;

const TITLE = "Uniclinic | Crie sua conta e organize a clínica em 5 minutos";
const DESCRIPTION =
  "Agenda, pacientes, prontuários, contratos e financeiro em um só lugar. Teste o Uniclinic por 5 dias grátis, sem cartão de crédito.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://uniclinic.space/" },
      { property: "og:image", content: OG_ABSOLUTE },
      { name: "twitter:card", content: "summary_large_image" },
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

const BENEFICIOS: [string, string][] = [
  [
    "Enxergue os horários vazios da semana",
    "Você abre o sistema e vê os buracos da agenda antes que eles virem prejuízo.",
  ],
  [
    "Saiba quem ainda não confirmou",
    "A agenda mostra o que está confirmado e o que está pendente, sem depender de memória.",
  ],
  [
    "Encontre o histórico do paciente em segundos",
    "Consultas, prontuários, prescrições e exames ficam na ficha do paciente, não em pastas soltas.",
  ],
  [
    "Acompanhe o que entrou e o que ficou em aberto",
    "Recebimentos e pendências ficam listados, então você para de conferir planilha por planilha.",
  ],
  [
    "Pare de refazer o mesmo trabalho",
    "A equipe lança a informação uma vez e ela aparece na agenda, no atendimento e no financeiro.",
  ],
  [
    "Decida com dados da própria clínica",
    "Relatórios de atendimentos, faturamento e comparecimento no lugar do 'eu acho'.",
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

const PASSOS: [string, string][] = [
  ["Crie sua conta", "Só nome da clínica, e-mail e senha."],
  ["Entre no painel já configurado", "Você cai direto na área de trabalho, sem instalação."],
  [
    "Cadastre seu primeiro paciente",
    "E monte a agenda da semana para ver a operação organizada.",
  ],
];

const CONFIANCA: [string, string][] = [
  ["Acesso por login individual", "Cada pessoa da equipe entra com o próprio usuário e senha."],
  ["Níveis de permissão por função", "Você define o que cada função pode ver e editar."],
  ["Histórico de atividades", "As ações realizadas ficam registradas no sistema."],
  ["Dados hospedados em servidor com criptografia", "O acesso à plataforma é feito por conexão criptografada."],
];

const FAQ: [string, string][] = [
  [
    "Preciso cadastrar cartão de crédito?",
    "Não. A conta de teste é criada com nome da clínica, e-mail e senha. Nenhum dado de pagamento é pedido para começar.",
  ],
  [
    "O que acontece quando os 5 dias acabam?",
    "O acesso de teste é encerrado e seus dados ficam guardados. Se decidir seguir, você ativa o plano e continua de onde parou.",
  ],
  [
    // PREENCHER: valores oficiais dos planos do Uniclinic.
    "Quanto custa depois?",
    "O valor depende do tamanho da clínica e do número de usuários. A equipe apresenta os planos durante o teste, sem compromisso.",
  ],
  [
    "Consigo migrar meus pacientes que estão em planilha?",
    "Sim, é possível levar sua base de pacientes para o sistema. Fale com a equipe durante o teste para combinar como enviar seu arquivo.",
  ],
  [
    "Minha equipe vai conseguir usar sem treinamento?",
    "O painel foi feito para o uso do dia a dia da recepção e do consultório. Você e a equipe conseguem cadastrar paciente e montar agenda no primeiro acesso, e a equipe do Uniclinic ajuda pelo WhatsApp se travar em algo.",
  ],
  [
    "E se eu não gostar?",
    "Você simplesmente não continua depois do teste. Não há cobrança automática nem contrato assinado para experimentar.",
  ],
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

function WhatsIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12.04 2C6.6 2 2.2 6.4 2.2 11.84c0 1.9.53 3.68 1.46 5.2L2 22l5.1-1.6a9.9 9.9 0 0 0 4.94 1.3c5.44 0 9.84-4.4 9.84-9.84S17.48 2 12.04 2Zm0 17.8c-1.6 0-3.1-.44-4.38-1.2l-.32-.2-3.02.95.95-2.94-.2-.32a7.94 7.94 0 0 1-1.24-4.25c0-4.42 3.6-8.02 8.03-8.02 4.43 0 8.03 3.6 8.03 8.02 0 4.43-3.6 8.02-8.03 8.02Zm4.5-5.9c-.24-.12-1.44-.7-1.66-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.42-1.34-1.66-.14-.24-.02-.38.1-.5.12-.12.26-.3.4-.46.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.32-.74-1.8-.2-.48-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.7 4.12 3.68 2.42.98 2.42.66 2.86.62.44-.04 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function WhatsLink({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <p
      className={`mt-5 text-sm ${tone === "light" ? "text-white/60" : "text-muted-foreground"}`}
    >
      Prefere tirar uma dúvida antes?{" "}
      <a
        href={WPP_SIMPLE}
        className={`font-semibold underline underline-offset-4 ${
          tone === "light" ? "text-white hover:text-green" : "text-primary hover:text-green"
        }`}
      >
        Fale com a equipe no WhatsApp
      </a>
    </p>
  );
}

function PresellPage() {
  const signupUrl = useTrackedUrl(SIGNUP);
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
      {showQuiz && <InitialQuiz onSkip={() => setShowQuiz(false)} />}

      <main className="pb-24 md:pb-0">
        {/* 1. HERO */}
        <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
          <img
            src={heroImg}
            alt="Médica de jaleco branco em consultório moderno analisando a agenda da clínica no notebook"
            width={1600}
            height={912}
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 -z-10 size-full object-cover object-right"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-navy-deep/90 md:bg-gradient-to-r md:from-navy-deep md:via-navy-deep/92 md:to-navy-deep/70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-60"
            style={{
              background:
                "radial-gradient(900px 480px at 15% -10%, color-mix(in oklab, var(--blue) 45%, transparent), transparent 70%), radial-gradient(700px 420px at 95% 20%, color-mix(in oklab, var(--green) 30%, transparent), transparent 70%)",
            }}
          />

          <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-8 sm:px-8 md:pb-24 md:pt-10">
            <UniclinicLogo tone="light" />

            <div className="mt-12 grid items-center gap-12 md:mt-16 md:grid-cols-[1.05fr_0.95fr]">
              <div className="reveal">
                <p className="inline-flex items-center gap-2 rounded-full border border-green/30 bg-green/10 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-green">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-green" />
                  Gestão para clínicas
                </p>
                <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.06] tracking-[-0.02em] text-balance sm:text-5xl md:text-[3.4rem]">
                  Sua clínica pode estar perdendo dinheiro em lugares que você não vê.
                </h1>
                <p className="mt-6 max-w-xl text-base leading-[1.7] text-white/75 sm:text-lg">
                  Horário vazio, paciente que não confirma, cobrança esquecida, retrabalho da
                  equipe. O Uniclinic reúne agenda, pacientes, prontuários, contratos e financeiro
                  em um só lugar — e você começa a enxergar tudo em 5 minutos.
                </p>

                <div className="mt-9">
                  <a href={signupUrl} className="btn btn-green w-full sm:w-auto">
                    Criar minha conta grátis
                  </a>
                </div>
                <ul className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/70">
                  {["5 dias grátis", "Sem cartão de crédito", "Conta criada em 2 minutos"].map(
                    (item) => (
                      <li key={item} className="flex items-center gap-1.5">
                        <Check className="size-4 text-green" />
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <WhatsLink />
              </div>

              <div className="reveal">
                <MockAgenda />
              </div>
            </div>
          </div>
        </section>

        {/* 2. IDENTIFICACAO (texto reduzido) */}
        <section className="defer-paint mx-auto max-w-5xl px-5 py-14 sm:px-8 md:py-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl font-extrabold leading-tight tracking-tight text-primary sm:text-4xl">
                Uma clínica movimentada também pode operar no escuro.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Quando agenda, pacientes, atendimentos e finanças ficam em lugares diferentes, a
                equipe passa a depender de memória, mensagens e planilhas — e pequenas falhas viram
                tempo perdido.
              </p>
              <blockquote className="mt-8 border-l-4 border-green pl-5 text-lg font-bold text-primary sm:text-2xl">
                Onde a informação se espalha, o controle desaparece.
              </blockquote>
            </div>
            <img
              src={recepcaoImg}
              alt="Balcão de recepção de clínica no fim do expediente com pilhas de fichas de papel, agenda aberta e telefone fora do gancho"
              width={1280}
              height={864}
              loading="lazy"
              decoding="async"
              sizes="(min-width: 768px) 480px, 100vw"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </section>


        {/* 3. SINAIS */}
        <section className="defer-paint border-y border-border bg-secondary/60 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Você reconhece alguma destas situações?
            </h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {SINAIS.map((item) => (
                <li
                  key={item}
                  className="card-lift flex items-start gap-3 rounded-2xl border border-border bg-card p-5 text-base leading-relaxed text-foreground"
                >
                  <span aria-hidden="true" className="mt-1 size-2 shrink-0 rounded-full bg-blue" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-lg font-bold text-primary sm:text-xl">
              O que não é acompanhado dificilmente é corrigido.
            </p>
          </div>
        </section>

        {/* 4. APRESENTACAO + MOCKUPS */}
        <section className="defer-paint bg-navy py-16 text-navy-foreground md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight sm:text-4xl">
              Veja como sua rotina fica dentro do sistema.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
              Agenda, pacientes, prontuários, prescrições, exames, contratos, financeiro e
              relatórios em um único ambiente.
            </p>

            <div className="mt-12 grid gap-8 md:grid-cols-2">
              <MockAtendimentos />
              <MockFinanceiro />
            </div>

            <div className="mt-12">
              <a href={signupUrl} className="btn btn-green w-full sm:w-auto">
                Criar minha conta grátis
              </a>
              <WhatsLink />
            </div>
          </div>
        </section>

        {/* 5. BENEFICIOS CONCRETOS */}
        <section className="defer-paint mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
            O que muda na prática no seu dia a dia.
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFICIOS.map(([title, text]) => (
              <div key={title} className="card-lift rounded-2xl border border-border bg-card p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-green-soft text-green">
                  <Check />
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. COMPARACAO */}
        <section className="defer-paint border-y border-border bg-secondary/60 py-16 md:py-24">
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
                  Com Uniclinic
                </h3>
                <ul className="mt-5 space-y-3">
                  {DEPOIS.map((item) => (
                    <li key={item} className="flex gap-3 text-sm font-semibold text-primary">
                      <Check className="text-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. TESTE DE 5 DIAS */}
        <section className="defer-paint bg-navy-deep py-16 text-navy-foreground md:py-24">
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
                Crie a conta, navegue pelos módulos e avalie com a sua própria rotina. Sem cartão de
                crédito.
              </p>
              <div className="mt-8">
                <a href={signupUrl} className="btn btn-green w-full sm:w-auto">
                  Criar minha conta grátis
                </a>
              </div>
              <WhatsLink />
            </div>
          </div>
        </section>

        {/* 8. PASSO A PASSO */}
        <section className="defer-paint mx-auto max-w-5xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Do cadastro ao primeiro paciente em 5 minutos.
          </h2>
          <img
            src={passosImg}
            alt="Recepcionista de uniforme claro usando um tablet no balcão de uma clínica bem iluminada"
            width={1280}
            height={864}
            loading="lazy"
            decoding="async"
            sizes="(min-width: 1024px) 960px, 100vw"
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-soft"
          />
          <ol className="mt-10 grid gap-4 md:grid-cols-3">

            {PASSOS.map(([title, text], index) => (
              <li key={title} className="card-lift rounded-2xl border border-border bg-card p-6">
                <span className="grid size-10 place-items-center rounded-xl bg-navy text-sm font-extrabold text-navy-foreground">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-bold leading-snug text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10">
            <a href={signupUrl} className="btn btn-primary-solid w-full sm:w-auto">
              Criar minha conta grátis
            </a>
            <WhatsLink tone="dark" />
          </div>
        </section>

        {/* 9. CONFIANCA */}
        <section className="defer-paint border-y border-border bg-secondary/60 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <h2 className="max-w-2xl text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
              Seus dados e os dos seus pacientes.
            </h2>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {CONFIANCA.map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-6">
                  <h3 className="text-base font-bold leading-snug text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="defer-paint mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
          <h2 className="text-2xl font-extrabold tracking-tight text-primary sm:text-4xl">
            Perguntas frequentes
          </h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {FAQ.map(([question, answer]) => (
              <details key={question} className="group px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-primary">
                  {question}
                  <span
                    aria-hidden="true"
                    className="grid size-7 shrink-0 place-items-center rounded-lg bg-secondary text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* 11. CTA FINAL */}
        <section className="defer-paint relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
          <img
            src={medicoImg}
            alt="Médico de jaleco branco em pé no corredor claro de uma clínica moderna"
            width={1600}
            height={912}
            loading="lazy"
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 -z-10 size-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-navy-deep/85 md:bg-gradient-to-r md:from-navy-deep md:via-navy-deep/90 md:to-navy-deep/70"
          />
          <div className="mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 md:py-28">
            <h2 className="text-2xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Comece hoje a enxergar o que a sua clínica não está vendo.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              Crie sua conta grátis e organize agenda, pacientes e financeiro em um só lugar.
            </p>
            <div className="mt-8">
              <a href={signupUrl} className="btn btn-green w-full sm:w-auto">
                Criar minha conta grátis
              </a>
            </div>
            <p className="mt-4 text-sm text-white/80">
              5 dias grátis · Sem cartão de crédito · Conta criada em 2 minutos
            </p>
            <p className="mt-8 text-lg font-bold text-green sm:text-xl">
              Clareza para gerir. Organização para crescer.
            </p>
          </div>
        </section>


        {/* RODAPE */}
        <footer className="defer-paint border-t border-border bg-secondary/60 py-12">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <UniclinicLogo />
              <p className="mt-3 text-sm text-muted-foreground">Uniclinic — Gestão para Clínicas</p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a className="font-semibold text-primary hover:underline" href={signupUrl}>
                uniclinic.cloud
              </a>
              <a
                className="font-semibold text-primary hover:underline"
                href="https://instagram.com/sistema.uniclinic"
              >
                @sistema.uniclinic
              </a>
              <a className="font-semibold text-primary hover:underline" href={WPP_SIMPLE}>
                (48) 99124-2304
              </a>
            </div>
          </div>
        </footer>
      </main>

      {/* WHATSAPP FLUTUANTE */}
      <a
        href={WPP_SIMPLE}
        aria-label="Falar com a equipe no WhatsApp"
        className="fixed right-4 bottom-24 z-50 grid size-13 place-items-center rounded-full bg-green text-navy-deep shadow-cta transition-transform hover:-translate-y-0.5 active:scale-95 md:bottom-6"
      >
        <WhatsIcon className="size-7" />
      </a>

      {/* CTA FIXO MOBILE */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy-deep px-3 pt-3 md:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={signupUrl}
          className="block rounded-xl bg-green px-4 py-3.5 text-center text-sm font-extrabold uppercase tracking-wide text-navy-deep transition-transform active:scale-[0.98]"
        >
          Criar conta grátis
        </a>
      </div>
    </>
  );
}
