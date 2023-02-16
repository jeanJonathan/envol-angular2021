import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { SuperHeroesListComponentComponent } from './super-heroes-list-component/super-heroes-list-component.component';

//Importation du service HttpClientModule
import {HttpClientModule} from "@angular/common/http";
import { HomeComponentComponent } from './home-component/home-component.component';
//import { SuperHereosComponentComponent } from './super-hereos-component/super-hereos-component.component';

//Importation du module externe
import {SuperHereosModule} from "../../super-hereos/super-hereos/super-hereos.module";

@NgModule({
  declarations: [
    AppComponent,
    //SuperHeroesListComponentComponent,
    HomeComponentComponent,
    //SuperHereosComponentComponent
  ],
  imports: [
    BrowserModule,
    //Rmq : Par defaut on a importer AppRoutingModule dans AppRouting, on fera de meme lorsqu'on creer un nouveau module
    AppRoutingModule,
    HttpClientModule,
    //Declaration du Module externe SuperHeroesModule
    SuperHereosModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
