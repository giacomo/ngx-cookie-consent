import { CookieDetail } from './cookie-detail.interface';
import { TranslatableString } from './translatable-string.interface';

export interface CookieItem {
    enabled: boolean;
    key: string;
    name: string | TranslatableString;
    description: string | TranslatableString;
    privacyPolicyUrl: string | TranslatableString;
    cookies: CookieDetail[];
}
