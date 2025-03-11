export enum Language {
    English,
    Japanese,
}

export const setLangauge = (language: Language): void => {
    window.localStorage.setItem('language', language.toString());
    window.location.reload();
};

export const getLanguage = (): Language => {
    const languageIndex = Number(window.localStorage.getItem('language') ?? '0');
    return Language[Language[languageIndex]];
};

export const switchLanguage = (): void => {
    if (getLanguage() === Language.English) {
        setLangauge(Language.Japanese);
    } else {
        setLangauge(Language.English);
    }
};

export enum TranslationIdentity {
    Home,
    Greeting,
    Projects,
    Resume,
    Contact,
    Name,
    Introduction1,
    Introduction2,
    Introduction3,
    Introduction4,
    Introduction5,
    Introduction6,
}

export type TranslationInformation = {
    english: string;
    japanese: string;
}

export const TranslationStore = new Map<TranslationIdentity, TranslationInformation>([
    [TranslationIdentity.Home, { english: 'Home', japanese: 'ホーム' }],
    [TranslationIdentity.Greeting, { english: 'Hello! 👋', japanese: 'こんにちは！ 👋' }],
    [TranslationIdentity.Projects, { english: 'Projects', japanese: 'プロジェクト' }],
    [TranslationIdentity.Resume, { english: 'Resume', japanese: '履歴書' }],
    [TranslationIdentity.Contact, { english: 'Contact', japanese: '連絡先' }],
    [TranslationIdentity.Name, { english: 'Albin', japanese: 'アルビン' }],
    [TranslationIdentity.Introduction1, { english: 'Hello, I\'m', japanese: 'こんにちは、私は' }],
    [TranslationIdentity.Introduction2, { english: ',', japanese: 'です。' }],
    [TranslationIdentity.Introduction3, { english: 'a Software Designer and Game Developer (and sometimes a model).', japanese: 'ソフトウェアデザイナー兼ゲーム開発者です（モデルも時々やります）。' }],
    [TranslationIdentity.Introduction4, { english: 'Profient in C#, Unity, Typescript and React.', japanese: 'C#、Unity、Typescript、Reactに精通しています。' }],
    [TranslationIdentity.Introduction5, { english: 'Check out my various', japanese: '私のさまざまな' }],
    [TranslationIdentity.Introduction6, { english: '.', japanese: 'をご覧ください' }],
]);

export const GetTranslation = (identity: TranslationIdentity): string => {
    const language = getLanguage();
    const translation = TranslationStore.get(identity);
    if (translation) {
        return language === Language.English ? translation.english : translation.japanese;
    }
    else {
        return 'ERROR';
    }
}