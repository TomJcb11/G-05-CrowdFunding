import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonationComponent } from './donation/donation.component';

const routes: Routes = [
  { path: ':id_projet/Donation', component: DonationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
