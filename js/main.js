/* ==========================================================================
   Conform.ai — Main Client JavaScript
   Gerenciamento de idioma, simulador de laudo e interatividade
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Estado inicial
  let currentLang = localStorage.getItem('conform_lang') || 'pt';
  let currentSimStatus = 'critical'; // 'critical' | 'warning' | 'compliant'

  // Elementos do DOM
  const langPtBtn = document.getElementById('lang-pt');
  const langEnBtn = document.getElementById('lang-en');
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  // Elementos do Simulador
  const tabCritical = document.getElementById('tab-critical');
  const tabWarning = document.getElementById('tab-warning');
  const tabCompliant = document.getElementById('tab-compliant');
  const simVerdictBadge = document.getElementById('sim-verdict-badge');
  const simNorm = document.getElementById('sim-norm');
  const simArticle = document.getElementById('sim-article');
  const simEvidence = document.getElementById('sim-evidence');
  const simAction = document.getElementById('sim-action');

  // 1. Função de Atualização de Idioma
  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('conform_lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Atualizar botões
    if (lang === 'pt') {
      langPtBtn.classList.add('active');
      langEnBtn.classList.remove('active');
    } else {
      langEnBtn.classList.add('active');
      langPtBtn.classList.remove('active');
    }

    // Atualizar todos os elementos com data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang] && i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Atualizar elementos dinâmicos do simulador
    updateSimulatorData();
  }

  // 2. Função de Atualização do Simulador
  function updateSimulatorData() {
    const dict = i18n[currentLang];

    if (currentSimStatus === 'critical') {
      simVerdictBadge.className = 'verdict-badge red';
      simVerdictBadge.innerHTML = '<span>●</span> ' + dict.tabCritical;
      simNorm.textContent = dict.critNorm;
      simArticle.textContent = dict.critArticle;
      simEvidence.textContent = dict.critEvidence;
      simAction.textContent = dict.critAction;

      tabCritical.classList.add('active');
      tabWarning.classList.remove('active');
      tabCompliant.classList.remove('active');
    } else if (currentSimStatus === 'warning') {
      simVerdictBadge.className = 'verdict-badge yellow';
      simVerdictBadge.innerHTML = '<span>●</span> ' + dict.tabWarning;
      simNorm.textContent = dict.warnNorm;
      simArticle.textContent = dict.warnArticle;
      simEvidence.textContent = dict.warnEvidence;
      simAction.textContent = dict.warnAction;

      tabWarning.classList.add('active');
      tabCritical.classList.remove('active');
      tabCompliant.classList.remove('active');
    } else if (currentSimStatus === 'compliant') {
      simVerdictBadge.className = 'verdict-badge green';
      simVerdictBadge.innerHTML = '<span>●</span> ' + dict.tabCompliant;
      simNorm.textContent = dict.compNorm;
      simArticle.textContent = dict.compArticle;
      simEvidence.textContent = dict.compEvidence;
      simAction.textContent = dict.compAction;

      tabCompliant.classList.add('active');
      tabCritical.classList.remove('active');
      tabWarning.classList.remove('active');
    }
  }

  // Event Listeners de Idioma
  if (langPtBtn && langEnBtn) {
    langPtBtn.addEventListener('click', () => updateLanguage('pt'));
    langEnBtn.addEventListener('click', () => updateLanguage('en'));
  }

  // Event Listeners do Simulador
  if (tabCritical && tabWarning && tabCompliant) {
    tabCritical.addEventListener('click', () => {
      currentSimStatus = 'critical';
      updateSimulatorData();
    });
    tabWarning.addEventListener('click', () => {
      currentSimStatus = 'warning';
      updateSimulatorData();
    });
    tabCompliant.addEventListener('click', () => {
      currentSimStatus = 'compliant';
      updateSimulatorData();
    });
  }

  // Mobile Menu Toggle
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
    });

    // Fechar ao clicar em qualquer link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
      });
    });
  }

  // Inicializar com o idioma selecionado
  updateLanguage(currentLang);
});
