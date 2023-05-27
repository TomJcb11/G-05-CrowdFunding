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
import { CreateProjectComponent } from './create-project/create-project.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CookieModule } from 'ngx-cookie';

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
    CreateProjectComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    CookieModule.withOptions({
          sameSite: 'lax'
      })
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
