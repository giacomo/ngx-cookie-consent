import { TestBed } from '@angular/core/testing';

import { NgxCookieConsentConfigService } from './ngx-cookie-consent-config.service';

describe('NgxCookieConsentConfigService', () => {
  let service: NgxCookieConsentConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCookieConsentConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
