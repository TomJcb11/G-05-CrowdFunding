import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    if (this.showPassword) {
      this.showPassword = false;
    } else {
      this.showPassword = true;
    }
  }
}