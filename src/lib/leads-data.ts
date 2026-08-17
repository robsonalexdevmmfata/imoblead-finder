export type Urgencia = "Alta" | "Média" | "Baixa";
export type Transacao = "Compra" | "Aluguel" | "Captação";
export type Fonte = "Facebook Groups" | "OLX" | "Portais Abertos" | "Google Maps";

export type StageId = "encontrado" | "contato" | "visita" | "negociacao" | "fechado";

export interface Lead {
  id: string;
  nome: string;
  fonte: Fonte;
  linkOrigem: string;
  postagem: string;
  local: string;
  telefone: string;
  whatsapp?: string;
  instagram?: string;
  facebook?: string;
  transacao: Transacao;
  urgencia: Urgencia;
  score: number;
  resumo: string;
  orcamento: string;
  capturadoEm: string;
  stage: StageId;
}

export const STAGES: { id: StageId; label: string }[] = [
  { id: "encontrado", label: "Lead Encontrado" },
  { id: "contato", label: "Contato Realizado" },
  { id: "visita", label: "Visita Agendada" },
  { id: "negociacao", label: "Em Negociação" },
  { id: "fechado", label: "Fechado" },
];

export const FONTES: Fonte[] = ["Facebook Groups", "OLX", "Portais Abertos", "Google Maps"];

export const LEADS: Lead[] = [
  {
    id: "ld-001",
    nome: "Marina Belchior",
    fonte: "Facebook Groups",
    linkOrigem: "facebook.com/groups/imoveis-campinas/posts/8842",
    postagem:
      "Pessoal, alguém indica apartamento de 2 quartos no Cambuí? Preciso mudar até o fim do mês, financiamento já aprovado.",
    local: "Cambuí, Campinas - SP",
    telefone: "+55 19 99812-4471",
    whatsapp: "5519998124471",
    instagram: "marina.belchior",
    facebook: "marina.belchior.7",
    transacao: "Compra",
    urgencia: "Alta",
    score: 94,
    resumo: "Busca apê 2 quartos até R$ 300k, crédito aprovado",
    orcamento: "R$ 300.000",
    capturadoEm: "Hoje, 09:12",
    stage: "encontrado",
  },
  {
    id: "ld-002",
    nome: "Rodrigo Tavares",
    fonte: "OLX",
    linkOrigem: "olx.com.br/anuncio/procuro-alugar-casa-valinhos-1198234",
    postagem:
      "Procuro casa para alugar em Valinhos, 3 dorm, aceito condomínio fechado. Entrada imediata.",
    local: "Valinhos - SP",
    telefone: "+55 19 99230-8877",
    whatsapp: "5519992308877",
    instagram: "rodrigo.tvrs",
    transacao: "Aluguel",
    urgencia: "Alta",
    score: 88,
    resumo: "Casa 3 dorm em condomínio, aluguel até R$ 4,5k",
    orcamento: "R$ 4.500/mês",
    capturadoEm: "Hoje, 08:40",
    stage: "contato",
  },
  {
    id: "ld-003",
    nome: "Camila Ferrari",
    fonte: "Portais Abertos",
    linkOrigem: "portalimoveis.com/anuncios/quero-vender-apto-barao-geraldo",
    postagem:
      "Quero vender meu apartamento em Barão Geraldo, 68m², já desocupado. Procuro corretor de confiança.",
    local: "Barão Geraldo, Campinas - SP",
    telefone: "+55 19 98811-2039",
    whatsapp: "5519988112039",
    facebook: "camila.ferrari.imob",
    transacao: "Captação",
    urgencia: "Média",
    score: 76,
    resumo: "Captação de apê 68m² desocupado para venda",
    orcamento: "R$ 420.000",
    capturadoEm: "Ontem, 18:22",
    stage: "encontrado",
  },
  {
    id: "ld-004",
    nome: "Anderson Prado",
    fonte: "Google Maps",
    linkOrigem: "maps.google.com/reviews/anderson-prado-imob",
    postagem:
      "Visitei a imobiliária procurando sala comercial no centro. Ainda não encontrei nada com 40m².",
    local: "Centro, Indaiatuba - SP",
    telefone: "+55 19 99745-1120",
    whatsapp: "5519997451120",
    instagram: "and.prado",
    transacao: "Aluguel",
    urgencia: "Média",
    score: 71,
    resumo: "Sala comercial 40m² no centro, locação",
    orcamento: "R$ 3.200/mês",
    capturadoEm: "Ontem, 15:03",
    stage: "visita",
  },
  {
    id: "ld-005",
    nome: "Juliana Ostrowski",
    fonte: "Facebook Groups",
    linkOrigem: "facebook.com/groups/moradia-sp-interior/posts/4412",
    postagem:
      "Casal sem filhos procurando studio mobiliado perto da Unicamp, contrato de 12 meses.",
    local: "Campinas - SP",
    telefone: "+55 19 99120-4455",
    whatsapp: "5519991204455",
    instagram: "ju.ostrowski",
    facebook: "juliana.ostrowski",
    transacao: "Aluguel",
    urgencia: "Baixa",
    score: 58,
    resumo: "Studio mobiliado próximo à Unicamp, 12 meses",
    orcamento: "R$ 2.100/mês",
    capturadoEm: "2 dias atrás",
    stage: "encontrado",
  },
  {
    id: "ld-006",
    nome: "Fernando Aguiar",
    fonte: "OLX",
    linkOrigem: "olx.com.br/anuncio/compro-terreno-sousas-9922841",
    postagem: "Compro terreno em Sousas acima de 400m², pagamento à vista. Chamem no zap.",
    local: "Sousas, Campinas - SP",
    telefone: "+55 19 99666-7712",
    whatsapp: "5519996667712",
    transacao: "Compra",
    urgencia: "Alta",
    score: 91,
    resumo: "Terreno 400m+ em Sousas, pagamento à vista",
    orcamento: "R$ 650.000",
    capturadoEm: "Hoje, 07:55",
    stage: "negociacao",
  },
  {
    id: "ld-007",
    nome: "Patrícia Neves",
    fonte: "Portais Abertos",
    linkOrigem: "portalimoveis.com/anuncios/procuro-cobertura-jardins",
    postagem: "Procuro cobertura de alto padrão, 3 suítes, com vista. Mudança sem pressa.",
    local: "Jardim Chapadão, Campinas - SP",
    telefone: "+55 19 98444-0091",
    whatsapp: "5519984440091",
    instagram: "patinevesoficial",
    transacao: "Compra",
    urgencia: "Baixa",
    score: 64,
    resumo: "Cobertura alto padrão 3 suítes, sem urgência",
    orcamento: "R$ 1.800.000",
    capturadoEm: "3 dias atrás",
    stage: "contato",
  },
  {
    id: "ld-008",
    nome: "Lucas Bertolino",
    fonte: "Google Maps",
    linkOrigem: "maps.google.com/reviews/lucas-bertolino",
    postagem: "Alguém sabe de galpão para locação na Anhanguera? Preciso de 600m² com pátio.",
    local: "Rod. Anhanguera, Campinas - SP",
    telefone: "+55 19 99388-2214",
    whatsapp: "5519993882214",
    facebook: "lucas.bertolino.log",
    transacao: "Aluguel",
    urgencia: "Alta",
    score: 83,
    resumo: "Galpão 600m² com pátio para logística",
    orcamento: "R$ 18.000/mês",
    capturadoEm: "Hoje, 10:31",
    stage: "fechado",
  },
];

export const METRICS = [
  { label: "Leads Encontrados", value: 1284, delta: "+18,4%", hint: "últimos 30 dias" },
  { label: "Leads Qualificados", value: 417, delta: "+9,2%", hint: "score acima de 70" },
  { label: "Propostas Enviadas", value: 96, delta: "+4,7%", hint: "aguardando retorno: 31" },
  { label: "Visitas Agendadas", value: 58, delta: "+12,1%", hint: "12 nesta semana" },
];

export const INTENCAO_DATA = [
  { name: "Comprar", value: 612 },
  { name: "Alugar", value: 498 },
  { name: "Captação", value: 174 },
];

export function waLink(lead: Lead) {
  const numero = lead.whatsapp ?? lead.telefone.replace(/\D/g, "");
  const texto = encodeURIComponent(
    `Olá ${lead.nome.split(" ")[0]}, vi que você está procurando ${lead.resumo.toLowerCase()}. Posso te ajudar?`,
  );
  return `https://wa.me/${numero}?text=${texto}`;
}
