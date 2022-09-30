import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCookieConsentModule } from 'projects/ngx-cookie-consent/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgxCookieConsentModule.forRoot({
            imprintUrl: 'https://www.example.com/imprint',
            privacyPolicyUrl: 'https://www.example.com/privacy-policy',
            functionalCookies: [
                {
                    key: 'functional_google_analytics',
                    name: 'Google Analytics',
                    description: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
                    privacyPolicyUrl: 'https://policies.google.com/privacy',
                    cookies: [
                        {
                            name: '_ga',
                            description: 'This cookie is used to distinguish users.',
                            duration: '2 years',
                        },
                        {
                            name: '_gid',
                            description: 'This cookie is used to distinguish users.',
                            duration: '24 hours',
                        },
                        {
                            name: '_gat',
                            description: 'This cookie is used to throttle request rate.',
                            duration: '1 minute',
                        },
                        {
                            name: '_gat_gtag_UA_XXXXXXXXX_1',
                            description: 'This cookie is used to throttle request rate.',
                            duration: '1 minute',
                        },
                        {
                            name: 'AMP_TOKEN',
                            description: 'This cookie is used to throttle request rate.',
                            duration: '1 minute',
                        }
                    ]
                },
                {
                    key: 'functional_google_tag_manager',
                    name: 'Google Tag Manager',
                    description: 'Google Tag Manager is a tag management system that allows you to quickly and easily update tags and code snippets on your website.',
                    privacyPolicyUrl: 'https://policies.google.com/privacy',
                    cookies: [
                        {
                            name: '_ga',
                            description: 'This cookie is used to distinguish users.',
                            duration: '2 years',
                        },
                        {
                            name: '_gid',
                            description: 'This cookie is used to distinguish users.',
                            duration: '24 hours',
                        }
                    ]
                }
            ],
            otherTools: [
                {
                    key: 'other_active_campaign',
                    name: 'Active Campaign',
                    description: 'Active Campaign is a marketing automation platform.',
                    privacyPolicyUrl: 'https://www.activecampaign.com/privacy-policy',
                    cookies: [
                        {
                            name: '_act',
                            description: 'This cookie is used to distinguish users.',
                            duration: '2 years',
                            privacyPolicyUrl: 'https://www.activecampaign.com/privacy-policy',
                        }
                    ]
                },
                {
                    key: 'other_calendly',
                    name: 'Calendly',
                    description: 'Calendly is a scheduling tool.',
                    privacyPolicyUrl: 'https://calendly.com/privacy',
                    cookies: []
                }
            ],
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
