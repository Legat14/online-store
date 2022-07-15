export enum sortByEnum {
  Alphabetical = 'A-Z 🠕',
  AlphabeticalBackward = 'Z-A 🠗',
  ByYear = 'From modern to old 🠕',
  ByYearBackward = 'From old to modern 🠗',
  ByPrice = 'From cheap to expensive 🠕',
  ByPriceBackward = 'From expensive to cheap 🠗'
}

export let sortBy: sortByEnum | '' = '';
