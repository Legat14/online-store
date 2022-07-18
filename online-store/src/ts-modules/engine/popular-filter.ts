import { showcase } from "../vars/vars";

export let popularChecked = false;

export const popularCheckbox: HTMLInputElement | null =
document.querySelector('.side-panel__popular-checkbox');

popularCheckbox?.addEventListener('change', (): void => {
  popularChecked = !popularChecked;
  showcase.fillShowcase();
});