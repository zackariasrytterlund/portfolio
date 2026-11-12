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
