import { Link } from "@tanstack/react-router";
import { LayoutDashboard, Radar, KanbanSquare, Bell, Search } from "lucide-react";
import type { ReactNode } from "react";
import logo from "@/assets/imoblead-logo.png";

const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard },
  { to: "/buscar-leads", label: "Buscar Leads", icon: Radar },
  { to: "/pipeline", label: "Pipeline", icon: KanbanSquare },
] as const;

export function AppShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background bg-grid">
      <div className="mx-auto flex w-full max-w-[1600px]">
        <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col border-r border-border bg-sidebar px-4 py-6 lg:flex">
          <Brand />
          <nav className="mt-10 flex flex-col gap-1">
            {NAV.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                activeOptions={{ exact: to === "/" }}
                className="group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground data-[status=active]:bg-sidebar-accent data-[status=active]:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                <Icon className="size-4.5 opacity-80" />
                {label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto rounded-xl border border-border bg-surface p-4">
            <p className="text-xs font-medium text-muted-foreground">Créditos de raspagem</p>
            <p className="mt-1 font-display text-2xl font-semibold">7.420</p>
            <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full"
                style={{ width: "68%", backgroundImage: "var(--gradient-primary)" }}
              />
            </div>
            <p className="mt-2 text-[11px] text-muted-foreground">68% do ciclo mensal disponível</p>
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur-xl">
            <div className="flex flex-wrap items-center gap-4 px-5 py-4 sm:px-8">
              <div className="lg:hidden">
                <Brand compact />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="truncate font-display text-xl font-semibold sm:text-2xl">{title}</h1>
                <p className="truncate text-sm text-muted-foreground">{subtitle}</p>
              </div>
              <div className="hidden items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm text-muted-foreground md:flex">
                <Search className="size-4" />
                <span>Buscar lead, bairro ou telefone</span>
              </div>
              <button className="rounded-lg border border-border bg-surface p-2.5 text-muted-foreground transition-colors hover:text-foreground">
                <Bell className="size-4" />
              </button>
              <div className="flex items-center gap-3 rounded-lg border border-border bg-surface py-1.5 pr-3 pl-1.5">
                <span
                  className="grid size-8 place-items-center rounded-md font-display text-sm font-semibold text-primary-foreground"
                  style={{ backgroundImage: "var(--gradient-primary)" }}
                >
                  RA
                </span>
                <div className="hidden text-left sm:block">
                  <p className="text-xs font-medium">Robson Alex</p>
                  <p className="text-[11px] text-muted-foreground">Corretor Sênior</p>
                </div>
              </div>
            </div>
            <nav className="flex gap-1 overflow-x-auto px-5 pb-3 lg:hidden">
              {NAV.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  activeOptions={{ exact: to === "/" }}
                  className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium whitespace-nowrap text-muted-foreground"
                  activeProps={{ className: "bg-sidebar-accent text-foreground" }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </header>

          <main className="px-5 py-6 sm:px-8 sm:py-8">{children}</main>
        </div>
      </div>
    </div>
  );
}

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <img
        src={logo}
        alt="ImobLead"
        width={816}
        height={816}
        className="size-9 object-contain"
      />
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
