import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-super-heroes-list-component',
  //templateUrl: './super-heroes-list-component.component.html',
  styleUrls: ['./super-heroes-list-component.component.css'],
  template: `
    <div *ngIf="superheroesIsLoading">
        <span class="fas fa-circle-notch fa-spin fa-3x"></span>
        <span class="sr-only">Loading...</span>
    </div>
    <div *ngIf="superheroesIsLoaded">
    <ul>
        <!--Enutilisant la directive ngClass, on applique la classe css isImportant si i==Thor--->
        <li *ngFor="let i of superheroes " [ngClass]="{'isImportant': i === 'Thor'}">
            <p *ngIf="i === 'Hulk'">
            <span class="fas fa-check"></span>
            </p>
            {{i}}
        </li>
    </ul>
      <!---Ajout du template driven Forms -->
      <form (ngSubmit)="submit()" #newHeroForm="ngForm"> <!--#newHeroForm="ngForm pour faire reference a ngForm dans le formulaire-->
        <!--C'est plus interessant de mettre le label et le input dans un meme bloc ;)-->
        <div class="form-group">
          <label for="newHero">Nouveau super héro</label>
          <!---ngModele pour reliser le modele a la variable newHero dans le Component--->
          <input type="text" class="form-control" id="newHero" name="newHero" [(ngModel)]="newHero" required>
        </div>
        <!---On désactive le bouton "Ajouter un nouveau héro" lorsque le formulaire est invalide ou que le champ "Nouveau super héro" est vide--->
        <button type="submit" class="btn btn-primary" [disabled]="newHeroForm.invalid || newHero ===''">Ajouter un nouveau héro</button>
      </form>
    </div>`,
})
export class SuperHeroesListComponentComponent implements  OnInit {
  @Input() superheroes: string[];
  //Pour spécifier un paramètre de sortie sans valeur de retour, on utilise cette notation
  @Output() addNewHero: EventEmitter<{}> = new EventEmitter<{}>();
  //@Input() newHeroAdded: boolean = false;

  //Ajout de la variable newHero

  newHero: string ='';
  constructor() {
    this.superheroes = [];
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /*onClick() {
    this.addNewHero.emit();
    this.newHeroAdded = true;
  }
  */

  @Input() superheroesIsLoading = true;
  @Input() superheroesIsLoaded = false;

  addTheNewHero() {
    this.superheroes.push(this.newHero);
    this.newHero = '';

  }
  // Ajouter la fonction submit()
  submit() {
    // Si newHero n'est pas vide alors on ajoute un nouvel hereo
    if (this.newHero !== '') {
      this.addTheNewHero();
    }
  }
}
