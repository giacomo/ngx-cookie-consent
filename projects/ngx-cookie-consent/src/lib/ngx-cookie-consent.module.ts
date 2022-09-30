import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxCookieConsentConfigService } from './config/ngx-cookie-consent-config.service';
import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { NgxCookieConsentService } from './services/ngx-cookie-consent/ngx-cookie-consent.service';
import { NgxCookieService } from './services/ngx-cookie/ngx-cookie.service';
import { NgxLanguageService } from './services/ngx-language/ngx-language.service';

@NgModule({
    declarations: [
        NgxCookieConsentComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        NgxCookieConsentComponent
    ]
})
export class NgxCookieConsentModule {
    static forRoot(config: NgxCookieConsentConfigService = {}): ModuleWithProviders<NgxCookieConsentModule> {
        return {
            ngModule: NgxCookieConsentModule,
            providers: [
                {
                    provide: NgxCookieConsentConfigService,
                    useFactory: () => {
                        const defaultConfig = new NgxCookieConsentConfigService();
                        return Object.assign(defaultConfig, config);
                    }
                },
                NgxCookieConsentService,
                NgxCookieService,
                NgxLanguageService,
            ]
        };
    }
}
