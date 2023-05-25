import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateProjectComponent } from './create-project.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { CookieService, CookieOptionsProvider, COOKIE_OPTIONS, COOKIE_WRITER } from 'ngx-cookie';

describe('CreateProjectComponent', () => {
    let component: CreateProjectComponent;
    let fixture: ComponentFixture<CreateProjectComponent>;
    let http: HttpTestingController;
    let cookie: CookieService;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CreateProjectComponent],
            imports: [FormsModule, HttpClientTestingModule],
            providers: [
                CookieService, 
                CookieOptionsProvider, 
                { provide: COOKIE_OPTIONS, useValue: {} }, 
                { provide: COOKIE_WRITER, useValue: {} },
                { provide : CookieService, useValue: {
                    get: () => 1
                }}
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(CreateProjectComponent);
        component = fixture.componentInstance;
        http = TestBed.inject(HttpTestingController);
        cookie = TestBed.inject(CookieService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    afterEach(() => {
        http.verify();
    });
    

    it('test if it send with valid inputs', () => {
        component.projectForm.controls['projectName'].setValue('Nom du projet');
        component.projectForm.controls['projectDescription'].setValue('Description du projet');
        component.projectForm.controls['projectMoney'].setValue(100);
        component.projectForm.controls['projectEndDate'].setValue('2023-05-11');

        component.onSubmit();

        const req = http.expectOne('http://localhost:8080/api/projects');
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual({
            name_project: 'Nom du projet',
            owner_project: cookie.get('id'),
            description_project: 'Description du projet',
            status_project: 1,
            goal_money: 100,
            project_picture: null,
            end_date: '2023-05-11',
            searching_workers: false
        });
    });

    it('test if it send with invalid inputs', () => {
        component.projectForm.controls['projectName'].setValue(undefined);
        component.projectForm.controls['projectDescription'].setValue('Description du projet');
        component.projectForm.controls['projectMoney'].setValue(100);
        component.projectForm.controls['projectEndDate'].setValue('2023-05-11');

        expect(() => component.onSubmit()).toThrowError('Missing fields');

    });
});