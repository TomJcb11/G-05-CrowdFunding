import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
import { SearchComponent } from './navbar/search/search.component';
import { MyProjectBComponent } from './navbar/my-project-b/my-project-b.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { CustomConfirmDialogComponent } from './custom-confirm-dialog/custom-confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyProjectPageComponent } from './my-project-page/my-project-page.component';
import { ModifyProjectComponent } from './modify-project/modify-project.component';
import { FormsModule } from '@angular/forms';
import { ModifyProjectPageComponent } from './modify-project-page/modify-project-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjetsComponent } from './projets/projets.component';
import { AllTheProjectsComponent } from './projets/all-the-projects/all-the-projects.component';
import { OneProjectBasedOnIdComponent } from './projets/one-project-based-on-id/one-project-based-on-id.component';
import { OddProjetComponent } from './projets/odd-projet/odd-projet.component';
import { ProfileComponent } from './navbar/dropdown/profile/profile.component';
import { SettingsComponent } from './navbar/dropdown/settings/settings.component';
import { LoginComponent } from './navbar/dropdown/login/login.component';


const appRoutes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'my-project', component: MyProjectPageComponent },
  { path: 'my-project/modify/:id', component: ModifyProjectPageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    MyProjectBComponent,
    DropdownComponent,
    MyProjectsComponent,
    CustomConfirmDialogComponent,
    MyProjectPageComponent,
    ModifyProjectComponent,
    ModifyProjectPageComponent,
    DropdownComponent,
    ProjetsComponent,
    AllTheProjectsComponent,
    OneProjectBasedOnIdComponent,
    OddProjetComponent,
    ProfileComponent,
    SettingsComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
