  import { Component } from '@angular/core';
  import {HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue dans le TP Angular ENVOL 2021';
  superheroes : string[] = ["Hulk","Spider-Man","Thor","Iron Man"];
  newHero: string = 'Black Widow';
  newHeroAdded: boolean = false; // la proprite de siable du bouton reste true alors

  addNewHero():void{ //pas obliger de preciser le type de retour void
      if (this.superheroes.includes(this.newHero)){
          this.newHeroAdded = false; // le bouton reste activer (la propriete de disable reste false) car la propriete est desactiver
      }
    this.superheroes.push(this.newHero);
    this.newHeroAdded = true; // le bouton se desactive (la propriete de disable devient true) car la propriete activee
  }
  constructor(private httpClientModule:HttpClientModule) {
  }
}
