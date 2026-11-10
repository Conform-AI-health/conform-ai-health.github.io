/* ==========================================================================
   Conform.ai — Main Client JavaScript · redesign v2
   Idioma, laudo vivo, ponto-semáforo do nome, menu e movimento
   ========================================================================== */

(function () {
  'use strict';

  document.documentElement.classList.add('js');

  var dictionary = window.i18n || {};
  var STORAGE_KEY = 'conform_lang';
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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

  var state = { lang: readLang(), status: 'critical', userPicked: false };
  var ORDER = ['critical', 'warning', 'compliant'];
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
  var heroDot = $('hero-dot');
  var tabs = Array.prototype.slice.call(document.querySelectorAll('.tab'));
  var panel = $('sim-panel');
  var card = document.querySelector('.laudo-card');
  var tokens = document.querySelector('.tokens');
  var badge = $('sim-verdict-badge');
  var badgeText = $('sim-verdict-text');
  var fields = { norm: $('sim-norm'), article: $('sim-article'), evidence: $('sim-evidence'), action: $('sim-action') };

  function t(key) { return (dictionary[state.lang] || {})[key]; }

  function setMeta(selector, value) {
    var el = document.querySelector(selector);
    if (el && value) el.setAttribute('content', value);
  }

  function restartClass(el, cls) {
    if (!el || reduceMotion) return;
    el.classList.remove(cls);
    void el.offsetWidth; // reinicia a animação
    el.classList.add(cls);
  }

  // ---------- Laudo vivo ----------
  function renderSimulator(animate) {
    var cfg = SIM[state.status];
    if (!cfg || !panel) return;

    badge.className = 'verdict ' + cfg.badge;
    badgeText.textContent = t(cfg.verdict) || '';
    fields.norm.textContent = t(cfg.norm) || '';
    fields.article.textContent = t(cfg.article) || '';
    fields.action.textContent = t(cfg.action) || '';
    var mark = document.createElement('mark');
    mark.textContent = t(cfg.evidence) || '';
    fields.evidence.replaceChildren(mark);
    if (card) card.setAttribute('data-status', state.status);

    tabs.forEach(function (tab) {
      var selected = tab.getAttribute('data-status') === state.status;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.setAttribute('tabindex', selected ? '0' : '-1');
      if (selected) panel.setAttribute('aria-labelledby', tab.id);
    });

    if (heroDot) heroDot.className = 'hero-dot is-' + cfg.badge;

    if (animate) {
      restartClass(panel, 'is-scanning');
      if (tokens && tokens.classList.contains('is-in') && !reduceMotion) {
        tokens.classList.remove('is-in');
        void tokens.offsetWidth;
        window.requestAnimationFrame(function () { tokens.classList.add('is-in'); });
      }
    }
  }

  function selectStatus(status, animate) {
    state.status = status;
    renderSimulator(animate);
  }

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      state.userPicked = true;
      selectStatus(tab.getAttribute('data-status'), true);
    });
    tab.addEventListener('keydown', function (event) {
      var next = null;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      if (next === null) return;
      event.preventDefault();
      state.userPicked = true;
      selectStatus(tabs[next].getAttribute('data-status'), true);
      tabs[next].focus();
    });
  });

  // O ponto do nome acompanha o laudo; um toque avança o exemplo
  function nextStatus() { return ORDER[(ORDER.indexOf(state.status) + 1) % ORDER.length]; }
  if (heroDot) {
    heroDot.addEventListener('click', function () {
      state.userPicked = true;
      selectStatus(nextStatus(), true);
    });
  }
  if (!reduceMotion) {
    window.setInterval(function () {
      if (state.userPicked || document.hidden) return;
      selectStatus(nextStatus(), false);
    }, 2600);
  }

  // ---------- Equipe: links só aparecem quando preenchidos ----------
  document.querySelectorAll('[data-member-link]').forEach(function (a) {
    var href = (a.getAttribute('href') || '').trim();
    if (/^https:\/\//.test(href)) a.hidden = false;
  });

  // ---------- Normas: uma de cada vez em destaque ----------
  var norms = Array.prototype.slice.call(document.querySelectorAll('.norm'));
  if (norms.length) {
    var lit = 0;
    norms[0].classList.add('is-lit');
    if (!reduceMotion) {
      window.setInterval(function () {
        if (document.hidden) return;
        norms[lit].classList.remove('is-lit');
        lit = (lit + 1) % norms.length;
        norms[lit].classList.add('is-lit');
      }, 2000);
    }
  }

  // ---------- Idioma ----------
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
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var value = t(el.getAttribute('data-i18n-alt'));
      if (value) el.setAttribute('alt', value);
    });

    if (t('metaTitle')) document.title = t('metaTitle');
    setMeta('meta[name="description"]', t('metaDescription'));
    updateMenuLabel();
    renderSimulator(false);
  }
  if (langPt) langPt.addEventListener('click', function () { applyLanguage('pt'); });
  if (langEn) langEn.addEventListener('click', function () { applyLanguage('en'); });

  // ---------- Menu móvel ----------
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
      if (window.innerWidth > 1000 && isMenuOpen()) setMenu(false, false);
    });
  }

  // ---------- Entradas por seção (uma vez) ----------
  var animated = Array.prototype.slice.call(document.querySelectorAll('.reveal, .shutter, .tokens'));
  document.querySelectorAll('main section, .synth-band').forEach(function (section) {
    section.querySelectorAll('.reveal').forEach(function (el, i) { el.style.setProperty('--i', String(i)); });
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    animated.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    animated.forEach(function (el) { io.observe(el); });
  }

  applyLanguage(state.lang);
})();
