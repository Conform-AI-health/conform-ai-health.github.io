# 🌐 Conform.ai — Página Pública Oficial (Hack Brasil 2026)

> **URL pública (HTTPS):** [https://conform-ai-health.github.io/](https://conform-ai-health.github.io/)
> **Repositório do produto:** [Conform-AI-health/conform-ai-health](https://github.com/Conform-AI-health/conform-ai-health)
> **Trilha:** Trilha 07 — Logística & Automação (impacto em saúde)

Página estática em HTML, CSS e JavaScript puro, sem build e sem dependências. É publicada pelo GitHub Pages a cada push em `main` (`.github/workflows/deploy.yml`). Fica num repositório separado do monorepo para não interferir no CI/CD da AWS.

## O que a página mostra

1. **Hero:** o nome Conform.ai em escala de pôster, com o ponto do nome funcionando como semáforo sincronizado ao laudo de exemplo.
2. **Faixa do Item 6.9:** somente casos sintéticos e normas públicas, sem nenhum dado de paciente.
3. **Laudo vivo:** três casos sintéticos (CFM 2.336/2023 Art. 11, 2.314/2022 Art. 3º, 2.299/2021 Art. 2º), cada um com norma, artigo, evidência e ação recomendada, mais a barra de tokens.
4. **O problema:** dor contada pelo fundador de uma HealthTech em pré-lançamento ou MVP, em três partes: incerteza regulatória invisível, time-to-market vs. conformidade e due diligence.
5. **Como funciona:** quatro etapas (Firecrawl, catálogo de normas vigentes, Gemini com guardrails, laudo via Resend; Devin em integração).
6. **Normas mapeadas**, **Negócio** (Service-as-a-Software), **Marcos M1–M5**, **Equipe** e **Fechamento**.

Bilíngue (PT-BR / EN): o seletor no topo troca todo o texto, os rótulos de acessibilidade, o título e a descrição da página.

## Regras de conteúdo

- **Todo número precisa de fonte.** A tabela de fontes e o histórico de decisões ficam em `03_Reunioes_e_Transcricoes/03_DECISOES_LANDING_PAGE.md`, no segundo cérebro do projeto.
- **A página não promete o que o repositório do produto ainda não faz.** O que está em integração aparece marcado como tal.
- **Sem formulários nem rastreadores** (LGPD e Item 6.9).

## Como editar

| O quê | Onde |
| :--- | :--- |
| Textos (PT e EN) | `js/i18n.js`. As chaves são as mesmas nos dois idiomas, e o `index.html` traz a versão PT como fallback sem JavaScript. |
| Estilo | `css/styles.css`, com tokens no `:root` |
| Comportamento | `js/main.js`: idioma, laudo, semáforo, menu e animações (respeita `prefers-reduced-motion`) |
| Imagem de compartilhamento | `img/og-image.png` (1200×630) |

### Equipe
Cada cartão em `index.html` (seção `#equipe`) tem comentários explicando o que preencher:
- **Foto:** imagem quadrada em `img/team/<nome>.jpg`.
- **Links:** preencha o `href` dos botões de LinkedIn e GitHub. Só aparecem links que começam com `https://`; link vazio fica oculto.
- **Currículo:** chaves `member1Bio` a `member4Bio` em `js/i18n.js`, em PT e EN.

## 👥 Equipe

- **Augusto Linhares** — PMO, Regulatory Data Lead & Pitch Lead (médico e desenvolvedor)
- **Mirella Batista Cruz** — Product Owner & Clinical Product Lead (médica)
- **Frederico Da Silva** — CTO & Tech Lead (engenheiro de software)
- **Matheus Furtado** — Clinical AI Governance, Compliance & CBA/ROI Lead (médico, cirurgião cardiovascular)

## 🔒 Dados e licença

- **Item 6.9 do Regulamento Hack Brasil 2026:** somente casos sintéticos e normas públicas federais. Nenhum dado pessoal ou prontuário real de paciente é coletado ou exibido.
- **Licença:** MIT.
