import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  title = 'Login';
  failed= false;

  @ViewChild('loginForm') loginForm!: NgForm;

  constructor( public http: HttpClient, private cookieService: CookieService, private router : Router ) { }

  onSubmit() {
      const values = {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password
      };
      this.http.post('http://localhost:8080/api/login', values).subscribe((data : any) => {
          this.cookieService.put('token', data.token);
          this.cookieService.put('id', data.id);
          console.log(this.cookieService.get('id'));
          if (data.token !== null) {
              this.router.navigate(['/']);
          }
      });
  }

}
