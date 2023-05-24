import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AllTheProjectsComponent } from './projects/all-the-projects/all-the-projects.component';
import { OneProjectBasedOnIdComponent } from './projects/one-project-based-on-id/one-project-based-on-id.component';
import { OddProjectComponent } from './projects/odd-project/odd-project.component';
import { MyProjectBComponent } from './navbar/my-project-b/my-project-b.component';
import { DropdownComponent } from './navbar/dropdown/dropdown.component';
import { ProfileComponent } from './navbar/dropdown/profile/profile.component';
import { SettingsComponent } from './navbar/dropdown/settings/settings.component';
import { LoginComponent } from './navbar/dropdown/login/login.component';
import { ModifyProjectPageComponent } from './modify-project-page/modify-project-page.component';
import { MyProjectPageComponent } from './my-project-page/my-project-page.component';



const routes: Routes = [
    //{ path: 'createproject', component: CreateProjectComponent, canActivate: [AuthGuard]},
    //{ path: 'login', component: LoginComponent},
    {path: '',component:AllTheProjectsComponent},
    {path: 'my-project', component: MyProjectPageComponent },
    {path: 'my-project/modify/:id', component: ModifyProjectPageComponent},
    {path: 'profile', component: ProfileComponent },
    {path: 'settings', component: SettingsComponent },
    {path: 'login', component: LoginComponent },
    {path: 'project/:projectName' , component:OneProjectBasedOnIdComponent},
    {path: 'odd/:oddName' , component:OddProjectComponent}


];


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
        RouterOutlet
    ],
    exports: [RouterModule, RouterOutlet]
})

export class AppRoutingModule {
}