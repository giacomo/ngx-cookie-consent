import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxCookieConsentConfigService } from './config/ngx-cookie-consent-config.service';
import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';
import { NgxCookieConsentService } from './services/ngx-cookie-consent/ngx-cookie-consent.service';
import { NgxCookieService } from './services/ngx-cookie/ngx-cookie.service';
import { NgxLanguageService } from './services/ngx-language/ngx-language.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxCookieManagerService } from './services/ngx-cookie-manager/ngx-cookie-manager.service';
import { IfConsentDirective } from './directives/if-consent/if-consent.directive';

@NgModule({
    declarations: [
        NgxCookieConsentComponent,
        IfConsentDirective,
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        NgxCookieConsentComponent,
        IfConsentDirective,
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
                NgxCookieManagerService,
            ]
        };
    }
}
