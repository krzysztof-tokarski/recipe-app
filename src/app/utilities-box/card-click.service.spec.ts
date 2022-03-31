import { TestBed } from '@angular/core/testing';

import { CardClickService } from './card-click.service';

describe('CardClickService', () => {
  let service: CardClickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardClickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
