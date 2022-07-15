import { InstrumentProducer } from "../types/item";
import { showcase } from "../vars/vars";

export const producerFilter: InstrumentProducer[] = [];

const producerCheckboxes: NodeListOf <HTMLInputElement> = document.querySelectorAll('.side-panel__producer-filter input');

console.log(producerCheckboxes);
console.log(InstrumentProducer);
console.log('Producer filter on');

producerCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const filterName: string | undefined = checkbox.parentElement?.innerText.replace(' ', '').replace(' ', '');
    const currentFilter: InstrumentProducer = InstrumentProducer[filterName as keyof typeof InstrumentProducer];
    if(checkbox.checked) {
      console.log('Начало', filterName, 'Конец');
      console.log('Producer: ', InstrumentProducer[filterName as keyof typeof InstrumentProducer]);
      producerFilter.push(currentFilter);
      console.log('Producer filter checked');
    } else {
      const filterPos: number = producerFilter.indexOf(currentFilter);
      producerFilter.splice(filterPos, 1);
      console.log('Producer filter unchecked');
    }

    console.log(producerFilter);
    showcase.fillShowcase();

  });
});