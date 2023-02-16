import {Component, EventEmitter, Input, Output} from '@angular/core';

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
    <p>Ceci est mon premier Component</p>
    <ul>
        <!--Enutilisant la directive ngClass, on applique la classe css isImportant si i==Thor--->
        <li *ngFor="let i of superheroes " [ngClass]="{'isImportant': i === 'Thor'}">
            <p *ngIf="i === 'Hulk'">
            <span class="fas fa-check"></span>
            </p>
            {{i}}
        </li>
    </ul>
    <!---Lorqu'on click sur le bouton. L'appel de la methode onClick pour declenche l'evement de sortie de l'enfant -->
        <button type="button" [disabled]="newHeroAdded" (click)="onClick()">addNewHero</button>
    <!--Si disabled === true alors bouton desactiver sinon bouton activer--->
    </div>`,
})
export class SuperHeroesListComponentComponent {
  @Input() superheroes : string[];
  //Pour spécifier un paramètre de sortie sans valeur de retour, on utilise cette notation
  @Output() addNewHero : EventEmitter<{}> = new EventEmitter<{}>();
  @Input() newHeroAdded : boolean = false;
  constructor() {
    this.superheroes =[];
  }
  onClick(){
    this.addNewHero.emit();
    this.newHeroAdded = true;
  }
  @Input() superheroesIsLoading = true;
  @Input() superheroesIsLoaded = false;
}
