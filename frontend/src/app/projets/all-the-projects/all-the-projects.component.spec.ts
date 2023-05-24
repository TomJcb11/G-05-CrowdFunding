import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTheProjectsComponent } from './all-the-projects.component';

describe('AllTheProjectsComponent', () => {
  let component: AllTheProjectsComponent;
  let fixture: ComponentFixture<AllTheProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllTheProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTheProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
