import { TranslatableString } from './translatable-string.interface';

export interface CookieDetail {
    name: string;
    description: string | TranslatableString;
    duration: string | TranslatableString;
}
