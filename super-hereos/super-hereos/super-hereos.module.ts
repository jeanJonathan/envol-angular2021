import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SuperHeroesListComponentComponent} from "../../src/app/super-heroes-list-component/super-heroes-list-component.component";
import {SuperHereosComponentComponent} from "../../src/app/super-hereos-component/super-hereos-component.component";
import { SuperHereosRoutingModule } from './super-hereos-routing.module';
//Importation de FormsModule pour pourvoir utiliser ngForm
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SuperHeroesListComponentComponent,
    SuperHereosComponentComponent,
  ],
  exports: [
    SuperHeroesListComponentComponent
  ],
  imports: [
    CommonModule,
    SuperHereosRoutingModule,
    FormsModule
  ]
})
export class SuperHereosModule { }
