import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalize():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name='spiderman';
  }
  changeAge():void{
    this.age=30;
  }
  resetForm():void{
    this.name='iroman';
    this.age=45;
  }
}
