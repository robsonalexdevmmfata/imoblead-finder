import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Radar,
  Loader2,
  ExternalLink,
  Phone,
  Instagram,
  Facebook,
  MessageCircle,
  Sparkles,
  ArrowRightCircle,
} from "lucide-react";
import { toast } from "sonner";
import { AppShell } from "@/components/app-shell";
import { FonteBadge, ScoreBar, TransacaoBadge, UrgenciaBadge } from "@/components/lead-badges";
import { FONTES, LEADS, waLink, type Fonte, type Lead } from "@/lib/leads-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/buscar-leads")({
  head: () => ({
    meta: [
      { title: "Buscar Leads | ImobLead — Raspagem inteligente com IA" },
      {
        name: "description",
        content:
          "Rode a raspagem inteligente em grupos do Facebook, OLX, portais abertos e Google Maps e receba leads já classificados por urgência e intenção.",
      },
      { property: "og:title", content: "Buscar Leads | ImobLead" },
      {
        property: "og:description",
        content: "Prospecção ativa com scraping e classificação automática de leads imobiliários.",
      },
    ],
  }),
  component: BuscarLeads,
});

function BuscarLeads() {
  const [termo, setTermo] = useState("Procuro apartamento em Campinas");
  const [fontes, setFontes] = useState<Fonte[]>(["Facebook Groups", "OLX"]);
  const [rodando, setRodando] = useState(false);
  const [resultados, setResultados] = useState<Lead[]>(LEADS);

  function toggleFonte(f: Fonte) {
    setFontes((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));
  }

  function iniciarRaspagem() {
    if (!termo.trim()) {
      toast.error("Informe uma palavra-chave ou localização.");
      return;
    }
    if (fontes.length === 0) {
      toast.error("Selecione ao menos uma fonte de captura.");
      return;
    }
    setRodando(true);
    toast.info("Raspagem iniciada — enviando job para o motor de captura.");
    setTimeout(() => {
      setRodando(false);
      setResultados(LEADS.filter((l) => fontes.includes(l.fonte)));
      toast.success("Pipeline de IA concluída: leads classificados por urgência e intenção.");
    }, 1600);
  }

  return (
    <AppShell
      title="Prospecção ativa e raspagem"
      subtitle="Capture conversas públicas e transforme em leads qualificados pela IA"
    >
      <div className="grid gap-4 xl:grid-cols-3">
        <section className="surface-card rounded-2xl p-5 xl:col-span-2">
          <label className="text-sm font-medium" htmlFor="termo">
            Palavra-chave ou localização
          </label>
          <input
            id="termo"
            value={termo}
            onChange={(e) => setTermo(e.target.value)}
            placeholder='Ex: "Procuro apartamento em Campinas"'
            className="mt-2 w-full rounded-xl border border-input bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/40"
          />

          <p className="mt-5 text-sm font-medium">Fontes de captura</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {FONTES.map((f) => {
              const ativo = fontes.includes(f);
              return (
                <button
                  key={f}
                  onClick={() => toggleFonte(f)}
                  className={cn(
                    "rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors",
                    ativo
                      ? "border-primary/60 bg-primary/15 text-primary-glow"
                      : "border-border bg-surface text-muted-foreground hover:text-foreground",
                  )}
                >
                  {f}
                </button>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={iniciarRaspagem}
              disabled={rodando}
              className="glow-ring inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity disabled:opacity-70"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {rodando ? (
                <Loader2 className="size-4 animate-spin" />
              ) : (
                <Radar className="size-4" />
              )}
              {rodando ? "Raspando fontes..." : "Iniciar Raspagem Inteligente"}
            </button>
            <p className="text-xs text-muted-foreground">
              Job enviado via webhook para o provedor de scraping e classificado pela pipeline de
              IA.
            </p>
          </div>
        </section>

        <section className="surface-card rounded-2xl p-5">
          <div className="flex items-center gap-2">
            <Sparkles className="size-4 text-primary-glow" />
            <h2 className="text-base font-semibold">Pipeline de classificação</h2>
          </div>
          <ol className="mt-4 space-y-3 text-sm">
            {[
              "Captura bruta via provedor externo (Apify / ScraperAPI)",
              "Extração de nome, canal de origem e contato",
              "Classificação de transação: compra, aluguel ou captação",
              "Score de urgência e resumo da necessidade",
            ].map((etapa, i) => (
              <li key={etapa} className="flex gap-3">
                <span className="grid size-6 shrink-0 place-items-center rounded-md bg-surface-2 font-display text-xs font-semibold text-primary-glow">
                  {i + 1}
                </span>
                <span className="text-muted-foreground">{etapa}</span>
              </li>
            ))}
          </ol>
          <div className="mt-5 rounded-xl border border-dashed border-border p-3 text-xs text-muted-foreground">
            Integração de scraping ainda não conectada — os resultados abaixo são uma amostra da
            saída da pipeline.
          </div>
        </section>
      </div>

      <section className="surface-card mt-6 rounded-2xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4">
          <div>
            <h2 className="text-base font-semibold">Resultados do scraper</h2>
            <p className="text-sm text-muted-foreground">
              {resultados.length} leads classificados — postagem original, canais e contatos
            </p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1180px] text-sm">
            <thead>
              <tr className="border-b border-border text-left text-xs tracking-wide text-muted-foreground uppercase">
                <th className="px-5 py-3 font-medium">Contato</th>
                <th className="px-5 py-3 font-medium">O que ele postou</th>
                <th className="px-5 py-3 font-medium">Origem</th>
                <th className="px-5 py-3 font-medium">Classificação</th>
                <th className="px-5 py-3 font-medium">Score</th>
                <th className="px-5 py-3 font-medium">Canais</th>
                <th className="px-5 py-3 font-medium text-right">Ação</th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-border/60 align-top transition-colors last:border-0 hover:bg-surface-2/60"
                >
                  <td className="px-5 py-4">
                    <p className="font-medium">{lead.nome}</p>
                    <p className="text-xs text-muted-foreground">{lead.local}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone className="size-3" />
                      {lead.telefone}
                    </p>
                  </td>
                  <td className="max-w-[360px] px-5 py-4">
                    <p className="text-muted-foreground italic">“{lead.postagem}”</p>
                    <p className="mt-2 text-xs text-primary-glow">{lead.resumo}</p>
                    <p className="text-[11px] text-muted-foreground">
                      Orçamento estimado: {lead.orcamento} · {lead.capturadoEm}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <FonteBadge value={lead.fonte} />
                    <a
                      href={`https://${lead.linkOrigem}`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 flex max-w-[190px] items-center gap-1 truncate text-xs text-muted-foreground transition-colors hover:text-primary-glow"
                    >
                      <ExternalLink className="size-3 shrink-0" />
                      <span className="truncate">{lead.linkOrigem}</span>
                    </a>
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex flex-col items-start gap-2">
                      <TransacaoBadge value={lead.transacao} />
                      <UrgenciaBadge value={lead.urgencia} />
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <ScoreBar value={lead.score} />
                  </td>
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-1.5">
                      <IconLink href={waLink(lead)} label="WhatsApp">
                        <MessageCircle className="size-4" />
                      </IconLink>
                      {lead.instagram && (
                        <IconLink
                          href={`https://instagram.com/${lead.instagram}`}
                          label="Instagram"
                        >
                          <Instagram className="size-4" />
                        </IconLink>
                      )}
                      {lead.facebook && (
                        <IconLink href={`https://facebook.com/${lead.facebook}`} label="Facebook">
                          <Facebook className="size-4" />
                        </IconLink>
                      )}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-right">
                    <button
                      onClick={() => toast.success(`${lead.nome} movido para o pipeline.`)}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-primary/50 bg-primary/10 px-3 py-2 text-xs font-medium text-primary-glow transition-colors hover:bg-primary/20"
                    >
                      <ArrowRightCircle className="size-3.5" />
                      Mover para o Pipeline
                    </button>
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

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="grid size-8 place-items-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary-glow"
    >
      {children}
    </a>
  );
}
