import { Link, useNavigate } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Radar,
  KanbanSquare,
  Bell,
  Search,
  LogOut,
  ChevronDown,
  Sparkles,
} from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import logo from "@/assets/imoblead-logo.png";
import { getSession, signOut, type Session } from "@/lib/auth";

const NAV = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/buscar-leads", label: "Buscar Leads", icon: Radar },
  { to: "/pipeline", label: "Pipeline", icon: KanbanSquare },
] as const;

export function AppShell({
  title,
  subtitle,
  actions,
  children,
}: {
  title: string;
  subtitle: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const navigate = useNavigate();
  const [session, setSession] = useState<Session | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const s = getSession();
    if (!s) {
      navigate({ to: "/login", replace: true });
      return;
    }
    setSession(s);
    setChecked(true);
  }, [navigate]);

  if (!checked || !session) {
    return (
      <div className="grid min-h-screen place-items-center bg-background">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span className="size-2 animate-pulse rounded-full bg-primary" />
          Carregando painel…
        </div>
      </div>
    );
  }

  const uso = Math.min(100, Math.round((session.usadoHoje / session.limiteDiario) * 100));

  return (
    <div className="min-h-screen bg-background">
      <div className="flex w-full">
        <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col border-r border-border bg-sidebar px-4 py-5 lg:flex">
          <Brand />

          <p className="mt-8 px-3 text-[11px] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
            Operação
          </p>
          <nav className="mt-2 flex flex-col gap-1">
            {NAV.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground data-[status=active]:bg-sidebar-accent data-[status=active]:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                <Icon className="size-4.5 opacity-80" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3">
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs font-medium text-muted-foreground">Buscas hoje</p>
                <span className="rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-semibold text-accent-foreground">
                  {session.plano}
                </span>
              </div>
              <p className="mt-1 font-display text-2xl font-semibold">
                {session.usadoHoje}
                <span className="text-sm text-muted-foreground"> / {session.limiteDiario}</span>
              </p>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${uso}%`, backgroundImage: "var(--gradient-primary)" }}
                />
              </div>
            </div>
            <button
              onClick={() => {
                signOut();
                navigate({ to: "/login", replace: true });
              }}
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
            >
              <LogOut className="size-4" /> Sair da conta
            </button>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-border bg-background/85 backdrop-blur-xl">
            <div className="flex h-16 items-center gap-3 px-4 sm:px-8">
              <div className="lg:hidden">
                <Brand compact />
              </div>

              <div className="hidden max-w-md flex-1 items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted-foreground md:flex">
                <Search className="size-4" />
                <input
                  placeholder="Buscar lead, bairro ou telefone"
                  className="w-full bg-transparent text-foreground outline-none placeholder:text-muted-foreground"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 text-[10px]">⌘K</kbd>
              </div>

              <div className="ml-auto flex items-center gap-2">
                <span className="hidden items-center gap-1.5 rounded-lg border border-border bg-surface px-2.5 py-2 text-xs text-muted-foreground sm:flex">
                  <Sparkles className="size-3.5 text-primary" />
                  IA ativa
                </span>
                <button className="rounded-lg border border-border bg-surface p-2.5 text-muted-foreground transition-colors hover:text-foreground">
                  <Bell className="size-4" />
                </button>
                <div className="flex items-center gap-2.5 rounded-lg border border-border bg-surface py-1.5 pr-2.5 pl-1.5">
                  <span
                    className="grid size-8 place-items-center rounded-md font-display text-sm font-semibold text-primary-foreground"
                    style={{ backgroundImage: "var(--gradient-primary)" }}
                  >
                    {session.nome
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </span>
                  <div className="hidden text-left sm:block">
                    <p className="text-xs font-medium">{session.nome}</p>
                    <p className="text-[11px] text-muted-foreground">{session.cargo}</p>
                  </div>
                  <ChevronDown className="hidden size-3.5 text-muted-foreground sm:block" />
                </div>
              </div>
            </div>

            <nav className="flex gap-1 overflow-x-auto border-t border-border px-4 py-2 lg:hidden">
              {NAV.map(({ to, label, icon: Icon }) => (
                <Link
                  key={to}
                  to={to}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap text-muted-foreground"
                  activeProps={{ className: "bg-sidebar-accent text-foreground" }}
                >
                  <Icon className="size-3.5" />
                  {label}
                </Link>
              ))}
            </nav>
          </header>

          <div className="border-b border-border bg-surface/40">
            <div className="flex flex-wrap items-end justify-between gap-3 px-4 py-5 sm:px-8">
              <div className="min-w-0">
                <h1 className="truncate font-display text-2xl font-semibold sm:text-[28px]">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
              </div>
              {actions}
            </div>
          </div>

          <main className="px-4 py-6 sm:px-8 sm:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/dashboard" className="flex items-center gap-2.5">
      <img src={logo} alt="ImobLead" width={816} height={816} className="size-9 object-contain" />
      {!compact && (
        <div className="leading-tight">
          <p className="font-display text-lg font-semibold">
            Imob<span className="text-gradient">Lead</span>
          </p>
          <p className="text-[11px] text-muted-foreground">Prospecção ativa</p>
        </div>
      )}
    </Link>
  );
}
