import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../Services/All_projects/all-projects.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.scss'],
})
export class ModifyProjectComponent implements OnInit {
  project: any = {};

  constructor(private route: ActivatedRoute, private projectService: ProjetService, private router: Router, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectName = params?.get('nom_projet');
      if (projectName) {
        this.projectService.getOneProject(projectName).subscribe((data: any) => {
          this.project = data[0];
          console.log(this.project)
        });
      }
    });
  }
  
  onSubmit(): void {
    const data = {
      nom_projet : this.project.nom_projet,
      description_projet: this.project.description_projet,
      statut_projet: this.project.statut_projet,
      objectif_projet: this.project.objectif_projet,
      odd_projet: this.project.id_odd,
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

    this.projectService.updateProject(data)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/my-project']);
        this.changeDetectorRef.detectChanges();
      }, error => {
        console.error(error);
      });
  }
}
