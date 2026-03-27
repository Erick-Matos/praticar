const LOCATION = {
  lat: -10.9318014,
  lng: -37.055895,
};

const DEST = `${LOCATION.lat},${LOCATION.lng}`;
const WAZE_PLACE_ID = "ChIJPWoDydyzGgcRhEjnCrdnezM";

const MAP_URLS = {
  waze: {
    webPlace: `https://www.waze.com/en/live-map/directions/br/se/praticar-fisioterapia,-saude-e-bem-estar?navigate=yes&place=${WAZE_PLACE_ID}`,
  },
  google: {
    web: "https://maps.app.goo.gl/UeCfo8QKXWr7PXEh7",
  },
};

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
    openWebMaps(MAP_URLS.waze.webPlace);
  });

  googleButton?.addEventListener("click", () => {
    dialog.close();
    openWebMaps(MAP_URLS.google.web);
  });
}

