import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
    { path: 'createproject', component: CreateProjectComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
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
