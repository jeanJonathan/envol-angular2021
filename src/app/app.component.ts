  import { Component,OnInit } from '@angular/core';
  import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Bienvenue dans le TP Angular ENVOL 2021';
  superheroes : string[] = [];
  newHero: string = 'Black Widow';
  newHeroAdded: boolean = false; // la proprite de disabled du bouton reste true alors

  addNewHero():void{ //pas obliger de preciser le type de retour void
      if (!this.superheroes.includes(this.newHero)){
          this.superheroes.push(this.newHero);
      }
}
  constructor(private http:HttpClient) {
  }

  ngOnInit(): void {
    this.http.get<string[]>('assets/superheroes.json')
      .subscribe((superheroes: string[]) => {
        this.superheroes = superheroes;
      });
  }

}
