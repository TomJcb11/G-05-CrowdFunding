import { Component, HostListener  } from '@angular/core';
import { ProjetService } from '../services/All_projects/all-projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  projects: any;
  adminId: number = 1; // Remplacez 1 par l'ID de l'admin que vous souhaitez filtrer

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const menuContainers = document.querySelectorAll('.menu-container.show');
    menuContainers.forEach(menu => {
      menu.classList.remove('show');
    });
  }

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
    event.stopPropagation(); // Empêche la propagation de l'événement au bouton parent
    const icon = event.target as HTMLElement;
    const menuIcon = icon.closest('.menu-icon');
    if (!menuIcon) return;
    const menu = menuIcon.querySelector('.menu-container');
    if (!menu) return;
    menu.classList.toggle('show');
  }

  /**onDeleteProject(id: number) {
    this.projetService.deleteProjet(id).subscribe(
      () => {
        // Suppression réussie, mettez à jour la liste des projets (par exemple, en rechargeant les données)
        this.ngOnInit();
      },
      error => {
        console.error('Error deleting project:', error);
      }
    );
  }*/
}
