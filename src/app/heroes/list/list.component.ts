import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[]=['spiderman','tanos', 'capitan america','iroman','she hulk']
  public deleteHero?:string;

  removeHero():void{
    this.deleteHero = this.heroNames.pop();

  }
}
