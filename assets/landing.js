(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('[data-nav-toggle]');
  const nav = document.querySelector('[data-nav]');
  const year = document.querySelector('[data-year]');
  const isEnglish = document.documentElement.lang === 'en';
  const menuLabel = {
    open: isEnglish ? 'Open menu' : 'メニューを開く',
    close: isEnglish ? 'Close menu' : 'メニューを閉じる',
  };

  const syncHeader = () => {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 24);
  };

  const closeNav = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', menuLabel.open);
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const willOpen = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(willOpen));
      toggle.setAttribute('aria-label', willOpen ? menuLabel.close : menuLabel.open);
      nav.classList.toggle('is-open', willOpen);
      document.body.classList.toggle('nav-open', willOpen);
    });

    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860) closeNav();
    });
  }

  window.addEventListener('scroll', syncHeader, { passive: true });
  syncHeader();

  window.addEventListener('load', () => {
    if (!window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (target) window.setTimeout(() => target.scrollIntoView({ block: 'start' }), 80);
  }, { once: true });

  if (year) year.textContent = String(new Date().getFullYear());
})();
