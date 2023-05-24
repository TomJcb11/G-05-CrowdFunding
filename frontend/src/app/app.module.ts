import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { SearchComponent } from './navbar/search/search.component';
import { MyProjectComponent } from './navbar/my-project/my-project.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { ProjectHudComponent } from './project-hud/project-hud.component';
import { DonationComponent } from './donation/donation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { PopupComponent } from './popup/popup.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MyProjectComponent,
    DropdownComponent,
    ProjectHudComponent,
    DonationComponent,
    PopupComponent,
    
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MatDialogModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
