import { createFileRoute } from "@tanstack/react-router";
import { QuizPage } from "@/components/quiz/QuizPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quiz: descubra seu plano de receitas na Air Fryer" },
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
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap",
      },
    ],
  }),
  component: QuizPage,
});
