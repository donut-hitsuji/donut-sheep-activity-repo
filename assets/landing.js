(() => {
  document.documentElement.classList.add("js");

  const header = document.querySelector("[data-header]");
  const nav = document.querySelector("[data-nav]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeNavigation = () => {
    if (!nav || !navToggle) return;
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.querySelector(".sr-only").textContent = "メニューを開く";
  };

  if (nav && navToggle) {
    navToggle.addEventListener("click", () => {
      const willOpen = !nav.classList.contains("is-open");
      nav.classList.toggle("is-open", willOpen);
      navToggle.setAttribute("aria-expanded", String(willOpen));
      navToggle.querySelector(".sr-only").textContent = willOpen ? "メニューを閉じる" : "メニューを開く";
    });

    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeNavigation));

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeNavigation();
        navToggle.focus();
      }
    });

    document.addEventListener("click", (event) => {
      if (!nav.classList.contains("is-open")) return;
      if (!nav.contains(event.target) && !navToggle.contains(event.target)) closeNavigation();
    });
  }

  const revealItems = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !reducedMotion.matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -9%", threshold: 0.08 }
    );
    revealItems.forEach((item) => observer.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const heroVisual = document.querySelector("[data-hero-visual]");
  const widePointer = window.matchMedia("(min-width: 861px) and (pointer: fine)");
  if (heroVisual && widePointer.matches && !reducedMotion.matches) {
    window.addEventListener(
      "pointermove",
      (event) => {
        const x = (event.clientX / window.innerWidth - 0.5) * 10;
        const y = (event.clientY / window.innerHeight - 0.5) * 8;
        heroVisual.style.setProperty("--parallax-x", `${x.toFixed(2)}px`);
        heroVisual.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
      },
      { passive: true }
    );
  }

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });
})();
