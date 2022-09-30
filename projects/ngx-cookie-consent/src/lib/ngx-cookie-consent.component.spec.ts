import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxCookieConsentComponent } from './ngx-cookie-consent.component';

describe('NgxCookieConsentComponent', () => {
  let component: NgxCookieConsentComponent;
  let fixture: ComponentFixture<NgxCookieConsentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxCookieConsentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxCookieConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
