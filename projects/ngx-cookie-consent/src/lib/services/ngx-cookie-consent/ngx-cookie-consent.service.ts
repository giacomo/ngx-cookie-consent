import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
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

    getTranslation(key: string, translationLang?: string): string {
        const lang = translationLang || this.activeLang;
        return this.languageService.getTranslation(key, lang);
    }

    getConfig(key: string): any {
        return (this.cookieConsentConfig as any)[key];
    }

    getPrefixedCookieName(name: string): string {
        return this.getConfig('cookiePrefix') + name;
    }

    getCookieFields(): {functional: {key: string, selected: boolean}[], marketing: {key: string, selected: boolean}[]} {
        const functionalCookies = this.getCookiesByCategory('functionalCookies');
        const marketingCookies = this.getCookiesByCategory('marketingCookies');

        return {functional: functionalCookies, marketing: marketingCookies};
    }

    setLanguage(lang: string): void {
        this.activeLang = lang;
        this.setConfig('defaultLanguage', lang);
    }

    setConfig(key: string, value: string): void {
        (this.cookieConsentConfig as any)[key] = value;
    }

    setCookieConsentStatus(status: boolean): void {
        this.cookieService.set(this.getPrefixedCookieName('status'), status, this.getConfig('cookieExpiryDays'));
    }

    setCookieConsentStatusForCookie(name: string, status: boolean): void {
        if (!status) {
            return this.cookieService.delete(this.getPrefixedCookieName(name));
        }

        this.cookieService.set(this.getPrefixedCookieName(name), status, this.getConfig('cookieExpiryDays'));
    }

    shouldDisplayCookieConsent(): boolean {
        return !this.cookieService.get(this.getPrefixedCookieName('status'));
    }

    acceptAllCookies(): void {
        const cookies = [
            ...this.getConfig('functionalCookies').map((cookie: any) => cookie.key),
            ...this.getConfig('marketingCookies').map((cookie: any) => cookie.key),
        ];

        cookies.forEach((cookie: string) => {
            this.setCookieConsentStatusForCookie(cookie, true);
        });

        this.setCookieConsentStatus(true);
    }

    denyAllCookies(): void {
        const cookies = [
            ...this.getConfig('functionalCookies').map((cookie: any) => cookie.key),
            ...this.getConfig('marketingCookies').map((cookie: any) => cookie.key),
        ];

        cookies.forEach((cookie: string) => {
            this.setCookieConsentStatusForCookie(cookie, false);
        });

        this.setCookieConsentStatus(true);
    }

    saveSomeCookies(cookies: { functional: any, marketing: any } ): void {
        Object.keys(cookies.functional).forEach((cookie: any) => {
            this.setCookieConsentStatusForCookie(cookie, cookies.functional[cookie]);
        });

        Object.keys(cookies.marketing).forEach((cookie: any) => {
            this.setCookieConsentStatusForCookie(cookie, cookies.marketing[cookie]);
        });

        this.setCookieConsentStatus(true);
    }

    private getCookiesByCategory(category: string): {key: string, selected: boolean}[] {
        return this.getConfig(category).map((cookie: any) => {
            return {
                key: cookie.key,
                selected: this.cookieService.get(this.getPrefixedCookieName(cookie.key)) === true
            };
        });
    }
}
