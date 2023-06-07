import { Component, OnInit } from '@angular/core';
import { DonationService } from '../Services/donation.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie'; 

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})

export class DonationComponent implements OnInit {
  nom_projet: string = '';
  count: number = 0;
  recolte_projet: number = 0;
  montant_don: number = 0;
  message_don: string = '';
  mode_paiement: string = 'Bancontact';

  constructor(private donationService: DonationService, private cookieService: CookieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nom_projet = params['nom_projet']; 
      this.loadDonationStats(nom_projet);
    });
  }

  onWatchVideo() {
    const confirmResult = confirm("Êtes-vous sûr de vouloir regarder une vidéo pour faire un don de 0,10 € ?");
    if (confirmResult) {
      const nom_projet = this.route.snapshot.params['nom_projet'];
      const id_ut = Number(this.cookieService.get('id'));

      const data = {
        montant_don: 0.10, 
        message_don: 'Don réalisé en regardant une vidéo',
        mode_paiement: this.mode_paiement
      };

      this.donationService.submitDonation(nom_projet, id_ut, data).subscribe(
        response => {
          console.log(response);
          if (response.status === 200) {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
          } else {
            this.router.navigate(['/:nom_projet/Donation']);
          }
          this.loadDonationStats(nom_projet);
        },
        error => console.error(error)
      );
    }
  }
  
  onSubmit() {
    const nom_projet = this.route.snapshot.params['nom_projet'];
    const id_ut = Number(this.cookieService.get('id'));

    // Vérifie si le montant du don est supérieur à 0
    if (this.montant_don <= 0) {
      alert('Le montant du don doit être supérieur à 0.');
      return;  // quitte la fonction onSubmit si la condition n'est pas satisfaite
    }

    // Vérifie s'il y a au plus deux chiffres après la virgule
    if (!(/^\d+(\.\d{1,2})?$/.test(this.montant_don.toString()))) {
      alert('Le montant du don ne peut avoir que deux décimales.');
      return;  // quitte la fonction onSubmit si la condition n'est pas satisfaite
    }

    const data = {
      montant_don: this.montant_don,
      message_don: this.message_don,
      mode_paiement: this.mode_paiement
    };
  
    this.donationService.submitDonation(nom_projet, id_ut, data).subscribe(
      response => {
        console.log(response);
        if (response.status === 200) {
          alert("Donation successful"); // utiliser window.alert()
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/:nom_projet/Donation']);
        }
        // réinitialiser les champs du formulaire
        this.montant_don = 0;
        this.message_don = '';
        this.mode_paiement = 'Bancontact';
  
        // rafraîchir les statistiques de dons
        this.loadDonationStats(nom_projet);
      },
      error => console.error(error)
    );
  }
  
  loadDonationStats(nom_projet: string) {
    this.donationService.getStats(nom_projet).subscribe(
      data => {
        this.count = data.count;
        this.recolte_projet = data.recolte_projet;
      },
      error => console.error(error)
    );
  }
}
