/* ==========================================================================
   Conform.ai — Main Client JavaScript
   Idioma, simulador de laudo e menu móvel
   ========================================================================== */

(function () {
  'use strict';

  var dictionary = window.i18n || {};
  var STORAGE_KEY = 'conform_lang';

  function readLang() {
    try {
      var saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'pt' || saved === 'en') return saved;
    } catch (e) { /* armazenamento indisponível */ }
    return 'pt';
  }

  function saveLang(lang) {
    try { window.localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignora */ }
  }

  var state = { lang: readLang(), status: 'critical' };

  var SIM = {
    critical: { badge: 'red', verdict: 'verdictCritical', norm: 'critNorm', article: 'critArticle', evidence: 'critEvidence', action: 'critAction' },
    warning: { badge: 'yellow', verdict: 'verdictWarning', norm: 'warnNorm', article: 'warnArticle', evidence: 'warnEvidence', action: 'warnAction' },
    compliant: { badge: 'green', verdict: 'verdictCompliant', norm: 'compNorm', article: 'compArticle', evidence: 'compEvidence', action: 'compAction' }
  };

  var $ = function (id) { return document.getElementById(id); };
  var langPt = $('lang-pt');
  var langEn = $('lang-en');
  var menuToggle = $('menu-toggle');
  var mobileMenu = $('mobile-menu');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.verdict-tab-btn'));
  var panel = $('sim-panel');
  var badge = $('sim-verdict-badge');
  var badgeText = $('sim-verdict-text');
  var fields = { norm: $('sim-norm'), article: $('sim-article'), evidence: $('sim-evidence'), action: $('sim-action') };

  function t(key) {
    var dict = dictionary[state.lang] || {};
    return dict[key];
  }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.setAttribute('content', value);
  }

  function renderSimulator() {
    var cfg = SIM[state.status];
    if (!cfg || !panel) return;

    badge.className = 'verdict-badge ' + cfg.badge;
    badgeText.textContent = t(cfg.verdict) || '';
    Object.keys(fields).forEach(function (k) {
      if (fields[k]) fields[k].textContent = t(cfg[k]) || '';
    });

    tabs.forEach(function (tab) {
      var selected = tab.getAttribute('data-status') === state.status;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.setAttribute('tabindex', selected ? '0' : '-1');
      if (selected) panel.setAttribute('aria-labelledby', tab.id);
    });
  }

  function applyLanguage(lang) {
    state.lang = lang === 'en' ? 'en' : 'pt';
    saveLang(state.lang);
    document.documentElement.lang = state.lang === 'pt' ? 'pt-BR' : 'en';

    [[langPt, 'pt'], [langEn, 'en']].forEach(function (pair) {
      if (!pair[0]) return;
      var active = pair[1] === state.lang;
      pair[0].classList.toggle('active', active);
      pair[0].setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n'));
      if (value) el.textContent = value;
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n-aria'));
      if (value) el.setAttribute('aria-label', value);
    });

    if (t('metaTitle')) document.title = t('metaTitle');
    setMeta('meta[name="description"]', t('metaDescription'));
    updateMenuLabel();
    renderSimulator();
  }

  // Simulador: clique e teclado (padrão WAI-ARIA de abas)
  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      state.status = tab.getAttribute('data-status');
      renderSimulator();
    });
    tab.addEventListener('keydown', function (event) {
      var next = null;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      state.status = tabs[next].getAttribute('data-status');
      renderSimulator();
      tabs[next].focus();
    });
  });

  // Idioma
  if (langPt) langPt.addEventListener('click', function () { applyLanguage('pt'); });
  if (langEn) langEn.addEventListener('click', function () { applyLanguage('en'); });

  // Menu móvel
  function isMenuOpen() { return menuToggle && menuToggle.getAttribute('aria-expanded') === 'true'; }

  function updateMenuLabel() {
    if (!menuToggle) return;
    var label = isMenuOpen() ? t('ariaMenuClose') : t('ariaMenuOpen');
    if (label) menuToggle.setAttribute('aria-label', label);
  }

  function setMenu(open, returnFocus) {
    if (!menuToggle || !mobileMenu) return;
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle('open', open);
    updateMenuLabel();
    if (!open && returnFocus) menuToggle.focus();
  }

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () { setMenu(!isMenuOpen(), false); });
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () { setMenu(false, false); });
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && isMenuOpen()) setMenu(false, true);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 1100 && isMenuOpen()) setMenu(false, false);
    });
  }

  applyLanguage(state.lang);
})();
