import { Slider } from "../types/slider";
import { priceFilterInputMax, priceFilterInputMin, priceFilterMaxP, priceFilterMinP } from "../vars/vars";

export const priceFilter = new Slider(priceFilterInputMin, priceFilterInputMax, priceFilterMinP, priceFilterMaxP);

priceFilter.setMinSlider();
priceFilter.setMaxSlider();

import { releaseFilterInputMax, releaseFilterInputMin, releaseFilterMaxP, releaseFilterMinP } from "../vars/vars";

export const releaseFilter = new Slider(releaseFilterInputMin, releaseFilterInputMax, releaseFilterMinP, releaseFilterMaxP);

releaseFilter.setMinSlider();
releaseFilter.setMaxSlider();