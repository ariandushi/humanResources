import { TestBed } from '@angular/core/testing';

import { PersonalFilesService } from './personal-files.service';

describe('PersonalFilesService', () => {
  let service: PersonalFilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonalFilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
