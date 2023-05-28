import { TestBed } from '@angular/core/testing';

import { ProjectsFromIdService } from './projects-from-id.service';

describe('ProjectsFromIdService', () => {
  let service: ProjectsFromIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsFromIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
