export function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between text-xs font-bold text-muted-foreground">
        <span>
          Pergunta {current} de {total}
        </span>
        <span>{pct}%</span>
      </div>
      <div
        className="h-2.5 w-full overflow-hidden rounded-full bg-brand-soft"
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="h-full rounded-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
