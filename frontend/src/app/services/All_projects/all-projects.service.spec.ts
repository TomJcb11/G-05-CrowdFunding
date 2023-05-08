import { TestBed } from '@angular/core/testing';


import { ProjetService } from './all-projects.service';

describe('AllProjectsService', () => {
  let service: ProjetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
