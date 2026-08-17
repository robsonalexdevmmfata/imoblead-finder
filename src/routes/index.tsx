import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
} from "recharts";
import { ArrowUpRight, Radar } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { FonteBadge, ScoreBar, TransacaoBadge, UrgenciaBadge } from "@/components/lead-badges";
import { INTENCAO_DATA, LEADS, METRICS } from "@/lib/leads-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dashboard | ImobLead — Prospecção ativa de leads imobiliários" },
      {
        name: "description",
        content:
          "Acompanhe leads encontrados, qualificados, propostas e visitas agendadas da sua operação imobiliária em tempo real.",
      },
      { property: "og:title", content: "Dashboard | ImobLead" },
      {
        property: "og:description",
        content: "Métricas de prospecção ativa e gestão de oportunidades imobiliárias.",
      },
    ],
  }),
  component: Dashboard,
});

const CHART_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-4)"];

const VOLUME = [
  { dia: "Seg", leads: 142 },
  { dia: "Ter", leads: 188 },
  { dia: "Qua", leads: 164 },
  { dia: "Qui", leads: 231 },
  { dia: "Sex", leads: 276 },
  { dia: "Sáb", leads: 158 },
  { dia: "Dom", leads: 125 },
];

function Dashboard() {
  const recentes = LEADS.slice(0, 5);

  return (
    <AppShell
      title="Visão geral da operação"
      subtitle="Resultados consolidados da prospecção ativa nos últimos 30 dias"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {METRICS.map((m) => (
          <div key={m.label} className="surface-card rounded-2xl p-5">
            <p className="text-sm text-muted-foreground">{m.label}</p>
            <div className="mt-3 flex items-end justify-between gap-3">
              <p className="font-display text-3xl font-semibold tabular-nums">
                {m.value.toLocaleString("pt-BR")}
              </p>
              <span className="inline-flex items-center gap-1 rounded-full border border-success/40 bg-success/15 px-2 py-0.5 text-[11px] font-medium text-success">
                <ArrowUpRight className="size-3" />
                {m.delta}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">{m.hint}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-5">
        <section className="surface-card rounded-2xl p-5 lg:col-span-2">
          <h2 className="text-base font-semibold">Distribuição por intenção</h2>
          <p className="text-sm text-muted-foreground">Comprar, alugar e captação de imóveis</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={INTENCAO_DATA}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={62}
                  outerRadius={92}
                  paddingAngle={3}
                  stroke="none"
                >
                  {INTENCAO_DATA.map((entry, i) => (
                    <Cell key={entry.name} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    color: "var(--popover-foreground)",
                  }}
                />
                <Legend
                  iconType="circle"
                  wrapperStyle={{ fontSize: 12, color: "var(--muted-foreground)" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section className="surface-card rounded-2xl p-5 lg:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold">Volume de raspagem semanal</h2>
              <p className="text-sm text-muted-foreground">Leads capturados por dia</p>
            </div>
            <Link
              to="/buscar-leads"
              className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-primary-foreground glow-ring"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              <Radar className="size-4" />
              Nova raspagem
            </Link>
          </div>
          <div className="mt-2 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={VOLUME}>
                <CartesianGrid vertical={false} stroke="var(--border)" />
                <XAxis
                  dataKey="dia"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                />
                <Tooltip
                  cursor={{ fill: "var(--surface-2)" }}
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    borderRadius: 12,
                    color: "var(--popover-foreground)",
                  }}
                />
                <Bar dataKey="leads" radius={[6, 6, 0, 0]} fill="var(--chart-1)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>

      <section className="surface-card mt-6 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <h2 className="text-base font-semibold">Últimos leads classificados pela IA</h2>
            <p className="text-sm text-muted-foreground">
              Ordenados por score de qualificação e urgência
            </p>
          </div>
          <Link
            to="/pipeline"
            className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Ver pipeline
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[820px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs tracking-wide text-muted-foreground uppercase">
                <th className="px-5 py-3 font-medium">Contato</th>
                <th className="px-5 py-3 font-medium">Necessidade</th>
                <th className="px-5 py-3 font-medium">Fonte</th>
                <th className="px-5 py-3 font-medium">Tipo</th>
                <th className="px-5 py-3 font-medium">Urgência</th>
                <th className="px-5 py-3 font-medium">Score</th>
              </tr>
            </thead>
            <tbody>
              {recentes.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-border/60 transition-colors last:border-0 hover:bg-surface-2/60"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium">{lead.nome}</p>
                    <p className="text-xs text-muted-foreground">{lead.local}</p>
                  </td>
                  <td className="max-w-[280px] px-5 py-4 text-muted-foreground">{lead.resumo}</td>
                  <td className="px-5 py-4">
                    <FonteBadge value={lead.fonte} />
                  </td>
                  <td className="px-5 py-4">
                    <TransacaoBadge value={lead.transacao} />
                  </td>
                  <td className="px-5 py-4">
                    <UrgenciaBadge value={lead.urgencia} />
                  </td>
                  <td className="px-5 py-4">
                    <ScoreBar value={lead.score} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
