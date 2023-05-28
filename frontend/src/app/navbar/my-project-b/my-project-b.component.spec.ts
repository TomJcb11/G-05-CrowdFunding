import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProjectBComponent } from './my-project-b.component';

describe('MyProjectComponent', () => {
  let component: MyProjectBComponent;
  let fixture: ComponentFixture<MyProjectBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProjectBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProjectBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
