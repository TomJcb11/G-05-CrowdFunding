import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AllTheProjectsComponent } from './projets/all-the-projects/all-the-projects.component';
import { OneProjectBasedOnIdComponent } from './projets/one-project-based-on-id/one-project-based-on-id.component';
import { ProjetsComponent } from './projets/projets.component';
import { OddProjetComponent } from './projets/odd-projet/odd-projet.component';



const routes: Routes = [
    //{ path: 'createproject', component: CreateProjectComponent, canActivate: [AuthGuard]},
    //{ path: 'login', component: LoginComponent},
    {path: '',component:AllTheProjectsComponent},
    {path: 'project/:projectName' , component:OneProjectBasedOnIdComponent},
    {path: 'odd/:oddName' , component:OddProjetComponent}


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
