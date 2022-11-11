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
}
