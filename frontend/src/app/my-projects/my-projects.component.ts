import { Component } from '@angular/core';
import { ProjetService } from '../services/All_projects/all-projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  projects: any;

  constructor(private projetService: ProjetService) { }

  ngOnInit() {
    this.projetService.getProjets().subscribe(projects => 
      this.projects = projects );
  }

  trackById(index: number, project: any): number {
    return project.id_projet;
  }
}
