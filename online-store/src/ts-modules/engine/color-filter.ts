import { InstrumentColor } from "../types/item";
import { showcase } from "../vars/vars";

export const colorFilter: InstrumentColor[] = [];

const colorCheckboxes: NodeListOf <HTMLInputElement> = document.querySelectorAll('.side-panel__color-filter input');

console.log(colorCheckboxes);
console.log(InstrumentColor);
console.log('Color filter on');

colorCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const filterName: string | undefined = checkbox.parentElement?.innerText.replace(' ', '').replace(' ', '');
    const currentFilter: InstrumentColor = InstrumentColor[filterName as keyof typeof InstrumentColor];
    if(checkbox.checked) {
      console.log('Начало', filterName, 'Конец');
      console.log('Color: ', InstrumentColor[filterName as keyof typeof InstrumentColor]);
      colorFilter.push(currentFilter);
      console.log('Color filter checked');
    } else {
      const filterPos: number = colorFilter.indexOf(currentFilter);
      colorFilter.splice(filterPos, 1);
      console.log('Color filter unchecked');
    }

    console.log(colorFilter);
    showcase.fillShowcase();

  });
});