import { showcase, showcaseArr, storageArr } from "../vars/vars";

storageArr.forEach((elem, index) => { //TODO: Заменить эту функцию функцией отбора итемов из стореджа по условиям
  showcaseArr[index] = elem;
});

console.log('showcaseArr: ', showcaseArr);

showcase.fillShowcase();