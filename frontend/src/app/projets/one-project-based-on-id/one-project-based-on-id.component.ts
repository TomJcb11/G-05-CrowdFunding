import { Component } from '@angular/core';
import { GetService } from '../../Services/get.service';
import {oneProject} from "../../shared/models/oneProjects_models"


@Component({
  selector: 'app-one-project-based-on-id',
  templateUrl: './one-project-based-on-id.component.html',
  styleUrls: ['./one-project-based-on-id.component.scss']
})
export class OneProjectBasedOnIdComponent {
  filteredData: oneProject[] = [];

  constructor(private GetService: GetService) { }
  ngOnInit() {}

  filterByProjectName(name:string){
    this.GetService.getOneProject(name).subscribe(data=> {
      this.filteredData = data
      console.log(this.filteredData)
    })
  }
}

