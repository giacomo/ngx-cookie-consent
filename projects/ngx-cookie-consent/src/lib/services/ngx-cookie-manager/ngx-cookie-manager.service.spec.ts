import { TestBed } from '@angular/core/testing';

import { NgxCookieManagerService } from './ngx-cookie-manager.service';

describe('NgxCookieManagerService', () => {
  let service: NgxCookieManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookieManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
