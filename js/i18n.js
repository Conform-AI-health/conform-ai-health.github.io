/* ==========================================================================
   Conform.ai — Dicionário de Internacionalização (PT-BR / EN)
   ========================================================================== */

const i18n = {
  pt: {
    // Nav
    navProblem: "O Problema",
    navSolution: "Como Funciona",
    navBmc: "Modelo de Negócio",
    navStack: "Tecnologia",
    navRoadmap: "Roadmap",
    navTeam: "Equipe",
    navGithub: "Ver no GitHub",
    badgeTrack: "Hack Brasil 2026 · Trilha 07: Logística & Automação",

    // Hero
    heroTag: "Governança Regulatória & Automação Inteligente em Saúde",
    heroTitle: "Auditoria regulatória contínua com agentes de IA para a saúde digital",
    heroDesc: "Substituímos meses de consultoria jurídica manual por governança autônoma em tempo real. Auditamos websites, termos de uso e fluxos clínicos contra as resoluções vigentes do CFM, ANVISA, ANS e LGPD com guardrails anti-alucinação e redução de mais de 90% no consumo de tokens.",
    ctaGithub: "Explorar Código no GitHub",
    ctaDoc: "Conhecer a Arquitetura",

    // Stats
    stat1Number: "94%",
    stat1Label: "Menos consumo de tokens via Firecrawl Markdown",
    stat2Number: "15 min",
    stat2Label: "Tempo médio de diagnóstico vs. 45 dias manuais",
    stat3Number: "100%",
    stat3Label: "Rastreabilidade a artigos e normas vigentes",

    // Verdict Simulator
    simTitle: "Simulador de Laudo em Semáforo",
    simSubtitle: "Diagnóstico regulatório automatizado em tempo real",
    tabCritical: "🔴 Violação Crítica",
    tabWarning: "🟡 Atenção",
    tabCompliant: "🟢 Conforme",

    simNormLabel: "Norma Aplicável",
    simArticleLabel: "Artigo & Dispositivo Legal",
    simEvidenceLabel: "Evidência Detectada na Página",
    simActionLabel: "Ação de Remediação Sugerida",

    // Sim Data - Critical
    critNorm: "Resolução CFM nº 2.336/2023 (Publicidade Médica)",
    critArticle: "Artigo 5º, Inciso II — Vedação expressa a promessa de resultado e 'antes e depois' sem caráter educativo/científico.",
    critEvidence: "'Garantimos 100% de recuperação estética sem cicatrizes em apenas 2 sessões.'",
    critAction: "Remover a alegação de garantia de resultado e adequar o texto para caráter informativo de procedimentos médicos.",

    // Sim Data - Warning
    warnNorm: "Resolução CFM nº 2.454/2026 (Inteligência Artificial na Medicina)",
    warnArticle: "Artigo 4º — Exigência de supervisão humana explícita e termo de esclarecimento ao paciente em sistemas de IA diagnóstica.",
    warnEvidence: "Módulo de triagem automatizada sem aviso prévio de supervisão médica humana.",
    warnAction: "Inserir checkbox de consentimento informado e botão de revisão clínica humana prévia.",

    // Sim Data - Compliant
    compNorm: "Resolução CFM nº 2.299/2021 (Prescrição Eletrônica & Telemedicina)",
    compArticle: "Artigo 2º — Validação de assinatura digital com certificado padrão ICP-Brasil e identificação de CRM/RQE.",
    compEvidence: "Assinatura digital ICP-Brasil presente com hash SHA-256 e CRM/RQE do emissor devidamente validados.",
    compAction: "Nenhuma ação necessária. Fluxo clínico em conformidade integral.",

    tokenHeader: "Eficiência de Contexto (Tokens Consumidos)",
    tokenSavings: "Economia de ~94% (Markdown vs. HTML/PDF bruto)",

    // The Pain Section (Para Não-Médicos)
    painTag: "A Realidade Regulatória",
    painTitle: "Por que a regulação em saúde é um labirinto?",
    painSubtitle: "Para quem não é da área médica, entender as regras da saúde parece lidar com um código impenetrável. Veja como esse problema afeta diretamente fundadores, desenvolvedores e pacientes.",
    
    painCard1Title: "Responsabilidade Pessoal e Ética",
    painCard1Desc: "Diferente de um e-commerce ou SaaS comum, na saúde o Diretor Técnico responde com o próprio registro profissional (CRM) por falhas no marketing ou no código do produto. Uma falha de software pode custar a cassação do diploma médico.",
    
    painCard2Title: "Emaranhado de Órgãos e Normas Dispersas",
    painCard2Desc: "O CFM publica dezenas de resoluções em PDFs complexos; a ANVISA regula softwares como dispositivos médicos (SaMD); a ANS dita regras de cobertura; e a LGPD (Art. 11) impõe rigor máximo sobre dados sensíveis de saúde.",
    
    painCard3Title: "O Custo Inviável para PMEs e Startups",
    painCard3Desc: "Contratar bancas de advocacia especializadas custa de R$ 50.000 a R$ 100.000 e leva até 60 dias por parecer. Enquanto isso, usar IAs genéricas (como ChatGPT solto) gera alucinações graves, citando normas já revogadas e gerando faturas proibitivas de tokens.",

    painHighlightTitle: "O Impacto na Prática:",
    painHighlightText: "Um simples post de clínica anunciando 'antes e depois' sem os termos exigidos pela Resolução CFM nº 2.336/2023 gera denúncia imediata no CRM. Uma plataforma de telemedicina sem a trava certa de assinatura digital pode ter suas receitas médicas bloqueadas em farmácias de todo o Brasil.",

    // How It Works Section
    howTag: "Arquitetura Inteligente",
    howTitle: "Como o Conform.ai resolve esse abismo",
    howSubtitle: "Um fluxo em 4 estágios que integra os melhores parceiros tecnológicos do mercado para transformar regulação em código acionável.",

    step1Partner: "Extração com Firecrawl",
    step1Title: "1. Scraping Estruturado",
    step1Desc: "Nosso motor de ingestão rastreia portais oficiais e páginas de clientes, convertendo HTMLs pesados e PDFs em Markdown semântico enxuto, reduzindo em mais de 90% os tokens necessários para auditoria.",

    step2Partner: "Catálogo & Diretriz",
    step2Title: "2. Resolução em 2 Estágios",
    step2Desc: "Em vez de injetar centenas de normas de uma vez no modelo, um catálogo dinâmico de normas vigentes seleciona com precisão cirúrgica apenas as resoluções ativas pertinentes àquele produto, descartando normas revogadas.",

    step3Partner: "Google Gemini",
    step3Title: "3. Auditoria com Guardrails",
    step3Desc: "Agentes especializados confrontam as evidências reais da página contra os artigos vigentes. Guardrails estritos proíbem citações a normas fora do catálogo e impedem qualquer alucinação de infrações.",

    step4Partner: "Devin & Resend",
    step4Title: "4. Ação e Correção Autônoma",
    step4Desc: "A plataforma gera o Laudo em Semáforo (🟢/🟡/🔴), envia relatórios executivos para a liderança via Resend e gera Pull Requests automáticos de correção no código-fonte através do Devin.",

    // BMC Section
    bmcTag: "Estratégia de Negócio",
    bmcTitle: "Business Model Canvas: 'Service-as-a-Software'",
    bmcSubtitle: "Baseado na tese da Sequoia Capital: em vez de vender apenas uma ferramenta de busca que exige advogados humanos para operar, entregamos o trabalho regulatório pronto e auditado.",

    bmcCol1Badge: "Segmentos de Clientes",
    bmcCol1Title: "Para Quem Construímos",
    bmcCol1Desc: "Nosso mercado abrange organizações que não podem arriscar interdições ou sanções:",
    bmcC1Item1: "HealthTechs PME (Telemedicina, Prescrição, Escribas de IA, SaMD)",
    bmcC1Item2: "Clínicas Médicas e Consultórios Especializados com presença digital",
    bmcC1Item3: "Hospitais e Operadoras monitorando conformidade de fornecedores",
    bmcC1Item4: "Startups Internacionais entrando no Brasil (Cross-Border Healthcare)",

    bmcCol2Badge: "Proposta de Valor",
    bmcCol2Title: "O Que Entregamos",
    bmcCol2Desc: "Transformamos conformidade regulatória de centro de custo em diferencial competitivo:",
    bmcC2Item1: "Diagnóstico regulatório em 15 minutos (vs. 45 dias de consultorias)",
    bmcC2Item2: "Zero alucinação jurídica: 100% de rastreabilidade a artigos vigentes",
    bmcC2Item3: "Adequação automatizada: Pull Requests de código prontos para aprovação",
    bmcC2Item4: "Economia de mais de R$ 80.000/ano em honorários jurídicos para PMEs",

    bmcCol3Badge: "Modelo de Receita",
    bmcCol3Title: "Monetização Sustentável",
    bmcCol3Desc: "Capturamos o orçamento de consultoria e engenharia através de pacotes modulares:",
    bmcC3Item1: "Retainer de Governança Autônoma (Assinatura contínua por módulo)",
    bmcC3Item2: "Outcome-Based Fee (Cobrança por Pull Request regulatório aceito)",
    bmcC3Item3: "Passaporte de Entrada no Brasil (Diagnóstico prévio para HealthTechs)",
    bmcC3Item4: "API / MCP Server para integração com Cursor, Claude e Devin",

    // Tech Stack Section
    stackTag: "Engenharia de Alta Performance",
    stackTitle: "Stack Tecnológica & Parceiros",
    stackSubtitle: "Arquitetura desenhada para maximizar a eficiência, robustez e auditabilidade do sistema.",

    stack1Role: "Web Data & Ingestão",
    stack1Desc: "Raspagem de alta precisão e conversão de páginas e normativas em Markdown limpo para IA.",

    stack2Role: "Raciocínio & RAG",
    stack2Desc: "Motor de inferência multimodal com filtragem em 2 estágios e guardrails deontológicos.",

    stack3Role: "Engenharia Autônoma",
    stack3Desc: "Agente de software que abre Pull Requests no GitHub para corrigir brechas regulatórias.",

    stack4Role: "Comunicação Executiva",
    stack4Desc: "Envio de laudos e alertas críticos imediatos para Diretores Médicos e CTOs.",

    stack5Role: "Backend & Contratos",
    stack5Desc: "API robusta em TypeScript com Prisma ORM, BullMQ para filas de scraping e tipagem estrita.",

    stack6Role: "Frontend da Dashboard",
    stack6Desc: "Interface executiva em React + Vite + Tailwind CSS com tema escuro de alto contraste.",

    stack7Role: "Banco de Dados",
    stack7Desc: "Armazenamento estruturado de clientes, execuções de auditoria e telemetria de tokens.",

    stack8Role: "Orquestração & Filas",
    stack8Desc: "Processamento distribuído de scraping assíncrono e auditorias em lote.",

    // Roadmap Section
    roadTag: "Visão de Futuro",
    roadTitle: "Nosso Roadmap de Desenvolvimento",
    roadSubtitle: "De agentes configurados manualmente até a governança regulatória 100% autônoma e multi-jurisdição.",

    road1Phase: "Fase 1 · Marco M1/M2 (Atual)",
    road1Title: "PoC & Validação Inicial",
    road1Desc: "Auditoria assistida de publicidade médica (CFM 2.336/2023) e telemedicina com 2 casos sintéticos, laudo em semáforo e catálogo normativo indexado.",

    road2Phase: "Fase 2 · Marco M3/M4",
    road2Title: "Orquestração Autônoma",
    road2Desc: "Agente inteligente que gera prompts dinâmicos e direciona o scraping do Firecrawl automaticamente a partir do manifesto de diretrizes (cfmScrapingBlueprint).",

    road3Phase: "Fase 3 · Marco M5 (Submissão)",
    road3Title: "Ciclo de Correção Completo",
    road3Desc: "Integração ponta a ponta com Devin API para abertura de PRs automáticos de adequação no GitHub e notificações executivas automatizadas via Resend.",

    road4Phase: "Fase 4 · Pós-Hackathon",
    road4Title: "Expansão e Multi-Jurisdição",
    road4Desc: "Cobertura completa de ANVISA (SaMD RDC 657), ANS, Ministério da Saúde e adaptação para regulação médica internacional (FDA, EMA).",

    // Team Section
    teamTag: "Quem Somos",
    teamTitle: "Equipe Multidisciplinar",
    teamSubtitle: "A combinação perfeita de médicos desenvolvedores, liderança clínica e especialistas em engenharia de dados e governança de IA.",

    member1Role: "PMO · Regulatory Data Lead · Pitch Lead",
    member1Bio: "Médico e desenvolvedor. Lidera o gerenciamento do projeto (Google PM), a curadoria e indexação do banco de normas médicas (CFM Normas) e a comunicação do pitch.",

    member2Role: "Product Owner (PO) · Clinical Product Lead",
    member2Bio: "Médica e especialista clínica. Responsável pelo mapeamento das jornadas regulatórias, cenários clínicos de teste, requisitos de produto e critérios de aceite.",

    member3Role: "CTO · Tech Lead",
    member3Bio: "Engenheiro de software e arquiteto de sistemas. Lidera a engenharia da plataforma, arquitetura de monorepo, integrações de APIs, Docker e infraestrutura de nuvem.",

    member4Role: "Clinical AI Governance & Compliance · CBA/ROI Lead",
    member4Bio: "Especialista em governança clínica de IA e conformidade ética. Responsável pela modelagem financeira, análise de custo-benefício (CBA) e métricas de ROI corporativo.",

    // Footer
    footerDesc: "O primeiro agente autônomo de governança regulatória para a saúde digital. Desenvolvido para o Hack Brasil 2026.",
    footerNavTitle: "Navegação",
    footerLegalTitle: "Conformidade & Direitos",
    footerRights: "© 2026 Conform.ai. Licença MIT.",
    footerDisclaimer: "Item 6.9 do Regulamento Hack Brasil 2026: Este projeto opera exclusivamente com dados e casos 100% sintéticos e normas regulatórias públicas. Nenhum dado pessoal ou prontuário real de paciente é coletado, processado ou exposto."
  },

  en: {
    // Nav
    navProblem: "The Problem",
    navSolution: "How It Works",
    navBmc: "Business Model",
    navStack: "Technology",
    navRoadmap: "Roadmap",
    navTeam: "Team",
    navGithub: "View on GitHub",
    badgeTrack: "Hack Brasil 2026 · Track 07: Logistics & Automation",

    // Hero
    heroTag: "Regulatory Governance & Intelligent Automation in Healthcare",
    heroTitle: "Continuous regulatory compliance with AI agents for digital health",
    heroDesc: "Replacing months of manual legal consulting with continuous autonomous governance. We audit websites, terms of service, and clinical workflows against active regulations from CFM, ANVISA, ANS, and LGPD with strict anti-hallucination guardrails and over 90% token savings.",
    ctaGithub: "Explore Code on GitHub",
    ctaDoc: "View Architecture",

    // Stats
    stat1Number: "94%",
    stat1Label: "Fewer tokens consumed via Firecrawl Markdown",
    stat2Number: "15 min",
    stat2Label: "Average audit time vs. 45 manual days",
    stat3Number: "100%",
    stat3Label: "Traceability to official cited legal articles",

    // Verdict Simulator
    simTitle: "Compliance Verdict Simulator",
    simSubtitle: "Automated real-time regulatory diagnostic",
    tabCritical: "🔴 Critical Violation",
    tabWarning: "🟡 Attention",
    tabCompliant: "🟢 Compliant",

    simNormLabel: "Applicable Standard",
    simArticleLabel: "Article & Legal Mandate",
    simEvidenceLabel: "Evidence Detected on Page",
    simActionLabel: "Suggested Remediation Action",

    // Sim Data - Critical
    critNorm: "CFM Resolution nº 2.336/2023 (Medical Advertising)",
    critArticle: "Article 5, Item II — Strict prohibition on guaranteed outcome promises and 'before and after' imagery lacking educational/scientific context.",
    critEvidence: "'We guarantee 100% scar-free aesthetic recovery in just two sessions.'",
    critAction: "Remove outcome guarantee claims and rephrase copy into strictly informative medical procedure descriptions.",

    // Sim Data - Warning
    warnNorm: "CFM Resolution nº 2.454/2026 (Artificial Intelligence in Medicine)",
    warnArticle: "Article 4 — Mandatory explicit human oversight and patient disclosure in AI-assisted diagnostic tools.",
    warnEvidence: "Automated patient triage module functioning without upfront notice of human physician supervision.",
    warnAction: "Add an informed consent checkbox and a human clinical review override button.",

    // Sim Data - Compliant
    compNorm: "CFM Resolution nº 2.299/2021 (Electronic Prescription & Telemedicine)",
    compArticle: "Article 2 — Digital signature validation using ICP-Brasil standard certification and clear physician registration (CRM/RQE).",
    compEvidence: "Valid ICP-Brasil digital signature with SHA-256 hash and verified issuer physician CRM/RQE credentials.",
    compAction: "No action needed. Clinical workflow is in full regulatory compliance.",

    tokenHeader: "Context Efficiency (Tokens Consumed)",
    tokenSavings: "~94% savings (Markdown vs. raw HTML/PDF)",

    // The Pain Section (For Non-Physicians)
    painTag: "The Regulatory Reality",
    painTitle: "Why is healthcare regulation a labyrinth?",
    painSubtitle: "For those outside the medical field, healthcare compliance looks like an impenetrable maze. Here is how this reality impacts founders, software developers, and patient safety.",
    
    painCard1Title: "Personal & Ethical Liability",
    painCard1Desc: "Unlike standard e-commerce or SaaS, in healthcare the Medical Technical Director is personally liable with their own medical license (CRM) for marketing or software errors. A simple code flaw can result in permanent license revocation.",
    
    painCard2Title: "Dozens of Fragmented Agencies",
    painCard2Desc: "CFM publishes dozens of complex PDF resolutions; ANVISA regulates software as a medical device (SaMD); ANS mandates health plan rules; and LGPD (Article 11) imposes maximum penalties on sensitive health data breaches.",
    
    painCard3Title: "Prohibitive Cost for Startups & SMEs",
    painCard3Desc: "Hiring specialized healthcare law firms costs between $10,000 and $25,000 per audit and takes up to 60 days. Meanwhile, using generic LLMs (like raw ChatGPT) triggers severe hallucinations, citing revoked laws and causing massive token bills.",

    painHighlightTitle: "The Real-World Impact:",
    painHighlightText: "A simple clinic social media ad showing 'before and after' photos without mandatory disclaimers leads to immediate Council disciplinary hearings. A telemedicine platform missing digital signature safeguards can have its prescriptions rejected across national pharmacies.",

    // How It Works Section
    howTag: "Intelligent Architecture",
    howTitle: "How Conform.ai Bridges the Gap",
    howSubtitle: "A 4-stage automated pipeline integrating industry-leading partners to transform complex legal texts into actionable code fixes.",

    step1Partner: "Extraction via Firecrawl",
    step1Title: "1. Structured Scraping",
    step1Desc: "Our ingestion engine crawls official portals and customer assets, converting heavy HTML and PDFs into lean semantic Markdown, cutting over 90% of the token volume required for audit.",

    step2Partner: "Active Norms Catalog",
    step2Title: "2. Two-Stage Norms Resolution",
    step2Desc: "Instead of cramming hundreds of laws into prompt context, our catalog dynamically selects with surgical precision only the active resolutions relevant to that specific product, automatically discarding repealed laws.",

    step3Partner: "Google Gemini",
    step3Title: "3. Auditing with Guardrails",
    step3Desc: "Specialized agents compare verified page evidence against active articles. Strict guardrails prohibit citing laws outside the catalog and prevent any hallucinated non-compliance claims.",

    step4Partner: "Devin & Resend",
    step4Title: "4. Autonomous Remediation",
    step4Desc: "The system generates an instant Traffic Light Report (🟢/🟡/🔴), notifies company leadership via Resend, and triggers autonomous Pull Requests via Devin to patch compliance gaps directly in code.",

    // BMC Section
    bmcTag: "Business Strategy",
    bmcTitle: "Business Model Canvas: 'Service-as-a-Software'",
    bmcSubtitle: "Rooted in Sequoia Capital's thesis: instead of selling an empty search tool that still requires expensive lawyers to operate, we deliver the completed, auditable compliance work.",

    bmcCol1Badge: "Customer Segments",
    bmcCol1Title: "Who We Build For",
    bmcCol1Desc: "Our market spans organizations that cannot afford regulatory shutdowns or disciplinary sanctions:",
    bmcC1Item1: "HealthTech SMEs (Telemedicine, Digital Prescription, Clinical AI, EHR)",
    bmcC1Item2: "Medical Practices and Specialized Clinics managing digital marketing",
    bmcC1Item3: "Hospitals and Health Plans monitoring third-party software vendors",
    bmcC1Item4: "International Startups expanding into Brazil (Cross-Border Healthcare)",

    bmcCol2Badge: "Value Proposition",
    bmcCol2Title: "What We Deliver",
    bmcCol2Desc: "Turning regulatory compliance from an expensive bottleneck into a market advantage:",
    bmcC2Item1: "Full regulatory diagnostic in 15 minutes (vs. 45 manual days)",
    bmcC2Item2: "Zero legal hallucinations: 100% strict traceability to active legal articles",
    bmcC2Item3: "Autonomous remediation: Code Pull Requests ready for engineering review",
    bmcC2Item4: "Annual savings exceeding $15,000 in routine legal retainer fees",

    bmcCol3Badge: "Revenue Model",
    bmcCol3Title: "Sustainable Monetization",
    bmcCol3Desc: "Capturing legal consulting and engineering budgets through modular service tiers:",
    bmcC3Item1: "Autonomous Governance Retainer (Monthly subscription per monitored domain)",
    bmcC3Item2: "Outcome-Based Fee (Pay per accepted compliance Pull Request)",
    bmcC3Item3: "Market Entry Assessment (One-time expansion readiness report)",
    bmcC3Item4: "API / MCP Server for native integration with Cursor, Claude, and Devin",

    // Tech Stack Section
    stackTag: "High-Performance Engineering",
    stackTitle: "Tech Stack & Strategic Partners",
    stackSubtitle: "Architected to maximize system efficiency, robustness, and cryptographic auditability.",

    stack1Role: "Web Data & Ingestion",
    stack1Desc: "High-fidelity scraping and conversion of government pages and PDFs into clean Markdown for AI.",

    stack2Role: "Reasoning & RAG",
    stack2Desc: "Multimodal inference engine with 2-stage filtering and strict deontological guardrails.",

    stack3Role: "Autonomous Software Engineering",
    stack3Desc: "Cognition's AI software engineer opening GitHub Pull Requests to patch regulatory flaws.",

    stack4Role: "Executive Communication",
    stack4Desc: "Transactional infrastructure delivering instant compliance reports to Medical Directors and CTOs.",

    stack5Role: "Backend & Schemas",
    stack5Desc: "Robust TypeScript API with Prisma ORM, BullMQ for job queues, and strict type safety.",

    stack6Role: "Dashboard Frontend",
    stack6Desc: "Executive React + Vite + Tailwind CSS dashboard with dark high-contrast theme.",

    stack7Role: "Database",
    stack7Desc: "Structured persistence for multi-tenant accounts, audit runs, and token consumption metrics.",

    stack8Role: "Orchestration & Queues",
    stack8Desc: "Distributed asynchronous worker processing for batch scraping and deep reasoning tasks.",

    // Roadmap Section
    roadTag: "Future Vision",
    roadTitle: "Development Roadmap",
    roadSubtitle: "From manually tuned agent prompts to 100% autonomous, multi-jurisdiction compliance governance.",

    road1Phase: "Phase 1 · Milestone M1/M2 (Current)",
    road1Title: "PoC & Core Validation",
    road1Desc: "Assisted auditing of medical advertising (CFM 2.336/2023) and telemedicine with 2 synthetic test cases, traffic-light verdict, and indexed active catalog.",

    road2Phase: "Phase 2 · Milestone M3/M4",
    road2Title: "Autonomous Agent Orchestration",
    road2Desc: "Intelligent agent that dynamically authors prompts and directs Firecrawl scraping runs directly from the regulatory blueprint manifesto.",

    road3Phase: "Phase 3 · Milestone M5 (Submission)",
    road3Title: "Closed-Loop Code Remediation",
    road3Desc: "End-to-end integration with Devin API for automated remediation Pull Requests on target repos and executive alert dispatches via Resend.",

    road4Phase: "Phase 4 · Post-Hackathon",
    road4Title: "Multi-Jurisdiction Expansion",
    road4Desc: "Full coverage of ANVISA (SaMD RDC 657), ANS, Ministry of Health, and international adaptation for global frameworks (FDA, EMA).",

    // Team Section
    teamTag: "Who We Are",
    teamTitle: "Multidisciplinary Team",
    teamSubtitle: "A powerhouse combination of physician-developers, clinical leaders, data engineers, and AI governance experts.",

    member1Role: "PMO · Regulatory Data Lead · Pitch Lead",
    member1Bio: "Physician and software developer. Leads project management (Google PM), regulatory norms curation & indexing (CFM Normas), and pitch communications.",

    member2Role: "Product Owner (PO) · Clinical Product Lead",
    member2Bio: "Physician and clinical product specialist. Responsible for regulatory customer journeys, clinical test cases, user stories, and acceptance criteria.",

    member3Role: "CTO · Tech Lead",
    member3Bio: "Senior software engineer and systems architect. Directs platform engineering, monorepo architecture, partner API integrations, Docker, and AWS deployment.",

    member4Role: "Clinical AI Governance & Compliance · CBA/ROI Lead",
    member4Bio: "Specialist in clinical AI governance and ethical compliance. Heads financial modeling, cost-benefit analysis (CBA), and corporate ROI metrics.",

    // Footer
    footerDesc: "The first autonomous regulatory compliance agent for digital healthcare. Built for Hack Brasil 2026.",
    footerNavTitle: "Navigation",
    footerLegalTitle: "Compliance & Rights",
    footerRights: "© 2026 Conform.ai. Released under the MIT License.",
    footerDisclaimer: "Hack Brasil 2026 Rule 6.9: This project operates exclusively with 100% synthetic scenarios and public regulatory norms. Zero real patient or protected health information (PHI) is ever collected, processed, or exposed."
  }
};

if (typeof window !== 'undefined') {
  window.i18n = i18n;
}
