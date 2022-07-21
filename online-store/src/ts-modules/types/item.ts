export class Item {

  id: number;
  static currentId = 1;
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
  }

}

export enum InstrumentType {
  Guitars = 'Guitars',
  Keyboards = 'Keyboards',
  Harmonicas = 'Harmonicas',
  Drums = 'Drums'
}

export enum InstrumentProducer {
  Yamaha = 'Yamaha',
  Fender = 'Fender',
  Gibson = 'Gibson',
  Casio = 'Casio',
  Korg = 'Korg',
  Hohner = 'Hohner',
  SeydelSohne = 'Seydel Sohne',
  Suzuki = 'Susuki',
  Tama = 'Tama',
  Ludwig = 'Ludwig'
}

export enum InstrumentColor {
  White = 'White',
  Black = 'Black',
  Metallic = 'Metallic',
  Blue = 'Blue',
  Red = 'Red',
  Green = 'Green',
  Yellow = 'Yellow',
  Orange = 'Orange',
  Brown = 'Brown',
  Wood = 'Wood'
}