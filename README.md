# ImobLead Pipeline

Crie a interface e a estrutura completa de um SaaS imobiliário chamado "ImobLead" e cria uma logo tbm . O sistema deve focar em Prospecção Ativa de Leads e Gestão de Oportunidades.

Estrutura da Aplicação:

1. Dashboard Principal:

   - Métricas: Total de Leads Encontrados, Leads Qualificados, Propostas Enviadas, Visitas Agendadas.

   - Gráfico simples de distribuição de leads por intenção (Comprar vs. Alugar).

2. Módulo de Prospecção Ativa & Raspagem (Aba "Buscar Leads"):

   - Formulário de Busca:

     * Campo de Texto: Palavra-chave ou Localização (ex: "Procuro apartamento em Campinas").

     * Filtro por Fonte: Facebook Groups, OLX, Portais Abertos, Google Maps.

     * Botão de Ação: "Iniciar Raspagem Inteligente".

   - Motor de Raspagem & Classificação:

     * Configure a integração para acionar um serviço externo de scraping (via Webhook / API Key do Apify ou ScraperAPI).

     * Passe os dados brutos capturados por uma pipeline de análise de IA que deve extrair e classificar:

       - Nome do Contato / Usuário

       - Canal/Link de Origem

       - Telefone ou Perfil para Contato

       - Tipo de Transação (Compra, Aluguel, Captação de Imóvel)

       - Urgência do Lead (Alta, Média, Baixa)

       - Resumo da Necessidade (Ex: "Busca apê 2 quartos até R$ 300k")

   - Tabela de Resultados do Scraper:

     * Exibir os leads retornados com badges coloridos para Urgência e Tipo.

     * Botão "Mover para o Pipeline" para cada lead.

3. Pipeline / Kanban de Vendas:

   - Colunas: Lead Encontrado -> Contato Realizado -> Visita Agendada -> Em Negociação -> Fechado.

   - Cards com as informações resumidas do lead e botão rápido para abrir conversa direto no WhatsApp (usando link `wa.me`).

Design & Estilo:

- Visual moderno, limpo e escuro (Dark Mode profissional para SaaS).

- Tons de azul elétrico e grafite.

- Interface ultra fluida e responsiva.

quero que capricha no layout deixa ele bem bonito e sem emotions okays: cria tbm a tabela bem bonita com as classficacoes top dos clientes e o que ele postou e onde e traz tbm se conseguir whatsapp e o facebook e o intagram dos clientes possiveis tbm

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://imoblead-finder.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/804adc0b-9fe4-4ba5-9489-4e8e33fc6b86).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
