  import { Component,OnInit } from '@angular/core';
  import {HttpClient} from "@angular/common/http";
  import { delay } from 'rxjs'
  import {Router} from "@angular/router";

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
  constructor(private http:HttpClient,private router:Router ) {
  }
  /*Fonctino Callback de l'observateur*/
  ngOnInit(): void {
    // @ts-ignore
    // @ts-ignore
    //Ajout du delais de chargement  la requette http : .pipe(delay(1000)) apres la methode get afin de pourvoir voir le chargement et donc
    //voir le spinner avant l'execution de la requette http
    this.http.get<string[]>('assets/superheroes.json').pipe(delay(1000)).subscribe((superheroes: string[]) => {
        this.superheroes = superheroes;
        this.superheroesIsLoading = false;
        this.superheroesIsLoaded = true;
      });
  }
  superheroesIsLoading : boolean = false;
  superheroesIsLoaded : boolean = false;
  //On utilise cette variable pour parametrer l'affichage de la liste des super heros
  // si vrai alors on voir la liste, si faut alors on ne voir pas la liste
  showSuperHeroesList : boolean = false;
  superHeroesList(){
    this.showSuperHeroesList = true;
    /*ainsi superHeroesList() est appelée QUE lorsqu'on clique sur le bouton "Liste de Super-Héros"
    * Des lors la variable router utilisant le Servce Router permettra de naviguer ves la route
    * /super-hereos pour afficher la liste des super hereos*/

    this.router.navigate(['/super-heroes']);
  }
  /*On utilise le service Router pour naviguer vers la route /super-heroes lorsque cette methode est appele*/
  noSuperHeroesList(){
    this.showSuperHeroesList = false;
  }
  }
