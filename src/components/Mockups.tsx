/**
 * MOCKUPS DE INTERFACE (construidos em codigo).
 * Todos os dados sao ficticios e servem apenas para demonstracao visual.
 */

function Frame({
  title,
  caption,
  children,
}: {
  title: string;
  caption?: string;
  children: React.ReactNode;
}) {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-soft ring-1 ring-black/5">
        <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
          <span aria-hidden="true" className="size-2.5 rounded-full bg-destructive/50" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-amber-400/70" />
          <span aria-hidden="true" className="size-2.5 rounded-full bg-green/70" />
          <span className="ml-2 truncate text-[11px] font-semibold text-muted-foreground">
            {title}
          </span>
        </div>
        <div className="bg-card p-4">{children}</div>
      </div>
      <figcaption className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
        {caption ?? "Demonstração da interface"}
      </figcaption>
    </figure>
  );
}

const DIAS = ["Seg", "Ter", "Qua", "Qui", "Sex"];

type Slot = { label: string; status: "ok" | "pend" | "livre" };

const AGENDA: Slot[][] = [
  [
    { label: "Ana M.", status: "ok" },
    { label: "Livre", status: "livre" },
    { label: "Carlos R.", status: "ok" },
  ],
  [
    { label: "Bruno S.", status: "ok" },
    { label: "Duda L.", status: "pend" },
    { label: "Livre", status: "livre" },
  ],
  [
    { label: "Elis P.", status: "ok" },
    { label: "Fábio T.", status: "ok" },
    { label: "Livre", status: "livre" },
  ],
  [
    { label: "Livre", status: "livre" },
    { label: "Gabi N.", status: "pend" },
    { label: "Heitor V.", status: "ok" },
  ],
  [
    { label: "Iara C.", status: "ok" },
    { label: "João B.", status: "ok" },
    { label: "Livre", status: "livre" },
  ],
];

const SLOT_STYLE: Record<Slot["status"], string> = {
  ok: "bg-green-soft text-primary border-green/40",
  pend: "bg-amber-50 text-amber-700 border-amber-300/70",
  livre: "bg-muted text-muted-foreground border-border",
};

export function MockAgenda() {
  return (
    <Frame title="uniclinic.cloud — Agenda da semana">
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold text-primary">Agenda</p>
        <p className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-bold text-primary">
          8 confirmados · 2 pendentes
        </p>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-1.5">
        {DIAS.map((dia, i) => (
          <div key={dia} className="space-y-1.5">
            <p className="text-center text-[10px] font-bold uppercase tracking-wide text-muted-foreground">
              {dia}
            </p>
            {AGENDA[i]!.map((slot, j) => (
              <div
                key={`${dia}-${j}`}
                className={`truncate rounded-md border px-1.5 py-2 text-[10px] font-semibold ${SLOT_STYLE[slot.status]}`}
              >
                {slot.label}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="mt-3 flex flex-wrap gap-3 text-[10px] font-semibold text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2 rounded-full bg-green" /> Confirmado
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2 rounded-full bg-amber-400" /> Pendente
        </span>
        <span className="flex items-center gap-1.5">
          <span aria-hidden="true" className="size-2 rounded-full bg-border" /> Livre
        </span>
      </div>
    </Frame>
  );
}

const PACIENTES = [
  { name: "Ana Martins", last: "12/03", tag: "Retorno", tone: "green" },
  { name: "Bruno Souza", last: "10/03", tag: "Em tratamento", tone: "blue" },
  { name: "Carla Ribeiro", last: "05/03", tag: "Pendência", tone: "amber" },
  { name: "Diego Lopes", last: "28/02", tag: "Alta", tone: "muted" },
];

const TAG_STYLE: Record<string, string> = {
  green: "bg-green-soft text-primary",
  blue: "bg-blue-soft text-primary",
  amber: "bg-amber-50 text-amber-700",
  muted: "bg-muted text-muted-foreground",
};

export function MockAtendimentos() {
  return (
    <Frame title="uniclinic.cloud — Atendimentos e prontuário">
      <div className="grid gap-3 sm:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-bold text-primary">Pacientes</p>
          <ul className="mt-2 space-y-1.5">
            {PACIENTES.map((p) => (
              <li
                key={p.name}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-2.5 py-2"
              >
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-blue-soft text-[11px] font-extrabold text-primary">
                  {p.name.charAt(0)}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[11px] font-bold text-primary">
                    {p.name}
                  </span>
                  <span className="block text-[10px] text-muted-foreground">
                    Última consulta {p.last}
                  </span>
                </span>
                <span
                  className={`shrink-0 rounded-full px-2 py-0.5 text-[9px] font-bold ${TAG_STYLE[p.tone]}`}
                >
                  {p.tag}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-border bg-secondary/70 p-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            Prontuário
          </p>
          <p className="mt-1 text-[11px] font-extrabold text-primary">Ana Martins · 34 anos</p>
          <div className="mt-2 space-y-1.5 text-[10px] text-muted-foreground">
            <p className="rounded bg-card px-2 py-1.5">Queixa: dor lombar há 3 semanas</p>
            <p className="rounded bg-card px-2 py-1.5">Conduta: fisioterapia 2x/semana</p>
            <p className="rounded bg-card px-2 py-1.5">Exames: 1 solicitado · 1 anexado</p>
            <p className="rounded bg-card px-2 py-1.5">Prescrição enviada em 12/03</p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

const BARRAS = [42, 55, 48, 63, 58, 71, 66];

export function MockFinanceiro() {
  const max = Math.max(...BARRAS);
  return (
    <Frame title="uniclinic.cloud — Financeiro e relatórios">
      <div className="grid grid-cols-3 gap-2">
        {[
          ["Faturamento do mês", "R$ 48.200"],
          ["Pendências em aberto", "R$ 3.150"],
          ["Taxa de comparecimento", "87%"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-lg border border-border bg-background p-2.5">
            <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">
              {label}
            </p>
            <p className="mt-1 text-sm font-extrabold text-primary">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-lg border border-border bg-background p-3">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Atendimentos por dia
        </p>
        <svg
          viewBox="0 0 210 70"
          role="img"
          aria-label="Gráfico de barras de exemplo com atendimentos por dia"
          className="mt-2 h-20 w-full"
        >
          {BARRAS.map((v, i) => {
            const h = (v / max) * 56;
            return (
              <rect
                key={i}
                x={i * 30 + 6}
                y={62 - h}
                width={18}
                height={h}
                rx={3}
                fill="var(--green)"
                opacity={0.45 + (i / BARRAS.length) * 0.55}
              />
            );
          })}
          <line x1="0" y1="63" x2="210" y2="63" stroke="var(--border)" strokeWidth="1" />
        </svg>
      </div>
      <p className="mt-2 text-[10px] text-muted-foreground">Valores fictícios de demonstração.</p>
    </Frame>
  );
}

const NAV = ["Painel", "Agenda", "Pacientes", "Prontuário", "Financeiro", "Estoque", "Relatórios"];
const HOJE = [
  ["08:00", "Ana Martins", "Consulta", "ok"],
  ["09:00", "Bruno Souza", "Retorno", "ok"],
  ["10:30", "Carla Ribeiro", "Procedimento", "pend"],
  ["11:30", "Horário livre", "—", "livre"],
  ["14:00", "Diego Lopes", "Avaliação", "ok"],
] as const;

export function MockPainel() {
  return (
    <Frame title="uniclinic.cloud — Painel da clínica">
      <div className="grid gap-3 sm:grid-cols-[120px_1fr]">
        <ul className="hidden space-y-1 rounded-lg bg-secondary p-2 sm:block">
          {NAV.map((n, i) => (
            <li
              key={n}
              className={`rounded-md px-2 py-1.5 text-[10px] font-semibold ${i === 0 ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}
            >
              {n}
            </li>
          ))}
        </ul>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {[
              ["Atendimentos hoje", "14"],
              ["Confirmados", "11"],
              ["A receber no mês", "R$ 12.480"],
              ["Itens em estoque baixo", "3"],
            ].map(([l, v]) => (
              <div key={l} className="rounded-lg border border-border bg-background p-2.5">
                <p className="text-[9px] font-bold uppercase tracking-wide text-muted-foreground">{l}</p>
                <p className="mt-1 text-sm font-extrabold text-primary">{v}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-border bg-background p-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Agenda de hoje</p>
            <ul className="mt-2 divide-y divide-border">
              {HOJE.map(([h, n, t, s]) => (
                <li key={h} className="flex items-center gap-3 py-1.5 text-[11px]">
                  <span className="w-10 font-bold text-primary">{h}</span>
                  <span className="flex-1 truncate font-semibold text-foreground">{n}</span>
                  <span className="hidden text-muted-foreground sm:inline">{t}</span>
                  <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold ${SLOT_STYLE[s]}`}>
                    {s === "ok" ? "Confirmado" : s === "pend" ? "Pendente" : "Livre"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Frame>
  );
}
