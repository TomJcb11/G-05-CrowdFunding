import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { SearchComponent } from './navbar/search/search.component';
import { MyProjectComponent } from './navbar/my-project/my-project.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { OddComponent } from './odd/odd.component';
import { ProjetsComponent } from './projets/projets.component';
import { OneProjectComponent } from './projets/one-project/one-project.component';



const routes: Routes = [
  { path: '', component: OddComponent },
  { path: ':oddName', component: MyProjectComponent },
  {path: ':Projet/:id', component: OneProjectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MyProjectComponent,
    DropdownComponent,
    OddComponent,
    ProjetsComponent,
    OneProjectComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
