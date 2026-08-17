import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Loader2, Lock, ShieldCheck, User } from "lucide-react";
import { toast } from "sonner";
import logo from "@/assets/imoblead-logo.png";
import { signIn } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Entrar | ImobLead — Plataforma de prospecção imobiliária" },
      {
        name: "description",
        content:
          "Acesse o painel ImobLead e acompanhe leads capturados, classificação por IA e o pipeline de oportunidades.",
      },
      { property: "og:title", content: "Entrar | ImobLead" },
      { property: "og:description", content: "Acesso ao painel de prospecção ativa ImobLead." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("admin");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setCarregando(true);
    setTimeout(() => {
      const session = signIn(usuario, senha);
      setCarregando(false);
      if (!session) {
        toast.error("Usuário ou senha inválidos.");
        return;
      }
      toast.success(`Bem-vindo de volta, ${session.nome.split(" ")[0]}.`);
      navigate({ to: "/dashboard" });
    }, 500);
  }

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden flex-col justify-between border-r border-border bg-sidebar bg-grid p-12 lg:flex">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ImobLead" width={816} height={816} className="size-10" />
          <span className="font-display text-xl font-semibold">
            Imob<span className="text-gradient">Lead</span>
          </span>
        </Link>
        <div className="max-w-md">
          <h2 className="font-display text-4xl leading-tight font-semibold">
            Enquanto o mercado espera o lead chegar,{" "}
            <span className="text-gradient">você chega antes.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Captura contínua em grupos públicos, portais e marketplaces, classificação por IA e
            contato em um clique via WhatsApp.
          </p>
          <div className="mt-8 grid gap-3 text-sm text-muted-foreground">
            {[
              "Leads com telefone, WhatsApp e redes sociais",
              "Score de qualificação e nível de urgência",
              "Pipeline visual do primeiro contato ao fechamento",
            ].map((t) => (
              <p key={t} className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" /> {t}
              </p>
            ))}
          </div>
        </div>
        <p className="text-xs text-muted-foreground">© 2026 ImobLead. Todos os direitos reservados.</p>
      </div>

      <div className="flex items-center justify-center px-5 py-12">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <img src={logo} alt="ImobLead" width={816} height={816} className="size-9" />
            <span className="font-display text-lg font-semibold">
              Imob<span className="text-gradient">Lead</span>
            </span>
          </div>

          <h1 className="font-display text-2xl font-semibold">Acessar plataforma</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Entre com suas credenciais para abrir o painel.
          </p>

          <form onSubmit={submit} className="mt-8 space-y-4">
            <div>
              <label htmlFor="usuario" className="text-sm font-medium">
                Usuário
              </label>
              <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5">
                <User className="size-4 text-muted-foreground" />
                <input
                  id="usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                  autoComplete="username"
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="senha" className="text-sm font-medium">
                Senha
              </label>
              <div className="mt-1.5 flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5">
                <Lock className="size-4 text-muted-foreground" />
                <input
                  id="senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  autoComplete="current-password"
                  placeholder="••••"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={carregando}
              className="flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold text-primary-foreground glow-ring disabled:opacity-70"
              style={{ backgroundImage: "var(--gradient-primary)" }}
            >
              {carregando && <Loader2 className="size-4 animate-spin" />}
              Entrar no painel
            </button>
          </form>

          <div className="mt-6 rounded-lg border border-dashed border-border bg-surface/60 p-3 text-xs text-muted-foreground">
            Ambiente de demonstração — usuário <strong className="text-foreground">admin</strong> e
            senha <strong className="text-foreground">1234</strong>.
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link to="/" className="text-primary hover:underline">
              Voltar para a página inicial
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
