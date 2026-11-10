/* ==========================================================================
   Conform.ai — Dicionário de Internacionalização (PT-BR / EN)
   Fontes das métricas:
   - Normas (até 94%): 01_Canvas_e_Negocio/03_METODOLOGIA_ECONOMIA_TOKENS_E_CUSTOS.md
   - Páginas auditadas (~88%): conform-ai-health/docs/benchmarks/token-reduction-methodology.md
   - Custos e economia: Metodologia, seção 2
   - Normas do simulador: 02_Produto_e_Arquitetura/cfmScrapingBlueprint.json
   ========================================================================== */

const i18n = {
  pt: {
    // Meta
    metaTitle: "Conform.ai · Auditoria regulatória contínua em saúde",
    metaDescription: "Agentes de IA que auditam sites e fluxos de saúde digital contra normas vigentes do CFM, ANVISA, ANS e LGPD, citando o artigo e a evidência de cada apontamento.",

    // Acessibilidade
    skipLink: "Pular para o conteúdo",
    ariaLang: "Idioma da página",
    ariaMenuOpen: "Abrir menu",
    ariaMenuClose: "Fechar menu",
    ariaGithub: "Abrir o repositório no GitHub",
    ariaSimTabs: "Exemplos de laudo",
    ariaNavMain: "Navegação principal",

    // Nav
    navProblem: "O problema",
    navSolution: "Como funciona",
    navBmc: "Modelo de negócio",
    navStack: "Tecnologia",
    navRoadmap: "Roadmap",
    navTeam: "Equipe",
    navGithub: "GitHub",
    badgeTrack: "Hack Brasil 2026 · Trilha 07",

    // Hero
    heroTag: "Governança regulatória automatizada para a saúde digital",
    heroTitle: "Auditoria regulatória contínua com agentes de IA para a saúde digital",
    heroDesc: "Monitoramos sites, termos de uso e fluxos clínicos contra as normas vigentes do CFM, ANVISA, ANS e LGPD. Cada apontamento vem com o artigo citado e a frase da página que o motivou.",
    ctaGithub: "Ver o código no GitHub",
    ctaDoc: "Como funciona",

    // Stats
    stat1Number: "até 94%",
    stat1Label: "menos tokens ao ler as normas em Markdown limpo, em vez do PDF ou HTML bruto",
    stat2Number: "15 min",
    stat2Label: "meta do diagnóstico completo, contra 30 a 60 dias de consultoria manual",
    stat3Number: "Art. + trecho",
    stat3Label: "em cada apontamento: o artigo vigente e a evidência encontrada na página",

    // Faixa Item 6.9
    synthBand: "Item 6.9 do Regulamento: este projeto usa somente casos sintéticos e normas públicas. Nenhum dado de paciente ou prontuário real é coletado, processado ou exibido.",

    // Simulador
    simTitle: "Exemplo de laudo em semáforo",
    simSubtitle: "Casos sintéticos, normas do catálogo vigente",
    tabCritical: "Crítico",
    tabWarning: "Atenção",
    tabCompliant: "Conforme",
    verdictCritical: "Violação crítica",
    verdictWarning: "Requer atenção",
    verdictCompliant: "Em conformidade",

    simNormLabel: "Norma aplicável",
    simArticleLabel: "Dispositivo",
    simEvidenceLabel: "Evidência encontrada",
    simActionLabel: "Ação recomendada",

    critNorm: "Resolução CFM nº 2.336/2023 · Publicidade médica",
    critArticle: "Art. 11: vedação à promessa de resultado ou garantia de êxito de tratamento.",
    critEvidence: "“Garantimos 100% de recuperação estética sem cicatrizes em apenas 2 sessões.”",
    critAction: "Retirar a garantia de resultado e descrever o procedimento de forma informativa, deixando claro que a evolução varia de paciente para paciente.",

    warnNorm: "Resolução CFM nº 2.314/2022 · Telemedicina",
    warnArticle: "Art. 3º: teleconsulta com consentimento livre e esclarecido (TCLE) do paciente.",
    warnEvidence: "O fluxo de teleconsulta abre a sala de atendimento sem registrar o aceite do TCLE.",
    warnAction: "Exigir o aceite do TCLE antes de iniciar a teleconsulta e registrá-lo no prontuário.",

    compNorm: "Resolução CFM nº 2.299/2021 · Prescrição e documentos digitais",
    compArticle: "Art. 2º: requisitos de assinatura eletrônica em prescrições.",
    compEvidence: "Prescrição assinada com certificado ICP-Brasil, com nome, CRM e UF do médico emissor.",
    compAction: "Nenhuma ação necessária. O fluxo de prescrição atende ao requisito.",

    tokenHeader: "Tokens enviados ao modelo nesta página",
    tokenSavings: "61.450 → 7.100 (−88%)",
    tokenNote: "HTML bruto vs. Markdown limpo · média do benchmark de páginas de clínicas",

    // Problema
    painTag: "O problema",
    painTitle: "Por que a regulação em saúde é um labirinto",
    painSubtitle: "Para quem não é da área médica: as regras são muitas, estão espalhadas em PDFs de órgãos diferentes e quem responde por elas é uma pessoa física.",

    painCard1Title: "A responsabilidade é pessoal",
    painCard1Desc: "Toda empresa de saúde tem um Diretor Técnico médico. Ele responde eticamente, com o próprio registro no CRM, pelo que a empresa publica e pelo que o software faz. No limite, um processo ético pode levar à cassação do registro profissional.",

    painCard2Title: "Quatro órgãos, normas dispersas",
    painCard2Desc: "O CFM publica resoluções em PDF; a ANVISA regula software como dispositivo médico (SaMD); a ANS regula os planos de saúde; e a LGPD (Art. 11) trata dados de saúde como dados sensíveis.",

    painCard3Title: "Caro para PMEs, arriscado com IA genérica",
    painCard3Desc: "Uma auditoria regulatória inicial com consultoria especializada custa de R$ 25 mil a R$ 60 mil e leva de 30 a 60 dias. Um chatbot genérico, sem catálogo de normas vigentes, pode citar resoluções revogadas e gasta tokens lendo páginas inteiras.",

    painHighlightTitle: "Na prática",
    painHighlightText: "Um anúncio de clínica com fotos de “antes e depois” sem finalidade educativa contraria a Resolução CFM nº 2.336/2023 e pode virar processo ético no CRM. Uma prescrição digital sem assinatura ICP-Brasil pode ser recusada pela farmácia.",

    // Como funciona
    howTag: "Como funciona",
    howTitle: "Como o Conform.ai resolve isso",
    howSubtitle: "Um fluxo automatizado em quatro etapas: o que hoje leva de 30 a 60 dias de consultoria vira um diagnóstico com meta de 15 minutos.",

    step1Partner: "Firecrawl",
    step1Title: "Coleta em Markdown limpo",
    step1Desc: "Raspa as páginas do cliente e os portais oficiais e converte HTML e PDF em Markdown sem menus, scripts e estilos. Nas páginas de clínicas, isso corta em média 88% dos tokens.",

    step2Partner: "Catálogo de normas",
    step2Title: "Seleção em dois estágios",
    step2Desc: "Um índice leve de normas, com vigência e tags, escolhe só as resoluções que se aplicam àquele produto. Normas revogadas são descartadas antes de chegar ao modelo.",

    step3Partner: "Google Gemini",
    step3Title: "Auditoria com guardrails",
    step3Desc: "O modelo compara a evidência da página com os artigos selecionados. Só pode citar normas do catálogo e precisa apontar o trecho que motivou cada achado.",

    step4Partner: "Resend · Devin",
    step4Title: "Laudo, alerta e correção",
    step4Desc: "Gera o laudo em semáforo e envia o alerta executivo por e-mail (Resend). A abertura automática de Pull Requests de correção pelo Devin está em integração.",

    // BMC
    bmcTag: "Modelo de negócio",
    bmcTitle: "Service-as-a-Software",
    bmcSubtitle: "Pela tese da Sequoia Capital: em vez de vender uma ferramenta que ainda exige advogados para operar, entregamos o trabalho regulatório pronto, com a decisão final nas mãos do médico ou do CTO.",

    bmcCol1Badge: "Clientes",
    bmcCol1Title: "Para quem construímos",
    bmcCol1Desc: "Primeiro alvo: CTOs e Diretores Técnicos de HealthTechs de pequeno e médio porte. Em seguida:",
    bmcC1Item1: "HealthTechs de telemedicina, prescrição digital, escriba por IA e SaMD",
    bmcC1Item2: "Clínicas e consultórios com presença digital",
    bmcC1Item3: "Hospitais e operadoras que avaliam fornecedores de software",
    bmcC1Item4: "Startups estrangeiras entrando no Brasil",

    bmcCol2Badge: "Proposta de valor",
    bmcCol2Title: "O que entregamos",
    bmcCol2Desc: "Conformidade regulatória deixa de ser um projeto de meses:",
    bmcC2Item1: "Diagnóstico com meta de 15 minutos, contra 30 a 60 dias de consultoria",
    bmcC2Item2: "Cada apontamento cita o artigo vigente e a evidência encontrada",
    bmcC2Item3: "Correção no código por Pull Request, para aprovação humana (em integração)",
    bmcC2Item4: "Economia estimada de R$ 80 mil a R$ 160 mil por ano em monitoramento contínuo",

    bmcCol3Badge: "Receita",
    bmcCol3Title: "Como cobramos",
    bmcCol3Desc: "Pacotes modulares que disputam o orçamento de consultoria e de engenharia:",
    bmcC3Item1: "Assinatura de monitoramento por nível (Radar, Governança, Autopilot)",
    bmcC3Item2: "Taxa por resultado: cobrança por Pull Request de adequação aceito",
    bmcC3Item3: "Diagnóstico de entrada no Brasil para HealthTechs estrangeiras",
    bmcC3Item4: "API e servidor MCP com as normas em Markdown para agentes de terceiros",

    // Stack
    stackTag: "Tecnologia",
    stackTitle: "Stack e parceiros",
    stackSubtitle: "Cada peça tem um papel no fluxo: coletar, selecionar, auditar, avisar e corrigir.",

    stack1Role: "Coleta e Markdown",
    stack1Desc: "Raspagem de páginas e normas e conversão para Markdown limpo.",
    stack2Role: "Raciocínio regulatório",
    stack2Desc: "Inferência com seleção de normas em dois estágios e guardrails de ética médica.",
    stack3Role: "Engenharia autônoma (em integração)",
    stack3Desc: "Agente que abrirá Pull Requests no GitHub para corrigir lacunas regulatórias.",
    stack4Role: "Alertas executivos",
    stack4Desc: "Envio de laudos e alertas para Diretores Técnicos e CTOs.",
    stack5Role: "Backend",
    stack5Desc: "API em TypeScript com Prisma, contrato estruturado de saída e tipagem estrita.",
    stack6Role: "Dashboard",
    stack6Desc: "Painel em React, Vite e Tailwind com laudos e telemetria de tokens.",
    stack7Role: "Banco de dados",
    stack7Desc: "Clientes, execuções de auditoria e telemetria de tokens.",
    stack8Role: "Filas",
    stack8Desc: "Raspagem assíncrona e auditorias em lote.",

    // Roadmap
    roadTag: "Roadmap",
    roadTitle: "Do protótipo à governança autônoma",
    roadSubtitle: "Marcos do Hack Brasil 2026 e o que vem depois.",

    road1Phase: "Fase 1 · M1/M2 · atual",
    road1Title: "Prova de conceito",
    road1Desc: "Auditoria de publicidade médica (CFM 2.336/2023), telemedicina e prescrição digital com casos sintéticos, laudo em semáforo, alertas por e-mail e catálogo de normas indexado.",
    road2Phase: "Fase 2 · M3/M4",
    road2Title: "Orquestração autônoma",
    road2Desc: "Agente que gera os prompts e dirige a raspagem do Firecrawl a partir do manifesto de normas (cfmScrapingBlueprint).",
    road3Phase: "Fase 3 · M5 · submissão",
    road3Title: "Ciclo de correção completo",
    road3Desc: "Integração com a API do Devin para abrir Pull Requests de adequação no GitHub, com notificação executiva via Resend.",
    road4Phase: "Fase 4 · pós-hackathon",
    road4Title: "Mais normas e outros países",
    road4Desc: "Cobertura ampliada de ANVISA (SaMD, RDC 657), ANS e Ministério da Saúde, e adaptação para FDA e EMA.",

    // Equipe
    teamTag: "Equipe",
    teamTitle: "Quem está construindo",
    teamSubtitle: "Dois médicos, um engenheiro de software e um especialista em governança de IA.",

    member1Role: "PMO · Dados regulatórios · Pitch",
    member1Bio: "Médico e desenvolvedor. Conduz a gestão do projeto (framework Google Project Management), a curadoria e indexação das normas do CFM e o pitch.",
    member2Role: "Product Owner · Produto clínico",
    member2Bio: "Médica. Mapeia as jornadas regulatórias, escreve os casos clínicos sintéticos de teste, os requisitos de produto e os critérios de aceite.",
    member3Role: "CTO · Tech Lead",
    member3Bio: "Engenheiro de software e arquiteto de sistemas. Lidera a engenharia da plataforma, o monorepo, as integrações de API e a infraestrutura em nuvem.",
    member4Role: "Governança de IA clínica · CBA/ROI",
    member4Bio: "Especialista em governança de IA clínica e conformidade ética. Responsável pela modelagem financeira, análise de custo-benefício e métricas de ROI.",

    // Rodapé
    footerDesc: "Governança regulatória contínua para a saúde digital, construída no Hack Brasil 2026.",
    footerNavTitle: "Navegação",
    footerLegalTitle: "Projeto",
    footerRepo: "Repositório no GitHub",
    footerLicense: "Licença MIT",
    footerIssues: "Issues e suporte",
    footerTrack: "Hack Brasil 2026 · Trilha 07",
    footerRights: "© 2026 Conform.ai. Licença MIT.",
    footerCredit: "Feito pela equipe Conform.ai para o Hack Brasil 2026.",
    footerDisclaimer: "Item 6.9 do Regulamento Hack Brasil 2026: somente casos sintéticos e normas regulatórias públicas. Nenhum dado pessoal ou prontuário real de paciente é coletado, processado ou exibido."
  },

  en: {
    // Meta
    metaTitle: "Conform.ai · Continuous regulatory audits for digital health",
    metaDescription: "AI agents that audit digital-health websites and workflows against Brazil's active CFM, ANVISA, ANS and LGPD rules, citing the article and the evidence behind every finding.",

    // Accessibility
    skipLink: "Skip to content",
    ariaLang: "Page language",
    ariaMenuOpen: "Open menu",
    ariaMenuClose: "Close menu",
    ariaGithub: "Open the repository on GitHub",
    ariaSimTabs: "Sample reports",
    ariaNavMain: "Main navigation",

    // Nav
    navProblem: "The problem",
    navSolution: "How it works",
    navBmc: "Business model",
    navStack: "Technology",
    navRoadmap: "Roadmap",
    navTeam: "Team",
    navGithub: "GitHub",
    badgeTrack: "Hack Brasil 2026 · Track 07",

    // Hero
    heroTag: "Automated regulatory governance for digital health",
    heroTitle: "Continuous regulatory audits with AI agents for digital health",
    heroDesc: "We monitor websites, terms of service and clinical workflows against Brazil's active CFM, ANVISA, ANS and LGPD rules. Every finding cites the article it breaks and quotes the sentence on the page that triggered it.",
    ctaGithub: "See the code on GitHub",
    ctaDoc: "How it works",

    // Stats
    stat1Number: "up to 94%",
    stat1Label: "fewer tokens when regulations are read as clean Markdown instead of raw PDF or HTML",
    stat2Number: "15 min",
    stat2Label: "target for a full assessment, versus 30 to 60 days of manual consulting",
    stat3Number: "Article + quote",
    stat3Label: "in every finding: the active article and the evidence found on the page",

    // Rule 6.9 band
    synthBand: "Rule 6.9 of the official rules: this project uses synthetic cases and public regulations only. No patient data or real medical records are collected, processed or displayed.",

    // Simulator
    simTitle: "Sample traffic-light report",
    simSubtitle: "Synthetic cases, rules from the active catalog",
    tabCritical: "Critical",
    tabWarning: "Warning",
    tabCompliant: "Compliant",
    verdictCritical: "Critical violation",
    verdictWarning: "Needs attention",
    verdictCompliant: "Compliant",

    simNormLabel: "Applicable rule",
    simArticleLabel: "Provision",
    simEvidenceLabel: "Evidence found",
    simActionLabel: "Recommended action",

    critNorm: "CFM Resolution No. 2,336/2023 · Medical advertising",
    critArticle: "Art. 11: physicians may not promise results or guarantee treatment success.",
    critEvidence: "“We guarantee 100% scar-free aesthetic recovery in just two sessions.”",
    critAction: "Remove the outcome guarantee and describe the procedure in informative terms, making clear that results vary from patient to patient.",

    warnNorm: "CFM Resolution No. 2,314/2022 · Telemedicine",
    warnArticle: "Art. 3: teleconsultations require the patient's informed consent.",
    warnEvidence: "The teleconsultation flow opens the visit room without recording the patient's informed consent.",
    warnAction: "Require informed consent before the teleconsultation starts and store it in the medical record.",

    compNorm: "CFM Resolution No. 2,299/2021 · Digital prescriptions and documents",
    compArticle: "Art. 2: electronic signature requirements for prescriptions.",
    compEvidence: "Prescription signed with an ICP-Brasil certificate, showing the prescriber's name, CRM number and state.",
    compAction: "No action needed. The prescription flow meets the requirement.",

    tokenHeader: "Tokens sent to the model for this page",
    tokenSavings: "61,450 → 7,100 (−88%)",
    tokenNote: "Raw HTML vs. clean Markdown · average from the clinic-page benchmark",

    // Problem
    painTag: "The problem",
    painTitle: "Why healthcare regulation is a maze",
    painSubtitle: "For non-physicians: the rules are many, they are scattered across PDFs from different agencies, and a named individual is accountable for them.",

    painCard1Title: "Liability is personal",
    painCard1Desc: "Every Brazilian healthcare company must have a physician as Medical Director. That person answers to the Medical Council, with their own license, for what the company publishes and what its software does. In the worst case, an ethics proceeding can end in license revocation.",

    painCard2Title: "Four regulators, scattered rules",
    painCard2Desc: "The Federal Council of Medicine (CFM) publishes resolutions as PDFs; ANVISA regulates software as a medical device (SaMD); ANS regulates health plans; and the LGPD, Brazil's data protection law (Art. 11), treats health data as sensitive.",

    painCard3Title: "Costly for startups, risky with generic AI",
    painCard3Desc: "An initial regulatory audit by a specialized consultancy costs R$ 25,000 to R$ 60,000 (about US$ 5,000 to US$ 12,000) and takes 30 to 60 days. A generic chatbot without a catalog of active rules can cite repealed resolutions and burns tokens reading entire pages.",

    painHighlightTitle: "In practice",
    painHighlightText: "A clinic ad with “before and after” photos and no educational purpose breaches CFM Resolution No. 2,336/2023 and can lead to an ethics proceeding at the regional council. A digital prescription without an ICP-Brasil signature can be refused by the pharmacy.",

    // How it works
    howTag: "How it works",
    howTitle: "How Conform.ai solves it",
    howSubtitle: "An automated four-step workflow: what takes 30 to 60 days of consulting today becomes an assessment with a 15-minute target.",

    step1Partner: "Firecrawl",
    step1Title: "Clean Markdown ingestion",
    step1Desc: "Scrapes customer pages and official portals and turns HTML and PDF into Markdown without menus, scripts or styling. On clinic websites this removes 88% of the tokens on average.",

    step2Partner: "Rules catalog",
    step2Title: "Two-stage rule selection",
    step2Desc: "A lightweight index of rules, with status and tags, picks only the resolutions that apply to the product under review. Repealed rules are dropped before they reach the model.",

    step3Partner: "Google Gemini",
    step3Title: "Audit with guardrails",
    step3Desc: "The model compares evidence from the page with the selected articles. It may only cite rules from the catalog and must quote the passage behind each finding.",

    step4Partner: "Resend · Devin",
    step4Title: "Report, alert and fix",
    step4Desc: "Produces the traffic-light report and emails an executive alert through Resend. Automatic fix pull requests through Devin are being integrated.",

    // BMC
    bmcTag: "Business model",
    bmcTitle: "Service-as-a-Software",
    bmcSubtitle: "Following Sequoia Capital's thesis: instead of selling a tool that still needs lawyers to run it, we deliver the finished compliance work, with the final call left to the physician or the CTO.",

    bmcCol1Badge: "Customers",
    bmcCol1Title: "Who we build for",
    bmcCol1Desc: "First target: CTOs and Medical Directors at small and mid-sized healthtechs. Then:",
    bmcC1Item1: "Telemedicine, digital prescription, AI scribe and SaMD healthtechs",
    bmcC1Item2: "Clinics and medical practices with an online presence",
    bmcC1Item3: "Hospitals and health plans vetting software vendors",
    bmcC1Item4: "Foreign startups entering Brazil",

    bmcCol2Badge: "Value proposition",
    bmcCol2Title: "What we deliver",
    bmcCol2Desc: "Regulatory compliance stops being a months-long project:",
    bmcC2Item1: "Assessment with a 15-minute target, versus 30 to 60 days of consulting",
    bmcC2Item2: "Every finding cites the active article and the evidence found",
    bmcC2Item3: "Code fixes as pull requests for human approval (in integration)",
    bmcC2Item4: "Estimated savings of R$ 80,000 to R$ 160,000 a year in ongoing monitoring",

    bmcCol3Badge: "Revenue",
    bmcCol3Title: "How we charge",
    bmcCol3Desc: "Modular plans that compete for consulting and engineering budgets:",
    bmcC3Item1: "Monitoring subscription by tier (Radar, Governance, Autopilot)",
    bmcC3Item2: "Outcome-based fee: charged per accepted compliance pull request",
    bmcC3Item3: "Brazil market-entry assessment for foreign healthtechs",
    bmcC3Item4: "API and MCP server with rules in Markdown for third-party agents",

    // Stack
    stackTag: "Technology",
    stackTitle: "Stack and partners",
    stackSubtitle: "Each piece has one job in the workflow: collect, select, audit, alert and fix.",

    stack1Role: "Ingestion and Markdown",
    stack1Desc: "Scrapes pages and regulations and converts them to clean Markdown.",
    stack2Role: "Regulatory reasoning",
    stack2Desc: "Inference with two-stage rule selection and medical-ethics guardrails.",
    stack3Role: "Autonomous engineering (in integration)",
    stack3Desc: "Agent that will open GitHub pull requests to close compliance gaps.",
    stack4Role: "Executive alerts",
    stack4Desc: "Sends reports and alerts to Medical Directors and CTOs.",
    stack5Role: "Backend",
    stack5Desc: "TypeScript API with Prisma, a structured output contract and strict typing.",
    stack6Role: "Dashboard",
    stack6Desc: "React, Vite and Tailwind dashboard with reports and token telemetry.",
    stack7Role: "Database",
    stack7Desc: "Customers, audit runs and token telemetry.",
    stack8Role: "Queues",
    stack8Desc: "Asynchronous scraping and batch audits.",

    // Roadmap
    roadTag: "Roadmap",
    roadTitle: "From prototype to autonomous governance",
    roadSubtitle: "Hack Brasil 2026 milestones and what comes next.",

    road1Phase: "Phase 1 · M1/M2 · current",
    road1Title: "Proof of concept",
    road1Desc: "Audits of medical advertising (CFM 2,336/2023), telemedicine and digital prescriptions on synthetic cases, with the traffic-light report, email alerts and an indexed rules catalog.",
    road2Phase: "Phase 2 · M3/M4",
    road2Title: "Autonomous orchestration",
    road2Desc: "An agent that writes the prompts and drives Firecrawl scraping from the rules manifest (cfmScrapingBlueprint).",
    road3Phase: "Phase 3 · M5 · submission",
    road3Title: "Full remediation loop",
    road3Desc: "Devin API integration to open compliance pull requests on GitHub, with executive notifications through Resend.",
    road4Phase: "Phase 4 · after the hackathon",
    road4Title: "More rules, more countries",
    road4Desc: "Wider coverage of ANVISA (SaMD, RDC 657), ANS and the Ministry of Health, and adaptation to the FDA and EMA.",

    // Team
    teamTag: "Team",
    teamTitle: "Who is building it",
    teamSubtitle: "Two physicians, a software engineer and an AI governance specialist.",

    member1Role: "PMO · Regulatory data · Pitch",
    member1Bio: "Physician and developer. Runs project management (Google Project Management framework), curates and indexes CFM regulations, and leads the pitch.",
    member2Role: "Product Owner · Clinical product",
    member2Bio: "Physician. Maps regulatory journeys and writes the synthetic clinical test cases, product requirements and acceptance criteria.",
    member3Role: "CTO · Tech Lead",
    member3Bio: "Software engineer and systems architect. Leads platform engineering, the monorepo, API integrations and cloud infrastructure.",
    member4Role: "Clinical AI governance · CBA/ROI",
    member4Bio: "Specialist in clinical AI governance and ethics compliance. Owns the financial model, cost-benefit analysis and ROI metrics.",

    // Footer
    footerDesc: "Continuous regulatory governance for digital health, built at Hack Brasil 2026.",
    footerNavTitle: "Navigation",
    footerLegalTitle: "Project",
    footerRepo: "GitHub repository",
    footerLicense: "MIT License",
    footerIssues: "Issues and support",
    footerTrack: "Hack Brasil 2026 · Track 07",
    footerRights: "© 2026 Conform.ai. MIT License.",
    footerCredit: "Made by the Conform.ai team for Hack Brasil 2026.",
    footerDisclaimer: "Rule 6.9 of the Hack Brasil 2026 official rules: synthetic cases and public regulations only. No personal data or real patient records are collected, processed or displayed."
  }
};

if (typeof window !== 'undefined') {
  window.i18n = i18n;
}
