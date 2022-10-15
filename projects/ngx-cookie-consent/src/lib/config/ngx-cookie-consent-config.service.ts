import { Injectable } from '@angular/core';
import { CookieItem } from './cookie-item.interface';

@Injectable({
    providedIn: 'root'
})
export class NgxCookieConsentConfigService {
    privacyPolicyUrl?: string = '#';
    imprintUrl?: string = '#';
    defaultLanguage?: string = 'en';
    availableLanguages?: string[] = ['en', 'de'];
    showLanguageSwitcher?: boolean = true;
    showBadgeOpener?: boolean = true;
    openerPosition?: 'left-top' | 'right-top' | 'left-bottom' | 'right-bottom' = 'left-bottom';
    customClass?: string = '';
    cookiePrefix?: string = 'cookieconsent_';
    cookieExpiryDays?: number = 365;
    showCookieDetails?: boolean = false;
    showFunctionalCookies?: boolean = true;
    functionalCookies?: CookieItem[] = [];
    showMarketingCookies?: boolean = true;
    marketingCookies?: CookieItem[] = [];
    showEssentialCookies?: boolean = true;
    essentialCookies?: CookieItem[] = [];
    showOtherTools?: boolean = true;
    otherTools?: CookieItem[] = [];
    excludeRoutes?: string[] = [];
}
