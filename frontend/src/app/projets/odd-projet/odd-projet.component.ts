import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GetService } from 'src/app/Services/get.service';
import { allProjects } from 'src/app/shared/models/allProjects_models';

@Component({
  selector: 'app-odd-project',
  templateUrl: './odd-projet.component.html',
  styleUrls: ['./odd-projet.component.scss']
})
export class OddProjetComponent implements OnInit {
  oddName!: string;
  projects: allProjects[] = [];

  constructor(private route: ActivatedRoute, private getService: GetService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.oddName = params.get('oddName') ?? '';

      // Appel à votre service pour récupérer la liste des projets basée sur l'ODD
      this.getService.getProjectFromOdd(this.oddName).subscribe(projects => {
        this.projects = projects;

      });
    });
  }
  redirectToFilteredPage(projectName: string) {
    // Redirection vers la page de projet filtrée en fonction du nom du projet
    const encodedProjectName = encodeURIComponent(projectName);
    this.router.navigateByUrl('/project/' + encodedProjectName);
  }
}
