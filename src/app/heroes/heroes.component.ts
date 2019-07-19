import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
  // selectedHero: Hero; 
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  // };
  heroes: Hero[];
  constructor(private heroService: HeroService) { }
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
