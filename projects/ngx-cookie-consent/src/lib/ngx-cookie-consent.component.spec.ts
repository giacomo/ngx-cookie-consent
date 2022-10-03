import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCookieConsentService } from './services/ngx-cookie-consent/ngx-cookie-consent.service';

describe('NgxCookieConsentComponent', () => {
    let component: NgxCookieConsentComponent;
    let fixture: ComponentFixture<NgxCookieConsentComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                FormsModule,
                ReactiveFormsModule,
            ],
            declarations: [NgxCookieConsentComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NgxCookieConsentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have default values', () => {
        expect(component.cookieForm).toBeTruthy();
        expect(component.cookieConsentVisible).toBeTrue();
        expect(component.showSettingsDialog).toBeFalse();
        expect(component.dropDownOpen).toBeFalse();
        expect(component.functionalCookiesClosed).toBeTrue();
        expect(component.marketingCookiesClosed).toBeTrue();
        expect(component.essentialCookiesClosed).toBeTrue();
        expect(component.otherToolsClosed).toBeTrue();
    });

    it('should get activeLang from config', () => {
        const configMock = TestBed.inject(NgxCookieConsentService);
        spyOn(configMock, 'getConfig').and.returnValue('en');

        expect(component.activeLang).toEqual('en');
        expect(configMock.getConfig).toHaveBeenCalledWith('defaultLanguage');
    });

    it('should get privacyPolicyUrl from config', () => {
        const configMock = TestBed.inject(NgxCookieConsentService);
        spyOn(configMock, 'getConfig').and.returnValue('someurl');

        expect(component.privacyPolicyUrl).toEqual('someurl');
        expect(configMock.getConfig).toHaveBeenCalledWith('privacyPolicyUrl');
    });

    it('should get imprintUrl from config', () => {
        const configMock = TestBed.inject(NgxCookieConsentService);
        spyOn(configMock, 'getConfig').and.returnValue('someurl');

        expect(component.imprintUrl).toEqual('someurl');
        expect(configMock.getConfig).toHaveBeenCalledWith('imprintUrl');
    });

    it('should get availableLanguages from config', () => {
        const configMock = TestBed.inject(NgxCookieConsentService);
        spyOn(configMock, 'getConfig').and.returnValue(['en', 'de']);

        expect(component.availableLanguages).toEqual(['en', 'de']);
        expect(configMock.getConfig).toHaveBeenCalledWith('availableLanguages');
    });

    it('should get functionalCookiesAllSelected return false', () => {
        const formBuilder = TestBed.inject(FormBuilder);
        component.cookieForm = formBuilder.group({
            functional: formBuilder.group({
                functional_google_analytics: formBuilder.control(true),
                functional_google_tag_manager: formBuilder.control(false),
            })
        });

        expect(component.functionalCookiesAllSelected).toBeFalse();
    });

    it('should get functionalCookiesAllSelected return true', () => {
        const formBuilder = TestBed.inject(FormBuilder);
        component.cookieForm = formBuilder.group({
            functional: formBuilder.group({
                functional_google_analytics: formBuilder.control(true),
                functional_google_tag_manager: formBuilder.control(true),
            })
        });

        expect(component.functionalCookiesAllSelected).toBeTrue();
    });

    it('should get marketingCookiesAllSelected return false', () => {
        const formBuilder = TestBed.inject(FormBuilder);
        component.cookieForm = formBuilder.group({
            marketing: formBuilder.group({
                marketing_google_ads: formBuilder.control(true),
                marketing_facebook: formBuilder.control(false),
            })
        });

        expect(component.marketingCookiesAllSelected).toBeFalse();
    });

    it('should get marketingCookiesAllSelected return true', () => {
        const formBuilder = TestBed.inject(FormBuilder);
        component.cookieForm = formBuilder.group({
            marketing: formBuilder.group({
                marketing_google_ads: formBuilder.control(true),
                marketing_facebook: formBuilder.control(true),
            })
        });

        expect(component.marketingCookiesAllSelected).toBeTrue();
    });

    it('should get translation from consent service', () => {
        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'getTranslation').and.returnValue('some translation');

        expect(component.translate('some key')).toEqual('some translation');
        expect(consentServiceMock.getTranslation).toHaveBeenCalledWith('some key', undefined);
    });

    it('should get translation from consent service with language', () => {
        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'getTranslation').and.returnValue('some translation');

        expect(component.translate('some key', 'en')).toEqual('some translation');
        expect(consentServiceMock.getTranslation).toHaveBeenCalledWith('some key', 'en');
    });

    it('should get config from consent service', () => {
        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'getConfig').and.returnValue('some config');

        expect(component.config('some key')).toEqual('some config');
        expect(consentServiceMock.getConfig).toHaveBeenCalledWith('some key');
    });

    it('should switch language and close drop down', () => {
        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'setLanguage').and.returnValue();

        component.dropDownOpen = true;
        component.switchLanguage('en');

        expect(consentServiceMock.setLanguage).toHaveBeenCalledWith('en');
        expect(component.dropDownOpen).toBeFalse();
    });

    it('should toggle all functional cookies', () => {
        const formBuilder = TestBed.inject(FormBuilder);
        component.cookieForm = formBuilder.group({
            functional: formBuilder.group({
                functional_google_analytics: formBuilder.control(false),
                functional_google_tag_manager: formBuilder.control(false),
            })
        });

        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'getCookieFields').and.returnValue({
            functional: [
                {
                    key: 'functional_google_analytics',
                    selected: false,
                },
                {
                    key: 'functional_google_tag_manager',
                    selected: false,
                }
            ],
            marketing: []
        });

        const event = {
            currentTarget: {
                checked: true
            }
        };

        component.toggle(event, 'functional');

        const form = component.cookieForm.get('functional') as FormGroup;
        expect(form.get('functional_google_analytics')?.value).toBeTrue();
        expect(form.get('functional_google_tag_manager')?.value).toBeTrue();
    });

    it('should toggle all marketing cookies', () => {
        const formBuilder = TestBed.inject(FormBuilder);
        component.cookieForm = formBuilder.group({
            marketing: formBuilder.group({
                marketing_google_ads: formBuilder.control(false),
                marketing_facebook: formBuilder.control(false),
            })
        });

        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'getCookieFields').and.returnValue({
            functional: [],
            marketing: [
                {
                    key: 'marketing_google_ads',
                    selected: false,
                },
                {
                    key: 'marketing_facebook',
                    selected: false,
                }
            ]
        });

        const event = {
            currentTarget: {
                checked: true
            }
        };

        component.toggle(event, 'marketing');

        const form = component.cookieForm.get('marketing') as FormGroup;
        expect(form.get('marketing_google_ads')?.value).toBeTrue();
        expect(form.get('marketing_facebook')?.value).toBeTrue();
    });

    it('should reset state on back button', () => {
        component.showSettingsDialog = true;
        spyOn(component as any, 'resetDropdowns').and.returnValue(null);
        spyOn(component as any, 'resetForm').and.returnValue(null);

        component.back();

        expect(component.showSettingsDialog).toBeFalse();
        expect((component as any).resetDropdowns).toHaveBeenCalled();
        expect((component as any).resetForm).toHaveBeenCalled();
    });

    it('should deny all cookies and reset the modal and form', () => {
        spyOn(component as any, 'resetModal').and.returnValue(null);
        spyOn(component as any, 'resetForm').and.returnValue(null);

        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'denyAllCookies').and.returnValue();

        component.denyAllCookies();

        expect((component as any).resetModal).toHaveBeenCalled();
        expect((component as any).resetForm).toHaveBeenCalled();
        expect(consentServiceMock.denyAllCookies).toHaveBeenCalled();
    });

    it('should accept all cookies and reset the modal and form', () => {
        spyOn(component as any, 'resetModal').and.returnValue(null);
        spyOn(component as any, 'resetForm').and.returnValue(null);

        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'acceptAllCookies').and.returnValue();

        component.acceptAllCookies();

        expect((component as any).resetModal).toHaveBeenCalled();
        expect((component as any).resetForm).toHaveBeenCalled();
        expect(consentServiceMock.acceptAllCookies).toHaveBeenCalled();
    });

    it('should save some cookies and reset the modal', () => {
        spyOn(component as any, 'resetModal').and.returnValue(null);

        const consentServiceMock = TestBed.inject(NgxCookieConsentService);
        spyOn(consentServiceMock, 'saveSomeCookies').and.returnValue();

        component.saveSomeCookies();

        expect((component as any).resetModal).toHaveBeenCalled();
        expect(consentServiceMock.saveSomeCookies).toHaveBeenCalled();
        expect(consentServiceMock.saveSomeCookies).toHaveBeenCalledWith(component.cookieForm.value);
    });

});
