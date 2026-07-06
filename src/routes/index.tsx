import { createFileRoute } from "@tanstack/react-router";
import { Presell } from "@/presell";
import { QuizThenPresell } from "@/quiz";

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
  component: HomePage,
});

function HomePage() {
  return <QuizThenPresell Presell={Presell} />;
}
