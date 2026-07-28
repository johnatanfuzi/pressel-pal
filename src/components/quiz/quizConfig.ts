export type QuizQuestion = {
  id: "airfryer" | "trava" | "pessoas" | "foco" | "tempo" | "restricao" | "frequencia";
  title: string;
  subtitle?: string;
  multiple?: boolean;
  maxSelections?: number;
  options: string[];
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "airfryer",
    title: "Você já tem uma air fryer?",
    options: [
      "Sim, uso quase todo dia",
      "Sim, mas uso pouco",
      "Ainda não tenho, mas quero comprar",
    ],
  },
  {
    id: "trava",
    title: "O que mais te trava hoje na air fryer?",
    options: [
      "Faço sempre as mesmas 3 ou 4 coisas",
      "Nunca sei o tempo e a temperatura certos",
      "Queima por fora e fica cru por dentro",
      "Falta tempo pra pensar no que fazer",
    ],
  },
  {
    id: "pessoas",
    title: "Pra quantas pessoas você costuma cozinhar?",
    options: [
      "Só pra mim",
      "Pra duas pessoas",
      "Pra família com crianças",
      "Varia, às vezes recebo gente em casa",
    ],
  },
  {
    id: "foco",
    title: "O que você mais quer aprender?",
    subtitle: "Pode escolher até 3 opções",
    multiple: true,
    maxSelections: 3,
    options: [
      "Carnes e frango",
      "Lanches e salgados",
      "Doces e sobremesas",
      "Receitas fit e low carb",
      "Pratos rápidos do dia a dia",
      "Comida pra congelar e organizar a semana",
    ],
  },
  {
    id: "tempo",
    title: "Num dia normal, quanto tempo você tem pra cozinhar?",
    options: ["Até 15 minutos", "De 15 a 30 minutos", "Mais de 30 minutos"],
  },
  {
    id: "restricao",
    title: "Você tem alguma restrição alimentar?",
    options: ["Nenhuma", "Sem glúten", "Sem lactose", "Low carb", "Vegetariana"],
  },
  {
    id: "frequencia",
    title:
      "Se você tivesse 200 receitas testadas no celular, usaria a air fryer com que frequência?",
    options: ["Todo dia", "Três a quatro vezes por semana", "Nos fins de semana"],
  },
];

export type QuizAnswers = Partial<Record<QuizQuestion["id"], string | string[]>>;

export const STORAGE_KEY = "quizAirFryer";

export function getProfileName(answers: QuizAnswers): string {
  const trava = (answers.trava as string) ?? "";
  const pessoas = (answers.pessoas as string) ?? "";

  let base = "Cozinha Prática";
  if (trava.startsWith("Faço sempre")) base = "Sem Repetição";
  else if (trava.startsWith("Nunca sei") || trava.startsWith("Queima")) base = "Ponto Certo";
  else if (trava.startsWith("Falta tempo")) base = "Cozinha Rápida";

  if (pessoas === "Pra família com crianças") base += " para a Família";
  return base;
}

export function getResultBullets(answers: QuizAnswers): string[] {
  const tempo = (answers.tempo as string) ?? "";
  const foco = (answers.foco as string[]) ?? [];
  const pessoas = (answers.pessoas as string) ?? "";
  const restricao = (answers.restricao as string) ?? "Nenhuma";
  const frequencia = (answers.frequencia as string) ?? "";

  const tempoMap: Record<string, string> = {
    "Até 15 minutos":
      "Você tem até 15 minutos por dia, então separamos 68 receitas que ficam prontas nesse tempo.",
    "De 15 a 30 minutos":
      "Com 15 a 30 minutos por dia, você recebe 94 receitas que cabem certinho nessa janela.",
    "Mais de 30 minutos":
      "Com mais de 30 minutos livres, liberamos as 200 receitas, incluindo as 42 mais completas.",
  };

  const focoTexto =
    foco.length > 0
      ? `Você escolheu ${foco.length} ${foco.length === 1 ? "área" : "áreas"} (${foco.join(", ").toLowerCase()}), o que soma ${foco.length * 24} receitas testadas só desses tipos.`
      : "Selecionamos 72 receitas variadas entre carnes, lanches e sobremesas pra você começar.";

  const pessoasMap: Record<string, string> = {
    "Só pra mim": "Como você cozinha só pra você, marcamos 37 receitas em porção individual.",
    "Pra duas pessoas": "Para duas pessoas, marcamos 45 receitas com rendimento exato de 2 porções.",
    "Pra família com crianças":
      "Para família com crianças, separamos 52 receitas aprovadas pelos pequenos e fáceis de dobrar.",
    "Varia, às vezes recebo gente em casa":
      "Como você recebe gente em casa, incluímos 29 receitas de porção grande e petiscos.",
  };

  const bullets = [
    tempoMap[tempo] ?? tempoMap["De 15 a 30 minutos"],
    focoTexto,
    pessoasMap[pessoas] ??
      "Separamos 45 receitas com rendimento flexível pra qualquer número de pessoas.",
  ];

  if (restricao !== "Nenhuma" && restricao) {
    bullets[2] = `Com a restrição ${restricao.toLowerCase()}, filtramos 31 receitas compatíveis dentro do seu plano.`;
  }

  if (frequencia === "Todo dia") {
    bullets[1] = `${focoTexto} Dá pra usar a air fryer nos 30 dias sem repetir nenhuma.`;
  }

  return bullets;
}
