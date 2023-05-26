import { Component, OnInit } from '@angular/core';
import { DonationService } from '../Services/donation.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.scss']
})

export class DonationComponent implements OnInit {
  id_projet: number = 0;
  count: number = 0;
  recolte_projet: number = 0;
  montant_don: number = 0;
  message_don: string = '';
  mode_paiement: string = 'Bancontact';


  constructor(private donationService: DonationService, private dialog: MatDialog, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id_projet = +params['id_projet']; // Le signe "+" convertit la chaîne en nombre
      this.loadDonationStats(id_projet);
    });
  }
  
  onSubmit() {
    const id_projet = +this.route.snapshot.params['id_projet'];
    const id_ut = 3;
    const data = {
      montant_don: this.montant_don,
      message_don: this.message_don,
      mode_paiement: this.mode_paiement
    };
  
    this.donationService.submitDonation(id_projet, id_ut, data).subscribe(
      response => {
        console.log(response);
        if (response.status === 200) {
          let dialogRef = this.dialog.open(PopupComponent);
          dialogRef.afterClosed().subscribe(result => {
            if(result) {
              this.router.navigate(['/']);
            }
          });
        } else {
          this.router.navigate(['/:id_projet/Donation']);
        }
        // réinitialiser les champs du formulaire
        this.montant_don = 0;
        this.message_don = '';
        this.mode_paiement = 'Bancontact';
  
        // rafraîchir les statistiques de dons
        this.loadDonationStats(id_projet);
      },
      error => console.error(error)
    );
  }
  
  loadDonationStats(id_projet: number) {
    this.donationService.getStats(id_projet).subscribe(
      data => {
        this.count = data.count;
        this.recolte_projet = data.recolte_projet;
      },
      error => console.error(error)
    );
  }
}

