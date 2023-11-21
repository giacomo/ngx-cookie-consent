import { TestBed } from '@angular/core/testing';

import { NgxCookieService } from './ngx-cookie.service';

describe('NgxCookieService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        const service = TestBed.inject(NgxCookieService);
        expect(service).toBeTruthy();
    });

    it('should return false if key doesnt exists in cookie', () => {
        const service = TestBed.inject(NgxCookieService);
        expect(service.get('xxx')).toBeFalsy();
    });

    it('should exact value if cookie exists', () => {
        window.document.cookie = 'keyname=foo;';
        const service = TestBed.inject(NgxCookieService);
        expect(service.get('keyname')).toBeTruthy();
        expect(service.get('keyname')).toBe('foo');
    });

    it('should extract value if multiple cookies exists', () => {
        window.document.cookie = 'keyname=foo;';
        window.document.cookie = 'foo=bar;';
        const service = TestBed.inject(NgxCookieService);
        expect(service.get('foo')).toBeTruthy();
        expect(service.get('foo')).toBe('bar');
        expect(service.get('keyname')).toBe('foo');
    });

    it('should set value', () => {
        window.document.cookie = 'keyname=foo;';
        const service = TestBed.inject(NgxCookieService);
        service.set('keyname', 'foobar');

        expect(service.get('keyname')).toBeTruthy();
        expect(service.get('keyname')).toBe('foobar');
    });

    it('should set boolean value', () => {
        window.document.cookie = 'keyname=foo;';
        const service = TestBed.inject(NgxCookieService);
        service.set('keyname', true);

        expect(service.get('keyname')).toBeTruthy();
        expect(service.get('keyname')).toBeTrue();
    });

    it('should delete cookie', () => {
        window.document.cookie = 'keyname=foo;';
        const service = TestBed.inject(NgxCookieService);
        service.delete('keyname');

        expect(service.get('keyname')).toBeFalsy();
    });
});
