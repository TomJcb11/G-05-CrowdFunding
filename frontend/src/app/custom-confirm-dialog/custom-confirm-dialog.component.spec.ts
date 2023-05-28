import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { CustomConfirmDialogComponent } from './custom-confirm-dialog.component';


// ...

describe('CustomConfirmDialogComponent', () => {
  let component: CustomConfirmDialogComponent;
  let fixture: ComponentFixture<CustomConfirmDialogComponent>;
  let dialogRefSpy: jasmine.SpyObj<MatDialogRef<CustomConfirmDialogComponent>>;

  beforeEach(async () => {
    dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ CustomConfirmDialogComponent ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display cancel and delete buttons', () => {
    const cancelBtn = fixture.debugElement.query(By.css('.dialog-button:nth-child(1)'));
    const deleteBtn = fixture.debugElement.query(By.css('.dialog-button:nth-child(2)'));

    expect(cancelBtn.nativeElement.textContent).toContain('Annuler');
    expect(deleteBtn.nativeElement.textContent).toContain('Supprimer');
  });

  it('should close the dialog with false when cancel button is clicked', () => {
    const cancelBtn = fixture.debugElement.query(By.css('.dialog-button:nth-child(1)'));
    cancelBtn.triggerEventHandler('click', {});

    expect(dialogRefSpy.close).toHaveBeenCalledWith(false);
  });

  it('should close the dialog with true when delete button is clicked', () => {
    const deleteBtn = fixture.debugElement.query(By.css('.dialog-button:nth-child(2)'));
    deleteBtn.triggerEventHandler('click', {});

    expect(dialogRefSpy.close).toHaveBeenCalledWith(true);
  });
});

