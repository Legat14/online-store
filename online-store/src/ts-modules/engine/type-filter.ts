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

console.log('Type filter on');

guitarsCheckbox?.addEventListener('change', () => {
  if (guitarsCheckbox.checked) {
    typeFilter.push(InstrumentType.Guitars);
    console.log('Guitars filter checked');
    console.log(typeFilter);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Guitars);
    typeFilter.splice(filterPos, 1);
    console.log('Guitars filter unchecked');
    console.log(typeFilter);
  }
  showcase.fillShowcase();
});

keyboardsCheckbox?.addEventListener('change', () => {
  if (keyboardsCheckbox.checked) {
    typeFilter.push(InstrumentType.Keyboards);
    console.log('Keyboards filter checked');
    console.log(typeFilter);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Keyboards);
    typeFilter.splice(filterPos, 1);
    console.log('Keyboards filter unchecked');
    console.log(typeFilter);
  }
  showcase.fillShowcase();
});

harmonicasCheckbox?.addEventListener('change', () => {
  if (harmonicasCheckbox.checked) {
    typeFilter.push(InstrumentType.Harmonicas);
    console.log('Harmonicas filter checked');
    console.log(typeFilter);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Harmonicas);
    typeFilter.splice(filterPos, 1);
    console.log('Harmonicas filter unchecked');
    console.log(typeFilter);
  }
  showcase.fillShowcase();
});

drumsCheckbox?.addEventListener('change', () => {
  if (drumsCheckbox.checked) {
    typeFilter.push(InstrumentType.Drums);
    console.log('Drums filter checked');
    console.log(typeFilter);
  } else {
    const filterPos: number = typeFilter.indexOf(InstrumentType.Drums);
    typeFilter.splice(filterPos, 1);
    console.log('Drums filter unchecked');
    console.log(typeFilter);
  }
  showcase.fillShowcase();
});