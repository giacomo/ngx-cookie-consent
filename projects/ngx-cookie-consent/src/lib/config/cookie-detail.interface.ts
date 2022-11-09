import { TranslatedText } from './translated-text.type';

export interface CookieDetail {
    name: string | TranslatedText;
    description: string | TranslatedText;
    duration: string | TranslatedText;
}
