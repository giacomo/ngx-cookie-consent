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

    setCookieConsentStatusForCookie(category: string, status: boolean) {
        if (!status) {
            return this.cookieService.delete(this.getPrefixedCookieName(category));
        }

        this.cookieService.set(this.getPrefixedCookieName(category), status, this.getConfig('cookieExpiryDays'));
    }

    getPrefixedCookieName(name: string) {
        return this.getConfig('cookiePrefix') + name;
    }

    acceptAllCookies() {
        const cookies = [
            ...this.getConfig('functionalCookies').map((cookie: any) => cookie.key),
            ...this.getConfig('marketingCookies').map((cookie: any) => cookie.key),
        ];

        cookies.forEach((cookie: string) => {
            this.setCookieConsentStatusForCookie(cookie, true);
        });

        this.setCookieConsentStatus(true);
    }

    denyAllCookies() {
        const cookies = [
            ...this.getConfig('functionalCookies').map((cookie: any) => cookie.key),
            ...this.getConfig('marketingCookies').map((cookie: any) => cookie.key),
        ];

        cookies.forEach((cookie: string) => {
            this.setCookieConsentStatusForCookie(cookie, false);
        });

        this.setCookieConsentStatus(true);
    }

    getCookieFields() {
        const functionalCookies = this.getCookiesByCategory('functionalCookies');
        const marketingCookies = this.getCookiesByCategory('marketingCookies');

        return {functional: functionalCookies, marketing: marketingCookies};
    }

    private getCookiesByCategory(category: string) {
        return this.getConfig(category).map((cookie: any) => {
            return {
                key: cookie.key,
                selected: this.cookieService.get(this.getPrefixedCookieName(cookie.key)) === true
            };
        });
    }

    saveSomeCookies(cookies: { functional: any[], marketing: any[] } ) {
        Object.keys(cookies.functional).forEach((cookie: any) => {
            this.setCookieConsentStatusForCookie(cookie, cookies.functional[cookie]);
        });

        Object.keys(cookies.marketing).forEach((cookie: any) => {
            this.setCookieConsentStatusForCookie(cookie, cookies.marketing[cookie]);
        });

        this.setCookieConsentStatus(true);
    }
}
