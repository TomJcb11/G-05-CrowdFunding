import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let http: Partial<HttpClient>;
    let router: Partial<Router>;
    let cookie: Partial<CookieService>;

    beforeEach(async () => {

        http = {
            post: jasmine.createSpy('post').and.returnValue(of({ token: 'mocked-token', id: 'mocked-id' }))
        };
      
        cookie = {
            put: jasmine.createSpy('put'),
            get: jasmine.createSpy('get')
        };

        router = {
            navigate: jasmine.createSpy('navigate')
        };

        await TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [HttpClientTestingModule, FormsModule],
            providers: [
                { provide: HttpClient, useValue: http },
                { provide: CookieService, useValue: cookie },
                { provide: Router, useValue: router }
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should send a POST request to the API', () => {
        component.loginForm.controls['email'].setValue('penetrator@woodytoys.lab');
        component.loginForm.controls['password'].setValue('1234');

        component.onSubmit();

        expect(http.post).toHaveBeenCalledWith('http://localhost:8080/api/login', {
            email: 'penetrator@woodytoys.lab',
            password: '1234'
        });
        expect(cookie.put).toHaveBeenCalledWith('token', 'mocked-token');
        expect(cookie.put).toHaveBeenCalledWith('id', 'mocked-id');
        expect(router.navigate).toHaveBeenCalledWith(['/']);
    });


    it('should mark email field as invalid when it is empty', () => {
        component.loginForm.controls['email'].setValue('');
        component.loginForm.controls['password'].setValue('1234');
      
        fixture.detectChanges();
      
        const emailInput = fixture.nativeElement.querySelector('input[name="email"]');
        const passwordInput = fixture.nativeElement.querySelector('input[name="password"]');
      
        expect(emailInput.classList.contains('ng-invalid')).toBe(true);
        expect(component.loginForm.controls['email'].invalid).toBe(true);
        expect(passwordInput.classList.contains('ng-valid')).toBe(true);
        expect(component.loginForm.controls['password'].valid).toBe(true);
    });

});
