import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { NgxCookieService } from '../ngx-cookie/ngx-cookie.service';
import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';
import { NgxCookieEventbusService } from '../ngx-cookie-eventbus/ngx-cookie-eventbus.service';

@Injectable({
  providedIn: 'root'
})
export class NgxCookieManagerService {
    cookieUpdated$ = new Subject<{name: string, state: boolean}>();
    languageChanged$: Observable<string>;

    constructor(
        private cookieService: NgxCookieService,
        private cookieConsentConfig: NgxCookieConsentConfigService,
        private cookieEventbusService: NgxCookieEventbusService,
    ) {
        this.languageChanged$ = this.cookieEventbusService.languageUpdated$;
    }

    private getConfig(key: string): any {
        return (this.cookieConsentConfig as any)[key];
    }

    private setConfig(key: string, value: string): void {
        (this.cookieConsentConfig as any)[key] = value;
    }

    private getPrefixedCookieName(name: string): string {
        return this.getConfig('cookiePrefix') + name;
    }

    getCookie(cookieName: string): boolean {
        return this.cookieService.get(this.getPrefixedCookieName(cookieName)) === true;
    }

    updateDisplayLanguage(locale: string): void {
        const availableLanguages = this.getConfig('availableLanguages');

        if (!availableLanguages.includes(locale)) {
            return;
        }

        this.setConfig('defaultLanguage', locale);
        this.cookieEventbusService.languageChangedSubject.next(true);
    }

    getDisplayLanguage(): string {
        return this.getConfig('defaultLanguage');
    }
}
