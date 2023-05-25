import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @ViewChild('profileBtn', { static: false }) profileBtn!: ElementRef<HTMLElement>;
  showOptions = false;

  constructor(private cdr: ChangeDetectorRef) {}

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
