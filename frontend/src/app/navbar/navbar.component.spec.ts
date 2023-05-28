import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from './home/home.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarComponent, HomeComponent, DropdownComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create the navbar', () => {
    expect(component).toBeTruthy();
  });
<<<<<<< HEAD

  it('should render the home component', () => {
    const homeElement = debugElement.nativeElement.querySelector('app-home');
    expect(homeElement).toBeTruthy();
  });

  it('should navigate to "/my-project" when "Mes Projets" link is clicked', () => {
    spyOn(router, 'navigateByUrl');
    const linkElement = debugElement.nativeElement.querySelector('.project a');
    linkElement.click();
    fixture.detectChanges();
    expect(router.navigateByUrl).toHaveBeenCalledWith(jasmine.stringMatching(/\/my-project/), jasmine.any(Object));
  });

  it('should render the dropdown component', () => {
    const dropdownElement = debugElement.nativeElement.querySelector('app-dropdown');
    expect(dropdownElement).toBeTruthy();
  });

  it('should show the dropdown options on mouse enter', () => {
    const menuElement = debugElement.nativeElement.querySelector('.menu');
    menuElement.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    const optionsElement = debugElement.nativeElement.querySelector('.menu ul');
    expect(optionsElement).toBeTruthy();
  });

  it('should hide the dropdown options on mouse leave', () => {
    const menuElement = debugElement.nativeElement.querySelector('.menu');
    menuElement.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    menuElement.dispatchEvent(new MouseEvent('mouseleave'));
    fixture.detectChanges();
    const optionsElement = debugElement.nativeElement.querySelector('.menu ul');
    expect(optionsElement).toBeFalsy();
  });
});
=======
});
>>>>>>> a88269382279df5fc5803de048dd8eea92ebafa2
