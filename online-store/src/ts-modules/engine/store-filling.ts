import { InstrumentColor, InstrumentProducer, InstrumentType, Item } from "../types/item";
import { storageArr } from "../vars/vars";


const item1 = new Item('70th Anniversary Broadcaster', InstrumentType.Guitars,
'./assets/img/70th-anniversary-broadcaster.jpg', 1970, InstrumentProducer.Fender,
InstrumentColor.Wood, 558000, false);

const item2 = new Item('CD 60s', InstrumentType.Guitars,
'./assets/img/cd-60-black.jpg', 1967, InstrumentProducer.Fender,
InstrumentColor.Black, 26100, true);

const item3 = new Item('2019 Explorer Antique', InstrumentType.Guitars,
'./assets/img/2019-explorer-antique.jpg', 2019, InstrumentProducer.Gibson,
InstrumentColor.Wood, 254000, true);

const item4 = new Item('SQUIER Affinity 2021 Stratocaster', InstrumentType.Guitars,
'./assets/img/squier-affinity-2021-stratocaster.jpg', 2021, InstrumentProducer.Fender,
InstrumentColor.Brown, 43000, true);

const item5 = new Item('ES-335 Figured Iced Tea', InstrumentType.Guitars,
'./assets/img/es-335-figured-Iced-tea.jpg', 1982, InstrumentProducer.Gibson,
InstrumentColor.Yellow, 472000, false);

const item6 = new Item('CG182S', InstrumentType.Guitars,
'./assets/img/cg182s.jpg', 1994, InstrumentProducer.Yamaha,
InstrumentColor.Yellow, 81890, false);

const item7 = new Item('PSR-E273', InstrumentType.Keyboards,
'./assets/img/psr-e273.jpg', 2012, InstrumentProducer.Yamaha,
InstrumentColor.Black, 21990, true);

const item8 = new Item('CT-X5000', InstrumentType.Keyboards,
'./assets/img/ct-x5000.jpg', 2020, InstrumentProducer.Casio,
InstrumentColor.Black, 56990, true);

const item9 = new Item('CT-S200RD', InstrumentType.Keyboards,
'./assets/img/ct-s200rd.jpg', 2018, InstrumentProducer.Casio,
InstrumentColor.Red, 21990, false);

const item10 = new Item('LP-380', InstrumentType.Keyboards,
'./assets/img/lp-380.jpg', 2016, InstrumentProducer.Korg,
InstrumentColor.White, 117000, false);

const item11 = new Item('MX61 BK', InstrumentType.Keyboards,
'./assets/img/mx61-bk.jpg', 2021, InstrumentProducer.Yamaha,
InstrumentColor.Black, 99000, false);

const item20 = new Item('Golden melody', InstrumentType.Harmonicas,
'./assets/img/golden-melody.jpg', 1975, InstrumentProducer.Hohner,
InstrumentColor.Metallic, 3750, true);

const item21 = new Item('Big river harp', InstrumentType.Harmonicas,
'./assets/img/big-river-harp.jpg', 1982, InstrumentProducer.Hohner,
InstrumentColor.Metallic, 2580, false);

const item12 = new Item('KR-55 Pro', InstrumentType.Drums,
'./assets/img/kr-55-pro.jpg', 2019, InstrumentProducer.Korg,
InstrumentColor.Wood, 32800, false);

console.log ('storageArr: ', storageArr);