import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetService } from './get.service';

describe('GetService', () => {
  let service: GetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GetService]
    });

    service = TestBed.inject(GetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve projects', () => {
    const dummyProjects = [
      { id: 1, nom: 'Project 1', admin: 'Admin 1', description: 'Description 1' },
      { id: 2, nom: 'Project 2', admin: 'Admin 2', description: 'Description 2' }
    ];

    service.getProject().subscribe(projects => {
      expect(projects.length).toBe(2);
      expect(projects).toEqual(dummyProjects);
    });

    const request = httpMock.expectOne('url/to/projects');
    expect(request.request.method).toBe('GET');
    request.flush(dummyProjects);
  });
});
