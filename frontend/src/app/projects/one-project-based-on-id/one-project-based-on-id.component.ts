import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetService } from '../../services/All_projects/all-projects.service';

@Component({
  selector: 'app-one-project-based-on-id',
  templateUrl: './one-project-based-on-id.component.html',
  styleUrls: ['./one-project-based-on-id.component.scss']
})
export class OneProjectBasedOnIdComponent implements OnInit {
  filteredData: any;

  constructor(
    private route: ActivatedRoute,
    private getService: ProjetService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const projectName = params['projectName'];
      this.filterByProjectId(projectName);
      console.log("le nom du projet :",projectName)
    });
  }

  filterByProjectId(id: number) {
    console.log(id)
    this.getService.getOneProject(id).subscribe(data => {
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
