import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-hud',
  templateUrl: './project-hud.component.html',
  styleUrls: ['./project-hud.component.scss']
})
export class ProjectHudComponent {
  project: any;





constructor(private http: HttpClient) {}

ngOnInit() {
  const projectId = '1'; // ID du projet que vous voulez afficher

  this.http.get(`https://votre-api.com/projets/${projectId}`).subscribe((data) => {
    this.project = data;
  });
}
}
