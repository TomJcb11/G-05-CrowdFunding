<<<<<<< HEAD
import { Component, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> a88269382279df5fc5803de048dd8eea92ebafa2

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
<<<<<<< HEAD
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
=======
  showOptions = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
>>>>>>> a88269382279df5fc5803de048dd8eea92ebafa2
