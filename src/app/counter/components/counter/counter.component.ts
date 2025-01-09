import { Component, OnInit } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-counter',
  template: `

  <h3>Counter: {{ counter }}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="decreaseBy(1)">-1</button>
<button (click)="resetCounter(10)">reset</button>



  `
})

export class CounterComponent {
  public counter: number = 1;

  increaseBy( value:number ):void {
    this.counter+=value }
  decreaseBy( value:number):void {
    if (this.counter >0) {
      this.counter-=value;
    }

  }
  resetCounter(value:number){
    this.counter = value;
  }


}
