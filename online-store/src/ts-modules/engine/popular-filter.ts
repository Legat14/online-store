import { showcase } from "../vars/vars";

export let popularChecked: boolean = false;

export const popularCheckbox: HTMLInputElement | null =
document.querySelector('.side-panel__popular-checkbox');

console.log('Popular filter on');

popularCheckbox?.addEventListener('change', () => {
  popularChecked = !popularChecked;
  showcase.fillShowcase();
  console.log(popularChecked);
});