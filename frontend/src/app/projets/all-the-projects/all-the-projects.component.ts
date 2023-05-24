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

  filterbyodd(name: any) {
    this.getService.getProjectFromOdd(name).subscribe(data => {
      this.oddfiltered = data;
      console.log(this.oddfiltered);
    });
  }

  redirectToOddProjects(odd: string) {
    this.router.navigate(['/odd', odd]);
  }

  redirectToFilteredPage(projectName: string) {
    // Redirection vers la page de projet filtrée en fonction du nom du projet
    const encodedProjectName = encodeURIComponent(projectName);
    this.router.navigateByUrl('/project/' + encodedProjectName);
  }
}
