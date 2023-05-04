import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { project } from '../../../models/project_models';
import { GetService } from '../Services/get.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss'],
  
})
export class ProjetsComponent {
  projects: any;
  project_info:any=[]
  display_project=false
  display_projects=true
  

  constructor(private projetService: GetService) { }

  ngOnInit() {
    this.projetService.getProject().subscribe(projects => 
      this.projects = projects );
  }

  trackById(index: number, project: any): number {
    return project.id_projet;
  }
  showDetails(id:any){
    this.projetService.getOneProject(id).subscribe((project_info: any) => {
      this.project_info = project_info;
      this.display_project= true;
      this.display_projects= false;
    });
  }
}



