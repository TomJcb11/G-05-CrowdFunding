import { Component, ElementRef, OnInit} from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
  public users: any;

  constructor(private el: ElementRef) {}

  //For charging scripts when the component is loaded
  ngOnInit() {

    //Script for a dropdown menu
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