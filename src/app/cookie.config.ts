export const essentialCookies = [
    {
        key: 'essential_cookie_manager',
        name: 'Essential Cookie Manager',
        description: 'This cookie is used to manage the cookies on this website.',
        privacyPolicyUrl: 'https://www.example.com/privacy-policy',
        cookies: []
    }
];

export const marketingCookies = [
    {
        key: 'marketing_google_analytics',
        name: 'Google Analytics',
        description: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        privacyPolicyUrl: 'https://policies.google.com/privacy',
        cookies: [
            {
                name: '_ga',
                description: 'This cookie is used to distinguish users.',
                duration: '2 years'
            }
        ]
    }
];

export const functionalCookies = [
    {
        key: 'functional_google_analytics',
        name: 'Google Analytics',
        description: 'Google Analytics is a web analytics service offered by Google that tracks and reports website traffic.',
        privacyPolicyUrl: 'https://policies.google.com/privacy',
        cookies: [
            {
                name: '_ga',
                description: 'This cookie is used to distinguish users.',
                duration: '2 years',
            },
            {
                name: '_gid',
                description: 'This cookie is used to distinguish users.',
                duration: '24 hours',
            },
            {
                name: '_gat',
                description: 'This cookie is used to throttle request rate.',
                duration: '1 minute',
            },
            {
                name: '_gat_gtag_UA_XXXXXXXXX_1',
                description: 'This cookie is used to throttle request rate.',
                duration: '1 minute',
            },
            {
                name: 'AMP_TOKEN',
                description: 'This cookie is used to throttle request rate.',
                duration: '1 minute',
            }
        ]
    },
    {
        key: 'functional_google_tag_manager',
        name: 'Google Tag Manager',
        description: 'Google Tag Manager is a tag management system that allows you to quickly and easily update tags and code snippets on your website.',
        privacyPolicyUrl: 'https://policies.google.com/privacy',
        cookies: [
            {
                name: '_ga',
                description: 'This cookie is used to distinguish users.',
                duration: '2 years',
            },
            {
                name: '_gid',
                description: 'This cookie is used to distinguish users.',
                duration: '24 hours',
            }
        ]
    },
    {
        key: 'functional_google_maps',
        name: 'Google Maps',
        description: 'Google Maps is a web mapping service developed by Google.',
        privacyPolicyUrl: 'https://policies.google.com/privacy',
        cookies: []
    }
];

export const otherTools = [
    {
        key: 'other_active_campaign',
        name: 'Active Campaign',
        description: 'Active Campaign is a marketing automation platform.',
        privacyPolicyUrl: 'https://www.activecampaign.com/privacy-policy',
        cookies: [
            {
                name: '_act',
                description: 'This cookie is used to distinguish users.',
                duration: '2 years',
            }
        ]
    },
    {
        key: 'other_calendly',
        name: 'Calendly',
        description: 'Calendly is a scheduling tool.',
        privacyPolicyUrl: 'https://calendly.com/privacy',
        cookies: []
    }
];
