import { resetFiltersBtn, showcase } from "../vars/vars";
import { colorFilter } from "./color-filter";
import { priceFilter, releaseFilter } from "./price-filter";
import { producerFilter } from "./producer-filter";
import { typeFilter } from "./type-filter";

export function resetFilters() {
  const allCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type=checkbox]');
  allCheckboxes.forEach((checkbox: HTMLInputElement): void => {
    checkbox.checked = false;
  });
  typeFilter.splice(0, typeFilter.length);
  producerFilter.splice(0, producerFilter.length);
  colorFilter.splice(0, colorFilter.length);
  priceFilter.setMinValue(0);
  releaseFilter.setMinValue(1847);
  priceFilter.setMaxValue(600000);
  releaseFilter.setMaxValue(2021);
}

resetFiltersBtn?.addEventListener('click', (): void => {
  resetFilters();
  showcase.fillShowcase();
});