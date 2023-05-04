import { Component, OnInit } from '@angular/core';
import { GetService } from '../Services/get.service';
import { NavigationExtras, Router } from '@angular/router';
import { Odd } from '../../../models/odd_model';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-odd',
  templateUrl:'./odd.component.html',
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
    const oddProject = this.GetService.getProjectFromOdd(routeName);
    const navigationExtras: NavigationExtras = {
      state: { odd: routeName }
    };
    
}
  }
  
  


