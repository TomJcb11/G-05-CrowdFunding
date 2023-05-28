import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyProjectPageComponent } from './modify-project-page.component';

describe('ModifyProjectPageComponent', () => {
  let component: ModifyProjectPageComponent;
  let fixture: ComponentFixture<ModifyProjectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyProjectPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
