import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneProjectBasedOnIdComponent } from './one-project-based-on-id.component';

describe('OneProjectBasedOnIdComponent', () => {
  let component: OneProjectBasedOnIdComponent;
  let fixture: ComponentFixture<OneProjectBasedOnIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneProjectBasedOnIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneProjectBasedOnIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
