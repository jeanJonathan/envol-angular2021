  import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue dans le TP Angular ENVOL 2021';
  superheroes : string[] = ["Hulk","Spider-Man","Thor","Iron Man"];
  newHero: string = 'Black Widow';
  newHeroAdded: boolean = false;

  addNewHero():void{ //pas obliger de preciser le type de retour void
      if (!this.superheroes.includes(this.newHero)){
        this.superheroes.push(this.newHero);
        this.newHeroAdded = true;
      }
  }
}
