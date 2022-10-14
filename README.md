# ngx-cookie-consent

Angular module to display a cookie consent banner without other dependencies.

## Installation

### Install the package via npm:
```bash
npm install ngx-cookie-consent --save
```

### Install the package with yarn:
```bash
yarn add ngx-cookie-consent
```

## Usage

### Import the module

```typescript
import { NgxCookieConsentModule } from 'ngx-cookie-consent';

// use your configuration or leave it empty
const cookieConfig = {};

@NgModule({
  imports: [
    NgxCookieConsentModule.forRoot(cookieConfig),
  ],
})
```

### Add the component to your template as example app.component.html

```html
<ngx-cookie-consent></ngx-cookie-consent>
<router-outlet></router-outlet>
```

## Configuration

| Name                  | Type     | Default          | Description                                                                        |
|-----------------------|----------|------------------|------------------------------------------------------------------------------------|
| privacyPolicyUrl      | string   | '#'              | URL to your privacy policy ⚠ required ⚠                                            |
| imprintUrl            | string   | '#'              | URL to your imprint ⚠ required ⚠                                                   |
| defaultLanguage       | string   | 'en'             | Default language for the cookie consent banner                                     |
| availableLanguages    | string[] | ['en', 'de']     | Available languages for the cookie consent banner                                  |
| showLanguageSwitcher  | boolean  | true             | Show language switcher                                                             |
| showBadgeOpener       | boolean  | true             | Show badge opener                                                                  |
| openerPosition        | enum     | 'left-bottom'    | Position of the badge eg. 'left-top', 'right-top' , 'left-bottom' , 'right-bottom' |
| customClass           | string   | ''               | Custom class for the cookie consent banner                                         |
| cookiePrefix          | string   | 'cookieconsent_' | Prefix for the cookie consent banner                                               |
| cookieExpiryDays      | number   | 365              | Expiry days for the cookie consent banner                                          |
| showCookieDetails     | boolean  | false            | Show cookie details                                                                |
| showFunctionalCookies | boolean  | true             | Show functional cookies                                                            |
| functionalCookies     | any[]    | []               | Functional cookies                                                                 |
| showMarketingCookies  | boolean  | true             | Show marketing cookies                                                             |
| marketingCookies      | any[]    | []               | Marketing cookies                                                                  |
| showEssentialCookies  | boolean  | true             | Show essential cookies                                                             |
| essentialCookies      | any[]    | []               | Essential cookies                                                                  |
| showOtherTools        | boolean  | true             | Show other tools                                                                   |
| otherTools            | any[]    | []               | Other tools                                                                        |
| excludeRoutes         | string[] | []               | Exclude routes eg. ['/privacy-policy']                                             |



## Contributing

This project has a maintainer that actively monitors its issue queue and responds in a timely manner. This means that bug reports, tasks, feature requests and support request posted in the project's issue should receive timely attention from project's maintainers. Other community members are also welcome to resolve issues posted to the issue queue.

## License

ngx-cookie-consent is licensed under the [MIT license](http://opensource.org/licenses/MIT).
