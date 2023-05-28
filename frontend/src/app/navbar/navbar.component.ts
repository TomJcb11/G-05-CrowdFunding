import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  @ViewChild('profileBtn', { static: false }) profileBtn!: ElementRef<HTMLButtonElement>;
  @ViewChild(DropdownComponent, { static: false }) dropdown!: DropdownComponent;

  ngAfterViewInit() {
    if (this.profileBtn && this.profileBtn.nativeElement && this.dropdown) {
      this.profileBtn.nativeElement.addEventListener('click', () => {
        if (this.dropdown.showOptions) {
          this.dropdown.toggleOptions();
        }
      });
    }
  }
<<<<<<< HEAD

  toggleDropdown() {
    this.dropdown.toggleOptions();
  }
=======
>>>>>>> origin/lulualex
}