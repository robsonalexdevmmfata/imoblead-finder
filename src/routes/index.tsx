import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Bot,
  Check,
  KanbanSquare,
  MessageCircle,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import logo from "@/assets/imoblead-logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ImobLead — Prospecção ativa de leads imobiliários com IA" },
      {
        name: "description",
        content:
          "Encontre quem já está procurando imóvel: raspagem em grupos, portais e marketplaces, classificação por IA e pipeline de vendas. Planos a partir de R$ 80/mês.",
      },
      { property: "og:title", content: "ImobLead — Prospecção ativa de leads imobiliários com IA" },
      {
        property: "og:description",
        content:
          "Encontre quem já está procurando imóvel: raspagem em grupos, portais e marketplaces, classificação por IA e pipeline de vendas. Planos a partir de R$ 80/mês.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const RECURSOS = [
  {
    icon: Radar,
    titulo: "Raspagem inteligente",
    texto:
      "Monitoramento contínuo de Facebook Groups, OLX, portais abertos e Google Maps para capturar demanda no momento em que ela aparece.",
  },
  {
    icon: Bot,
    titulo: "Classificação por IA",
    texto:
      "Cada postagem vira um lead estruturado: nome, contato, tipo de transação, urgência, orçamento estimado e resumo da necessidade.",
  },
  {
    icon: Target,
    titulo: "Score de qualificação",
    texto:
      "Ranqueamento automático por probabilidade de fechamento para você atacar primeiro o que realmente tem valor.",
  },
  {
    icon: MessageCircle,
    titulo: "Contato em um clique",
    texto:
      "WhatsApp, Instagram e Facebook do possível cliente reunidos no mesmo card, com mensagem inicial já sugerida.",
  },
  {
    icon: KanbanSquare,
    titulo: "Pipeline de oportunidades",
    texto:
      "Do lead encontrado ao contrato fechado em cinco etapas visuais, com histórico e responsáveis por card.",
  },
  {
    icon: ShieldCheck,
    titulo: "Dados sob controle",
    texto:
      "Somente fontes públicas, com registro da origem de cada informação e limite diário definido pelo seu plano.",
  },
];

const PASSOS = [
  {
    n: "01",
    titulo: "Defina o alvo",
    texto: "Palavra-chave, bairro ou cidade e as fontes que deseja varrer.",
  },
  {
    n: "02",
    titulo: "A IA classifica",
    texto: "Os dados brutos viram leads com contato, urgência e resumo da necessidade.",
  },
  {
    n: "03",
    titulo: "Você fecha",
    texto: "Envia o lead para o pipeline e inicia a conversa no WhatsApp na hora.",
  },
];

const PLANOS = [
  {
    nome: "Starter",
    preco: "80",
    limite: "100 buscas por dia",
    descricao: "Para o corretor autônomo que quer sair do lead frio.",
    itens: [
      "Todas as fontes de raspagem",
      "Classificação e score por IA",
      "Pipeline completo de vendas",
      "Contatos com WhatsApp e redes",
      "1 usuário",
    ],
    destaque: false,
  },
  {
    nome: "Performance",
    preco: "170",
    limite: "600 buscas por dia",
    descricao: "Para imobiliárias e equipes que precisam de volume diário.",
    itens: [
      "Tudo do plano Starter",
      "Volume 6x maior de buscas",
      "Prioridade na fila de raspagem",
      "Relatórios de conversão por etapa",
      "Usuários ilimitados",
    ],
    destaque: true,
  },
];

function Landing() {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-5 py-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="ImobLead" width={816} height={816} className="size-9" />
            <span className="font-display text-lg font-semibold">
              Imob<span className="text-gradient">Lead</span>
            </span>
          </Link>
          <nav className="ml-6 hidden items-center gap-6 text-sm text-muted-foreground md:flex">
            <a href="#apresentacao" className="transition-colors hover:text-foreground">
              Apresentação
            </a>
            <a href="#recursos" className="transition-colors hover:text-foreground">
              Recursos
            </a>
            <a href="#como-funciona" className="transition-colors hover:text-foreground">
              Como funciona
            </a>
            <a href="#planos" className="transition-colors hover:text-foreground">
              Planos
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/login"
              className="rounded-lg border border-border px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Entrar
            </Link>
            <Link
              to="/login"
              className="hidden rounded-lg px-3.5 py-2 text-sm font-semibold text-primary-foreground glow-ring sm:inline-flex"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Começar agora
            </Link>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-[1200px] px-5 pt-16 pb-10 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <Sparkles className="size-3.5 text-primary" />
            Prospecção ativa com inteligência artificial
          </span>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-semibold tracking-tight sm:text-6xl">
            Encontre quem já está procurando imóvel{" "}
            <span className="text-gradient">antes do seu concorrente</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            O ImobLead varre grupos públicos, portais e marketplaces, transforma cada postagem em um
            lead classificado por IA e coloca o contato do possível cliente na sua mão — pronto para
            o primeiro WhatsApp.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground glow-ring"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              Acessar plataforma
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="#planos"
              className="rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Ver planos e limites
            </a>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
            {["Sem instalação", "Fontes públicas", "Cancelamento a qualquer momento"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <BadgeCheck className="size-3.5 text-success" /> {t}
              </span>
            ))}
          </div>
        </div>

        <div id="apresentacao" className="surface-card mt-14 overflow-hidden rounded-3xl p-2">
          <video
            className="w-full rounded-2xl"
            src="/video/imoblead-apresentacao.mp4"
            poster="/video/poster.jpg"
            controls
            playsInline
            preload="metadata"
          />
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Apresentação de 21 segundos: o que a plataforma faz, do primeiro rastreamento ao
          fechamento.
        </p>
      </section>

      <section id="recursos" className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Tudo que a prospecção ativa exige, em uma única plataforma
          </h2>
          <p className="mt-3 text-muted-foreground">
            Captura, enriquecimento, priorização e conversão sem trocar de ferramenta.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {RECURSOS.map(({ icon: Icon, titulo, texto }) => (
            <div key={titulo} className="surface-card rounded-2xl p-6">
              <span
                className="grid size-11 place-items-center rounded-xl text-primary-foreground"
                style={{ backgroundImage: "var(--gradient-primary)" }}
              >
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold">{titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{texto}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="como-funciona" className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="surface-card rounded-3xl p-8 sm:p-12">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Três passos entre a busca e o contrato
          </h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {PASSOS.map((p) => (
              <div key={p.n}>
                <p className="font-display text-4xl font-semibold text-gradient">{p.n}</p>
                <h3 className="mt-3 text-lg font-semibold">{p.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="mx-auto max-w-[1200px] px-5 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Planos por volume de prospecção
          </h2>
          <p className="mt-3 text-muted-foreground">
            O limite é diário e renova todo dia às 00h. Sem fidelidade.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
          {PLANOS.map((p) => (
            <div
              key={p.nome}
              className={`surface-card relative rounded-3xl p-8 ${p.destaque ? "glow-ring border-primary/60" : ""}`}
            >
              {p.destaque && (
                <span
                  className="absolute -top-3 right-8 rounded-full px-3 py-1 text-[11px] font-semibold text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  Mais escolhido
                </span>
              )}
              <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {p.nome}
              </p>
              <div className="mt-4 flex items-end gap-1.5">
                <span className="pb-1.5 text-lg text-muted-foreground">R$</span>
                <span className="font-display text-5xl leading-none font-semibold">{p.preco}</span>
                <span className="pb-1.5 text-sm text-muted-foreground">/mês</span>
              </div>
              <p
                className={`mt-4 inline-block rounded-full px-3 py-1.5 text-sm font-medium ${
                  p.destaque ? "text-primary-foreground" : "bg-surface-2 text-foreground"
                }`}
                style={p.destaque ? { backgroundImage: "var(--gradient-primary)" } : undefined}
              >
                {p.limite}
              </p>
              <p className="mt-4 text-sm text-muted-foreground">{p.descricao}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {p.itens.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-success" />
                    <span className="text-muted-foreground">{it}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/login"
                className={`mt-8 flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors ${
                  p.destaque
                    ? "text-primary-foreground"
                    : "border border-border text-foreground hover:bg-surface-2"
                }`}
                style={p.destaque ? { backgroundImage: "var(--gradient-primary)" } : undefined}
              >
                Assinar {p.nome}
                <ArrowRight className="size-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-20">
        <div className="surface-card flex flex-wrap items-center justify-between gap-6 rounded-3xl p-8 sm:p-12">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold sm:text-3xl">
              Pare de esperar o lead chegar
            </h2>
            <p className="mt-2 text-muted-foreground">
              Entre na plataforma e rode sua primeira raspagem inteligente em menos de dois minutos.
            </p>
          </div>
          <Link
            to="/login"
            className="inline-flex items-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-primary-foreground glow-ring"
            style={{ backgroundImage: "var(--gradient-primary)" }}
          >
            Entrar no ImobLead
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="ImobLead" width={816} height={816} className="size-7" />
            <span className="font-display font-semibold text-foreground">ImobLead</span>
          </div>
          <p>© 2026 ImobLead. Prospecção ativa para o mercado imobiliário.</p>
        </div>
      </footer>
    </div>
  );
}
