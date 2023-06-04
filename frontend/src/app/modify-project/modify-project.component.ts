import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../services/All_projects/all-projects.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.component.html',
  styleUrls: ['./modify-project.component.scss'],
})
export class ModifyProjectComponent implements OnInit {
  project: any = {};

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjetService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const projectName = params?.get('nom_projet');
      if (projectName) {
        this.projectService.getOneProject(projectName).subscribe((data: any) => {
          this.project = data;
        });
      }
    });
  }

  onSubmit(): void {
    this.projectService.updateProject(this.project.nom_projet, this.project)
      .subscribe(response => {
        console.log(response);
        // Here you may want to redirect the user to another page or show a success message
        this.router.navigate(['/my-projects']);
        this.changeDetectorRef.detectChanges();
      }, error => {
        console.error(error);
        // Here you may want to show an error message
      });
  }
}
