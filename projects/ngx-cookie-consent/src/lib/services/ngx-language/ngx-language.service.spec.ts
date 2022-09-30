import { TestBed } from '@angular/core/testing';

import { NgxLanguageService } from './ngx-language.service';

describe('NgxLanguageService', () => {
  let service: NgxLanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLanguageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
