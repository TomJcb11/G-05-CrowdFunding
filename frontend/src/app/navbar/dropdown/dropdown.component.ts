import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  showOptions = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }
}
