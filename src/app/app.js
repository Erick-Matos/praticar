import { setCurrentYear } from "./features/year.js";
import { enhanceCards } from "./features/cards.js";
import { setupLocationChooser } from "./features/location-chooser.js";

setCurrentYear("#year");
enhanceCards({ selector: ".card" });
setupLocationChooser();

