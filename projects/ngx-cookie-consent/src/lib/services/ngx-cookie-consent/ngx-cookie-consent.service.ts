import { Injectable } from '@angular/core';
import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';
import { NgxCookieService } from '../ngx-cookie/ngx-cookie.service';
import { NgxLanguageService } from '../ngx-language/ngx-language.service';

@Injectable({
    providedIn: 'root'
})
export class NgxCookieConsentService {
    activeLang = 'en';

    constructor(
        private cookieService: NgxCookieService,
        private cookieConsentConfig: NgxCookieConsentConfigService,
        private languageService: NgxLanguageService
    ) {
        this.activeLang = this.getConfig('defaultLanguage');
    }

    setLanguage(lang: string) {
        this.activeLang = lang;
        this.setConfig('defaultLanguage', lang);
    }

    getTranslation(key: string, translationLang?: string): string {
        const lang = translationLang || this.activeLang;
        return this.languageService.getTranslation(key, lang);
    }


    getConfig(key: string) {
        return (this.cookieConsentConfig as any)[key];
    }

    setConfig(key: string, value: string) {
        (this.cookieConsentConfig as any)[key] = value;
    }

    shouldDisplayCookieConsent() {
        return !this.cookieService.get(this.getPrefixedCookieName('status'));
    }

    setCookieConsentStatus(status: boolean) {
        this.cookieService.set(this.getPrefixedCookieName('status'), status, this.getConfig('cookieExpiryDays'));
    }

    setCookieConsentStatusForCategory(category: string, status: boolean) {
        this.cookieService.set(this.getPrefixedCookieName(category), status, this.getConfig('cookieExpiryDays'));
    }

    getPrefixedCookieName(name: string) {
        return this.getConfig('cookiePrefix') + name;
    }

    acceptAllCookies() {
        this.setCookieConsentStatus(true);
        this.setCookieConsentStatusForCategory('functional', true);
        this.setCookieConsentStatusForCategory('marketing', true);
        this.setCookieConsentStatusForCategory('essential', true);
    }

    denyAllCookies() {
        this.setCookieConsentStatus(true);
        this.setCookieConsentStatusForCategory('functional', false);
        this.setCookieConsentStatusForCategory('marketing', false);
        this.setCookieConsentStatusForCategory('essential', true);
    }
}
