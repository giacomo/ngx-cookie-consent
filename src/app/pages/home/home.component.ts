import { Component, OnInit } from '@angular/core';
import { NgxCookieManagerService } from 'projects/ngx-cookie-consent/src/public-api';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private cookieManager: NgxCookieManagerService
    ) {
    }

    ngOnInit(): void {
    }

    get currentLanguage(): string {
        return this.cookieManager.getDisplayLanguage();
    }

    switchLanguage(lang: string): void {
        this.cookieManager.updateDisplayLanguage(lang);
    }

}
