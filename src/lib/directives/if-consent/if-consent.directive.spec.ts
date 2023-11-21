import { IfConsentDirective } from './if-consent.directive';
import { TestBed } from '@angular/core/testing';
import { NgxCookieManagerService } from '../../services/ngx-cookie-manager/ngx-cookie-manager.service';

describe('IfConsentDirective', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should create an instance', () => {
        const manager = TestBed.inject(NgxCookieManagerService);
        const templateRef = {
            elementRef: {},
            createEmbeddedView: () => {},
        } as any;

        const vcr = {
            clear: () => {},
            createEmbeddedView: () => {}
        } as any;

        const directive = new IfConsentDirective(manager, templateRef, vcr);
        expect(directive).toBeTruthy();
    });
});
