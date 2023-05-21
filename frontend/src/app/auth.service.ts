import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private cookieService: CookieService) {}

    isLoggedIn(): boolean {
        const token = this.cookieService.get('token');
        return !!token;
    }
}
