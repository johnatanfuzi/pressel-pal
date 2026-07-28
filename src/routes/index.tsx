import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Check,
  ShieldCheck,
  Clock,
  Smartphone,
  Monitor,
  Printer,
  Zap,
  Star,
  ChevronDown,
  Heart,
  MessageCircle,
  Lock,
  Gift,
} from "lucide-react";

import banner from "@/assets/banner-airfryer-v3.webp.asset.json";
import showcase from "@/assets/recipes-showcase-airfryer-v2.webp.asset.json";
import r01 from "@/assets/recipe-01.webp.asset.json";
import r02 from "@/assets/recipe-02.webp.asset.json";
import r03 from "@/assets/recipe-03.webp.asset.json";
import r04 from "@/assets/recipe-04.webp.asset.json";
import r05 from "@/assets/recipe-05.webp.asset.json";
import r06 from "@/assets/recipe-06.webp.asset.json";
import r07 from "@/assets/recipe-07.webp.asset.json";
import r08 from "@/assets/recipe-08.webp.asset.json";
import r09 from "@/assets/recipe-09.webp.asset.json";
import r10 from "@/assets/recipe-10.webp.asset.json";
import r11 from "@/assets/recipe-11.webp.asset.json";
import r12 from "@/assets/recipe-12.webp.asset.json";
import bonusLista from "@/assets/bonus-lista-compras.webp.asset.json";
import bonusCardapio from "@/assets/bonus-cardapio-30.webp.asset.json";
import bonusCongelamento from "@/assets/bonus-congelamento.webp.asset.json";
import bonusTemperos from "@/assets/bonus-temperos.webp.asset.json";
import bonus15 from "@/assets/bonus-15min.webp.asset.json";
import bonusRomanticos from "@/assets/bonus-romanticos.webp.asset.json";
import reviewLasanha from "@/assets/review-lasanha.png.asset.json";
import reviewFrango from "@/assets/review-frango.webp.asset.json";
import reviewSanduiche from "@/assets/review-sanduiche.png.asset.json";
import reviewMuffin from "@/assets/review-muffin.png.asset.json";
import reviewCoxinha from "@/assets/review-coxinha.png.asset.json";
import reviewBrigadeiro from "@/assets/zGqQ3BH.png.asset.json";
import selo from "@/assets/JkRnpY1.png.asset.json";

const CHECKOUT_BASIC = "https://pay.wiapy.com/TsDvYn9f6CyS";
const CHECKOUT_PREMIUM = "https://pay.wiapy.com/fiP8AXQDWIls";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "+200 Receitas Deliciosas na Air Fryer | Chef Luana Queiroz" },
      {
        name: "description",
        content:
          "Mais de 200 receitas práticas, doces e salgadas, para usar sua air fryer todos os dias. Acesso imediato, garantia de 15 dias e 6 bônus exclusivos.",
      },
      { property: "og:title", content: "+200 Receitas Deliciosas na Air Fryer" },
      {
        property: "og:description",
        content:
          "Receitas simples e ilustradas para café, almoço, jantar e sobremesas na air fryer. Acesso imediato por apenas R$10.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap",
      },
    ],
  }),
  component: Landing,
});

const benefits = [
  ["🍗", "+200 receitas na Air Fryer"],
  ["⏱️", "Menos tempo na cozinha"],
  ["📖", "Receitas simples e ilustradas"],
  ["🍳", "Café, almoço, jantar e sobremesas"],
  ["💚", "Mais sabor sem complicação"],
  ["✨", "Ideias novas para todos os dias"],
  ["👨‍👩‍👧", "Receitas para toda a família"],
  ["📱", "Acesso no celular ou impresso"],
  ["🧼", "Receitas que não sujam a Air Fryer"],
];

const recipes = [r11, r12, r01, r02, r03, r04, r05, r06, r07, r08, r09, r10];

const categories = [
  "Café da Manhã Leve (50 receitas)",
  "Pães, Bolos e Massas Sem Glúten (55 receitas)",
  "Almoços e Jantares Práticos (70 receitas)",
  "Lanches e Salgados Saudáveis (50 receitas)",
  "Sobremesas Sem Açúcar (65 receitas)",
  "Receitas Sem Lactose Cremosas (35 receitas)",
  "Molhos, Cremes e Acompanhamentos (25 receitas)",
  "Bebidas, Vitaminas e Extras (15 receitas)",
];

const forYou = [
  "Tem uma air fryer e usa pouco",
  "Faz sempre as mesmas receitas",
  "Quer cozinhar sem complicação",
  "Fica sem ideia do que preparar",
  "Busca receitas rápidas pro dia a dia",
  "Quer variar sem gastar mais",
  "Quer agradar toda a família",
  "Quer aproveitar melhor sua air fryer",
];

const bonuses = [
  {
    n: 1,
    img: bonusLista,
    title: "Lista de Compras Inteligente",
    desc: "4 semanas organizadas pra economizar tempo e dinheiro no mercado.",
    price: "R$ 29,90",
  },
  {
    n: 2,
    img: bonusCardapio,
    title: "Cardápio Pronto de 30 Dias na Air Fryer",
    desc: "Plano completo com almoços, jantares, lanches e sobremesas pra nunca mais ficar na dúvida.",
    price: "R$ 49,90",
  },
  {
    n: 3,
    img: bonusCongelamento,
    title: "Guia de Congelamento e Reaquecimento",
    desc: "Como congelar e reaquecer mantendo sabor, textura e praticidade.",
    price: "R$ 27,90",
  },
  {
    n: 4,
    img: bonusTemperos,
    title: "30 Temperos e Molhos para Variar os Sabores",
    desc: "Combinações práticas pra transformar suas receitas na air fryer.",
    price: "R$ 24,90",
  },
  {
    n: 5,
    img: bonus15,
    title: "50 Receitas Prontas em Até 15 Minutos",
    desc: "Receitas rápidas, saborosas e fáceis pra facilitar a sua rotina corrida.",
    price: "R$ 39,90",
  },
  {
    n: 6,
    img: bonusRomanticos,
    title: "+40 Jantares Românticos para Casais",
    desc: "Receitas sofisticadas e fáceis pra surpreender quem você ama.",
    price: "R$ 34,90",
  },
];

const reviews = [
  {
    initials: "AM",
    name: "Ana M.",
    date: "12 de março de 2025",
    text: "Eu usava a air fryer só pra batata frita. Depois que peguei o livro, descobri que dá pra fazer bolo, pão de queijo e até lasanha. Virou meu eletrodoméstico favorito!",
    img: reviewLasanha,
    likes: 34,
    color: "bg-[#c2185b]",
  },
  {
    initials: "JS",
    name: "Juliana S.",
    date: "3 de abril de 2025",
    text: "Comprei por causa das receitas rápidas e já fiz frango crocante, batata rústica e brownie na air fryer. Tudo fica perfeito e não suja quase nada.",
    img: reviewFrango,
    likes: 28,
    color: "bg-[#2e7d32]",
  },
  {
    initials: "CF",
    name: "Camila F.",
    date: "28 de março de 2025",
    text: "Minha air fryer estava encostada há meses. Agora uso todo dia. As receitas de café da manhã e lanche salvaram minha rotina corrida.",
    img: reviewSanduiche,
    likes: 51,
    color: "bg-[#7b1fa2]",
  },
  {
    initials: "PR",
    name: "Patricia R.",
    date: "18 de fevereiro de 2025",
    text: "Minha filha adora as receitas doces na air fryer. A gente faz cookies, muffin e até pão de mel juntas. Fica uma delícia e o cheiro na cozinha é incrível.",
    img: reviewMuffin,
    likes: 62,
    color: "bg-[#e65100]",
  },
  {
    initials: "RB",
    name: "Renata B.",
    date: "5 de abril de 2025",
    text: "As receitas são bem explicadas e não pedem ingredientes difíceis. Fiz a coxinha de mandioca na air fryer e virou hit em toda reunião de família.",
    img: reviewCoxinha,
    likes: 47,
    color: "bg-[#0277bd]",
  },
  {
    initials: "LC",
    name: "Larissa C.",
    date: "21 de março de 2025",
    text: "Acho incrível como dá pra fazer praticamente tudo na air fryer. Frango, peixe, carne, doces, salgados... Nunca mais fico na dúvida do que fazer pro jantar.",
    img: reviewBrigadeiro,
    likes: 39,
    color: "bg-[#ad1457]",
  },
];

const faqs = [
  [
    "As receitas ficam gostosas de verdade?",
    "Sim. As receitas foram pensadas especialmente para a air fryer, mantendo sabor, textura crocante e aparência irresistível, sem precisar de muito óleo. A ideia é comer melhor aproveitando ao máximo o seu equipamento.",
  ],
  [
    "Funciona em qualquer modelo de air fryer?",
    "Sim. As receitas foram desenvolvidas para funcionar em qualquer modelo de air fryer, independente da marca ou capacidade. Basta ajustar tempo e temperatura quando necessário.",
  ],
  [
    "Preciso comprar ingredientes caros ou difíceis?",
    "Não. A maior parte das receitas usa ingredientes acessíveis e fáceis de encontrar em mercados comuns. O objetivo é facilitar sua vida, não complicar.",
  ],
  [
    "As receitas servem para a família toda?",
    "Sim. São receitas doces e salgadas pensadas para agradar adultos e crianças, com opções para café, almoço, jantar, lanches e sobremesas.",
  ],
  [
    "São receitas simples de fazer?",
    "Sim. O material foi feito para o dia a dia, com passo a passo direto, ingredientes organizados e preparos fáceis de acompanhar na sua air fryer.",
  ],
  [
    "Preciso saber cozinhar para aproveitar?",
    "Não. Mesmo quem tem pouca prática consegue acompanhar as receitas, porque o conteúdo é simples, didático e pensado para iniciantes na air fryer.",
  ],
  [
    "As receitas sujam muito a air fryer?",
    "Não. Foram selecionadas receitas práticas que ajudam a manter sua air fryer limpa, evitando preparos que respingam ou grudam demais no cesto.",
  ],
  [
    "Como vou receber o produto?",
    "Após a compra, você recebe o acesso imediatamente no seu e-mail. Pode abrir pelo celular, computador, tablet ou imprimir se preferir.",
  ],
  [
    "E se eu não gostar?",
    "Você tem 15 dias de garantia incondicional. Se não ficar satisfeito(a), basta solicitar o reembolso dentro do prazo e seu dinheiro será devolvido.",
  ],
  [
    "Por quanto tempo tenho acesso?",
    "O acesso é vitalício. Você compra uma vez e pode consultar as receitas sempre que quiser.",
  ],
];

function Cta({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="block w-full rounded-xl bg-primary px-6 py-5 text-center text-lg font-extrabold uppercase tracking-wide text-primary-foreground shadow-cta transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0 sm:text-xl"
    >
      {children}
    </a>
  );
}

function Stars() {
  return (
    <div className="flex gap-0.5 text-orange">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-current" />
      ))}
    </div>
  );
}

function Landing() {
  const [open, setOpen] = useState<number | null>(0);
  const deadline = new Date(Date.now() + 24 * 60 * 60 * 1000).toLocaleDateString("pt-BR");

  return (
    <div className="font-sans">
      <div className="sticky top-0 z-50 bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground">
        <Clock className="mr-1 inline h-4 w-4 align-[-3px]" />A promoção dessa página acaba no dia{" "}
        {deadline}
      </div>

      <main>
        {/* HERO */}
        <section className="px-5 pb-12 pt-8">
          <div className="mx-auto max-w-2xl">
            <h1 className="text-center text-4xl font-black leading-[1.1] tracking-tight text-orange sm:text-5xl">
              +200 Receitas Deliciosas{" "}
              <span className="text-brand-dark">na</span>{" "}
              <span className="text-brand">Air Fryer</span>
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-center text-base font-bold text-foreground/80">
              receitas práticas para aproveitar sua air fryer todos os dias sem cair na mesmice
            </p>

            <img
              src={banner.url}
              alt="+200 Receitas Deliciosas na Air Fryer"
              width={1200}
              height={675}
              fetchPriority="high"
              className="mt-6 w-full rounded-xl shadow-soft"
            />

            <p className="mx-auto mt-5 max-w-lg text-center text-base font-semibold text-foreground/80">
              Receitas doces e salgadas para variar seu cardápio todos os dias sem sujar sua air
              fryer
            </p>

            <p className="mt-5 text-center text-lg font-bold text-muted-foreground">
              <span className="text-destructive line-through">De R$97,00</span> por apenas
            </p>
            <p className="text-center text-6xl font-black text-brand">R$10</p>

            <div className="mt-6">
              <Cta href={CHECKOUT_BASIC}>Quero as 200 receitas</Cta>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
              <span>📱 Acesso imediato no WhatsApp</span>
              <span className="inline-flex items-center gap-1">
                <Lock className="h-3.5 w-3.5" /> Compra 100% Segura
              </span>
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5" /> 15 Dias de Garantia Total
              </span>
            </div>
          </div>
        </section>

        {/* BENEFÍCIOS */}
        <section className="bg-muted px-5 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-black text-orange sm:text-3xl">
              Benefícios do Produto:
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map(([emoji, text]) => (
                <li
                  key={text}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-3 py-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-soft text-lg">
                    {emoji}
                  </span>
                  <span className="text-sm font-semibold">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-8 max-w-md">
              <Cta href={CHECKOUT_BASIC}>Pegar minhas receitas</Cta>
            </div>
          </div>
        </section>

        {/* RECEITAS */}
        <section className="bg-brand-soft px-5 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-black text-brand-dark sm:text-3xl">
              Veja algumas receitas que você vai aprender:
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {recipes.map((img, i) => (
                <img
                  key={i}
                  src={img.url}
                  alt={`Receita air fryer ${i + 1}`}
                  width={800}
                  height={600}
                  loading="lazy"
                  className="h-44 w-full rounded-xl object-cover shadow-soft md:h-64"
                />
              ))}
            </div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section className="px-5 py-12">
          <div className="mx-auto max-w-3xl rounded-3xl bg-card p-6 shadow-soft sm:p-10">
            <h2 className="text-center text-2xl font-black text-brand-dark sm:text-3xl">
              + 188 OUTRAS receitas incríveis da Chef Luana!
            </h2>
            <img
              src={showcase.url}
              alt="Mosaico com prévia das 188 receitas extras da Chef Luana"
              width={1024}
              height={768}
              loading="lazy"
              className="mx-auto mt-6 w-full max-w-2xl rounded-xl"
            />
            <p className="mt-6 text-center font-bold text-foreground/80">
              Divididas em categorias completas:
            </p>
            <ul className="mt-4 flex flex-col items-center gap-3">
              {categories.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-muted px-5 py-2.5 text-center text-sm font-bold text-foreground/85"
                >
                  {c}
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-8 max-w-md">
              <Cta href={CHECKOUT_BASIC}>Quero todas as 200 receitas</Cta>
            </div>
          </div>
        </section>

        {/* PARA VOCÊ */}
        <section className="px-5 pb-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-black text-brand-dark sm:text-3xl">
              Esse livro é perfeito para você que:
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {forYou.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-3 rounded-lg border border-border bg-orange-soft/60 px-4 py-3"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-orange/15 text-orange">
                    <Check className="h-4 w-4" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* BÔNUS */}
        <section className="bg-cream px-5 py-12">
          <div className="mx-auto max-w-3xl">
            <p className="mx-auto w-fit rounded-full bg-orange px-4 py-1.5 text-xs font-black uppercase tracking-wide text-primary-foreground">
              <Gift className="mr-1 inline h-3.5 w-3.5 align-[-2px]" /> Presente especial
            </p>
            <h2 className="mt-4 text-center text-3xl font-black uppercase leading-tight text-brand-dark sm:text-4xl">
              Compre agora e receba
              <br />
              <span className="text-orange">+ 6 bônus exclusivos:</span>
            </h2>

            <div className="mt-8 space-y-4">
              {bonuses.map((b) => (
                <div
                  key={b.n}
                  className="relative flex overflow-hidden rounded-2xl bg-card shadow-soft"
                >
                  <span className="absolute left-2 top-2 z-10 rounded-md bg-orange px-2 py-0.5 text-[10px] font-black uppercase text-primary-foreground">
                    Bônus {b.n}
                  </span>
                  <div className="relative w-24 shrink-0 md:w-36">
                    <img
                      src={b.img.url}
                      alt={b.title}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-black text-brand-dark sm:text-lg">{b.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="text-sm font-bold text-muted-foreground line-through">
                        {b.price}
                      </span>
                      <span className="rounded-md bg-brand-soft px-2.5 py-1 text-xs font-black uppercase text-brand-dark">
                        ✓ Grátis hoje
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 rounded-xl bg-brand px-4 py-3 text-center text-sm font-black uppercase text-primary-foreground">
              💚 Valor total dos bônus → tudo grátis hoje!
            </p>
          </div>
        </section>

        {/* PLANOS */}
        <section className="bg-brand-dark px-5 py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-3xl font-black text-white sm:text-4xl">
              Escolha seu plano
            </h2>
            <p className="mt-2 text-center text-sm font-semibold text-white/70">
              Oferta especial por tempo limitado · Acesso imediato
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex flex-col rounded-2xl bg-card p-6 shadow-soft">
                <p className="text-center text-sm font-black uppercase text-muted-foreground">
                  ⚡ Oferta Básica
                </p>
                <h3 className="mt-1 text-center text-xl font-black text-brand-dark">
                  +200 Receitas na Air Fryer
                </h3>
                <ul className="mt-5 flex-1 space-y-2.5 text-sm font-semibold">
                  {[
                    "200 Receitas Deliciosas na Air Fryer",
                    "Receitas que não sujam a Air Fryer",
                    "Acesso Vitalício",
                    "Entrega Imediata por E-mail",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <Check className="h-5 w-5 shrink-0 text-brand" strokeWidth={3} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center text-sm font-black text-destructive line-through">
                  De R$ 97,00 por apenas
                </p>
                <p className="text-center text-5xl font-black text-brand-dark">R$ 10</p>
                <div className="mt-5">
                  <Cta href={CHECKOUT_BASIC}>Comprar agora</Cta>
                </div>
              </div>

              <div className="relative flex flex-col rounded-2xl border-4 border-orange bg-card p-6 shadow-soft">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange px-3 py-1 text-[11px] font-black uppercase text-primary-foreground">
                  Mais Vendida
                </span>
                <p className="text-center text-sm font-black uppercase text-orange">
                  🔥 Super Oferta
                </p>
                <h3 className="mt-1 text-center text-xl font-black text-brand-dark">
                  +365 Receitas Premium na Air Fryer
                </h3>
                <ul className="mt-5 space-y-2.5 text-sm font-semibold">
                  {[
                    "365 Receitas Deliciosas na Air Fryer",
                    "Café, almoço, jantar e sobremesas",
                    "Receitas para toda a família",
                    "Receitas que não sujam a Air Fryer",
                    "Acesso Vitalício",
                    "Entrega Imediata por E-mail",
                  ].map((t) => (
                    <li key={t} className="flex gap-2">
                      <Check className="h-5 w-5 shrink-0 text-brand" strokeWidth={3} />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-center text-sm font-black uppercase text-orange">
                  Bônus exclusivos!
                </p>
                <ul className="mt-2 flex-1 space-y-2 text-sm font-bold">
                  {bonuses.map((b) => (
                    <li key={b.n} className="flex gap-2">
                      <span>🎁</span>
                      {b.title}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-center text-sm font-black text-destructive line-through">
                  De R$ 197,00 por apenas
                </p>
                <p className="text-center text-5xl font-black text-brand-dark">R$ 18</p>
                <div className="mt-5">
                  <Cta href={CHECKOUT_PREMIUM}>Comprar agora</Cta>
                </div>
              </div>
            </div>

            <div className="mx-auto mt-8 max-w-md rounded-2xl bg-brand p-5 text-center text-primary-foreground">
              <p className="text-2xl">📲</p>
              <p className="mt-1 font-black">Acesso IMEDIATO no WHATSAPP!</p>
              <p className="text-sm opacity-90">Você recebe o conteúdo na hora no seu celular</p>
            </div>
          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section className="px-5 py-14">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-black uppercase leading-tight text-brand-dark sm:text-3xl">
              3.500+ pessoas já <span className="text-orange">transformaram</span> sua rotina na
              cozinha
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Veja o que quem já comprou está falando.
            </p>

            <div className="mt-6 flex flex-col items-center gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row">
              <div className="text-center">
                <p className="text-5xl font-black text-brand-dark">4.9</p>
                <div className="mt-1 flex justify-center">
                  <Stars />
                </div>
                <p className="mt-1 text-xs text-muted-foreground">3.541 avaliações</p>
              </div>
              <div className="w-full space-y-2">
                {[
                  [5, 92],
                  [4, 28],
                  [3, 8],
                  [2, 3],
                  [1, 1],
                ].map(([star, pct]) => (
                  <div key={star} className="flex items-center gap-2">
                    <span className="w-3 text-xs font-bold">{star}</span>
                    <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-orange" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {reviews.map((rv) => (
                <article key={rv.name} className="rounded-2xl border border-border bg-card p-5">
                  <Stars />
                  <div className="mt-3 flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white ${rv.color}`}
                    >
                      {rv.initials}
                    </span>
                    <div>
                      <p className="text-sm font-black">{rv.name}</p>
                      <p className="text-xs text-muted-foreground">{rv.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{rv.text}</p>
                  <img
                    src={rv.img.url}
                    alt="Receita feita na air fryer"
                    width={112}
                    height={112}
                    loading="lazy"
                    className="mt-3 h-28 w-28 rounded-xl object-cover"
                  />
                  <div className="mt-3 flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-bold">
                      <Heart className="h-3.5 w-3.5" /> Curtir {rv.likes}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-xs font-bold">
                      <MessageCircle className="h-3.5 w-3.5" /> Comentar
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="bg-cream px-5 py-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-card p-6 shadow-soft sm:flex-row sm:items-start">
            <img
              src={selo.url}
              alt="Selo de garantia incondicional de 15 dias"
              width={112}
              height={112}
              loading="lazy"
              className="h-28 w-28 shrink-0 object-contain"
            />
            <div className="flex-1 text-center sm:text-left">
              <span className="inline-flex items-center gap-1 rounded-full bg-brand-soft px-3 py-1 text-[11px] font-black uppercase text-brand-dark">
                <ShieldCheck className="h-3.5 w-3.5" /> Risco Zero
              </span>
              <h2 className="mt-2 text-2xl font-black text-brand-dark">
                Garantia Incondicional de 15 Dias
              </h2>
              <p className="mt-2 text-sm text-foreground/80">
                Teste as receitas por 15 dias. Se não ficar 100% satisfeito(a), devolvemos{" "}
                <strong className="text-orange">todo o seu dinheiro</strong>, sem perguntas.
              </p>
              <div className="mt-5">
                <Cta href={CHECKOUT_BASIC}>Quero comprar com segurança</Cta>
              </div>
            </div>
          </div>
        </section>

        {/* ENTREGA */}
        <section className="px-5 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center text-2xl font-black text-brand-dark sm:text-3xl">
              Como você vai <span className="text-orange">RECEBER:</span>
            </h2>
            <p className="mt-2 text-center text-sm text-muted-foreground">
              Acesso liberado na hora, do seu jeitinho ✨
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                [Smartphone, "No Celular", "Acesse onde estiver"],
                [Monitor, "No Computador", "Tela grande pra cozinhar"],
                [Printer, "Para Imprimir", "Seu caderno de receitas"],
                [Zap, "Envio Imediato", "Liberado em segundos"],
              ].map(([Icon, title, sub]) => {
                const I = Icon as typeof Smartphone;
                return (
                  <div
                    key={title as string}
                    className="rounded-2xl border border-border bg-orange-soft/50 p-5 text-center"
                  >
                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-card shadow-soft">
                      <I className="h-5 w-5 text-brand-dark" />
                    </span>
                    <p className="mt-3 font-black text-brand-dark">{title as string}</p>
                    <p className="text-xs text-muted-foreground">{sub as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-cream px-5 py-14">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-xs font-black uppercase tracking-widest text-orange">
              FAQ
            </p>
            <h2 className="mt-1 text-center text-3xl font-black text-brand-dark">
              Dúvidas Frequentes
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map(([q, a], i) => (
                <div key={q} className="overflow-hidden rounded-xl bg-card shadow-soft">
                  <button
                    type="button"
                    onClick={() => setOpen(open === i ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className={`text-sm font-black ${open === i ? "text-orange" : "text-brand-dark"}`}
                    >
                      {q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${open === i ? "bg-orange text-primary-foreground" : "bg-muted text-muted-foreground"}`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${open === i ? "rotate-180" : ""}`}
                      />
                    </span>
                  </button>
                  {open === i && (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-foreground/80">{a}</p>
                  )}
                </div>
              ))}
            </div>
            <div className="mx-auto mt-8 max-w-md">
              <Cta href={CHECKOUT_BASIC}>Ver oferta</Cta>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-brand-dark px-5 py-8 text-center text-sm text-white/70">
        <p className="font-bold text-white">+200 Receitas Deliciosas na Air Fryer</p>
        <p className="mt-1">© {new Date().getFullYear()} Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
