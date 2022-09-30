import { Component, OnInit } from '@angular/core';
import { NgxCookieConsentService } from './services/ngx-cookie-consent/ngx-cookie-consent.service';

@Component({
    selector: 'ngx-cookie-consent',
    templateUrl: './ngx-cookie-consent.component.html',
    styleUrls: ['./ngx-cookie-consent.component.scss']
})
export class NgxCookieConsentComponent implements OnInit {
    cookieConsentVisible = false;
    // @todo make this false
    showSettingsDialog = true;
    dropDownOpen = false;
    functionalCookiesClosed = true;
    marketingCookiesClosed = true;
    essentialCookiesClosed = true;
    otherToolsClosed = true;

    constructor(
        private consentService: NgxCookieConsentService,
    ) {
        this.cookieConsentVisible = this.consentService.shouldDisplayCookieConsent();
    }

    ngOnInit(): void {
    }

    translate(key: string, translationLang?: string): string {
        return this.consentService.getTranslation(key, translationLang);
    }

    config(key: string) {
        return this.consentService.getConfig(key);
    }

    switchLanguage(lang: string) {
        this.dropDownOpen = false;
        this.consentService.setLanguage(lang);
    }

    get activeLang(): string {
        return this.consentService.getConfig('defaultLanguage');
    }

    get privacyPolicyUrl(): string {
        return this.consentService.getConfig('privacyPolicyUrl');
    }

    get imprintUrl(): string {
        return this.consentService.getConfig('imprintUrl');
    }

    get availableLanguages(): string[] {
        return this.consentService.getConfig('availableLanguages');
    }

    denyAllCookies() {
        this.cookieConsentVisible = false;
        this.consentService.denyAllCookies();
    }
}
