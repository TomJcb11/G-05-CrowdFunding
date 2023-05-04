import { Component } from '@angular/core';
import { ProjetService } from '../services/All_projects/all-projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  projects: any;
  adminId: number = 1; // Remplacez 1 par l'ID de l'admin que vous souhaitez filtrer

  constructor(private projetService: ProjetService) { }

  ngOnInit() {
    this.projetService.getProjets().subscribe(projects => {
      this.projects = projects.filter((project: any) => project.admin_projet === this.adminId);
    });
  }

  trackById(index: number, project: any): number {
    return project.id_projet;
  }
  toggleMenu(event: MouseEvent) {
    const icon = event.target as HTMLElement;
    const button = icon.closest('.project');
    if (!button) return;
    const menu = button.querySelector('.menu-container');
    if (!menu) return;
    menu.classList.toggle('show');
  }
  
}
