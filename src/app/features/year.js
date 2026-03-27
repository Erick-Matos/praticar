export function setCurrentYear(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.textContent = String(new Date().getFullYear());
}

