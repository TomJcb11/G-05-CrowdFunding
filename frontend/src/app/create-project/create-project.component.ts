import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../services/All_projects/all-projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  project = {
    id_projet: null, 
    nom_projet: '',
    admin_projet: 1,
    description_projet: '',
    statut_projet: null, 
    objectif_projet: null,  
    recolte_projet: null,  
    odd_projet: null,
    benevole_projet: false,  
  };

  constructor(private projetService: ProjetService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.projetService.createProject(this.project).subscribe(
      response => {
        console.log(response);
        // Redirigez vers la page des projets après avoir créé le projet
      },
      error => {
        console.log(error);
      });
  }
}
