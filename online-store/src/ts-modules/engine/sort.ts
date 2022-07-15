import { showcase } from "../vars/vars";

export enum sortByEnum {
  NoSort = 'No sort',
  Alphabetical = 'A-Z 🠕',
  AlphabeticalBackward = 'Z-A 🠗',
  ByYear = 'From modern to old 🠕',
  ByYearBackward = 'From old to modern 🠗',
  ByPrice = 'From cheap to expensive 🠕',
  ByPriceBackward = 'From expensive to cheap 🠗'
}

export let sortBy: sortByEnum = sortByEnum.NoSort;

const sortSelect: HTMLInputElement | null = document.querySelector('.sort-block__select');

sortSelect?.addEventListener('change', () => {
    const selectedSort: keyof typeof sortByEnum | string = sortSelect.value;
    sortBy = sortByEnum[selectedSort as keyof typeof sortByEnum];
    console.log('Sort by: ', sortBy);
    showcase.fillShowcase();
  });