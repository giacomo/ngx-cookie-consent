import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NgxCookieEventbusService {
    public languageChangedSubject: Subject<boolean>;
    public languageChanged$: Observable<boolean>;

    public languageUpdatedSubject: Subject<string>;
    public languageUpdated$: Observable<string>;


    constructor() {
        this.languageChangedSubject = new Subject<boolean>();
        this.languageChanged$ = this.languageChangedSubject.asObservable();

        this.languageUpdatedSubject = new Subject<string>();
        this.languageUpdated$ = this.languageUpdatedSubject.asObservable();
    }
}
