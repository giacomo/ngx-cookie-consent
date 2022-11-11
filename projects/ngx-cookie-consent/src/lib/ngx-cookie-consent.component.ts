import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgxCookieConsentService } from './services/ngx-cookie-consent/ngx-cookie-consent.service';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'ngx-cookie-consent',
    templateUrl: './ngx-cookie-consent.component.html',
    styleUrls: ['./ngx-cookie-consent.component.scss'],
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
        functional: { key: string; selected: boolean }[],
        marketing: { key: string; selected: boolean }[],
    };

    constructor(
        private router: Router,
        private consentService: NgxCookieConsentService,
        private formBuilder: FormBuilder
    ) {
        this.cookieFields = this.consentService.getCookieFields();
        this.cookieForm = this.buildForm();
    }

    get activeLang(): string {
        return this.consentService.getConfig('defaultLanguage');
    }

    get privacyPolicyUrl(): string {
        const config = this.consentService.getConfig('privacyPolicyUrl');
        return this.consentService.getTranslationFromObject(config);
    }

    get imprintUrl(): string {
        const config = this.consentService.getConfig('imprintUrl');
        return this.consentService.getTranslationFromObject(config);
    }

    get availableLanguages(): string[] {
        return this.consentService.getConfig('availableLanguages');
    }

    get functionalCookiesAllSelected(): boolean {
        const arr = Object.values(this.cookieForm.get('functional')?.value);

        if (arr.length === 0) {
            return false;
        }

        return arr.every((value) => value === true);
    }

    get marketingCookiesAllSelected(): boolean {
        const arr = Object.values(this.cookieForm.get('marketing')?.value);

        if (arr.length === 0) {
            return false;
        }

        return arr.every((value) => value === true);
    }

    translate(key: string, translationLang?: string): string {
        return this.consentService.getTranslation(key, translationLang);
    }

    translate_o(key: string | object, translationLang?: string): string {
        return this.consentService.getTranslationFromObject(key, translationLang);
    }

    config(key: string) {
        return this.consentService.getConfig(key);
    }

    switchLanguage(lang: string) {
        this.dropDownOpen = false;
        this.consentService.setLanguage(lang);
    }

    toggle($event: any, category: string) {
        const fields: any = this.consentService.getCookieFields();
        const cookies = fields[category];
        cookies.forEach((field: any) => {
            this.cookieForm
                .get(category)
                ?.get(field.key)
                ?.setValue($event.currentTarget.checked);
        });
    }

    back() {
        this.showSettingsDialog = false;
        this.resetDropdowns();
        this.resetForm();
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

    private buildForm(): FormGroup {
        return this.formBuilder.group({
            functional: this.buildCookieFields(this.cookieFields.functional),
            marketing: this.buildCookieFields(this.cookieFields.marketing),
        });
    }

    private buildCookieFields(fields: { key: string; selected: boolean }[]) {
        const group: any = {};
        fields.forEach((field) => {
            group[field.key] = this.formBuilder.control(field.selected);
        });

        return this.formBuilder.group(group);
    }

    private resetForm() {
        const fields: any = this.consentService.getCookieFields();
        const categoryKeys = Object.keys(fields);
        categoryKeys.forEach((categoryKey) => {
            const category = fields[categoryKey];
            category.forEach((field: any) => {
                this.cookieForm
                    .get(categoryKey)
                    ?.get(field.key)
                    ?.setValue(field.selected);
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

    ngOnInit(): void {
        this.router.events
            .pipe(filter((event) => event instanceof NavigationEnd))
            .subscribe({
                next: (event: any) => {
                    const excludedRoutes =
                        this.consentService.getConfig('excludeRoutes');
                    const realPath = event.urlAfterRedirects.split('?')[0];

                    if (excludedRoutes.includes(realPath)) {
                        this.cookieConsentVisible = false;
                    } else {
                        this.cookieConsentVisible =
                            this.consentService.shouldDisplayCookieConsent();
                    }
                },
            });
    }

    closeDropDown($event: Event) {
        const eventTarget = $event.target as HTMLElement;
        const parentTarget = eventTarget.parentElement as HTMLElement;

        if (
            eventTarget.classList.contains('language-chooser') ||
            parentTarget.classList.contains('language-chooser')
        ) {
            return;
        }

        this.dropDownOpen = false;
    }
}
