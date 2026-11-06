import { createFileRoute } from "@tanstack/react-router";
import {
  Boxes,
  Building2,
  CalendarDays,
  ClipboardList,
  FileSignature,
  FileText,
  FlaskConical,
  History,
  KeyRound,
  Lock,
  LineChart,
  ServerCog,
  ShieldCheck,
  UserCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/Reveal";
import { UniclinicLogo } from "@/components/UniclinicLogo";
import { MockAgenda, MockAtendimentos, MockFinanceiro, MockPainel } from "@/components/Mockups";
import { useTrackedUrl } from "@/lib/use-tracked-url";
import ogImage from "@/assets/og-uniclinic.jpg";
import heroImg from "@/assets/hero-medica.jpg";
import recepcaoImg from "@/assets/recepcao-desorganizada.jpg";
import passosImg from "@/assets/recepcionista-tablet.jpg";
import medicoImg from "@/assets/medico-corredor.jpg";

const SIGNUP =
  "https://uniclinic.cloud/?utm_source=pressel&utm_medium=site&utm_campaign=uniclinic_space";
const WPP = "https://wa.me/5548912522304?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20Uniclinic.";
const WPP_PLANOS =
  "https://wa.me/5548912522304?text=Ol%C3%A1%2C%20quero%20conhecer%20os%20planos%20do%20Uniclinic.";
const OG_ABSOLUTE = `https://uniclinic.space${ogImage}`;

const TITLE = "Uniclinic | Sistema de gestão para clínicas de alto padrão";
const DESCRIPTION =
  "Agenda, prontuário eletrônico, prescrições, exames TUSS e SIGTAP, contratos, financeiro, estoque e relatórios em uma única plataforma para clínicas.";

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

const MENU: [string, string][] = [
  ["#recursos", "Recursos"],
  ["#como-funciona", "Como funciona"],
  ["#seguranca", "Segurança"],
  ["#planos", "Planos"],
  ["#faq", "FAQ"],
];

const SELOS = ["5 dias grátis", "Sem cartão de crédito", "Conta em 2 minutos"];

const MODULOS: [LucideIcon, string, string][] = [
  [CalendarDays, "Agenda inteligente", "Visão por profissional, status de confirmação e horários livres à vista."],
  [ClipboardList, "Pacientes e Prontuário Eletrônico", "Histórico clínico, evolução e documentos na ficha de cada paciente."],
  [FileText, "Prescrições", "Receitas emitidas e registradas no histórico do atendimento."],
  [FlaskConical, "Exames com TUSS e SIGTAP", "Solicitação de exames com as tabelas oficiais já integradas."],
  [FileSignature, "Contratos com geração de PDF", "Planos de tratamento e contratos gerados em PDF, prontos para assinar."],
  [Wallet, "Financeiro e contas a receber", "Recebimentos, pendências e fluxo do mês em um único painel."],
  [Boxes, "Compras e Estoque", "Controle de insumos, entradas e alertas de estoque baixo."],
  [LineChart, "Relatórios gerenciais", "Atendimentos, faturamento e comparecimento para decisões fundamentadas."],
  [History, "Auditoria de ações", "Registro de quem fez o quê, e quando, dentro da plataforma."],
  [Building2, "Multiclínica", "Gerencie mais de uma unidade a partir do mesmo acesso."],
];

const DIFERENCIAIS: [string, string, string][] = [
  ["Cobrança", "Por profissional cadastrado", "Por clínica — a equipe pode crescer sem multiplicar a mensalidade"],
  ["Módulos", "Sistemas separados e integrações avulsas", "Todos os módulos em um único sistema"],
  ["Migração", "Planilhas importadas por conta própria", "Migração assistida da base de pacientes"],
  ["Suporte", "Atendimento automatizado ou terceirizado", "Suporte humano, em português"],
];

const PASSOS: [string, string][] = [
  ["Crie sua conta", "Nome da clínica, e-mail e senha. Sem instalação."],
  ["Entre no painel já configurado", "O ambiente já vem estruturado para a rotina clínica."],
  ["Cadastre o primeiro paciente", "E monte a agenda da semana para ver a operação organizada."],
];

const SEGURANCA: [LucideIcon, string, string][] = [
  [UserCheck, "Login individual", "Cada membro da equipe acessa com o próprio usuário e senha."],
  [KeyRound, "Permissões por função", "Recepção, profissionais e gestão veem apenas o que lhes cabe."],
  [History, "Histórico auditado", "As atividades realizadas ficam registradas e rastreáveis."],
  [Lock, "Conexão criptografada", "Todo o tráfego entre você e a plataforma é criptografado."],
  [ServerCog, "Hospedagem segura", "Dados hospedados em servidores com controles de segurança."],
];

// PREENCHER: valores oficiais de cada plano. Nao inventar precos.
const PLANOS: { nome: string; perfil: string; itens: string[]; destaque?: boolean }[] = [
  {
    nome: "Essencial",
    perfil: "Consultórios e clínicas em início de estruturação.",
    itens: ["Agenda e pacientes", "Prontuário eletrônico", "Prescrições e exames", "Suporte em português"],
  },
  {
    nome: "Clínica",
    perfil: "Clínicas com equipe e rotina financeira consolidada.",
    itens: ["Tudo do Essencial", "Contratos com PDF", "Financeiro e estoque", "Relatórios gerenciais"],
    destaque: true,
  },
  {
    nome: "Multiclínica",
    perfil: "Grupos com mais de uma unidade.",
    itens: ["Tudo do plano Clínica", "Gestão de várias unidades", "Auditoria de ações", "Migração assistida"],
  },
];

const FAQ: [string, string][] = [
  [
    "Como funciona o período de avaliação?",
    "Você cria a conta e utiliza a plataforma por 5 dias, sem cadastrar cartão de crédito. Ao final, decide se deseja continuar.",
  ],
  [
    "Qual é o investimento depois?",
    "O valor depende do porte da clínica e do número de unidades. A equipe apresenta os planos durante a avaliação.",
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
      <p className="eyebrow text-gold">{eyebrow}</p>
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
      {/* 1. HEADER FIXO */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-navy-foreground/10 bg-navy-deep/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
          <a href="#topo" aria-label="Uniclinic — início">
            <UniclinicLogo tone="light" />
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-navy-foreground/75 lg:flex">
            {MENU.map(([href, label]) => (
              <a key={href} href={href} className="transition-colors hover:text-navy-foreground">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={signupUrl}
            className="rounded-full border border-gold/50 px-4 py-2 text-xs font-semibold text-navy-foreground transition-colors hover:bg-gold/10 sm:px-5 sm:text-sm"
          >
            Criar conta grátis
          </a>
        </div>
      </header>

      <main id="topo" className="pb-24 md:pb-0">
        {/* 2. HERO */}
        <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
          <img
            src={heroImg}
            alt="Médica de jaleco branco em consultório moderno analisando a agenda da clínica no notebook"
            width={1600}
            height={912}
            fetchPriority="high"
            decoding="async"
            sizes="100vw"
            className="absolute inset-0 -z-10 size-full object-cover object-right opacity-40"
          />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-deep/90 via-navy-deep/85 to-navy-deep" />

          <div className="mx-auto max-w-6xl px-5 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-40">
            <div className="reveal mx-auto max-w-3xl text-center">
              <p className="eyebrow text-gold">Sistema de gestão para clínicas</p>
              <h1 className="mt-6 font-serif text-[2.6rem] font-semibold leading-[1.04] tracking-[-0.015em] text-balance sm:text-6xl md:text-[4.25rem]">
                A gestão da sua clínica, com a precisão que ela merece.
              </h1>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-[1.85] text-navy-foreground/70 sm:text-lg">
                Agenda, prontuário, financeiro, estoque e relatórios em uma plataforma única — para
                clínicas que tratam a operação com o mesmo rigor que tratam seus pacientes.
              </p>
              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <a href={signupUrl} className="btn btn-light">
                  Criar conta grátis
                </a>
                <a href={WPP} className="btn btn-outline-light">
                  Falar no WhatsApp
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-navy-foreground/60">
                {SELOS.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span aria-hidden="true" className="size-1 rounded-full bg-gold" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal mx-auto mt-16 max-w-5xl" style={{ animationDelay: "180ms" }}>
              <MockPainel />
            </div>
          </div>
          <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        </section>

        {/* 3. O PROBLEMA */}
        <section className="defer-paint bg-offwhite py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
            <SectionTitle
              eyebrow="O problema"
              title="Clínicas excelentes ainda operam no escuro."
              text="Agenda em um lugar, histórico em outro, cobranças em planilhas. Quando a informação se espalha, a gestão passa a depender de memória — e o que não é visto não é corrigido."
            />
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

        {/* 4. MODULOS */}
        <section id="recursos" className="defer-paint scroll-mt-20 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              eyebrow="Recursos"
              title="Tudo o que a clínica precisa, em um único sistema."
              text="Dez módulos que conversam entre si: a informação é lançada uma vez e aparece onde precisa."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {MODULOS.map(([Icon, title, text], i) => (
                <Reveal
                  key={title}
                  delay={(i % 5) * 70}
                  className="card-lift rounded-2xl border border-border bg-card p-6"
                >
                  <span className="grid size-11 place-items-center rounded-xl bg-navy-deep text-gold">
                    <Icon className="size-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-[0.95rem] font-semibold leading-snug text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. DEMONSTRACAO */}
        <section className="defer-paint bg-navy-deep py-24 text-navy-foreground md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              dark
              eyebrow="Demonstração"
              title="Veja a rotina da clínica dentro da plataforma."
              text="Agenda, prontuário e financeiro como a sua equipe vai utilizar no dia a dia."
            />
            <div className="mt-14 grid gap-10 lg:grid-cols-3">
              <Reveal><MockAgenda /></Reveal>
              <Reveal delay={100}><MockAtendimentos /></Reveal>
              <Reveal delay={200}><MockFinanceiro /></Reveal>
            </div>
          </div>
        </section>

        {/* 6. DIFERENCIAIS */}
        <section className="defer-paint bg-offwhite py-24 md:py-32">
          <div className="mx-auto max-w-5xl px-5 sm:px-8">
            <SectionTitle
              center
              eyebrow="Diferenciais"
              title="Pensado para clínicas que querem crescer sem complicar."
            />
            <Reveal className="mt-14 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="hidden grid-cols-[0.7fr_1fr_1.2fr] border-b border-border bg-secondary/60 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground md:grid">
                <span className="px-6 py-4" />
                <span className="px-6 py-4">O mais comum no mercado</span>
                <span className="border-l border-gold/30 px-6 py-4 text-primary">Com Uniclinic</span>
              </div>
              <ul className="divide-y divide-border">
                {DIFERENCIAIS.map(([tema, comum, uni]) => (
                  <li key={tema} className="grid gap-2 px-6 py-6 md:grid-cols-[0.7fr_1fr_1.2fr] md:gap-0 md:p-0">
                    <span className="font-serif text-xl font-semibold text-primary md:px-6 md:py-6">{tema}</span>
                    <span className="text-sm leading-relaxed text-muted-foreground line-through decoration-border md:px-6 md:py-6 md:no-underline">
                      {comum}
                    </span>
                    <span className="flex gap-3 text-sm font-semibold leading-relaxed text-primary md:border-l md:border-gold/30 md:px-6 md:py-6">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                      {uni}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* 7. COMO FUNCIONA */}
        <section id="como-funciona" className="defer-paint scroll-mt-20 bg-background py-24 md:py-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-[0.95fr_1.05fr]">
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
                eyebrow="Como funciona"
                title="Do cadastro ao primeiro paciente em 5 minutos."
                text="Sem instalação e sem projeto de implantação longo."
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
                  Criar conta grátis
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 8. SEGURANCA E LGPD */}
        <section id="seguranca" className="defer-paint scroll-mt-20 bg-navy-deep py-24 text-navy-foreground md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              dark
              eyebrow="Segurança e LGPD"
              title="Dados clínicos tratados com a seriedade que exigem."
              text="Controle de acesso e rastreabilidade para proteger a clínica e seus pacientes."
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {SEGURANCA.map(([Icon, title, text], i) => (
                <Reveal
                  key={title}
                  delay={i * 70}
                  className="rounded-2xl border border-navy-foreground/10 bg-navy-foreground/[0.04] p-6"
                >
                  <span className="grid size-10 place-items-center rounded-full border border-gold/40 text-gold">
                    <Icon className="size-4" strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-[1.7] text-navy-foreground/65">{text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 9. PLANOS */}
        <section id="planos" className="defer-paint scroll-mt-20 bg-offwhite py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <SectionTitle
              center
              eyebrow="Planos"
              title="Um investimento proporcional ao tamanho da sua clínica."
              text="A cobrança é por clínica, não por profissional. O valor varia conforme o porte e o número de unidades."
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {PLANOS.map((p, i) => (
                <Reveal
                  key={p.nome}
                  delay={i * 100}
                  className={`flex flex-col rounded-2xl border p-8 ${
                    p.destaque
                      ? "border-gold/60 bg-navy-deep text-navy-foreground shadow-soft lg:-translate-y-3"
                      : "border-border bg-card"
                  }`}
                >
                  {p.destaque && (
                    <p className="mb-4 self-start rounded-full border border-gold/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-gold">
                      Mais escolhido
                    </p>
                  )}
                  <h3 className={`font-serif text-3xl font-semibold ${p.destaque ? "" : "text-primary"}`}>{p.nome}</h3>
                  <p className={`mt-2 text-sm leading-relaxed ${p.destaque ? "text-navy-foreground/65" : "text-muted-foreground"}`}>
                    {p.perfil}
                  </p>
                  <p className={`mt-6 text-sm font-semibold ${p.destaque ? "text-gold" : "text-primary"}`}>
                    Valor sob consulta
                  </p>
                  <ul className="mt-6 flex-1 space-y-3 text-sm">
                    {p.itens.map((it) => (
                      <li key={it} className="flex gap-3">
                        <ShieldCheck className="size-4 shrink-0 text-gold" strokeWidth={1.8} aria-hidden="true" />
                        <span className={p.destaque ? "text-navy-foreground/85" : "text-foreground"}>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WPP_PLANOS}
                    className={`btn mt-8 w-full ${p.destaque ? "btn-light" : "btn-outline-primary"}`}
                  >
                    Falar com a equipe
                  </a>
                </Reveal>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-muted-foreground">
              Todos os planos começam com 5 dias grátis, sem cartão de crédito.{" "}
              <a href={signupUrl} className="font-semibold text-primary underline underline-offset-4">
                Criar conta grátis
              </a>
            </p>
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="defer-paint scroll-mt-20 bg-background py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <SectionTitle center eyebrow="FAQ" title="Perguntas frequentes" />
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
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy-deep/85" />
          <Reveal className="mx-auto max-w-3xl px-5 py-28 text-center sm:px-8 md:py-36">
            <p className="eyebrow text-gold">Comece hoje</p>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-[1.08] text-balance sm:text-6xl">
              Sua clínica merece ser gerida com clareza.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-[1.8] text-navy-foreground/75 sm:text-lg">
              Crie a conta e avalie o Uniclinic na rotina real da sua clínica por 5 dias, sem cartão
              de crédito.
            </p>
            <div className="mt-11 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href={signupUrl} className="btn btn-light w-full sm:w-auto">
                Criar conta grátis
              </a>
              <a href={WPP} className="btn btn-outline-light w-full sm:w-auto">
                Falar no WhatsApp
              </a>
            </div>
          </Reveal>
        </section>

        {/* 12. RODAPE */}
        <footer className="bg-navy-deep text-navy-foreground/60">
          <div aria-hidden="true" className="h-px w-full bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <UniclinicLogo tone="light" />
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                Sistema de gestão para clínicas médicas e estéticas.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Navegação</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {MENU.map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="transition-colors hover:text-navy-foreground">{label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contato</p>
              <ul className="mt-4 space-y-2.5 text-sm">
                <li><a className="transition-colors hover:text-navy-foreground" href={WPP}>WhatsApp (48) 9125-2304</a></li>
                <li>
                  <a className="transition-colors hover:text-navy-foreground" href="https://instagram.com/sistema.uniclinic">
                    Instagram @sistema.uniclinic
                  </a>
                </li>
                <li><a className="transition-colors hover:text-navy-foreground" href={signupUrl}>uniclinic.cloud</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-navy-foreground/10">
            <p className="mx-auto max-w-6xl px-5 py-6 text-xs sm:px-8">
              © {new Date().getFullYear()} Uniclinic. Todos os direitos reservados.
            </p>
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
          Criar conta grátis
        </a>
      </div>
    </>
  );
}
