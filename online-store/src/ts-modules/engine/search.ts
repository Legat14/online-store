import { showcase } from "../vars/vars";

export let searchString: string | undefined = '';

const searchInput: HTMLInputElement | null = document.querySelector('.search-block__search-input');

const searchBtn: HTMLButtonElement | null = document.querySelector('.top-panel__search-btn');

searchBtn?.addEventListener('click', (): void => {
  searchString = searchInput?.value;
  console.log('Search string: ', searchString);
  showcase.fillShowcase();
});

searchInput?.addEventListener('search', (): void => {
  searchString = searchInput?.value;
  console.log('Search string: ', searchString);
  console.log('Clean search');
  showcase.fillShowcase();
});