import { CookieItem } from 'projects/ngx-cookie-consent/src/public-api';

export const essentialCookies = [
    {
        key: 'essential_cookie_manager',
        name: {
            en: 'Essential Cookie Manager',
            ptbr: 'Gerenciador de cookies essenciais',
            default: 'Essential Cookie Manager',
        },
        description: {
            en: 'This cookie is used to manage the cookies on this website.',
            ptbr: 'Este cookie é usado para gerenciar os cookies neste site.',
            default:
                'This cookie is used to manage the cookies on this website.',
        },

        privacyPolicyUrl: {
            en: 'https://policies.google.com/privacy',
            ptbr: 'https://policies.google.com/privacy?hl=pt-BR',
            default: 'https://policies.google.com/privacy',
        },
        cookies: [],
    },
];

export const marketingCookies: CookieItem[] = [
    {
        key: 'marketing_google_analytics',
        name: {
            default: 'Google Analytics',
        },
        description: {
            en: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
            ptbr: 'O Google Analytics é um serviço de análise da web oferecido pelo Google que rastreia e relata o tráfego do site.',
            default:
                'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        },
        privacyPolicyUrl: {
            en: 'https://policies.google.com/privacy',
            ptbr: 'https://policies.google.com/privacy?hl=pt-BR',
            default: 'https://policies.google.com/privacy',
        },
        cookies: [
            {
                name: '_ga',
                description: {
                    en: 'This cookie is used to distinguish users.',
                    ptbr: 'Este cookie é usado para distinguir usuários.',
                    default: 'This cookie is used to distinguish users.',
                },
                duration: {
                    en: '2 years',
                    ptbr: '2 anos',
                    default: '2 years',
                },
            },
        ],
    },
];

export const functionalCookies = [
    {
        key: 'functional_google_analytics',
        name: 'Google Analytics',
        description: {
            en: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
            ptbr: 'O Google Analytics é um serviço de análise da web oferecido pelo Google que rastreia e relata o tráfego do site.',
            default:
                'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        },
        privacyPolicyUrl: {
            en: 'https://policies.google.com/privacy',
            ptbr: 'https://policies.google.com/privacy?hl=pt-BR',
            default: 'https://policies.google.com/privacy',
        },
        cookies: [
            {
                name: '_ga',
                description: {
                    en: 'This cookie is used to distinguish users.',
                    ptbr: 'Este cookie é usado para distinguir usuários.',
                    default: 'This cookie is used to distinguish users.',
                },
                duration: {
                    en: '2 years',
                    ptbr: '2 anos',
                    default: '2 years',
                },
            },
            {
                name: '_gid',
                description: {
                    en: 'This cookie is used to distinguish users.',
                    ptbr: 'Este cookie é usado para distinguir usuários.',
                    default: 'This cookie is used to distinguish users.',
                },
                duration: {
                    en: '24 hours',
                    ptbr: '24 horas',
                    default: '24 hours',
                },
            },
            {
                name: '_gat',
                description: {
                    en: 'This cookie is used to throttle request rate.',
                    ptbr: 'Este cookie é usado para limitar a taxa de solicitação.',
                    default: 'This cookie is used to throttle request rate.',
                },
                duration: {
                    en: '1 minute',
                    ptbr: '1 minuto',
                    default: '1 minute',
                },
            },
            {
                name: '_gat_gtag_UA_XXXXXXXXX_1',
                description: {
                    en: 'This cookie is used to throttle request rate.',
                    ptbr: 'Este cookie é usado para limitar a taxa de solicitação.',
                    default: 'This cookie is used to throttle request rate.',
                },
                duration: {
                    en: '1 minute',
                    ptbr: '1 minuto',
                    default: '1 minute',
                },
            },
            {
                name: 'AMP_TOKEN',
                description: {
                    en: 'This cookie is used to throttle request rate.',
                    ptbr: 'Este cookie é usado para limitar a taxa de solicitação.',
                    default: 'This cookie is used to throttle request rate.',
                },
                duration: {
                    en: '1 minute',
                    ptbr: '1 minuto',
                    default: '1 minute',
                },
            },
        ],
    },
    {
        key: 'functional_google_tag_manager',
        name: {
            en: 'Google Tag Manager',
            pt: 'Gerenciador de tags do Google',
            default: 'Google Tag Manager',
        },
        description: {
            en: 'Google Tag Manager is a tag management system that allows you to quickly and easily update tags and code snippets on your website.',
            ptbr: 'O Gerenciador de tags do Google é um sistema de gerenciamento de tags que permite que você atualize tags e snippets de código de maneira rápida e fácil em seu site.',
            default:
                'Google Tag Manager is a tag management system that allows you to quickly and easily update tags and code snippets on your website.',
        },
        privacyPolicyUrl: {
            en: 'https://policies.google.com/privacy',
            ptbr: 'https://policies.google.com/privacy?hl=pt-BR',
            default: 'https://policies.google.com/privacy',
        },
        cookies: [
            {
                name: '_ga',
                description: {
                    en: 'This cookie is used to distinguish users.',
                    ptbr: 'Este cookie é usado para distinguir usuários.',
                    default: 'This cookie is used to distinguish users.',
                },
                duration: {
                    en: '2 years',
                    ptbr: '2 anos',
                    default: '2 years',
                },
            },
            {
                name: '_gid',
                description: {
                    en: 'This cookie is used to distinguish users.',
                    ptbr: 'Este cookie é usado para distinguir usuários.',
                    default: 'This cookie is used to distinguish users.',
                },
                duration: {
                    en: '24 hours',
                    ptbr: '24 horas',
                    default: '24 hours',
                },
            },
        ],
    },
    {
        key: 'functional_google_maps',
        name: 'Google Maps',
        description: {
            en: 'Google Maps is a web mapping service developed by Google.',
            ptbr: 'Google Maps é um serviço de mapeamento da web desenvolvido pelo Google.',
            default:
                'Google Maps is a web mapping service developed by Google.',
        },
        privacyPolicyUrl: {
            en: 'https://policies.google.com/privacy',
            ptbr: 'https://policies.google.com/privacy?hl=pt-BR',
            default: 'https://policies.google.com/privacy',
        },
        cookies: [],
    },
];

export const otherTools = [
    {
        key: 'other_active_campaign',
        name: 'Active Campaign',
        description: {
            en: 'Active Campaign is a marketing automation platform.',
            ptbr: 'O Active Campaign é uma plataforma de automação de marketing.',
            default: 'Active Campaign is a marketing automation platform.',
        },
        privacyPolicyUrl: 'https://www.activecampaign.com/privacy-policy',
        cookies: [
            {
                name: '_act',
                description: {
                    en: 'This cookie is used to distinguish users.',
                    ptbr: 'Este cookie é usado para distinguir usuários.',
                    default: 'This cookie is used to distinguish users.',
                },
                duration: {
                    en: '2 years',
                    ptbr: '2 anos',
                    default: '2 years',
                },
            },
        ],
    },
    {
        key: 'other_calendly',
        name: 'Calendly',
        description: {
            en: 'Calendly is a scheduling tool.',
            ptbr: 'Calendly é uma ferramenta de agendamento.',
            default: 'Calendly is a scheduling tool.',
        },
        privacyPolicyUrl: {
            en: 'https://calendly.com/privacy',
            ptbr: 'https://calendly.com/pt/privacy',
            default: 'https://calendly.com/privacy',
        },
        cookies: [],
    },
];
