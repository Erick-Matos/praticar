const LOCATION = {
  name: "PRATICAR Fisioterapia, Saude e Bem Estar",
  lat: -10.9318014,
  lng: -37.055895,
};

const DEST = `${LOCATION.lat},${LOCATION.lng}`;
const ENCODED_NAME = encodeURIComponent(LOCATION.name);
const WAZE_PLACE_ID = "place.ChIJPWoDydyzGgcRhEjnCrdnezM";

const MAP_URLS = {
  waze: {
    appPlace: `waze://?q=${WAZE_PLACE_ID}&navigate=yes`,
    appCoords: `waze://?ll=${DEST}&q=${ENCODED_NAME}&navigate=yes`,
    webPlace: `https://www.waze.com/pt-BR/live-map/directions/br/se/praticar-fisioterapia,-saude-e-bem-estar?navigate=yes&to=${WAZE_PLACE_ID}`,
    webCoords: `https://www.waze.com/ul?ll=${DEST}&navigate=yes`,
  },
  google: {
    web: "https://maps.app.goo.gl/UeCfo8QKXWr7PXEh7",
  },
};

function openWithFallback(appUrl, webUrl) {
  let appOpened = false;

  const markAsOpened = () => {
    appOpened = true;
  };

  window.addEventListener("blur", markAsOpened, { once: true });
  document.addEventListener("visibilitychange", markAsOpened, { once: true });
  window.addEventListener("pagehide", markAsOpened, { once: true });

  window.location.href = appUrl;

  window.setTimeout(() => {
    if (!appOpened) {
      window.location.href = webUrl;
    }
  }, 1000);
}

function openWazeWithFallbackChain() {
  openWithFallback(MAP_URLS.waze.appPlace, MAP_URLS.waze.webPlace);

  window.setTimeout(() => {
    if (document.hidden) return;
    openWithFallback(MAP_URLS.waze.appCoords, MAP_URLS.waze.webCoords);
  }, 1200);
}

function openWebMaps(url) {
  window.open(url, "_blank", "noopener,noreferrer");
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
    // Keep initial focus on a neutral action to avoid the impression
    // that one provider (Waze) is preselected.
    closeButton?.focus();
  });

  closeButton?.addEventListener("click", () => dialog.close());

  wazeButton?.addEventListener("click", () => {
    dialog.close();
    openWazeWithFallbackChain();
  });

  googleButton?.addEventListener("click", () => {
    dialog.close();
    openWebMaps(MAP_URLS.google.web);
  });
}

