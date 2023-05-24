import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProjetService } from './all-projects.service';

describe('ProjetService', () => {
  let service: ProjetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProjetService]
    });
    service = TestBed.inject(ProjetService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch projects', () => {
    service.getProjets().subscribe();
    const req = httpMock.expectOne(`${service.apiUrl}`);
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all projects', () => {
    const mockProjects = [
      { id_projet: 1, nom_projet: 'Test', description_projet: 'Test description', recolte_projet: 500, admin_projet: 1 },
      // add more projects here
    ];

    service.getProjets().subscribe(projects => {
      expect(projects.length).toBe(1);
      expect(projects).toEqual(mockProjects);
    });

    const req = httpMock.expectOne(service.apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockProjects);
  });

  it('should get one project', () => {
    const mockProject = { id_projet: 1, nom_projet: 'Test', description_projet: 'Test description', recolte_projet: 500, admin_projet: 1 };
  
    service.getOneProject(1).subscribe(project => {
      expect(project).toEqual(mockProject);
    });
  
    const req = httpMock.expectOne(`${service.apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProject);
  });
  
  it('should delete a project', () => {
    service.deleteProjet(1).subscribe(response => {
      expect(response).toBeNull();
    });
  
    const req = httpMock.expectOne(`${service.apiUrl}/1`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
  
  it('should update a project', () => {
    const mockProject = { id_projet: 1, nom_projet: 'Test updated', description_projet: 'Test description updated', recolte_projet: 600, admin_projet: 1 };
  
    service.updateProject(1, mockProject).subscribe(project => {
      expect(project).toEqual(mockProject);
    });
  
    const req = httpMock.expectOne(`${service.apiUrl}/modify/1`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockProject);
  });
  

});
