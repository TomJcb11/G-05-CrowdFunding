import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { SearchComponent } from './navbar/search/search.component';
import { MyProjectComponent } from './navbar/my-project/my-project.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { ProjectHudComponent } from './project-hud/project-hud.component';
import { OddComponent } from './odd/odd.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MyProjectComponent,
    DropdownComponent,
    ProjectHudComponent,
    OddComponent,
    OddProjetComponent,
    
  ],
  imports: [
    BrowserModule,HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
