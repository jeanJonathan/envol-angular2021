import { Component } from '@angular/core';

@Component({
  selector: 'app-home-component',
  //templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
  template: `
    <div class="jumbotron">
      <p class="lead">Vous etes dans home.</p>
      <hr class="my-4">
      <p>Cliquez sur le bouton Super Heroes dans la barre de navigation pour voir une liste des heros</p>
    </div>
  `,
})
export class HomeComponentComponent {

}
