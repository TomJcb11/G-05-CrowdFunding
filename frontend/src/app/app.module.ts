import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { MyProjectComponent } from './navbar/my-project/my-project.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { ProjetsComponent } from './projets/projets.component';
import { AllTheProjectsComponent } from './projets/all-the-projects/all-the-projects.component';
import { OneProjectBasedOnIdComponent } from './projets/one-project-based-on-id/one-project-based-on-id.component';
import { OddProjetComponent } from './projets/odd-projet/odd-projet.component';
import { ProfileComponent } from './navbar/dropdown/profile/profile.component';
import { SettingsComponent } from './navbar/dropdown/settings/settings.component';
import { LoginComponent } from './navbar/dropdown/login/login.component';
import { DonationsComponent } from './projets/donations/donations.component';
import { DonationComponent } from './donation/donation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupComponent } from './popup/popup.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyProjectComponent,
    DropdownComponent,
    ProjetsComponent,
    AllTheProjectsComponent,
    OneProjectBasedOnIdComponent,
    OddProjetComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    DonationsComponent,
    DonationComponent,
    PopupComponent



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
