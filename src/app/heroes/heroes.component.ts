import { Component } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { Hero } from '../hero';
import { HEROES, PERSONS } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})

export class HeroesComponent {
  heroes = HEROES;
  persons = PERSONS;
  selectedHero?: Hero;

  selectedPerson?: any

  onSelect(hero: any): void {
   this.selectedHero = hero;
  }  

  selectPerson(data: any){
    this.selectedPerson = data;
  }

}
