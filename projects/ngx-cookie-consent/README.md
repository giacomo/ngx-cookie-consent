# @localia/ngx-cookie-consent

Angular multi-language module to display a cookie consent banner without other dependencies.

[![Open in Codeflow](https://developer.stackblitz.com/img/open_in_codeflow.svg)](https:///pr.new/github.com/giacomo/ngx-cookie-consent)

###### Works with Angular v14+
###### Available languages: English, German, Italian, Portuguese

## Installation

### Install the package via npm:
```bash
npm install @localia/ngx-cookie-consent --save
```

### Install the package with yarn:
```bash
yarn add @localia/ngx-cookie-consent
```

## Usage

### Import the module

```typescript
import { NgxCookieConsentModule } from '@localia/ngx-cookie-consent';

// use your configuration or leave it empty
// const cookieConfig = {};

@NgModule({
    imports: [
        // using own configuration pass the config object  
        NgxCookieConsentModule.forRoot(),
    ],
})
```

### Add the cookie consent component to your template at the top for all pages eg. app.component.html

```html
<ngx-cookie-consent></ngx-cookie-consent>
<router-outlet></router-outlet>
```

### Usage in templates to check if the user has accepted the cookie consent

```html
<div *ngxIfConsent="'functional_google_maps'">
    This content is only visible if functional_google_maps consent is given.
    (In this example functional_google_maps is the name of the cookie configured in the config object)
</div>
```

## Configuration

| Name                  | Type                             | Default            | Description                                                                        |
|-----------------------|----------------------------------|--------------------|------------------------------------------------------------------------------------|
| privacyPolicyUrl      | string &#124; TranslatableString | '#'                | URL to your privacy policy ⚠ required ⚠                                            |
| imprintUrl            | string &#124; TranslatableString | '#'                | URL to your imprint ⚠ required ⚠                                                   |
| defaultLanguage       | string                           | 'en'               | Default language for the cookie consent banner                                     |
| availableLanguages    | string[]                         | ['en', 'de', 'it'] | Available languages for the cookie consent banner                                  |
| showLanguageSwitcher  | boolean                          | true               | Show language switcher                                                             |
| showBadgeOpener       | boolean                          | true               | Show badge opener                                                                  |
| openerPosition        | enum                             | 'left-bottom'      | Position of the badge eg. 'left-top', 'right-top' , 'left-bottom' , 'right-bottom' |
| customClass           | string                           | ''                 | Custom class for the cookie consent banner                                         |
| cookiePrefix          | string                           | 'cookieconsent_'   | Prefix for the cookie consent banner                                               |
| cookieExpiryDays      | number                           | 365                | Expiry days for the cookie consent banner                                          |
| showCookieDetails     | boolean                          | false              | Show cookie details                                                                |
| showFunctionalCookies | boolean                          | true               | Show functional cookies                                                            |
| functionalCookies     | CookieItem[]                     | []                 | Functional cookies                                                                 |
| showMarketingCookies  | boolean                          | true               | Show marketing cookies                                                             |
| marketingCookies      | CookieItem[]                     | []                 | Marketing cookies                                                                  |
| showEssentialCookies  | boolean                          | true               | Show essential cookies                                                             |
| essentialCookies      | CookieItem[]                     | []                 | Essential cookies                                                                  |
| showOtherTools        | boolean                          | true               | Show other tools                                                                   |
| otherTools            | CookieItem[]                     | []                 | Other tools                                                                        |
| excludeRoutes         | string[]                         | []                 | Exclude routes eg. ['/privacy-policy']                                             |

### CookieItem interface

| Name             | Type                             | Description                                                                                                                             |
|------------------|----------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| key              | string                           | Key for the cookie eg. 'functional_google_analytics'                                                                                    |
| name             | string &#124; TranslatableString | Name for the cookie eg. 'Google Analytics'                                                                                              |
| description      | string &#124; TranslatableString | Description for the cookie eg. 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.' |
| privacyPolicyUrl | string &#124; TranslatableString | URL to the privacy policy for the cookie eg. 'https://policies.google.com/privacy'                                                      |
| cookies          | CookieDetail[]                   | Cookie details for the cookie                                                                                                           |

### CookieDetail interface

| Name        | Type                             | Description                                                                      |
|-------------|----------------------------------|----------------------------------------------------------------------------------|
| name        | string                           | Name for the saved cookie eg. '_ga'                                              |
| description | string &#124; TranslatableString | Description for the saved cookie eg. 'This cookie is used to distinguish users.' |
| duration    | string &#124; TranslatableString | Duration for the saved cookie eg. '2 years'                                      |

### TranslatableString interface

The `TranslatableString` interface is used to define a string that can be translated into multiple languages. **It is optional to use this interface. If you don't use it, the string will be used as it is.**

> ⚠ The `TranslatableString` interface if used, will automatically fall back to defaultLanguage used if no translation key defined for the desired language.

| Name | Type   | Description                             |
|------|--------|-----------------------------------------|
| en   | string | English string for the specified key    |
| de   | string | German string for the specified key     |
| it   | string | Italian string for the specified key    |
| pt   | string | Portuguese string for the specified key |

## Contributing

This project has a maintainer that actively monitors its issue queue and responds in a timely manner. This means that bug reports, tasks, feature requests and support request posted in the project's issue should receive timely attention from project's maintainers. Other community members are also welcome to resolve issues posted to the issue queue.

## License

ngx-cookie-consent is licensed under the [MIT license](http://opensource.org/licenses/MIT).
