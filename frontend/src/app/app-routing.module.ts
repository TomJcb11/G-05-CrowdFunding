import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CreateProjectComponent } from './create-project/create-project.component';

const routes: Routes = [
  { path: '', component: Component },
  { path: 'createproject', component: CreateProjectComponent }
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
};
