import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCookieConsentModule } from 'projects/ngx-cookie-consent/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { essentialCookies, functionalCookies, marketingCookies, otherTools } from './cookie.config';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        NgxCookieConsentModule.forRoot({
            imprintUrl: 'https://www.example.com/imprint',
            privacyPolicyUrl: 'https://www.example.com/privacy-policy',
            functionalCookies: functionalCookies,
            marketingCookies: marketingCookies,
            essentialCookies: essentialCookies,
            otherTools: otherTools,
            excludeRoutes: ['/about']
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
