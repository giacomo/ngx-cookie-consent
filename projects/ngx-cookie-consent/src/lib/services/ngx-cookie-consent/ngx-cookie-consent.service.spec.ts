import { TestBed } from '@angular/core/testing';

import { NgxCookieConsentService } from './ngx-cookie-consent.service';

describe('NgxCookieConsentService', () => {
  let service: NgxCookieConsentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookieConsentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
