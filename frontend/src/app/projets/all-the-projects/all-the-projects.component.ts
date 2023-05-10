import { Component, OnInit } from '@angular/core';
import { allProjects } from 'src/app/shared/models/allProjects_models';
import { GetService } from 'src/app/Services/get.service';

@Component({
  selector: 'app-all-the-projects',
  templateUrl: './all-the-projects.component.html',
  styleUrls: ['./all-the-projects.component.scss']
})
export class AllTheProjectsComponent implements OnInit{

  projects: allProjects[]= []
  myData: any[] | any;
  filteredData: any[] = [];
  oddfiltered:allProjects[]= []


  constructor(private getService: GetService) { }

  ngOnInit() {
    //on récupère tous les odd pour lesquels un projet existe
    this.getService.getData().subscribe(data => this.myData = data);
    //on récupère tous les projets existants
    this.getService.getProject().subscribe(data =>this.projects = data );
  }
  print(name:any){//affiche le nom de l'odd cliquée
    console.log(name)
    console.log(this)
   }

  filterbyodd(name:any){
    this.getService.getProjectFromOdd(name).subscribe(data=>{
      this.oddfiltered=data
      console.log(this.oddfiltered)
    })
  }

  filterByProjectName(name:string){
    this.getService.getOneProject(name).subscribe(data=> {
      this.filteredData = data
      console.log(this.filteredData)
    })
  }
}

