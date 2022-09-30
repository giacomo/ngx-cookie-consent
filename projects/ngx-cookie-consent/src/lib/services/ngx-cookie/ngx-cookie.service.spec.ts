import { TestBed } from '@angular/core/testing';

import { NgxCookieService } from './ngx-cookie.service';

describe('NgxCookieService', () => {
  let service: NgxCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
