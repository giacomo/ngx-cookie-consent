import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxCookieConsentService } from './services/ngx-cookie-consent/ngx-cookie-consent.service';

@Component({
    selector: 'ngx-cookie-consent',
    templateUrl: './ngx-cookie-consent.component.html',
    styleUrls: ['./ngx-cookie-consent.component.scss']
})
export class NgxCookieConsentComponent implements OnInit {
    cookieConsentVisible = false;
    showSettingsDialog = false;
    dropDownOpen = false;
    functionalCookiesClosed = true;
    marketingCookiesClosed = true;
    essentialCookiesClosed = true;
    otherToolsClosed = true;
    cookieForm: FormGroup;
    private cookieFields: {
        functional: {key: string, selected: boolean}[],
        marketing: {key: string, selected: boolean}[],
    };

    constructor(
        private consentService: NgxCookieConsentService,
        private formBuilder: FormBuilder
    ) {
        this.cookieConsentVisible = this.consentService.shouldDisplayCookieConsent();
        this.cookieFields = this.consentService.getCookieFields();
        this.cookieForm = this.buildForm();
    }

    private buildForm(): FormGroup {
        return this.formBuilder.group({
            functional: this.buildCookieFields(this.cookieFields.functional),
            marketing: this.buildCookieFields(this.cookieFields.marketing),
        });
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

    get functionalCookiesAllSelected(): boolean {
        const arr = Object.values(this.cookieForm.get('functional')?.value);

        if (arr.length === 0) {
            return false;
        }

        return arr.every(value => value === true);
    }

    get marketingCookiesAllSelected(): boolean {
        const arr = Object.values(this.cookieForm.get('marketing')?.value);

        if (arr.length === 0) {
            return false;
        }

        return arr.every(value => value === true);
    }




    private buildCookieFields(fields: { key: string, selected: boolean }[]) {
        const group: any = {};
        fields.forEach(field => {
            group[field.key] = this.formBuilder.control(field.selected);
        });

        return this.formBuilder.group(group);
    }

    toggle($event: any, category: string) {
        const fields: any = this.consentService.getCookieFields();
        const cookies = fields[category];
        cookies.forEach((field: any) => {
            this.cookieForm.get(category)?.get(field.key)?.setValue($event.currentTarget.checked);
        });
    }

    back() {
        this.showSettingsDialog = false
        this.resetDropdowns();
        this.resetForm();
    }

    private resetForm() {
        const fields: any = this.consentService.getCookieFields();
        const categoryKeys = Object.keys(fields);
        categoryKeys.forEach(categoryKey => {
            const category = fields[categoryKey];
            category.forEach((field: any) => {
                this.cookieForm.get(categoryKey)?.get(field.key)?.setValue(field.selected);
            });
        });

    }

    private resetDropdowns() {
        this.functionalCookiesClosed = true;
        this.marketingCookiesClosed = true;
        this.essentialCookiesClosed = true;
        this.otherToolsClosed = true;
    }

    private resetModal() {
        this.cookieConsentVisible = false;
        this.showSettingsDialog = false;
        this.resetDropdowns();
    }

    denyAllCookies() {
        this.resetModal();
        this.consentService.denyAllCookies();
        this.resetForm();
    }

    acceptAllCookies() {
        this.resetModal();
        this.consentService.acceptAllCookies();
        this.resetForm();
    }

    saveSomeCookies() {
        this.consentService.saveSomeCookies(this.cookieForm.value);
        this.resetModal();
    }
}
