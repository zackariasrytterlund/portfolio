// ==========================================================================
// Mobilmenyn – öppna och stäng
// ==========================================================================

const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const menuLinks = document.querySelectorAll(".nav__menu a");

function setMenuOpen(open) {
  nav.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
}

toggle.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

// Stäng menyn när man klickar på en länk
menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

// Stäng menyn med Escape-tangenten
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    setMenuOpen(false);
    toggle.focus();
  }
});

// Stäng menyn om fönstret blir desktop-brett
window.matchMedia("(min-width: 768px)").addEventListener("change", (event) => {
  if (event.matches) setMenuOpen(false);
});

// ==========================================================================
// Content slider – pilarna bläddrar ett kort i taget
// ==========================================================================

const track = document.querySelector(".slider__track");
const prevButton = document.querySelector(".slider__button--prev");
const nextButton = document.querySelector(".slider__button--next");

if (track && prevButton && nextButton) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Avståndet till nästa kort = kortets bredd + mellanrummet
  function step() {
    const card = track.querySelector(".media-card");
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return card.getBoundingClientRect().width + gap;
  }

  // Målet för pågående scrollning, så att snabba klick inte tappas bort
  let target = null;
  let scrollTimer;

  function scrollByCards(direction) {
    const maxScroll = track.scrollWidth - track.clientWidth;
    const start = target ?? track.scrollLeft;
    target = Math.min(Math.max(start + direction * step(), 0), maxScroll);

    track.scrollTo({
      left: target,
      behavior: reduceMotion.matches ? "auto" : "smooth",
    });
  }

  // När scrollningen har stannat finns inget mål kvar
  track.addEventListener("scroll", () => {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(() => (target = null), 150);
  }, { passive: true });

  // Gör pilen grå (disabled) i början och slutet
  function updateButtons() {
    const maxScroll = track.scrollWidth - track.clientWidth;
    prevButton.disabled = track.scrollLeft <= 1;
    nextButton.disabled = track.scrollLeft >= maxScroll - 1;
  }

  prevButton.addEventListener("click", () => scrollByCards(-1));
  nextButton.addEventListener("click", () => scrollByCards(1));
  track.addEventListener("scroll", updateButtons, { passive: true });
  window.addEventListener("resize", updateButtons);
  updateButtons();
}
