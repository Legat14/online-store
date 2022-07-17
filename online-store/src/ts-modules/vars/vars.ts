import { Showcase } from "../types/showcase";
import { Cart } from "../types/cart";
import { Storage } from "../types/types";

export const storageArr: Storage = [];
export const cartArr: Storage = [];
export const showcase: Showcase = new Showcase();
export const cart: Cart = new Cart(0);
export const cartCounter: HTMLDivElement | null = document.querySelector('.cart__counter');