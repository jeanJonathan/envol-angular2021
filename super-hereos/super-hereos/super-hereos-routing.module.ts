import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponentComponent} from "../../src/app/home-component/home-component.component";

import {SuperHereosComponentComponent} from "../../src/app/super-hereos-component/super-hereos-component.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponentComponent },
  //{ path: '', loadChildren: () => import('super-heroes.module').then(m => m.SuperHeroesModule),
 { path: 'super-heroes', component: SuperHereosComponentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SuperHereosRoutingModule { }
