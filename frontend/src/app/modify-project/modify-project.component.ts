import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../services/All_projects/all-projects.service';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.scss'],
})
export class ModifyProjectComponent implements OnInit {
  project: any;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectId = +(params?.get('id') ?? 0);
      if (projectId) {
        this.projectService.getOneProject(projectId).subscribe((data: any) => {
          this.project = data[0];
        });
      }
    });
  }

  onSubmit() {
    this.projectService.updateProject(this.project.id_projet, this.project).subscribe(
      (response) => {
        console.log('Response:', response);
        setTimeout(() => {
          this.router.navigate(['/my-projects']);
        }, 1000);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
    this.router.navigate(['/my-projects']);
  }
}
