import { storageArr } from "../vars/vars";

export class Item {

  id: number;
  static currentId: number = 1;
  title: string;
  type: InstrumentType;
  img: string;
  releaseYear: number;
  producer: InstrumentProducer;
  color: InstrumentColor;
  price: number;
  isPopular: boolean;

  constructor(title: string, type: InstrumentType, img: string, releaseYear: number,
    producer: InstrumentProducer, color: InstrumentColor, price: number, isPopular: boolean) {
    this.id = Item.currentId;
    Item.currentId++;
    this.title = title;
    this.type = type;
    this.img = img;
    this.releaseYear = releaseYear;
    this.producer = producer;
    this.color = color;
    this.price = price;
    this.isPopular = isPopular;
    this.storeItem();
  }

  storeItem(): void {
    storageArr.push(this);
  }
}

export enum InstrumentType {
  Guitars = 'Гитары',
  Keyboards = 'Синтезаторы',
  Harmonicas = 'Губные гармошки',
  Drums = 'Барабаны'
}

export enum InstrumentProducer {
  Yamaha = 'Yamaha',
  Fender = 'Fender',
  Gibson = 'Gibson',
  Casio = 'Casio',
  Korg = 'Korg',
  Hohner = 'Hohner',
  Seydel = 'Seydel',
  Suzuki = 'Susuki',
  DAddario = 'D\'Addario', // TODO: Заменить на бренд барабанов
  Ludwig = 'Ludwig'
}

export enum InstrumentColor {
  White = 'Белый',
  Black = 'Черный',
  Metallic = 'Металлический',
  Blue = 'Синий',
  Red = 'Красный',
  Green = 'Зеленый',
  Yellow = 'Желтый',
  Brown = 'Коричневый',
  Wood = 'Цвет дерева'
}