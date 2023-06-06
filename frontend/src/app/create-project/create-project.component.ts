import { Component, OnInit } from '@angular/core';
import { ProjetService } from '../Services/All_projects/all-projects.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {
  
  id_projet = null;
  nom_projet = '';
  admin_projet = 1;
  description_projet = '';
  statut_projet = null;
  objectif_projet = 0;
  recolte_projet = 0;  
  odd_projet = null;
  benevole_projet = false; 
  

  constructor(private projetService: ProjetService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {

    const data = {
      nom_projet : this.nom_projet,
      description_projet: this.description_projet,
      statut_projet: this.statut_projet,
      objectif_projet: this.objectif_projet,
      recolte_projet: this.recolte_projet,
      odd_projet: this.odd_projet,
      benevole_projet: this.benevole_projet
    };

    if (data.objectif_projet <= 0) {
      alert('Le montant du don doit être supérieur à 0.');
      return;  // quitte la fonction onSubmit si la condition n'est pas satisfaite
    }

    // Vérifie s'il y a au plus deux chiffres après la virgule
    if (!(/^\d+(\.\d{1,2})?$/.test(data.objectif_projet.toString()))) {
      alert('Le montant du don ne peut avoir que deux décimales.');
      return;  // quitte la fonction onSubmit si la condition n'est pas satisfaite
    }

    this.projetService.createProject(data).subscribe(
      response => {
        console.log(response);
        alert("Creation successful"); // utiliser window.alert()
          this.router.navigate(['/']);
      },
      error => {
        console.log(error);
      });
  }
}
