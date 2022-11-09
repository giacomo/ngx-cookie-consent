import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCookieConsentModule } from 'projects/ngx-cookie-consent/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
    essentialCookies,
    functionalCookies,
    marketingCookies,
    otherTools,
} from './cookie.config';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutComponent],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        NgxCookieConsentModule.forRoot({
            imprintUrl: {
                en: 'https://www.example.com/imprint',
                ptbr: 'https://www.example.com/imprint?l=ptbr',
                default: 'https://www.example.com/imprint',
            },
            privacyPolicyUrl: {
                en: 'https://www.example.com/privacy-policy',
                ptbr: 'https://www.example.com/privacy-policy?l=ptbr',
                default: 'https://www.example.com/privacy-policy',
            },
            functionalCookies: functionalCookies,
            marketingCookies: marketingCookies,
            essentialCookies: essentialCookies,
            otherTools: otherTools,
            showCookieDetails: true,
            excludeRoutes: ['/about'],
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
