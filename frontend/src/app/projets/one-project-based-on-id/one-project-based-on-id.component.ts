import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from 'src/app/Services/get.service';

@Component({
  selector: 'app-one-project-based-on-id',
  templateUrl: './one-project-based-on-id.component.html',
  styleUrls: ['./one-project-based-on-id.component.scss']
})

export class OneProjectBasedOnIdComponent implements OnInit {
  filteredData: any;

  constructor(
    private route: ActivatedRoute,
    private getService: GetService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nom_projet = params['nom_projet'];
      this.filterByProjectName(nom_projet);
      console.log("le nom du projet :", nom_projet)
    });
  }

  filterByProjectName(name: string) {
    console.log(name)
    this.getService.getOneProject(name).subscribe(data => {
      this.filteredData = data;
      console.log(this.filteredData)
    });
  }

  getStatusClass(statut: string): string {
    if (statut === 'Terminé') {
      return 'completed';
    } else if (statut === 'Suspendu') {
      return 'suspended';
    } else if (statut === 'En cours') {
      return 'in-progress';
    } else {
      return '';
    }
  }
}

