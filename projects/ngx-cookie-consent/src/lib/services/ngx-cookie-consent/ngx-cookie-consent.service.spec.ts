import { TestBed } from '@angular/core/testing';

import { NgxCookieConsentService } from './ngx-cookie-consent.service';
import { NgxLanguageService } from '../ngx-language/ngx-language.service';
import { NgxCookieService } from '../ngx-cookie/ngx-cookie.service';

describe('NgxCookieConsentService', () => {
    let service: NgxCookieConsentService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(NgxCookieConsentService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get a translation from languageService', () => {
        const languageService = TestBed.inject(NgxLanguageService);
        spyOn(languageService, 'getTranslation').and.returnValue('test');

        expect(service.getTranslation('test')).toEqual('test');
        expect(languageService.getTranslation).toHaveBeenCalledWith('test', 'en');
    });

    it('should get a translation from languageService with a different language', () => {
        const languageService = TestBed.inject(NgxLanguageService);
        spyOn(languageService, 'getTranslation').and.returnValue('test');

        expect(service.getTranslation('test', 'de')).toEqual('test');
        expect(languageService.getTranslation).toHaveBeenCalledWith('test', 'de');
    });

    it('should get a translationFromObject from languageService', () => {
        const languageService = TestBed.inject(NgxLanguageService);
        spyOn(languageService, 'getTranslationFromObject').and.returnValue('test');

        expect(service.getTranslationFromObject('test')).toEqual('test');
        expect(languageService.getTranslationFromObject).toHaveBeenCalledWith('test', 'en');
    });

    it('should get a translationFromObject from languageService with a different language', () => {
        const languageService = TestBed.inject(NgxLanguageService);
        spyOn(languageService, 'getTranslationFromObject').and.returnValue('test');

        expect(service.getTranslationFromObject('test', 'de')).toEqual('test');
        expect(languageService.getTranslationFromObject).toHaveBeenCalledWith('test', 'de');
    });

    it('should get a config value', () => {
        expect(service.getConfig('defaultLanguage')).toEqual('en');
    });

    it('should get a prefixed cookie name', () => {
        expect(service.getPrefixedCookieName('test')).toEqual('cookieconsent_test');
    });

    it('should get cookie fields', () => {
        expect(service.getCookieFields()).toEqual({functional: [], marketing: []});
    });

    it('should get cookie fields with values', () => {
        spyOn(service as any, 'getCookiesByCategory').and.returnValues([
            {key: 'functional_test', selected: true}],
            [{key: 'marketing_test', selected: true}]
        );

        expect(service.getCookieFields()).toEqual({
            functional: [{key: 'functional_test', selected: true}],
            marketing: [{key: 'marketing_test', selected: true}]
        });
        expect((service as any).getCookiesByCategory).toHaveBeenCalledWith('functionalCookies');
        expect((service as any).getCookiesByCategory).toHaveBeenCalledWith('marketingCookies');
        expect((service as any).getCookiesByCategory).toHaveBeenCalledTimes(2);
    });

    it('should set the language', () => {
        spyOn(service, 'setConfig').and.returnValue();

        service.setLanguage('de');
        expect(service.activeLang).toEqual('de');
        expect(service.setConfig).toHaveBeenCalledWith('defaultLanguage', 'de');
    });

    it('should set a config value', () => {
        expect(service.getConfig('defaultLanguage')).toEqual('en');

        service.setConfig('defaultLanguage', 'de');
        expect(service.getConfig('defaultLanguage')).toEqual('de');
    });

    it('should set a cookie consent status', () => {
        const cookieService = TestBed.inject(NgxCookieService);
        spyOn(cookieService, 'set').and.returnValue();

        service.setCookieConsentStatus(true);

        expect(cookieService.set).toHaveBeenCalledWith('cookieconsent_status', true, 365);
    });

    it('should set a cookie consent status with true for a specific cookie', () => {
        const cookieService = TestBed.inject(NgxCookieService);
        spyOn(cookieService, 'set').and.returnValue();

        service.setCookieConsentStatusForCookie('functional_google_analytics', true);

        expect(cookieService.set).toHaveBeenCalledWith('cookieconsent_functional_google_analytics', true, 365);
    });

    it('should delete a cookie consent status with false for a specific cookie', () => {
        const cookieService = TestBed.inject(NgxCookieService);
        spyOn(cookieService, 'delete').and.returnValue();

        service.setCookieConsentStatusForCookie('functional_google_analytics', false);

        expect(cookieService.delete).toHaveBeenCalledWith('cookieconsent_functional_google_analytics');
    });

    it('should display cookie consent', () => {
        const cookieService = TestBed.inject(NgxCookieService);
        spyOn(cookieService, 'get').and.returnValue(true);

        expect(service.shouldDisplayCookieConsent()).toBeFalse();
        expect(cookieService.get).toHaveBeenCalledWith('cookieconsent_status');
    });

    it('should not display cookie consent', () => {
        const cookieService = TestBed.inject(NgxCookieService);
        spyOn(cookieService, 'get').and.returnValue(false);

        expect(service.shouldDisplayCookieConsent()).toBeTrue();
        expect(cookieService.get).toHaveBeenCalledWith('cookieconsent_status');
    });

    it('should accept all cookies', () => {
        spyOn(service, 'getConfig').and.returnValues([{key: 'test'}], [{key: 'test2'}]);
        spyOn(service, 'setCookieConsentStatusForCookie').and.returnValue();
        spyOn(service, 'setCookieConsentStatus').and.returnValue();

        service.acceptAllCookies();

        expect(service.setCookieConsentStatusForCookie).toHaveBeenCalledWith('test', true);
        expect(service.setCookieConsentStatusForCookie).toHaveBeenCalledWith('test2', true);
        expect(service.setCookieConsentStatus).toHaveBeenCalledWith(true);
    });

    it('should decline all cookies', () => {
        spyOn(service, 'getConfig').and.returnValues([{key: 'test'}], [{key: 'test2'}]);
        spyOn(service, 'setCookieConsentStatusForCookie').and.returnValue();
        spyOn(service, 'setCookieConsentStatus').and.returnValue();

        service.denyAllCookies();

        expect(service.setCookieConsentStatusForCookie).toHaveBeenCalledWith('test', false);
        expect(service.setCookieConsentStatusForCookie).toHaveBeenCalledWith('test2', false);
        expect(service.setCookieConsentStatus).toHaveBeenCalledWith(true);
    });

    it('should save some cookies', () => {
        spyOn(service, 'setCookieConsentStatusForCookie').and.returnValue();
        spyOn(service, 'setCookieConsentStatus').and.returnValue();

        service.saveSomeCookies({
            functional: {test: true},
            marketing: {test2: false},
        });

        expect(service.setCookieConsentStatusForCookie).toHaveBeenCalledWith('test', true);
        expect(service.setCookieConsentStatusForCookie).toHaveBeenCalledWith('test2', false);
        expect(service.setCookieConsentStatus).toHaveBeenCalledWith(true);
    });
});
