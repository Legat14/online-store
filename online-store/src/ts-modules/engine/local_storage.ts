import { resetLocalStorageBtn, showcase } from "../vars/vars";
import { priceFilter, releaseFilter } from "./price-filter";
import { resetFilters } from "./reset-filters-btn";

const allCheckboxes: NodeListOf<HTMLInputElement> = document.querySelectorAll('input[type=checkbox]');

window.addEventListener('load', ():void => {
  if (localStorage.getItem('priceMinValue')) {
    priceFilter.setMinValue(+(localStorage.getItem('priceMinValue') as string));
  }
  if (localStorage.getItem('priceMaxValue')) {
    priceFilter.setMaxValue(+(localStorage.getItem('priceMaxValue') as string));
  }
  if (localStorage.getItem('releaseMinValue')) {
    releaseFilter.setMinValue(+(localStorage.getItem('releaseMinValue') as string));
  }
  if (localStorage.getItem('releaseMaxValue')) {
    releaseFilter.setMaxValue(+(localStorage.getItem('releaseMaxValue') as string));
  }
  allCheckboxes.forEach((checkbox: HTMLInputElement, i: number): void => {
    if (localStorage.getItem(`checkbox[${i}]`) === 'checked') {
      checkbox.checked = true;
    } else {
      checkbox.checked = false;
    }
  });

  showcase.fillShowcase();
});

window.addEventListener('beforeunload', (): void => {
  const priceMinValue: number = +(priceFilter.getMinValue() as number);
  const priceMaxValue: number = +(priceFilter.getMaxValue() as number);
  localStorage.setItem('priceMinValue', priceMinValue.toString());
  localStorage.setItem('priceMaxValue', priceMaxValue.toString());
  const releaseMinValue: number = +(releaseFilter.getMinValue() as number);
  const releaseMaxValue: number = +(releaseFilter.getMaxValue() as number);
  localStorage.setItem('releaseMinValue', releaseMinValue.toString());
  localStorage.setItem('releaseMaxValue', releaseMaxValue.toString());
  allCheckboxes.forEach((checkbox: HTMLInputElement, i: number): void => {
    if (checkbox.checked) {
      localStorage.setItem(`checkbox[${i}]`, 'checked');
    } else {
      localStorage.removeItem(`checkbox[${i}]`);
    }
  });
});

resetLocalStorageBtn?.addEventListener('click', (): void => {
  localStorage.removeItem('priceMinValue');
  localStorage.removeItem('priceMaxValue');
  localStorage.removeItem('releaseMinValue');
  localStorage.removeItem('releaseMaxValue');
  resetFilters();
  console.log('Lockal storage is clean');
});