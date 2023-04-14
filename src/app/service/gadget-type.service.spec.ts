import { TestBed } from '@angular/core/testing';

import { GadgetTypeService } from './gadget-type.service';

describe('GadgetTypeService', () => {
  let service: GadgetTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GadgetTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
