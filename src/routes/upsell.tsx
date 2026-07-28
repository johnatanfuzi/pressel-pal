import { createFileRoute } from "@tanstack/react-router";
import { CalendarDays, Check, CheckCircle2, ListChecks, Snowflake, Timer } from "lucide-react";

import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/upsell")({
  head: () => ({
    meta: [
      { title: "Plano de 30 dias" },
      {
        name: "description",
        content:
          "Pagamento aprovado. Adicione o plano de 30 dias com cardápio pronto, listas de compras e método de preparo semanal.",
      },
      { property: "og:title", content: "Plano de 30 dias na Air Fryer" },
      {
        property: "og:description",
        content: "Cardápio de 30 dias, listas de compras e sistema de congelamento.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Upsell,
});

const ITEMS = [
  {
    icon: CalendarDays,
    title: "Cardápio de 30 dias pronto",
    text: "Almoço e jantar já definidos para cada dia do mês, usando as receitas que você acabou de comprar.",
  },
  {
    icon: ListChecks,
    title: "4 listas de compras",
    text: "Uma por semana, organizadas por seção do mercado: hortifruti, açougue, mercearia e congelados.",
  },
  {
    icon: Timer,
    title: "Método dos 90 minutos de domingo",
    text: "O passo a passo do que preparar em uma hora e meia para resolver metade da semana de uma vez.",
  },
  {
    icon: Snowflake,
    title: "Sistema de congelamento",
    text: "Como congelar cada preparo e o tempo máximo de cada alimento no freezer, sem perder textura.",
  },
];

function Upsell() {
  return (
    <div className="flex min-h-screen flex-col bg-background font-sans">
      <main className="flex-1 px-5 pb-10 pt-5">
        <div className="mx-auto w-full max-w-[720px]">
          <div className="flex items-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-black text-primary-foreground">
            <CheckCircle2 className="h-5 w-5 shrink-0" />
            Pagamento aprovado! Seu acesso já está garantido.
          </div>

          <h1 className="mt-6 text-balance text-3xl font-black leading-[1.15] text-brand-dark sm:text-4xl">
            Espere 30 segundos antes de acessar. Tem uma coisa que muda tudo.
          </h1>

          <p className="mt-3 text-[15px] font-semibold leading-relaxed text-foreground/80">
            Ter as receitas resolve metade do problema. A outra metade é decidir o que fazer todo
            dia, no meio da correria, com o que tem em casa. É aí que a maioria volta pro mesmo
            frango de sempre.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {ITEMS.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft"
              >
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-soft">
                  <Icon className="h-5 w-5 text-brand-dark" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-black text-brand-dark">{title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-foreground/75">
                    {text}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-muted p-4">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                Sem o plano
              </p>
              <p className="mt-2 text-sm font-bold text-foreground/80">
                Você decide o que comer 60 vezes por mês.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-cream p-4">
              <p className="text-xs font-black uppercase tracking-widest text-orange">
                Com o plano
              </p>
              <p className="mt-2 text-sm font-bold text-brand-dark">Você decide zero vezes.</p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-cream p-5 text-center">
            <p className="text-sm font-bold text-brand-dark">Plano de 30 dias na Air Fryer</p>
            <p className="mt-1 text-4xl font-black text-orange">R$ 97</p>
            <p className="mt-1 text-xs font-semibold text-muted-foreground">
              Pagamento único, acesso imediato junto com sua compra.
            </p>
          </div>

          <div className="mt-5">
            {/* BOTAO CAKTO UPSELL - COLAR AQUI */}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-muted-foreground">
            <Check className="h-4 w-4" />7 dias de garantia, igual à sua compra anterior
          </div>

          <p className="mt-5 text-center">
            <a
              href="#recusar"
              className="text-xs text-muted-foreground underline underline-offset-2"
            >
              Não, prefiro decidir o que cozinhar todo dia
            </a>
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
