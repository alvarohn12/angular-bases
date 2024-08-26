import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>counter :{{counter}}</p>
    <button (click)="incrementar(+1)">+1</button>
    <button (click)="resetcoum()">eliminar</button>
    <button (click)="incrementar(-1)">-1</button>`
})

export class CounterComponent  {
  public counter: number = 10

  incrementar(value: number):void {
    this.counter += value;
  }
  resetcoum() {
    this.counter = 10
  }

}
