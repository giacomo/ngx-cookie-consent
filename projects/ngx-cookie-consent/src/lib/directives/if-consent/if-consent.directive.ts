import { Directive, Input, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgxCookieManagerService } from '../../services/ngx-cookie-manager/ngx-cookie-manager.service';
import { filter } from 'rxjs';

@Directive({
  selector: '[ngxIfConsent]'
})
export class IfConsentDirective implements OnInit, OnDestroy {
    private cookieName!: string;
    private subscription: any;

    private show = false;
    @Input() set ngxIfConsent(name: string) {
        this.cookieName = name;
        this.initSubscription();
    }

    constructor(
        private cookieManager: NgxCookieManagerService,
        private templateRef: TemplateRef<unknown>,
        private vcr: ViewContainerRef
    ) {}

    ngOnInit(): void {
        this.loadSavedValue();
    }

    ngOnDestroy(): void {
        this.removeSubscription();
    }

    private displayTemplate() {
        this.vcr.clear();
        if (this.show) {
            this.vcr.createEmbeddedView(this.templateRef);
        }
    }

    private initSubscription() {
        this.subscription = this.cookieManager.cookieUpdated$.pipe(
            filter((cookie) => cookie.name === this.cookieName)
        ).subscribe((cookie) => {
            this.show = cookie.state;
            this.displayTemplate();
        });
    }


    private removeSubscription() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    private loadSavedValue() {
        this.show = this.cookieManager.getCookie(this.cookieName);
        this.displayTemplate();
    }
}
