import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddProjectComponent } from './odd-project.component';

describe('OddProjectComponent', () => {
  let component: OddProjectComponent;
  let fixture: ComponentFixture<OddProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
