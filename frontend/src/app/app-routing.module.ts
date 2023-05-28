import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AllTheProjectsComponent } from './projets/all-the-projects/all-the-projects.component';
import { OneProjectBasedOnIdComponent } from './projets/one-project-based-on-id/one-project-based-on-id.component';
import { OddProjetComponent } from './projets/odd-projet/odd-projet.component';
import { MyProjectComponent } from './navbar/my-project/my-project.component';
import { ProfileComponent } from './navbar/dropdown/profile/profile.component';
import { SettingsComponent } from './navbar/dropdown/settings/settings.component';
import { LoginComponent } from './navbar/dropdown/login/login.component';
import { DonationComponent } from './donation/donation.component';




const routes: Routes = [
    //{ path: 'createproject', component: CreateProjectComponent, canActivate: [AuthGuard]},
    //{ path: 'login', component: LoginComponent},
    {path: '',component:AllTheProjectsComponent},
    {path: 'my-project', component: MyProjectComponent },
    {path: 'profile', component: ProfileComponent },
    {path: 'settings', component: SettingsComponent },
    {path: 'login', component: LoginComponent },
    {path: 'project/:nom_projet' , component:OneProjectBasedOnIdComponent},
    {path: 'odd/:oddName' , component:OddProjetComponent},
    {path: 'project/:nom_projet/donation' , component:DonationComponent},
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
