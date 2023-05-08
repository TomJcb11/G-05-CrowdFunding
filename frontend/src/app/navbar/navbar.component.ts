import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const profileBtn = this.el.nativeElement.querySelector('.profile');
    const dropdown = this.el.nativeElement.querySelector('#dropdown-menu');

    profileBtn.addEventListener('click', () => {
      if(dropdown.className === 'shown-dropdown') {
        dropdown.className = 'hidden-dropdown';
      }else{
        dropdown.className = 'shown-dropdown';
      }
    });
  }
}
