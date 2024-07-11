import { TestBed } from '@angular/core/testing';

import { NgxLanguageService } from './ngx-language.service';
import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';

describe('NgxLanguageService', () => {
    let service: NgxLanguageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                {provide: NgxCookieConsentConfigService, useValue: {
                    defaultLanguage: 'en',
                    customLanguage: {
                        languageKey: 'xx',
                        translations: {
                            other_title: 'XX Other'
                        }
                    }
                }}
            ]
        });
        service = TestBed.inject(NgxLanguageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should contain translation keys', () => {
        const translations = service.translations;

        expect(translations).toBeTruthy();
        expect(Object.keys(translations).length).toBe(6);
        expect(translations.hasOwnProperty('lang_en')).toBeTruthy();
        expect(translations.hasOwnProperty('lang_de')).toBeTruthy();
        expect(translations.hasOwnProperty('lang_it')).toBeTruthy();
        expect(translations.hasOwnProperty('lang_pt')).toBeTruthy();
        expect(translations.hasOwnProperty('lang_fr')).toBeTruthy();
        expect(translations.hasOwnProperty('lang_xx')).toBeTruthy();
    });

    it('should contain default language', () => {
        const defaultLanguage = service.translationKey;

        expect(defaultLanguage).toBeTruthy();
        expect(defaultLanguage).toEqual('lang_en');
    });

    it('should return a translation', () => {
        const translation = service.getTranslation('other_title');
        expect(translation).toBe('Other');
    });

    it('should sanitize a translation key', () => {
        const translation = service.getTranslation('other-title');
        expect(translation).toBe('Other');
    });

    it('should return a translation for a specific language', () => {
        const translation = service.getTranslation('other_title', 'de');
        expect(translation).toBe('Andere');
    });

    it('should return a translation for custom language', () => {
        const translation = service.getTranslation('other_title', 'xx');
        expect(translation).toBe('XX Other');
    });

    it('should return a fallback translation for custom language if key not translated', () => {
        const translation = service.getTranslation('back_text', 'xx');
        expect(translation).toBe('Back');
    });

    it('should return a translation from an object for a specific language', () => {
        const translation = service.getTranslationFromObject({en: 'Other', de: 'Andere Andere'}, 'de');
        expect(translation).toBe('Andere Andere');
    });

    it('should return a translation from an object fallback language', () => {
        const translation = service.getTranslationFromObject({en: 'Other', de: 'Andere'});
        expect(translation).toBe('Other');
    });

    it('should return a translation from a string return itself', () => {
        const translation = service.getTranslationFromObject('Others');
        expect(translation).toBe('Others');
    });

    it('should return a empty string translation from an object while no fallback language', () => {
        const translation = service.getTranslationFromObject({fr: 'Autre'});
        expect(translation).toBe('');
    });
});
