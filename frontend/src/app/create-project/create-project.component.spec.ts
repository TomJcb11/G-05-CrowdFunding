import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CreateProjectComponent } from './create-project.component';
import { CookieModule, CookieService, CookieOptionsProvider } from 'ngx-cookie';

let httpClientSpy: { get: jasmine.Spy };
let cookieServiceSpy: { get: jasmine.Spy };
let service: CreateProjectComponent;


describe('CreateProjectComponent', () => {


    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['post']);
        service = new CreateProjectComponent(httpClientSpy as any, cookieServiceSpy as any);
    });


    

});
