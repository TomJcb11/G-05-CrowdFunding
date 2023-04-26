import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectHudComponent } from './project-hud.component';

describe('ProjectHudComponent', () => {
  let component: ProjectHudComponent;
  let fixture: ComponentFixture<ProjectHudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectHudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectHudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
