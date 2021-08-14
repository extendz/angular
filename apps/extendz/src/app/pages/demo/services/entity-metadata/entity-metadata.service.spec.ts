import { TestBed } from '@angular/core/testing';

import { EntityMetadataService } from './entity-metadata.service';

describe('EntityMetadataService', () => {
  let service: EntityMetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntityMetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
