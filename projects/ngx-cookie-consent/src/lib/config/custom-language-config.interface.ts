export interface CustomLanguageConfig {
    languageKey: string;
    languageName: string;
    customIconPath: string|null;
    translations: { [key: string]: string };
}
