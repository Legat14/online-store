import { cartArr, cartCounter, showcase } from "../vars/vars";
import { Item } from "./item";

export class Cart {

  static itemCounter: number

  constructor (itemCounter: number) {
    Cart.itemCounter = itemCounter;
  }

  addToCart(item: Item): void {
    cartArr.push(item);
    Cart.itemCounter = cartArr.length;
    Cart.refreshCounter();
    console.log(Cart.itemCounter);
  }
  
  static cleanCart(): void {
    cartArr.splice(0, cartArr.length);
    Cart.itemCounter = cartArr.length;
    Cart.refreshCounter();
    showcase.fillShowcase();
    console.log(Cart.itemCounter);
  }

  static refreshCounter(): void {
    if (cartCounter) {
      (cartCounter as HTMLDivElement).innerHTML = cartArr.length.toString();
    }
  }
  
}

const cartCleanBtn = document.querySelector('.cart__clean-btn');

cartCleanBtn?.addEventListener ('click', (): void => {
  Cart.cleanCart();
  showcase.fillShowcase();
});