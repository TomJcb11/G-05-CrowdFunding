import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './navbar/home/home.component';
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
import { LoginComponent } from './navbar/dropdown/login/login.component';
import { ProfileComponent } from './navbar/dropdown/profile/profile.component';
import { SettingsComponent } from './navbar/dropdown/settings/settings.component';
import { AllTheProjectsComponent } from './projects/all-the-projects/all-the-projects.component';
import { OddProjectComponent } from './projects/odd-project/odd-project.component';
import { OneProjectBasedOnIdComponent } from './projects/one-project-based-on-id/one-project-based-on-id.component';
import { ProjectsComponent } from './projects/projects.component';
import { DonationsComponent } from './projects/donations/donations.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MyProjectBComponent,
    DropdownComponent,
    MyProjectsComponent,
    CustomConfirmDialogComponent,
    MyProjectPageComponent,
    ModifyProjectComponent,
    ModifyProjectPageComponent,
    LoginComponent,
    ProfileComponent,
    SettingsComponent,
    AllTheProjectsComponent,
    OddProjectComponent,
    OneProjectBasedOnIdComponent,
    ProjectsComponent,
    DonationsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
