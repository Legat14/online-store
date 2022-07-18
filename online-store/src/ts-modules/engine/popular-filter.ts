import { showcase } from "../vars/vars";

export let popularChecked = false;

export const popularCheckbox: HTMLInputElement | null =
document.querySelector('.side-panel__popular-checkbox');

console.log('Popular filter on');

popularCheckbox?.addEventListener('change', (): void => {
  popularChecked = !popularChecked;
  showcase.fillShowcase();
  console.log('Popular filter: ', popularChecked);
  console.log('Popular checkbox: ', popularCheckbox.checked);
});