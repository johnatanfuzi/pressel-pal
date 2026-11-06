import { createFileRoute } from "@tanstack/react-router";

import { Reveal } from "@/components/Reveal";
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
const WPP =
  "https://wa.me/5548912522304?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Uniclinic.";
const OG_ABSOLUTE = `https://pressel-pal.lovable.app${ogImage}`;

const TITLE = "Uniclinic | Sistema de gestão para clínicas de alto padrão";
const DESCRIPTION =
  "Agenda, pacientes, prontuários, contratos, financeiro e relatórios em uma única plataforma. Gestão clínica sóbria, segura e precisa.";

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
  component: ProductPage,
});

const MODULOS: [string, string, string][] = [
  ["01", "Agenda", "Visão semanal por profissional, status de confirmação e horários livres à vista."],
  ["02", "Pacientes", "Cadastro completo com histórico de consultas, documentos e observações."],
  ["03", "Prontuário", "Evolução clínica, prescrições e exames organizados na ficha de cada paciente."],
  ["04", "Contratos", "Planos de tratamento e contratos vinculados ao paciente, sempre localizáveis."],
  ["05", "Financeiro", "Recebimentos, pendências e fluxo do mês acompanhados em um só painel."],
  ["06", "Relatórios", "Atendimentos, faturamento e comparecimento para decisões fundamentadas."],
];

const PRINCIPIOS: [string, string][] = [
  ["Uma única fonte de verdade", "A informação é lançada uma vez e aparece na agenda, no atendimento e no financeiro."],
  ["Visibilidade da operação", "Horários ociosos, confirmações pendentes e cobranças em aberto deixam de ser invisíveis."],
  ["Rotina sem retrabalho", "A equipe deixa de conferir papéis, mensagens e planilhas paralelas."],
];

const PASSOS: [string, string][] = [
  ["Crie a conta", "Nome da clínica, e-mail e senha. Sem instalação."],
  ["Acesse o painel", "O ambiente já vem estruturado para a rotina clínica."],
  ["Comece a operar", "Cadastre os primeiros pacientes e organize a agenda da semana."],
];

const SEGURANCA: [string, string][] = [
  ["Acesso individual", "Cada membro da equipe utiliza o próprio usuário e senha."],
  ["Permissões por função", "Defina o que recepção, profissionais e gestão podem ver e editar."],
  ["Histórico de atividades", "As ações realizadas na plataforma ficam registradas."],
  ["Conexão criptografada", "Dados hospedados em servidor com tráfego criptografado."],
];

const FAQ: [string, string][] = [
  [
    "Como funciona o período de avaliação?",
    "Você cria a conta e utiliza a plataforma por 5 dias, sem cadastrar cartão de crédito. Ao final, decide se deseja continuar.",
  ],
  [
    // PREENCHER: valores oficiais dos planos do Uniclinic.
    "Qual é o investimento depois?",
    "O valor depende do porte da clínica e do número de usuários. A equipe apresenta os planos durante a avaliação.",
  ],
  [
    "É possível migrar uma base de pacientes existente?",
    "Sim. A equipe orienta o envio da sua base para que a migração ocorra com segurança.",
  ],
  [
    "A equipe precisa de treinamento?",
    "A interface foi desenhada para a rotina da recepção e do consultório. O suporte acompanha os primeiros passos pelo WhatsApp.",
  ],
  [
    "O que acontece com os dados se eu não continuar?",
    "Não há cobrança automática nem contrato para avaliar a plataforma.",
  ],
];

function SectionTitle({
  eyebrow,
  title,
  text,
  dark = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className={`eyebrow ${dark ? "text-gold" : "text-gold"}`}>{eyebrow}</p>
      <h2
        className={`mt-5 font-serif text-4xl font-semibold leading-[1.08] tracking-[-0.01em] text-balance sm:text-5xl ${
          dark ? "text-navy-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 text-base leading-[1.8] sm:text-lg ${
            dark ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          {text}
        </p>
      )}
    </Reveal>
  );
}

function ProductPage() {
  const signupUrl = useTrackedUrl(SIGNUP);

  return (
    <>
      {/* NAVEGACAO */}
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-8">
          <UniclinicLogo tone="light" />
          <nav className="hidden items-center gap-9 text-sm font-medium text-navy-foreground/75 md:flex">
            <a href="#plataforma" className="transition-colors hover:text-navy-foreground">Plataforma</a>
            <a href="#seguranca" className="transition-colors hover:text-navy-foreground">Segurança</a>
            <a href="#faq" className="transition-colors hover:text-navy-foreground">Dúvidas</a>
            <a
              href={signupUrl}
              className="rounded-full border border-gold/50 px-5 py-2.5 text-navy-foreground transition-colors hover:bg-gold/10"
            >
              Criar conta
            </a>
          </nav>
        </div>
      </header>

      <main className="pb-24 md:pb-0">
        {/* HERO */}
        <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
          <img
            src={heroImg}
            alt="Médica de jaleco branco em consultório moderno analisando a agenda da clínica no notebook"
            width={1600}
            height={912}
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 -z-10 size-full object-cover object-right opacity-60"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-navy-deep/85 md:bg-gradient-to-r md:from-navy-deep md:via-navy-deep/92 md:to-navy-deep/60"
          />

          <div className="mx-auto max-w-6xl px-6 pb-24 pt-36 sm:px-8 md:pb-32 md:pt-44">
            <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="reveal">
                <p className="eyebrow text-gold">Gestão clínica</p>
                <h1 className="mt-6 font-serif text-[2.75rem] font-semibold leading-[1.02] tracking-[-0.015em] text-balance sm:text-6xl md:text-[4.25rem]">
                  A gestão da sua clínica, com a precisão que ela merece.
                </h1>
                <p className="mt-8 max-w-xl text-base leading-[1.85] text-navy-foreground/70 sm:text-lg">
                  O Uniclinic reúne agenda, pacientes, prontuários, contratos e financeiro em uma
                  plataforma única — para clínicas que tratam a operação com o mesmo rigor que
                  tratam seus pacientes.
                </p>
                <div className="mt-11 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <a href={signupUrl} className="btn btn-light">
                    Criar conta
                  </a>
                  <a href="#plataforma" className="btn btn-outline-light">
                    Conhecer a plataforma
                  </a>
                </div>
                <p className="mt-6 text-sm text-navy-foreground/55">
                  Avaliação de 5 dias · Sem cartão de crédito
                </p>
              </div>
              <div className="reveal hidden sm:block" style={{ animationDelay: "150ms" }}>
                <MockAgenda />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </section>

        {/* MODULOS EM LINHA */}
        <section className="border-b border-border bg-offwhite">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-y-4 px-6 py-8 text-center text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:grid-cols-3 sm:px-8 md:grid-cols-6">
            {MODULOS.map(([, name]) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        </section>

        {/* CONTEXTO */}
        <section className="defer-paint bg-offwhite py-24 md:py-36">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-8 md:grid-cols-2">
            <div>
              <SectionTitle
                eyebrow="O contexto"
                title="Clínicas excelentes ainda operam com informação dispersa."
                text="Agenda em um lugar, histórico em outro, cobranças em planilhas. A qualidade do atendimento não acompanha a fragmentação dos bastidores — e a gestão passa a depender de memória."
              />
            </div>
            <Reveal delay={120}>
              <img
                src={recepcaoImg}
                alt="Balcão de recepção de clínica com fichas de papel, agenda aberta e telefone fora do gancho"
                width={1280}
                height={864}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 540px, 100vw"
                className="aspect-[4/3] w-full rounded-2xl object-cover shadow-soft"
              />
            </Reveal>
          </div>
        </section>

        {/* PRINCIPIOS */}
        <section className="defer-paint bg-background py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionTitle eyebrow="A proposta" title="Uma operação clara, do agendamento ao fechamento do mês." />
            <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
              {PRINCIPIOS.map(([title, text], i) => (
                <Reveal key={title} delay={i * 100} className="bg-card p-9">
                  <span aria-hidden="true" className="block h-px w-8 bg-gold" />
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-primary">{title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.8] text-muted-foreground">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PLATAFORMA */}
        <section id="plataforma" className="defer-paint scroll-mt-8 bg-navy-deep py-24 text-navy-foreground md:py-36">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionTitle
              dark
              eyebrow="A plataforma"
              title="Seis módulos. Um único ambiente."
              text="Cada área da clínica conversa com as demais, sem integrações improvisadas."
            />
            <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {MODULOS.map(([num, name, text], i) => (
                <Reveal key={name} delay={(i % 3) * 90} className="border-t border-navy-foreground/15 pt-7">
                  <p className="font-serif text-lg text-gold">{num}</p>
                  <h3 className="mt-3 font-serif text-2xl font-semibold">{name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.8] text-navy-foreground/65">{text}</p>
                </Reveal>
              ))}
            </div>

            <div className="mt-24 grid gap-10 md:grid-cols-2">
              <Reveal><MockAtendimentos /></Reveal>
              <Reveal delay={120}><MockFinanceiro /></Reveal>
            </div>
          </div>
        </section>

        {/* IMPLANTACAO */}
        <section className="defer-paint bg-offwhite py-24 md:py-36">
          <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 sm:px-8 md:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <img
                src={passosImg}
                alt="Recepcionista de uniforme claro usando um tablet no balcão de uma clínica bem iluminada"
                width={1280}
                height={864}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 520px, 100vw"
                className="aspect-[4/5] w-full rounded-2xl object-cover shadow-soft"
              />
            </Reveal>
            <div>
              <SectionTitle
                eyebrow="Implantação"
                title="Pronto para uso no primeiro acesso."
                text="Sem instalação, sem projeto de implantação longo. A clínica começa a operar no mesmo dia."
              />
              <ol className="mt-12 space-y-8">
                {PASSOS.map(([title, text], i) => (
                  <Reveal as="li" key={title} delay={i * 100} className="flex gap-6">
                    <span className="font-serif text-3xl font-semibold leading-none text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-base font-semibold text-primary">{title}</span>
                      <span className="mt-1 block text-[0.95rem] leading-[1.75] text-muted-foreground">{text}</span>
                    </span>
                  </Reveal>
                ))}
              </ol>
              <Reveal className="mt-12">
                <a href={signupUrl} className="btn btn-primary-solid w-full sm:w-auto">
                  Criar conta
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SEGURANCA */}
        <section id="seguranca" className="defer-paint scroll-mt-8 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <SectionTitle
              eyebrow="Segurança"
              title="Dados clínicos tratados com seriedade."
              text="Controle de acesso e rastreabilidade para proteger a clínica e seus pacientes."
            />
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SEGURANCA.map(([title, text], i) => (
                <Reveal
                  key={title}
                  delay={i * 80}
                  className="rounded-2xl border border-border bg-card p-7 shadow-[0_1px_2px_color-mix(in_oklab,var(--navy)_6%,transparent)]"
                >
                  <span aria-hidden="true" className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold">
                    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M12 3 5 6v6c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6z" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <h3 className="mt-6 text-base font-semibold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-[1.75] text-muted-foreground">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="defer-paint scroll-mt-8 bg-offwhite py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 sm:px-8">
            <SectionTitle center eyebrow="Dúvidas" title="Perguntas frequentes" />
            <Reveal className="mt-14 divide-y divide-border border-y border-border">
              {FAQ.map(([q, a]) => (
                <details key={q} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl font-semibold text-primary">
                    {q}
                    <span
                      aria-hidden="true"
                      className="text-2xl font-light text-gold transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 pr-10 text-[0.95rem] leading-[1.8] text-muted-foreground">{a}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
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
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-deep/90" />
          <Reveal className="mx-auto max-w-3xl px-6 py-28 text-center sm:px-8 md:py-36">
            <p className="eyebrow text-gold">Uniclinic</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-balance sm:text-6xl">
              Conheça a plataforma na rotina da sua clínica.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.8] text-navy-foreground/70 sm:text-lg">
              Crie a conta e avalie o Uniclinic por 5 dias, sem cartão de crédito.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={signupUrl} className="btn btn-light w-full sm:w-auto">
                Criar conta
              </a>
              <a href={WPP} className="btn btn-outline-light w-full sm:w-auto">
                Falar com a equipe
              </a>
            </div>
          </Reveal>
        </section>

        {/* RODAPE */}
        <footer className="bg-navy-deep text-navy-foreground/60">
          <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div>
              <UniclinicLogo tone="light" />
              <p className="mt-4 text-sm">Sistema de gestão para clínicas.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm">
              <a className="transition-colors hover:text-navy-foreground" href={signupUrl}>uniclinic.cloud</a>
              <a className="transition-colors hover:text-navy-foreground" href="https://instagram.com/sistema.uniclinic">
                @sistema.uniclinic
              </a>
              <a className="transition-colors hover:text-navy-foreground" href={WPP}>(48) 9125-2304</a>
            </div>
          </div>
        </footer>
      </main>

      {/* CTA FIXO MOBILE */}
      <div
        className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/20 bg-navy-deep/95 px-4 pt-3 backdrop-blur md:hidden"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <a
          href={signupUrl}
          className="block rounded-xl bg-offwhite px-4 py-3.5 text-center text-sm font-semibold tracking-wide text-navy-deep active:scale-[0.98]"
        >
          Criar conta
        </a>
      </div>
    </>
  );
}
