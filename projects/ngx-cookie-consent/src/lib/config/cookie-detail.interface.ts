import { TranslatedText } from './translated-text.type';

export interface CookieDetail {
    name: string;
    description: string | TranslatedText;
    duration: string | TranslatedText;
}
