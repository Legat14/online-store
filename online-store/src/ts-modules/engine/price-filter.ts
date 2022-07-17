import { Slider } from "../types/slider";
import { priceFilterInputMax, priceFilterInputMin, priceFilterMaxP, priceFilterMinP } from "../vars/vars";

export const priceFilter = new Slider(priceFilterInputMin, priceFilterInputMax, priceFilterMinP, priceFilterMaxP);

priceFilter.setMinSlider();
priceFilter.setMaxSlider();