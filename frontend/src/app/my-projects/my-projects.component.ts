import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomConfirmDialogComponent } from '../custom-confirm-dialog/custom-confirm-dialog.component';
import { ProjetService } from '../Services/All_projects/all-projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent implements OnInit {
  projects: any;
  adminId: number = 1; // Remplacez 1 par l'ID de l'admin que vous souhaitez filtrer

  constructor(private dialog: MatDialog, private projetService: ProjetService,private router: Router) { }

  ngOnInit() {
    this.projetService.getProjets().subscribe(projects => {
      this.projects = projects.filter((project: any) => project.admin_projet === this.adminId);
    });
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const menuContainers = document.querySelectorAll('.menu-container.show');
    menuContainers.forEach(menu => {
      menu.classList.remove('show');
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

  onEditProject(projectId: number) {
    this.router.navigate(['/my-projects/modify', projectId]);
  }
  onDeleteProject(index: number) {
    const dialogRef = this.dialog.open(CustomConfirmDialogComponent);
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const projectId = this.projects[index].id_projet;
        this.projetService.deleteProjet(projectId).subscribe(() => {
          this.projects.splice(index, 1);
        });
      }
    });
  }
}