import { Component, OnInit } from '@angular/core';
import { DonationService } from '../Services/donation.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

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

  constructor(private donationService: DonationService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const nom_projet = params['nom_projet']; 
      this.loadDonationStats(nom_projet);
    });
  }
  
  onSubmit() {
    const nom_projet = this.route.snapshot.params['nom_projet'];
    const id_ut = 3;
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
