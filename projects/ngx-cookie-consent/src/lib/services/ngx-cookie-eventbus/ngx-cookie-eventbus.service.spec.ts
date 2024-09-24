import { TestBed } from '@angular/core/testing';

import { NgxCookieEventbusService } from './ngx-cookie-eventbus.service';

describe('NgxCookieEventbusService', () => {
    let service: NgxCookieEventbusService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxCookieEventbusService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should have languageChangedSubject', () => {
        expect(service.languageChangedSubject).toBeTruthy();
    });

    it('should have languageChanged$', () => {
        expect(service.languageChanged$).toBeTruthy();
    });

    it('should have languageUpdatedSubject', () => {
        expect(service.languageUpdatedSubject).toBeTruthy();
    });

    it('should have languageUpdated$', () => {
        expect(service.languageUpdated$).toBeTruthy();
    });
});
