import { TestBed } from '@angular/core/testing';

import { DataTableResolverService } from './data-table-resolver.service';

describe('DataTableResolverService', () => {
  let service: DataTableResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataTableResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
