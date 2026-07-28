import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/quiz/QuizPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Descubra o que fazer na sua air fryer | Responda 7 perguntas" },
      {
        name: "description",
        content:
          "Responda 7 perguntas rápidas e descubra qual plano de receitas na air fryer combina com o seu tempo, sua rotina e o seu jeito de cozinhar.",
      },
      { property: "og:title", content: "Quiz: seu plano de receitas na Air Fryer" },
      {
        property: "og:description",
        content:
          "7 perguntas rápidas para montar um plano de receitas na air fryer feito para a sua rotina.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: QuizPage,
});
