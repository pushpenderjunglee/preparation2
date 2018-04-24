  import { Component, OnInit } from '@angular/core';//always import Component contain metadata
import{Hero}from '../hero';
import {HEROES} from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',//component html view
  styleUrls: ['./heroes.component.css']//private css style
})
export class HeroesComponent implements OnInit {//always export to import from any where  inside heroes
  selectedHero:Hero;
  onSelected(hero:Hero):void{
  this.selectedHero=hero;
  };
  heroes=HEROES;
  constructor() { }

  ngOnInit() {
  }

}
