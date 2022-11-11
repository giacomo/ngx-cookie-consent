import { CookieDetail } from './cookie-detail.interface';
import { TranslatableString } from './translatable-string.interface';

export interface CookieItem {
    key: string;
    name: string | TranslatableString;
    description: string | TranslatableString;
    privacyPolicyUrl: string | TranslatableString;
    cookies: CookieDetail[];
}
