import { InstrumentColor, InstrumentProducer, InstrumentType, Item } from "../types/item";
import { storageArr } from "../vars/vars";

const item1 = new Item('Golden melody', InstrumentType.Harmonicas, 'Ссылка на картинку', 1975,
InstrumentProducer.Hohner, InstrumentColor.Metallic, 3750, true);

const item2 = new Item('Big river harp', InstrumentType.Harmonicas, 'Ссылка на картинку', 1982,
InstrumentProducer.Hohner, InstrumentColor.Metallic, 2580, false);

console.log (storageArr);