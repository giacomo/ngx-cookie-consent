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

    it('should contain default values', () => {
        expect(service.privacyPolicyUrl).toEqual('#');
        expect(service.imprintUrl).toEqual('#');
        expect(service.defaultLanguage).toEqual('en');
        expect(service.availableLanguages).toEqual(['en', 'de', 'it', 'pt']);
        expect(service.showLanguageSwitcher).toEqual(true);
        expect(service.showBadgeOpener).toEqual(true);
        expect(service.openerPosition).toEqual('left-bottom');
        expect(service.customClass).toEqual('');
        expect(service.cookiePrefix).toEqual('cookieconsent_');
        expect(service.cookieExpiryDays).toEqual(365);
        expect(service.showCookieDetails).toEqual(false);
        expect(service.showFunctionalCookies).toEqual(true);
        expect(service.functionalCookies).toEqual([]);
        expect(service.showMarketingCookies).toEqual(true);
        expect(service.marketingCookies).toEqual([]);
        expect(service.showEssentialCookies).toEqual(true);
        expect(service.essentialCookies).toEqual([]);
        expect(service.showOtherTools).toEqual(true);
        expect(service.otherTools).toEqual([]);
    });
});
