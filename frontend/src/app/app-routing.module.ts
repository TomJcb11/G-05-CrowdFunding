import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AllTheProjectsComponent } from './projets/all-the-projects/all-the-projects.component';
import { OneProjectBasedOnIdComponent } from './projets/one-project-based-on-id/one-project-based-on-id.component';
import { OddProjetComponent } from './projets/odd-projet/odd-projet.component';
import { MyProjectPageComponent } from './my-project-page/my-project-page.component';
import { ProfileComponent } from './navbar/dropdown/profile/profile.component';
import { SettingsComponent } from './navbar/dropdown/settings/settings.component';
import { LoginComponent } from './navbar/dropdown/login/login.component';
import { DonationComponent } from './donation/donation.component';
import { ModifyProjectPageComponent } from './modify-project-page/modify-project-page.component';
import { CreateProjectComponent } from './create-project/create-project.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    //{ path: 'createproject', component: CreateProjectComponent, canActivate: [AuthGuard]},
    //{ path: 'login', component: LoginComponent},
    {path: '',component:AllTheProjectsComponent, canActivate: [AuthGuard]},
    {path: 'my-project/modify/:nom_projet', component: ModifyProjectPageComponent, canActivate: [AuthGuard]},
    {path: 'my-project', component: MyProjectPageComponent, canActivate: [AuthGuard] },
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    {path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
    {path: 'login', component: LoginComponent},
    {path: 'projects/:nom_projet' , component:OneProjectBasedOnIdComponent, canActivate: [AuthGuard]},
    {path: 'odd/:oddName' , component:OddProjetComponent, canActivate: [AuthGuard]},
    {path: 'project/:nom_projet/donation' , component:DonationComponent, canActivate: [AuthGuard]},
    {path: 'createproject' , component:CreateProjectComponent, canActivate: [AuthGuard]}
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

export class AppRoutingModule { }
