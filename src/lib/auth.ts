// Mock authentication for the ImobLead demo (front-end only).
// Replace with Lovable Cloud auth when the backend is enabled.

const STORAGE_KEY = "imoblead.session";

export interface Session {
  usuario: string;
  nome: string;
  cargo: string;
  plano: "Starter" | "Performance";
  limiteDiario: number;
  usadoHoje: number;
}

const DEMO_SESSION: Session = {
  usuario: "admin",
  nome: "Robson Alex",
  cargo: "Administrador",
  plano: "Performance",
  limiteDiario: 600,
  usadoHoje: 187,
};

export function signIn(usuario: string, senha: string): Session | null {
  if (usuario.trim().toLowerCase() !== "admin" || senha !== "1234") return null;
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_SESSION));
  }
  return DEMO_SESSION;
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function signOut() {
  if (typeof window !== "undefined") window.localStorage.removeItem(STORAGE_KEY);
}
