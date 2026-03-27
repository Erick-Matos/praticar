function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
}

function canUsePointerEffects() {
  return window.matchMedia?.("(hover: hover) and (pointer: fine)")?.matches ?? false;
}

export function enhanceCards({ selector }) {
  const cards = Array.from(document.querySelectorAll(selector));
  if (!cards.length) return;
  if (!canUsePointerEffects()) return;

  for (const card of cards) {
    card.addEventListener(
      "pointermove",
      (e) => {
        if (prefersReducedMotion()) return;
        if (!(card instanceof HTMLElement)) return;

        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;

        card.style.setProperty("--mx", `${Math.max(0, Math.min(1, px))}`);
        card.style.setProperty("--my", `${Math.max(0, Math.min(1, py))}`);
      },
      { passive: true },
    );
  }
}

