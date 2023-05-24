import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  // Déclare les propriétés 'myData' et 'projects' sous forme de tableau vide.
  // Vous pouvez modifier le type 'any' en fonction de vos besoins.
  myData: any[] = [];
  projects: any[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialisez vos données ici.
    // Par exemple, vous pouvez appeler un service pour récupérer vos données.
  }

  // Déclare la méthode 'redirectToOddProjects'.
  // Vous devriez ajouter la logique de redirection ici.
  redirectToOddProjects(nom_odd: string): void {
    console.log(`Redirection vers le projet : ${nom_odd}`);
    // Logique de redirection ici...
  }

  // Déclare la méthode 'redirectToFilteredPage'.
  // Vous devriez ajouter la logique de redirection ici.
  redirectToFilteredPage(nom_projet: string): void {
    console.log(`Redirection vers le projet filtré : ${nom_projet}`);
    // Logique de redirection ici...
  }
}
