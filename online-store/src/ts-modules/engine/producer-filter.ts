import { InstrumentProducer } from "../types/item";
import { showcase } from "../vars/vars";

export const producerFilter: InstrumentProducer[] = [];

const producerCheckboxes: NodeListOf <HTMLInputElement> = document.querySelectorAll('.side-panel__producer-filter input');

producerCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    const filterName: string | undefined = checkbox.parentElement?.innerText.replace(' ', '').replace(' ', '');
    const currentFilter: InstrumentProducer = InstrumentProducer[filterName as keyof typeof InstrumentProducer];
    if(checkbox.checked) {
      producerFilter.push(currentFilter);
    } else {
      const filterPos: number = producerFilter.indexOf(currentFilter);
      producerFilter.splice(filterPos, 1);
    }

    showcase.fillShowcase();

  });
});