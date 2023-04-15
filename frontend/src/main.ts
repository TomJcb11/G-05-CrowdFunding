import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

 function fonction() {
    fetch('http://localhost:8080/collection')
    .then(response => response.json())
    .then(data => {
    // Utilisez les données récupérées dans votre frontend
      console.log(data);})
    .catch(error => console.error(error))
  }

  fonction();