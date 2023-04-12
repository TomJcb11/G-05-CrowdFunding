import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocTestComponent } from './bloc-test.component';

describe('BlocTestComponent', () => {
  let component: BlocTestComponent;
  let fixture: ComponentFixture<BlocTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
