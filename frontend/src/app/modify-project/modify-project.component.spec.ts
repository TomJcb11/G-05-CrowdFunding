import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { ModifyProjectComponent } from './modify-project.component';
import { ProjetService } from '../services/All_projects/all-projects.service';

describe('ModifyProjectComponent', () => {
  let component: ModifyProjectComponent;
  let fixture: ComponentFixture<ModifyProjectComponent>;
  let mockProjetService: any;
  let mockRouter: any

  beforeEach(async () => {
    mockProjetService = jasmine.createSpyObj(['getOneProject', 'updateProject']);
    mockRouter = jasmine.createSpyObj(['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ ModifyProjectComponent ],
      providers: [
        { provide: ProjetService, useValue: mockProjetService },
        { provide: Router, useValue: mockRouter },
        {
          provide: ActivatedRoute, useValue: {
            paramMap: of({ get: () => '1' })
          }
        },
      ],
      imports: [ FormsModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyProjectComponent);
    component = fixture.componentInstance;
    mockProjetService.getOneProject.and.returnValue(of({ id_projet: 1, nom_projet: 'Test', description_projet: 'Test description', recolte_projet: 500 }));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call updateProject and navigate on submit', () => {
    mockProjetService.updateProject.and.returnValue(of({}));

    component.onSubmit();

    expect(mockProjetService.updateProject).toHaveBeenCalled();
    expect(mockRouter.navigate).toHaveBeenCalledWith(['/my-projects']);
  });
});
