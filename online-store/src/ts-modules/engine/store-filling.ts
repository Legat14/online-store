import { InstrumentColor, InstrumentProducer, InstrumentType, Item } from "../types/item";
import { storageArr } from "../vars/vars";


const item1_1 = new Item('70th Anniversary Broadcaster', InstrumentType.Guitars,
'./assets/img/70th-anniversary-broadcaster.jpg', 1970, InstrumentProducer.Fender,
InstrumentColor.Wood, 558000, false);

const item1_2 = new Item('CD 60s', InstrumentType.Guitars,
'./assets/img/cd-60-black.jpg', 1967, InstrumentProducer.Fender,
InstrumentColor.Black, 26100, true);

const item1_3 = new Item('2019 Explorer Antique', InstrumentType.Guitars,
'./assets/img/2019-explorer-antique.jpg', 2019, InstrumentProducer.Gibson,
InstrumentColor.Wood, 254000, true);

const item1_4 = new Item('SQUIER Affinity 2021 Stratocaster', InstrumentType.Guitars,
'./assets/img/squier-affinity-2021-stratocaster.jpg', 2021, InstrumentProducer.Fender,
InstrumentColor.Brown, 43000, true);

const item1_5 = new Item('ES-335 Figured Iced Tea', InstrumentType.Guitars,
'./assets/img/es-335-figured-Iced-tea.jpg', 1982, InstrumentProducer.Gibson,
InstrumentColor.Yellow, 472000, false);

const item1_6 = new Item('CG182S', InstrumentType.Guitars,
'./assets/img/cg182s.jpg', 1994, InstrumentProducer.Yamaha,
InstrumentColor.Yellow, 81890, false);

const item2_1 = new Item('PSR-E273', InstrumentType.Keyboards,
'./assets/img/psr-e273.jpg', 2012, InstrumentProducer.Yamaha,
InstrumentColor.Black, 21990, true);

const item2_2 = new Item('CT-X5000', InstrumentType.Keyboards,
'./assets/img/ct-x5000.jpg', 2020, InstrumentProducer.Casio,
InstrumentColor.Black, 56990, true);

const item2_3 = new Item('CT-S200RD', InstrumentType.Keyboards,
'./assets/img/ct-s200rd.jpg', 2018, InstrumentProducer.Casio,
InstrumentColor.Red, 21990, false);

const item2_4 = new Item('LP-380', InstrumentType.Keyboards,
'./assets/img/lp-380.jpg', 2016, InstrumentProducer.Korg,
InstrumentColor.White, 117000, false);

const item2_5 = new Item('MX61 BK', InstrumentType.Keyboards,
'./assets/img/mx61-bk.jpg', 2021, InstrumentProducer.Yamaha,
InstrumentColor.Black, 99000, false);

const item3_1 = new Item('Golden melody', InstrumentType.Harmonicas,
'./assets/img/golden-melody.jpg', 1975, InstrumentProducer.Hohner,
InstrumentColor.Metallic, 3750, true);

const item3_2 = new Item('Big river harp', InstrumentType.Harmonicas,
'./assets/img/big-river-harp.jpg', 1982, InstrumentProducer.Hohner,
InstrumentColor.Metallic, 2580, false);

const item3_3 = new Item('52640C Symphony', InstrumentType.Harmonicas,
'./assets/img/52640c-symphony.jpg', 1893, InstrumentProducer.SeydelSohne,
InstrumentColor.Metallic, 99380, false);

const item3_4 = new Item('16601E 1847 Lightining', InstrumentType.Harmonicas,
'./assets/img/16601e-1847-lightining.jpg', 1847, InstrumentProducer.SeydelSohne,
InstrumentColor.Metallic, 15370, true);

const item3_5 = new Item('1072', InstrumentType.Harmonicas,
'./assets/img/1072.jpg', 1972, InstrumentProducer.Suzuki,
InstrumentColor.Metallic, 1490, false);

const item4_1 = new Item('KR-55 Pro', InstrumentType.Drums,
'./assets/img/kr-55-pro.jpg', 2019, InstrumentProducer.Korg,
InstrumentColor.Wood, 32800, false);

const item4_2 = new Item('LC19019 Accent Fuse', InstrumentType.Drums,
'./assets/img/lc19019_accent_fuse.jpg', 2003, InstrumentProducer.Ludwig,
InstrumentColor.Blue, 59650, true);

const item4_3 = new Item('DTX6K-X', InstrumentType.Drums,
'./assets/img/dtx6k-x.jpg', 2016, InstrumentProducer.Yamaha,
InstrumentColor.Black, 207990, false);

const item4_4 = new Item('L94433VXX47WC', InstrumentType.Drums,
'./assets/img/l94433vxx47wc.jpg', 2002, InstrumentProducer.Ludwig,
InstrumentColor.Orange, 487720, false);

const item4_5 = new Item('S2508NEW', InstrumentType.Drums,
'./assets/img/s2508new.jpg', 2015, InstrumentProducer.Hohner,
InstrumentColor.Black, 60490, false);

const item4_6 = new Item('SG52KH6C-BK STAGESTAR', InstrumentType.Drums,
'./assets/img/sg52kh6c-bk-stagestar.jpg', 2010, InstrumentProducer.Tama,
InstrumentColor.Black, 78300, true);

const item4_7 = new Item('RM52KH6-CPM RHYTHM MATE', InstrumentType.Drums,
'./assets/img/rm52kh6-cpm-rythm-mate.jpg', 1999, InstrumentProducer.Tama,
InstrumentColor.Red, 77000, false);

console.log ('StorageArr: ', storageArr);