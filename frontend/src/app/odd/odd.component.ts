import { Component, OnInit } from '@angular/core';
import { GetService } from '../Services/get.service';
import { Router } from '@angular/router';
import { Odd } from '../../../models/odd_model';


@Component({
  selector: 'app-odd',
  template: `
    <ul class="container">
      <button class="container" *ngFor="let item of myData" [routerLink]="['/' + item.nom_odd]">{{ item.nom_odd }}</button>

    </ul>

  `,
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {
  myData: any[] | any;
  
  constructor(private GetService: GetService, private router: Router) { }
  
  ngOnInit() {
    this.GetService.getData()
    .subscribe(data => this.myData = data);
  }
  redirectTo(routeName: string) {
    this.router.navigateByUrl('/' + routeName);
  }
}

