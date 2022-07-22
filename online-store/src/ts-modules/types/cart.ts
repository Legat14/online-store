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
  }

  removeFromCart(item: Item): void {
    const itemIndex: number = cartArr.indexOf(item);
    cartArr.splice(itemIndex, 1);
    Cart.itemCounter = cartArr.length;
    Cart.refreshCounter();
  }
  
  static cleanCart(): void {
    cartArr.splice(0, cartArr.length);
    Cart.itemCounter = cartArr.length;
    Cart.refreshCounter();
    showcase.fillShowcase();
  }

  static refreshCounter(): void {
    if (cartCounter) {
      (cartCounter as HTMLDivElement).innerHTML = cartArr.length.toString();
    }
  }
  
}

const cartCleanBtn: HTMLButtonElement | null = document.querySelector('.cart__clean-btn');

cartCleanBtn?.addEventListener ('click', (): void => {
  Cart.cleanCart();
  showcase.fillShowcase();
});