import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, InjectionToken, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NgxCookieService {

  private readonly documentIsAccessible: boolean;

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: InjectionToken<Object>,
  ) {
    this.documentIsAccessible = isPlatformBrowser(this.platformId);
  }

  /**
     * @param name Cookie name
     */
   check(name: string): boolean {
      if (!this.documentIsAccessible) {
          return false;
      }

      name = encodeURIComponent(name);
      const regExp = this.getCookieRegExp(name);

      return regExp.test(this.document.cookie);
  }

  /**
   * @param name Cookie name
   */
  get(name: string): string|boolean|undefined {
      if (this.documentIsAccessible && this.check(name)) {
          name = encodeURIComponent(name);

          const regExp: RegExp = this.getCookieRegExp(name);
          const result: RegExpExecArray|null = regExp.exec(this.document.cookie);

          if (result === null) {
              return false;
          }

          const returnValue = decodeURIComponent(result[1]);

          if (returnValue.toLowerCase() === 'true') {
              return true;
          }

          if (returnValue.toLowerCase() === 'false') {
              return false;
          }

          return decodeURIComponent(result[1]);
      }

      return undefined;
  }

  set(name: string, value: string|boolean, expiringDays: number = 1, path: string = '/'): void {
      if (!this.documentIsAccessible) {
          return;
      }

      let cookieString: string = encodeURIComponent( name ) + '=' + encodeURIComponent( value ) + ';';

      const dateExpires: Date = new Date( new Date().getTime() + expiringDays * 86400000);
      cookieString += 'expires=' + dateExpires.toUTCString() + ';';
      cookieString += 'path=' + path + ';';
      cookieString += 'SameSite=None; Secure;';

      this.document.cookie = cookieString;
  }

  delete(name: string, path: string = '/'): void {
      if (!this.documentIsAccessible) {
          return;
      }

      let cookieString: string = encodeURIComponent( name ) + '=;';

      cookieString += 'expires=Thu, 01 Jan 1970 00:00:01 GMT;';
      cookieString += 'path=' + path + ';';
      cookieString += 'SameSite=None; Secure;';

      this.document.cookie = cookieString;
  }

  /**
   * @param name Cookie name
   */
  private getCookieRegExp(name: string): RegExp {
      return new RegExp('(?:^' + name + '|;\\s*' + name + ')=(.*?)(?:;|$)', 'g');
  }
}
