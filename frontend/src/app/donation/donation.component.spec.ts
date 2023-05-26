import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonationComponent } from './donation.component';
import { DonationService } from '../Services/donation.service';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe('DonationComponent', () => {
  let component: DonationComponent;
  let fixture: ComponentFixture<DonationComponent>;
  let donationService: jasmine.SpyObj<DonationService>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const donationServiceSpy = jasmine.createSpyObj('DonationService', ['submitDonation', 'getStats']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);
    
    const dialogStub = {
      open: () => ({
        afterClosed: () => of(true)
      })
    };

    const activatedRouteStub = {
      params: of({id_projet: 1}),
      snapshot: {
        params: {id_projet: 1}
      }
    };

    await TestBed.configureTestingModule({
      declarations: [ DonationComponent ],
      imports: [ FormsModule, MatDialogModule],
      providers: [
        { provide: DonationService, useValue: donationServiceSpy },
        { provide: MatDialog, useValue: dialogStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationComponent);
    component = fixture.componentInstance;
    donationService = TestBed.inject(DonationService) as jasmine.SpyObj<DonationService>;
    router = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });
  
  beforeEach(() => {
    donationService.getStats.and.returnValue(of({count: 5, recolte_projet: 500}));
    fixture.detectChanges();

  });

  // UNIT TEST

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getStats on ngOnInit', () => {
    expect(donationService.getStats).toHaveBeenCalledWith(1);
    expect(component.count).toBe(5);
    expect(component.recolte_projet).toBe(500);
  });

  it('should call submitDonation on form submit and navigate to "/" when response.status is 200', () => {
    donationService.submitDonation.and.returnValue(of({status: 200}));
    component.montant_don = 100;
    component.message_don = 'Great work!';
    component.mode_paiement = 'Paypal';
    component.onSubmit();

    expect(donationService.submitDonation).toHaveBeenCalledWith(1, 3, {montant_don: 100, message_don: 'Great work!', mode_paiement: 'Paypal'});
    expect(component.montant_don).toBe(0);
    expect(component.message_don).toBe('');
    expect(component.mode_paiement).toBe('Bancontact');
  });

  it('should call submitDonation on form submit and reset the form when response.status is not 200', () => {
    donationService.submitDonation.and.returnValue(of({status: 400}));
    component.montant_don = 100;
    component.message_don = 'Great work!';
    component.mode_paiement = 'Paypal';
    component.onSubmit();
  
    expect(donationService.submitDonation).toHaveBeenCalledWith(1, 3, {montant_don: 100, message_don: 'Great work!', mode_paiement: 'Paypal'});
    expect(component.montant_don).toBe(0);
    expect(component.message_don).toBe('');
    expect(component.mode_paiement).toBe('Bancontact');
  });

  it('should call getStats to refresh the stats after form submit', () => {
    donationService.submitDonation.and.returnValue(of({status: 200}));
    donationService.getStats.and.returnValue(of({count: 10, recolte_projet: 1000}));
  
    component.montant_don = 100;
    component.message_don = 'Great work!';
    component.mode_paiement = 'Paypal';
    component.onSubmit();
  
    expect(donationService.submitDonation).toHaveBeenCalledWith(1, 3, {montant_don: 100, message_don: 'Great work!', mode_paiement: 'Paypal'});
    expect(donationService.getStats).toHaveBeenCalledTimes(2);
    expect(component.count).toBe(10);
    expect(component.recolte_projet).toBe(1000);
  });  
});

