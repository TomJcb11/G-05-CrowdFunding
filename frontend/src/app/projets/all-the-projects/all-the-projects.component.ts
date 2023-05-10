import { Component, OnInit } from '@angular/core';
import { allProjects } from 'src/app/shared/models/allProjects_models';
import { GetService } from 'src/app/Services/get.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-the-projects',
  templateUrl: './all-the-projects.component.html',
  styleUrls: ['./all-the-projects.component.scss']
})
export class AllTheProjectsComponent implements OnInit {

  projects: allProjects[] = [];
  myData: any[] | any;
  filteredData: any[] = [];
  oddfiltered: allProjects[] = [];

  constructor(private getService: GetService, private router: Router) { }

  ngOnInit() {
    // On récupère tous les odd pour lesquels un projet existe
    this.getService.getData().subscribe(data => this.myData = data);
    // On récupère tous les projets existants
    this.getService.getProject().subscribe(data => this.projects = data);
  }

  print(name: any) {
    console.log(name);
    console.log(this);
  }

  filterbyodd(name: any) {
    this.getService.getProjectFromOdd(name).subscribe(data => {
      this.oddfiltered = data;
      console.log(this.oddfiltered);
    });
  }

  filterByProjectName(name: string) {
    this.getService.getOneProject(name).subscribe(data => {
      this.filteredData = data;
      console.log(this.filteredData);
    });
  }

  redirectToFilteredPage(name: string) {
    // Utiliser le nom du bouton comme nom du projet
    const projectName = name;

    // Appeler la méthode de filtrage
    this.filterByProjectName(projectName);

    // Rediriger vers la page souhaitée avec l'URL spécifique
    const encodedProjectName = encodeURIComponent(projectName);
    this.router.navigateByUrl('/project/' + encodedProjectName);
  }
}
