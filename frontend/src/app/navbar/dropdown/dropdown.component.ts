import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})

export class DropdownComponent {

  @ViewChild('profileBtn', { static: false }) profileBtn!: ElementRef<HTMLElement>;
  showOptions = false;

  @ViewChild('logElement', { static: false }) logElementRef!: ElementRef;


  constructor(private cdr: ChangeDetectorRef, private cookieService: CookieService, private router : Router) { 
  }

  logout() {
    this.cookieService.remove('token');
    this.cookieService.remove('id');
    this.router.navigate(['/login']);
  }

  toggleOptions() {
    this.showOptions = !this.showOptions;
    this.cdr.detectChanges();
  }

  onMouseEnter() {
    this.showOptions = true;
    this.cdr.detectChanges();
  }

  onMouseLeave() {
    this.showOptions = false;
    this.cdr.detectChanges();
  }

}
