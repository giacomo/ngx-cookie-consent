import { CookieDetail } from './cookie-detail.interface';
import { TranslatedText } from './translated-text.type';

export interface CookieItem {
    key: string;
    name: string | TranslatedText;
    description: string | TranslatedText;
    privacyPolicyUrl: string | TranslatedText;
    cookies: CookieDetail[];
}
