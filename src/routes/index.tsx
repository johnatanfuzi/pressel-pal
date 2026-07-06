import { createFileRoute } from "@tanstack/react-router";
import antesDepois from "@/assets/antes-depois.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ore por 21 dias e veja seu filho transformado por Deus" },
      {
        name: "description",
        content:
          "Descubra como orar com direção por 21 dias pode tocar o coração do seu filho e transformar sua família através da oração e do jejum.",
      },
      { property: "og:title", content: "Deus vai usar sua oração para tocar o coração do seu filho" },
      {
        property: "og:description",
        content:
          "Ore com direção por 21 dias e veja seu filho transformado por Deus através da oração e do jejum.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Presell,
});

function Presell() {
  const cta = "#"; // TODO: trocar pelo link da oferta

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">
        <h1 className="text-center text-[26px] sm:text-4xl font-extrabold uppercase leading-[1.15] tracking-tight text-foreground">
          Deus vai usar sua oração{" "}
          <span className="text-highlight underline decoration-2 underline-offset-[6px]">
            para tocar o coração do seu filho
          </span>
        </h1>

        <p className="mt-10 text-center text-[20px] sm:text-2xl font-extrabold uppercase leading-[1.25] text-foreground">
          Ore com direção por 21 dias{" "}
          <span className="text-highlight">
            e veja o seu filho transformado por Deus
          </span>{" "}
          através da oração e do jejum
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl shadow-soft">
          <img
            src={antesDepois}
            alt="Antes e depois: mãe em oração pelo filho, reconciliação através da fé"
            width={1280}
            height={768}
            className="block h-auto w-full"
          />
        </div>

        <div className="mt-8">
          <a
            href={cta}
            className="block w-full rounded-2xl bg-cta px-6 py-6 text-center text-lg sm:text-xl font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform duration-150 hover:-translate-y-0.5 hover:bg-cta-hover active:translate-y-0"
          >
            Clique para acessar ✅
          </a>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            🔒 Acesso 100% seguro • Vagas limitadas
          </p>
        </div>

        <ul className="mt-10 space-y-3 text-[15px] sm:text-base text-foreground/90">
          <li className="flex gap-3">
            <span className="text-highlight">✔</span>
            Guia diário de oração com direção bíblica para os 21 dias
          </li>
          <li className="flex gap-3">
            <span className="text-highlight">✔</span>
            Orações específicas para o coração, mente e caminhos do seu filho
          </li>
          <li className="flex gap-3">
            <span className="text-highlight">✔</span>
            Método simples de jejum que qualquer mãe consegue seguir
          </li>
          <li className="flex gap-3">
            <span className="text-highlight">✔</span>
            Testemunhos reais de mães que viram seus filhos transformados
          </li>
        </ul>

        <div className="mt-10">
          <a
            href={cta}
            className="block w-full rounded-2xl bg-cta px-6 py-6 text-center text-lg sm:text-xl font-bold uppercase tracking-wide text-cta-foreground shadow-cta transition-transform duration-150 hover:-translate-y-0.5 hover:bg-cta-hover active:translate-y-0"
          >
            Quero começar agora ✅
          </a>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
        </p>
      </div>
    </main>
  );
}
