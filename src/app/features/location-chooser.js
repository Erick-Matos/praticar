const ADDRESS = "R. Francisco Portugal, 519 - Salgado Filho, Aracaju - SE, 49020-390";
const ENCODED_ADDRESS = encodeURIComponent(ADDRESS);

function openWithFallback(appUrl, webUrl) {
  const start = Date.now();
  window.location.href = appUrl;

  window.setTimeout(() => {
    if (Date.now() - start < 1200) {
      window.open(webUrl, "_blank", "noopener,noreferrer");
    }
  }, 700);
}

export function setupLocationChooser() {
  const trigger = document.querySelector('.card[data-variant="location"]');
  const dialog = document.querySelector("#location-dialog");
  const closeButton = document.querySelector("#close-location-dialog");
  const wazeButton = document.querySelector("#open-waze");
  const googleButton = document.querySelector("#open-google");

  if (!trigger || !(dialog instanceof HTMLDialogElement)) return;

  trigger.addEventListener("click", () => {
    dialog.showModal();
  });

  closeButton?.addEventListener("click", () => dialog.close());

  wazeButton?.addEventListener("click", () => {
    const appUrl = `waze://?q=${ENCODED_ADDRESS}&navigate=yes`;
    const webUrl = `https://waze.com/ul?q=${ENCODED_ADDRESS}&navigate=yes`;
    openWithFallback(appUrl, webUrl);
  });

  googleButton?.addEventListener("click", () => {
    const appUrl = `comgooglemaps://?q=${ENCODED_ADDRESS}`;
    const webUrl = `https://www.google.com/maps/search/?api=1&query=${ENCODED_ADDRESS}`;
    openWithFallback(appUrl, webUrl);
  });
}

