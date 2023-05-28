import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';

import { MyProjectsComponent } from './my-projects.component';
import { ProjetService } from '../services/All_projects/all-projects.service';
import { RouterTestingModule } from '@angular/router/testing';


describe('MyProjectsComponent', () => {
  let component: MyProjectsComponent;
  let fixture: ComponentFixture<MyProjectsComponent>;
  let mockProjetService: any;
  let mockDialog: any;

  beforeEach(async () => {
    mockProjetService = jasmine.createSpyObj('ProjetService', ['getProjets', 'deleteProjet']);
mockDialog = jasmine.createSpyObj('MatDialog', ['open']);

    await TestBed.configureTestingModule({
      imports: [ MatDialogModule,RouterTestingModule ],
      declarations: [ MyProjectsComponent ],
      providers: [
        { provide: ProjetService, useValue: mockProjetService },
        { provide: MatDialog, useValue: mockDialog },
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProjectsComponent);
    component = fixture.componentInstance;
    mockProjetService.getProjets.and.returnValue(of([{ id_projet: 1, nom_projet: 'Test', description_projet: 'Test description', recolte_projet: 500, admin_projet: 1 }]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render projects', () => {
    const projectElements = fixture.debugElement.queryAll(By.css('.project'));

    expect(projectElements.length).toBe(1);
    expect(projectElements[0].nativeElement.textContent).toContain('Test');
    expect(projectElements[0].nativeElement.textContent).toContain('Test description');
    expect(projectElements[0].nativeElement.textContent).toContain('500');
  });


  it('should delete project on menu delete click', () => {
    mockDialog.open.and.returnValue({ afterClosed: () => of(true) });
    mockProjetService.deleteProjet.and.returnValue(of({}));

    const menuIcon = fixture.debugElement.query(By.css('.menu-icon'));
    menuIcon.triggerEventHandler('click', new MouseEvent('click'));

    fixture.detectChanges();

    const deleteButton = fixture.debugElement.query(By.css('.menu li:last-child a'));
    deleteButton.triggerEventHandler('click', new MouseEvent('click'));

    expect(mockProjetService.deleteProjet).toHaveBeenCalledWith(1);
  });
});
