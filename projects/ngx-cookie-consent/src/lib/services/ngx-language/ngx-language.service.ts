import { Injectable } from '@angular/core';
import * as languages from './../../languages';
import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';

@Injectable({
    providedIn: 'root'
})
export class NgxLanguageService {
    translationKey = 'lang_en';
    translations: any;

    constructor(private config: NgxCookieConsentConfigService) {
        this.translationKey = 'lang_' + this.config.defaultLanguage;
        this.translations = languages;

        if (config.customLanguage !== null && config.customLanguage !== undefined) {
            this.translations = {
                ...this.translations,
                ...{
                     ['lang_' + config.customLanguage?.languageKey]: {
                        ...this.sanitizeCustomTranslations(config.customLanguage?.translations)
                     }
                }
            };
        }
    }


    getTranslation(key: string, translationLang?: string): string {
        const sanitizedKey = key.replace('-', '_');

        if (translationLang) {
            return this.translations[`lang_${translationLang}`][sanitizedKey] || '';
        }

        return this.translations[this.translationKey][sanitizedKey] || '';
    }

    getTranslationFromObject(obj: any, translationLang?: string): string {
        if (typeof obj === 'string') {
            return obj;
        }

        if (translationLang && obj.hasOwnProperty(translationLang)) {
            return obj[translationLang];
        }

        const fallback = this.translationKey.replace('lang_', '');
        if (obj.hasOwnProperty(fallback)) {
            return obj[fallback];
        }

        return '';
    }

    private sanitizeCustomTranslations(translations: { [p: string]: string } | undefined): { [p: string]: string } {
        if (!translations) {
            return {};
        }

        // get default english translations merge with custom translations
        const defaultTranslations = this.translations['lang_en'];

        return {
            ...defaultTranslations,
            ...translations
        };
    }
}
