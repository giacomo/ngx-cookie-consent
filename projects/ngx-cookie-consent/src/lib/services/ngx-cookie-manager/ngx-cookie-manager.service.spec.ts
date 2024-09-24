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

    it('should return default language', () => {
        spyOn((service as any), 'getConfig').and.returnValue('en');
        expect(service.getDisplayLanguage()).toEqual('en');
    });

    it('should update default language', () => {
        spyOn((service as any), 'getConfig').and.returnValue(['en', 'de']);
        spyOn((service as any), 'setConfig');
        spyOn(service['cookieEventbusService'].languageChangedSubject, 'next');

        service.updateDisplayLanguage('de');

        expect(service['setConfig']).toHaveBeenCalledWith('defaultLanguage', 'de');
        expect(service['cookieEventbusService'].languageChangedSubject.next).toHaveBeenCalledWith(true);
    });

    it('should not update default language', () => {
        spyOn((service as any), 'getConfig').and.returnValue(['en', 'de']);
        spyOn((service as any), 'setConfig');
        spyOn(service['cookieEventbusService'].languageChangedSubject, 'next');

        service.updateDisplayLanguage('fr');

        expect(service['setConfig']).not.toHaveBeenCalled();
        expect(service['cookieEventbusService'].languageChangedSubject.next).not.toHaveBeenCalled();
    });
});
