import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, MapPin, ChevronRight } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { TransacaoBadge, UrgenciaBadge } from "@/components/lead-badges";
import { LEADS, STAGES, waLink, type Lead, type StageId } from "@/lib/leads-data";

export const Route = createFileRoute("/pipeline")({
  head: () => ({
    meta: [
      { title: "Pipeline de Vendas | ImobLead — Kanban de oportunidades" },
      {
        name: "description",
        content:
          "Acompanhe cada oportunidade imobiliária do primeiro contato ao fechamento em um kanban com atalho direto para o WhatsApp.",
      },
      { property: "og:title", content: "Pipeline de Vendas | ImobLead" },
      {
        property: "og:description",
        content: "Kanban de oportunidades imobiliárias com contato rápido via WhatsApp.",
      },
    ],
  }),
  component: Pipeline,
});

function Pipeline() {
  const [leads, setLeads] = useState<Lead[]>(LEADS);

  function avancar(id: string) {
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l;
        const i = STAGES.findIndex((s) => s.id === l.stage);
        const next = STAGES[Math.min(i + 1, STAGES.length - 1)];
        return { ...l, stage: (next?.id ?? l.stage) as StageId };
      }),
    );
  }

  return (
    <AppShell
      title="Pipeline de vendas"
      subtitle="Do lead capturado ao fechamento — arraste a oportunidade pelo funil"
    >
      <div className="flex gap-4 overflow-x-auto pb-4">
        {STAGES.map((stage) => {
          const doStage = leads.filter((l) => l.stage === stage.id);
          return (
            <div key={stage.id} className="w-[300px] shrink-0">
              <div className="mb-3 flex items-center justify-between px-1">
                <h2 className="text-sm font-semibold">{stage.label}</h2>
                <span className="rounded-full border border-border bg-surface px-2 py-0.5 text-[11px] text-muted-foreground">
                  {doStage.length}
                </span>
              </div>
              <div className="flex min-h-[180px] flex-col gap-3 rounded-2xl border border-dashed border-border/70 bg-surface/40 p-3">
                {doStage.map((lead) => (
                  <article key={lead.id} className="surface-card rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-medium">{lead.nome}</p>
                      <span className="font-display text-xs font-semibold text-primary-glow tabular-nums">
                        {lead.score}
                      </span>
                    </div>
                    <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="size-3" />
                      {lead.local}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">{lead.resumo}</p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      <TransacaoBadge value={lead.transacao} />
                      <UrgenciaBadge value={lead.urgencia} />
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <a
                        href={waLink(lead)}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-success/40 bg-success/15 px-3 py-2 text-xs font-medium text-success transition-colors hover:bg-success/25"
                      >
                        <MessageCircle className="size-3.5" />
                        WhatsApp
                      </a>
                      {stage.id !== "fechado" && (
                        <button
                          onClick={() => avancar(lead.id)}
                          aria-label="Avançar etapa"
                          className="grid size-8 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary-glow"
                        >
                          <ChevronRight className="size-4" />
                        </button>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
