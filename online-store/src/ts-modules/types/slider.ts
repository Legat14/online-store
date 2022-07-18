import { showcase } from "../vars/vars";

export class Slider {

  minRange: HTMLInputElement | null;
  maxRange: HTMLInputElement | null;
  minFilter: number | undefined;
  maxFilter: number | undefined;
  filterMinP: HTMLDivElement | null;
  filterMaxP: HTMLDivElement | null;

  constructor (minRange: HTMLInputElement | null, maxRange: HTMLInputElement | null,
    filterMinP: HTMLDivElement | null, filterMaxP: HTMLDivElement | null) {
    this.minRange = minRange;
    this.maxRange = maxRange;
    this.filterMinP = filterMinP;
    this.filterMaxP = filterMaxP;
    this.minFilter = this.getMinValue();
    this.maxFilter = this.getMaxValue();

    this.minRange?.addEventListener('input', (): void => {
      this.setMinSlider();
    });

    this.maxRange?.addEventListener('input', (): void => {
      this.setMaxSlider();
    });
  }

  getMinValue(): number | undefined {
    if (this.minRange){
      return +this.minRange.value
    }
  }
  
  getMaxValue(): number | undefined {
    if (this.maxRange){
      return +this.maxRange.value
    }
  }

  setMinValue(value: number): void {
    if (this.minRange) {
      (this.minRange as HTMLInputElement).value = value.toString();
    }
    this.setMinSlider();
  }

  setMaxValue(value: number): void {
    if (this.maxRange) {
      (this.maxRange as HTMLInputElement).value = value.toString();
    }
    this.setMaxSlider();
  }

    setMinSlider() {
      const min: number | undefined = this.getMinValue();
      this.minFilter = min;
        console.log('Set: ', min);
        if (min || min === 0) {
          this.colorizeSliderMin(min);
        }
      this.setMinNumber();
      showcase.fillShowcase();
    }
  
    setMaxSlider() {
      const max: number | undefined = this.getMaxValue();
      this.maxFilter = max;
        console.log('Set: ', max);
        if (max) {
          this.colorizeSliderMax(max);
        }
      this.setMaxNumber();
      showcase.fillShowcase();
    }

    setMinNumber() {
      (this.filterMinP as HTMLDivElement).innerHTML = (this.minFilter as number).toString();
    }

    setMaxNumber() {
      (this.filterMaxP as HTMLDivElement).innerHTML = (this.maxFilter as number).toString();
    }
  
  colorizeSliderMin(value: number): void {
    const min: number = +((this.minRange as HTMLInputElement).getAttribute('min') as string);
    const max: number = +((this.minRange as HTMLInputElement).getAttribute('max') as string);
    const precentValue: number = (max - min) / 100;
    const trackMin: number = (value - min) / precentValue;

    console.log(value, min, max, precentValue, trackMin);

    if (this.minRange) {
      (this.minRange as HTMLInputElement).style.setProperty ('--min-track',
      `-webkit-linear-gradient(left, rgba(225, 225, 225, 1) 0%, rgba(225, 225, 225, 1) ${trackMin}%, #5abbc0 ${trackMin}%, #5abbc0 100%)`);
      console.log(`-webkit-linear-gradient(left, rgba(225, 225, 225, 1) 0%, rgba(225, 225, 225, 1) ${trackMin}%, #5abbc0 ${trackMin}%, #5abbc0 100%)`);
    }
  }

  colorizeSliderMax(value: number): void {
    const min: number = +((this.minRange as HTMLInputElement).getAttribute('min') as string);
    const max: number = +((this.minRange as HTMLInputElement).getAttribute('max') as string);
    const precentValue: number = (max - min) / 100;
    const trackMax: number = (value - min) / precentValue;
    
    console.log(value, min, max, precentValue, trackMax);
    
    if (this.maxRange) {
      (this.maxRange as HTMLInputElement).style.setProperty ('--max-track',
      `-webkit-linear-gradient(left, rgba(225, 225, 225, 0) 0%, rgba(225, 225, 225, 0) ${trackMax}%, #ffffff ${trackMax}%, #ffffff 100%)`);
      console.log(`-webkit-linear-gradient(left, rgba(225, 225, 225, 0) 0%, rgba(225, 225, 225, 0) ${trackMax}%, #ffffff ${trackMax}%, #ffffff 100%)`);
    }
  }

}