import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddProjetComponent } from './odd-projet.component';

describe('OddProjetComponent', () => {
  let component: OddProjetComponent;
  let fixture: ComponentFixture<OddProjetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OddProjetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OddProjetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
