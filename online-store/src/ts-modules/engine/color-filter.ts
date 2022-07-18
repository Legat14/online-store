import { InstrumentColor } from "../types/item";
import { showcase } from "../vars/vars";

export const colorFilter: InstrumentColor[] = [];

const colorCheckboxes: NodeListOf <HTMLInputElement> = document.querySelectorAll('.side-panel__color-filter input');

export function filterColors(checkbox: HTMLInputElement) {
  const filterName: string | undefined = checkbox.parentElement?.innerText.replace(' ', '').replace(' ', '');
    const currentFilter: InstrumentColor = InstrumentColor[filterName as keyof typeof InstrumentColor];
    if(checkbox.checked) {
      colorFilter.push(currentFilter);
    } else {
      const filterPos: number = colorFilter.indexOf(currentFilter);
      colorFilter.splice(filterPos, 1);
    }
}

colorCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    filterColors(checkbox);

    showcase.fillShowcase();

  });
});