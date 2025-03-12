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
    EmailExplain,
    FirstName,
    LastName,
    Organization,
    Position,
    Email,
    Phone,
    Subject,
    Message,
    Send,
    FirstNameError,
    LastNameError,
    OrganizationError,
    EmailError,
    SubjectError,
    MessageError,
    Location,
    Games,
    Websites,
    Business,
    Applications,
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
    [TranslationIdentity.Introduction1, { english: 'Hello, I\'m', japanese: 'こんにちは、スウェーデン出身の' }],
    [TranslationIdentity.Introduction2, { english: 'from Sweden,', japanese: 'です。' }],
    [TranslationIdentity.Introduction3, { english: 'a Software Designer and Game Developer (and sometimes a model).', japanese: 'ソフトウェアデザイナー兼ゲーム開発者です（モデルも時々やります）。' }],
    [TranslationIdentity.Introduction4, { english: 'Profient in C#, Unity, Typescript and React.', japanese: 'C#、Unity、Typescript、Reactに精通しています。' }],
    [TranslationIdentity.Introduction5, { english: 'Check out my various', japanese: '私のさまざまな' }],
    [TranslationIdentity.Introduction6, { english: '.', japanese: 'をご覧ください。' }],
    [TranslationIdentity.EmailExplain, { english: 'This is my "public" email, you might have already contacted me with my "private" email.', japanese: 'これは私の「公開」メールです。すでに私の「非公開」メールで私に連絡しているかもしれません。' }],
    [TranslationIdentity.FirstName, { english: 'First Name', japanese: '名' }],
    [TranslationIdentity.LastName, { english: 'Last Name', japanese: '姓' }],
    [TranslationIdentity.Organization, { english: 'Organization', japanese: '組織' }],
    [TranslationIdentity.Position, { english: 'Position', japanese: '役職' }],
    [TranslationIdentity.Email, { english: 'Email', japanese: 'メール' }],
    [TranslationIdentity.Phone, { english: 'Phone', japanese: '電話番号' }],
    [TranslationIdentity.Subject, { english: 'Subject', japanese: '件名' }],
    [TranslationIdentity.Message, { english: 'Message', japanese: 'メッセージ' }],
    [TranslationIdentity.Send, { english: 'Send', japanese: '送る' }],
    [TranslationIdentity.FirstNameError, { english: 'Please enter your first name.', japanese: '名を入力してください。' }],
    [TranslationIdentity.LastNameError, { english: 'Please enter your last name.', japanese: '姓を入力してください。' }],
    [TranslationIdentity.OrganizationError, { english: 'Please provide the full organization name.', japanese: '組織名を入力してください。' }],
    [TranslationIdentity.EmailError, { english: 'Please provide a valid email address.', japanese: '有効なメールアドレスを入力してください。' }],
    [TranslationIdentity.SubjectError, { english: 'Subject is too short.', japanese: '件名が短すぎます。' }],
    [TranslationIdentity.MessageError, { english: 'Message is too short. Please provide more information.', japanese: 'メッセージが短すぎます。詳細を入力してください。' }],
    [TranslationIdentity.Location, { english: 'Japan, Oita 🇯🇵', japanese: '日本、大分 🇯🇵'}],
    [TranslationIdentity.Games, { english: 'Games', japanese: 'ゲーム' }],
    [TranslationIdentity.Websites, { english: 'Websites', japanese: 'ウェブサイト' }],
    [TranslationIdentity.Business, { english: 'Business', japanese: 'ビジネス' }],
    [TranslationIdentity.Applications, { english: 'Applications', japanese: 'アプリケーション' }],
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