import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
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
import { DonationComponent } from './donation/donation.component';
import { PopupComponent } from './popup/popup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MyProjectBComponent } from './navbar/my-project-b/my-project-b.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CustomConfirmDialogComponent } from './custom-confirm-dialog/custom-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MyProjectPageComponent } from './my-project-page/my-project-page.component';
import { ModifyProjectComponent } from './modify-project/modify-project.component';
import { ModifyProjectPageComponent } from './modify-project-page/modify-project-page.component';


const appRoutes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'my-project', component: MyProjectPageComponent },
  { path: 'my-project/modify/:id', component: ModifyProjectPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MyProjectComponent,
    ProjetsComponent,
    AllTheProjectsComponent,
    OneProjectBasedOnIdComponent,
    OddProjetComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
    DonationComponent,
    PopupComponent,
    HomeComponent,
    MyProjectBComponent,
    DropdownComponent,
    MyProjectsComponent,
    CustomConfirmDialogComponent,
    MyProjectPageComponent,
    ModifyProjectComponent,
    ModifyProjectPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
