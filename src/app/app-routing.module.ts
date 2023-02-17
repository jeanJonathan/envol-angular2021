import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import {SuperHereosComponentComponent} from "./super-hereos-component/super-hereos-component.component";
import {HomeComponentComponent} from "./home-component/home-component.component";
//Je dois faire tout en sorte pour que se module fonctionne depuis super-hereos et non ici
import {SuperHereosComponentComponent} from "./super-hereos-component/super-hereos-component.component";

/* La dernière route avec le chemin ** est une route wildcard qui redirige
 toute URL inconnue vers la route home.*/
const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path : '', redirectTo:'home',pathMatch: 'full'},
  { path: 'super-heroes', component: SuperHereosComponentComponent },
  { path : '**',redirectTo:'home',pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
