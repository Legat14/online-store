import { cart, cartArr, storageArr } from "../vars/vars";
import { popularCheckbox, popularChecked } from "../engine/popular-filter";
import { Item } from "./item";
import { Storage } from "./types";
import { typeFilter } from "../engine/type-filter";
import { sortBy, sortByEnum } from "../engine/sort";
import { producerFilter } from "../engine/producer-filter";
import { colorFilter } from "../engine/color-filter";
import { searchString } from "../engine/search";
import { priceFilter, releaseFilter } from "../engine/price-filter";

export class Showcase {

  showcase: HTMLDivElement | null;
  showcaseArr: Storage = [];

  constructor() {
    this.showcase = document.querySelector('.showcase');
  }

  createCard(item: Item): void {

    const itemCard: HTMLDivElement = document.createElement('div');
    itemCard.classList.add('item-card');
    
    const itemTitle: HTMLDivElement = document.createElement('h3');
    itemTitle.innerHTML = item.title;
    
    const itemType: HTMLDivElement = document.createElement('h4');
    itemType.innerHTML = item.type;
    
    const itemImgDiv: HTMLDivElement = document.createElement('div');
    itemImgDiv.classList.add('item-card__img-div');
    const itemImg: HTMLDivElement = document.createElement('img');
    itemImg.setAttribute('src', item.img);
    itemImg.setAttribute('alt', `item_${item.id}`);
    itemImg.classList.add('item-card__img');
    
    const itemReleaseYearP: HTMLDivElement = document.createElement('p');
    const itemReleaseYearTitle: HTMLSpanElement = document.createElement('span');
    itemReleaseYearTitle.innerHTML = 'Release year:';
    const itemReleaseYear: HTMLSpanElement = document.createElement('span');
    itemReleaseYear.innerHTML = item.releaseYear.toString();

    const itemProducerP: HTMLDivElement = document.createElement('p');
    const itemProducerTitle: HTMLSpanElement = document.createElement('span');
    itemProducerTitle.innerHTML = 'Producer:';
    const itemProducer: HTMLSpanElement = document.createElement('span');
    itemProducer.innerHTML = item.producer;
    
    const itemColorP: HTMLDivElement = document.createElement('p');
    const itemColorTitle: HTMLSpanElement = document.createElement('span');
    itemColorTitle.innerHTML = 'Color:';
    const itemColor: HTMLSpanElement = document.createElement('span');
    itemColor.innerHTML = item.color;

    const itemPriceP: HTMLDivElement = document.createElement('p');
    const itemPriceTitle: HTMLSpanElement = document.createElement('span');
    itemPriceTitle.innerHTML = 'Price:';
    const itemPrice: HTMLSpanElement = document.createElement('span');
    itemPrice.innerHTML = item.price.toString();
    const itemPriceUnit: HTMLSpanElement = document.createElement('span');
    itemPriceUnit.innerHTML = 'руб.';

    const itemPopularImgDiv: HTMLDivElement = document.createElement('div');
    itemPopularImgDiv.classList.add('item-card__popular-img-div');
    const itemPopularImg: HTMLDivElement = document.createElement('img');
    itemPopularImg.setAttribute('src', './assets/img/hit.png');
    itemPopularImg.setAttribute('alt', `hit`);
    itemPopularImg.classList.add('item-card__popular-img');
    if (!item.isPopular) {
      itemPopularImg.classList.add('item-card__popular-img_hidden');
    }
    
    const itemToCartBtn: HTMLButtonElement = document.createElement('button');
    itemToCartBtn.classList.add('item-card__to-cart-btn');
    itemToCartBtn.innerHTML = 'Add to cart';
    if (cartArr.includes(item)) {
      itemToCartBtn.classList.add('item-card__to-cart-btn_disabled');
      itemToCartBtn.setAttribute('disabled', '');
    }
    
    itemToCartBtn.addEventListener('click', (): void => {
      if (!cartArr.includes(item)) {
        if (cartArr.length < 20) {
          cart.addToCart(item);
          itemToCartBtn.setAttribute('disabled', '');
          itemToCartBtn.innerHTML = 'In the cart!'
        } else {
          alert('Sorry, the cart is full');
        }
      }
    });
    
    itemCard.append(itemTitle);
    itemCard.append(itemType);
    itemCard.append(itemImgDiv);
    itemImgDiv.append(itemImg);
    itemCard.append(itemReleaseYearP);
    itemReleaseYearP.append(itemReleaseYearTitle, itemReleaseYear);
    itemCard.append(itemProducerP);
    itemProducerP.append(itemProducerTitle, itemProducer);
    itemCard.append(itemColorP);
    itemColorP.append(itemColorTitle, itemColor);
    itemCard.append(itemPriceP);
    itemPriceP.append(itemPriceTitle, itemPrice, itemPriceUnit);
    itemCard.append(itemPopularImgDiv);
    itemPopularImgDiv.append(itemPopularImg);
    itemCard.append(itemToCartBtn);
    this.showcase?.append(itemCard);
  }

  filterShowcase():void {

    this.showcaseArr = [];
    storageArr.forEach(item => {

      let isPassFilter = true;

      if (popularCheckbox?.checked) { // Фильтр популярных элементов
        if (!item.isPopular) {
          isPassFilter = false;
        }
      }

      if (isPassFilter && typeFilter.length !== 0) { // Фильтр по типу инструмента
        isPassFilter = false;
        typeFilter.forEach(filter => {
          if (item.type === filter) {
            isPassFilter = true;
          }
        });
      }

      if (isPassFilter && producerFilter.length !== 0) { // Фильтр по производителю
        isPassFilter = false;
        producerFilter.forEach(filter => {
          if (item.producer === filter) {
            isPassFilter = true;
          }
        });
      }

      if (isPassFilter && colorFilter.length !== 0) { // Фильтр по цвету
        isPassFilter = false;
        colorFilter.forEach(filter => {
          if (item.color === filter) {
            isPassFilter = true;
          }
        });
      }

      if (isPassFilter) { // Фильтр по минимальной цене
        if (priceFilter.minFilter && priceFilter.minFilter as number > item.price) {
          isPassFilter = false;
        }
      }

      if (isPassFilter) { // Фильтр по максимальной цене
        if (priceFilter.maxFilter && priceFilter.maxFilter as number < item.price) {
          isPassFilter = false;
        }
      }

      if (isPassFilter) { // Фильтр по минимальному году выпуска
        if (releaseFilter.minFilter && releaseFilter.minFilter as number > item.releaseYear) {
          isPassFilter = false;
        }
      }

      if (isPassFilter) { // Фильтр по максимальному году выпуска
        if (releaseFilter.maxFilter && releaseFilter.maxFilter as number < item.releaseYear) {
          isPassFilter = false;
        }
      }

      if (isPassFilter) {
        this.showcaseArr.push(item);
      }
    });

  }
  
  cleanShowcase(){
    const allCards: NodeListOf<HTMLDivElement> = document.querySelectorAll('.item-card');
    allCards.forEach(card => {
      card.remove();
    });
    this.removeNothingFound();
  }

  sortShowcase(){
    if (sortBy === sortByEnum.Alphabetical) {
      this.showcaseArr.sort((item1: Item, item2: Item): number => {
        if (item1.title.toLowerCase() > item2.title.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortBy === sortByEnum.AlphabeticalBackward) {
      this.showcaseArr.sort((item1: Item, item2: Item): number => {
        if (item1.title.toLowerCase() <= item2.title.toLowerCase()) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortBy === sortByEnum.ByYear) {
      this.showcaseArr.sort((item1: Item, item2: Item): number => {
        if (item1.releaseYear <= item2.releaseYear) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortBy === sortByEnum.ByYearBackward) {
      this.showcaseArr.sort((item1: Item, item2: Item): number => {
        if (item1.releaseYear > item2.releaseYear) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortBy === sortByEnum.ByPrice) {
      this.showcaseArr.sort((item1: Item, item2: Item): number => {
        if (item1.price > item2.price) {
          return 1;
        } else {
          return -1;
        }
      });
    } else if (sortBy === sortByEnum.ByPriceBackward) {
      this.showcaseArr.sort((item1: Item, item2: Item): number => {
        if (item1.price <= item2.price) {
          return 1;
        } else {
          return -1;
        }
      });
    }
  }

  searchShowcase(): void {
    const tempArr: Item[] = [];
    this.showcaseArr.forEach(item => {
      if (item.title.toLowerCase().search(searchString?.toLowerCase() as string) >= 0) {
        tempArr.push(item);
      }
    });
    this.showcaseArr = tempArr;
  }

  createNothingFound(): void {
    let nothingFound: HTMLDivElement | null = document.querySelector('.nothing-found');
    if (!nothingFound) {
      nothingFound = document.createElement('div');
      nothingFound.classList.add('nothing-found');
      const nothingFoundP: HTMLDivElement = document.createElement('p');
      nothingFoundP.innerHTML = 'We found... nothing';

      nothingFound.append(nothingFoundP);
      this.showcase?.append(nothingFound);
    }
  }
  
  removeNothingFound(): void {
    const nothingFound: HTMLDivElement | null = document.querySelector('.nothing-found');
    if (nothingFound) {
      nothingFound.remove();
    }
  }

  fillShowcase(): void {
    this.filterShowcase();
    this.searchShowcase();
    this.sortShowcase();
    this.cleanShowcase();
    if (this.showcaseArr.length > 0) {
      this.showcaseArr.forEach((item: Item): void => {
        this.createCard(item);
      });
    } else {
      this.createNothingFound();
    }
  }

}