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

    it('should contain translation keys', () => {
        const translations = service.translations;

        expect(translations).toBeTruthy();
        expect(Object.keys(translations).length).toBe(3);
        expect(translations.hasOwnProperty('lang_en')).toBeTruthy();
        expect(translations.hasOwnProperty('lang_de')).toBeTruthy();
        expect(translations.hasOwnProperty('lang_it')).toBeTruthy();
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
});
