import { InstrumentType } from "../types/item";
import { showcase } from "../vars/vars";

export const typeFilter: InstrumentType[] = [];

const guitarsCheckbox: HTMLInputElement | null =
document.querySelector('.type-filter__guitars-checkbox');

const keyboardsCheckbox: HTMLInputElement | null =
document.querySelector('.type-filter__keyboards-checkbox');

const harmonicasCheckbox: HTMLInputElement | null =
document.querySelector('.type-filter__harmonicas-checkbox');

const drumsCheckbox: HTMLInputElement | null =
document.querySelector('.type-filter__drums-checkbox');

guitarsCheckbox?.addEventListener('change', (): void => {
  if (guitarsCheckbox.checked) {
    typeFilter.push(InstrumentType.Guitars);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Guitars);
    typeFilter.splice(filterPos, 1);
  }
  showcase.fillShowcase();
});

keyboardsCheckbox?.addEventListener('change', (): void => {
  if (keyboardsCheckbox.checked) {
    typeFilter.push(InstrumentType.Keyboards);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Keyboards);
    typeFilter.splice(filterPos, 1);
  }
  showcase.fillShowcase();
});

harmonicasCheckbox?.addEventListener('change', (): void => {
  if (harmonicasCheckbox.checked) {
    typeFilter.push(InstrumentType.Harmonicas);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Harmonicas);
    typeFilter.splice(filterPos, 1);
  }
  showcase.fillShowcase();
});

drumsCheckbox?.addEventListener('change', (): void => {
  if (drumsCheckbox.checked) {
    typeFilter.push(InstrumentType.Drums);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Drums);
    typeFilter.splice(filterPos, 1);
  }
  showcase.fillShowcase();
});