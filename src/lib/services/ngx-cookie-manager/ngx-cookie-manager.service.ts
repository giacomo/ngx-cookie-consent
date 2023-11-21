import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxCookieService } from '../ngx-cookie/ngx-cookie.service';
import { NgxCookieConsentConfigService } from '../../config/ngx-cookie-consent-config.service';

@Injectable({
  providedIn: 'root'
})
export class NgxCookieManagerService {
    cookieUpdated$ = new Subject<{name: string, state: boolean}>();

    constructor(
        private cookieService: NgxCookieService,
        private cookieConsentConfig: NgxCookieConsentConfigService,
    ) { }

    private getConfig(key: string): any {
        return (this.cookieConsentConfig as any)[key];
    }

    private getPrefixedCookieName(name: string): string {
        return this.getConfig('cookiePrefix') + name;
    }

    getCookie(cookieName: string): boolean {
        return this.cookieService.get(this.getPrefixedCookieName(cookieName)) === true;
    }
}
