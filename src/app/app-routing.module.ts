import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SuperHeroesComponentComponent} from "./super-heroes-component/super-heroes-component.component";
import {SuperHeroesListComponentComponent} from "./super-heroes-list-component/super-heroes-list-component.component";
import {HomeComponentComponent} from "./home-component/home-component.component";

/* La dernière route avec le chemin ** est une route wildcard qui redirige
 toute URL inconnue vers la route home.*/
const routes: Routes = [
  { path : '', redirectTo:'home',pathMatch: 'full'},
  { path : 'home',component:HomeComponentComponent},
  { path : 'super-heroes',component:SuperHeroesComponentComponent},
  { path : '**',redirectTo:'home',pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
