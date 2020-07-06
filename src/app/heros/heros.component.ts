import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  heroes :Hero[];
  
  constructor(private heroService:HeroService, private messagesService:MessagesService) {}
  
  onSelect(hero: Hero): void{
    this.messagesService.add('HeorsComponent: selected hero id='+hero.id);
  }

  getHeroes():void {
    this.heroService.getHeroes().subscribe(heroes=> this.heroes = heroes);
  }

  add(name:string): void{
    name= name.trim();
    if(!name) {return;}
    this.heroService.addHero({name} as Hero).subscribe(
      hero=>{
        if(!hero) return;
        this.heroes.push(hero);
        }
      );
  }

  delete(hero: Hero):void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
