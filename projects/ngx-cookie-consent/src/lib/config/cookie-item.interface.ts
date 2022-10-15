import { CookieDetail } from './cookie-detail.interface';

export interface CookieItem {
    key: string;
    name: string;
    description: string;
    privacyPolicyUrl: string;
    cookies: CookieDetail[];
}
