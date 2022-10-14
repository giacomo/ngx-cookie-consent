import { Injectable } from '@angular/core';

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
    functionalCookies?: any[] = [];
    showMarketingCookies?: boolean = true;
    marketingCookies?: any[] = [];
    showEssentialCookies?: boolean = true;
    essentialCookies?: any[] = [];
    showOtherTools?: boolean = true;
    otherTools?: any[] = [];
    excludeRoutes?: string[] = [];

}
