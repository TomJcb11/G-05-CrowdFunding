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

const appRoutes: Routes = [
  { path: '', component: NavbarComponent },
  { path: 'my-project', component: MyProjectPageComponent }
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
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
