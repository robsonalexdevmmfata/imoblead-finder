import { cn } from "@/lib/utils";
import type { Transacao, Urgencia, Fonte } from "@/lib/leads-data";

const urgenciaStyles: Record<Urgencia, string> = {
  Alta: "border-destructive/40 bg-destructive/15 text-destructive",
  Média: "border-warning/40 bg-warning/15 text-warning",
  Baixa: "border-border bg-muted text-muted-foreground",
};

const transacaoStyles: Record<Transacao, string> = {
  Compra: "border-primary/45 bg-primary/15 text-primary-glow",
  Aluguel: "border-success/40 bg-success/15 text-success",
  Captação: "border-chart-4/40 bg-chart-4/15 text-chart-4",
};

function Pill({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium whitespace-nowrap",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function UrgenciaBadge({ value }: { value: Urgencia }) {
  return (
    <Pill className={urgenciaStyles[value]}>
      <span className="size-1.5 rounded-full bg-current" />
      {value}
    </Pill>
  );
}

export function TransacaoBadge({ value }: { value: Transacao }) {
  return <Pill className={transacaoStyles[value]}>{value}</Pill>;
}

export function FonteBadge({ value }: { value: Fonte }) {
  return <Pill className="border-border bg-surface-2 text-muted-foreground">{value}</Pill>;
}

export function ScoreBar({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundImage: "var(--gradient-primary)" }}
        />
      </div>
      <span className="font-display text-xs font-semibold tabular-nums">{value}</span>
    </div>
  );
}
