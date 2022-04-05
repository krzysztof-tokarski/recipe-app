import { TestBed } from '@angular/core/testing';

import { FormClickerService } from './form-clicker.service';

describe('FormClickerService', () => {
  let service: FormClickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormClickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
