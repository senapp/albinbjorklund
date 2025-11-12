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
    Albin,
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

    Name,
    Links,
    Tools,
    Description,
    Gallery,
    GalleryPhotosText,

    Website,
    Award,
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
    [TranslationIdentity.Albin, { english: 'Albin', japanese: 'アルビン' }],
    [TranslationIdentity.Introduction1, { english: 'Hello, I\'m', japanese: 'こんにちは、スウェーデン出身の' }],
    [TranslationIdentity.Introduction2, { english: 'from Sweden,', japanese: 'です。' }],
    [TranslationIdentity.Introduction3, { english: 'a Software Engineer', japanese: 'ソフトウェエンジニアです' }],
    [TranslationIdentity.Introduction4, { english: 'Proficient in C#, Unity, Typescript and React.', japanese: 'C#、Unity、Typescript、React に精通しています。' }],
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

    [TranslationIdentity.Name, { english: 'Name', japanese: '名前' }],
    [TranslationIdentity.Links, { english: 'Links', japanese: 'リンク' }],
    [TranslationIdentity.Tools, { english: 'Tools', japanese: 'ツール' }],
    [TranslationIdentity.Description, { english: 'Description', japanese: '説明' }],
    [TranslationIdentity.Gallery, { english: 'Gallery', japanese: 'ギャラリー' }],
    [TranslationIdentity.GalleryPhotosText, { english: 'Showing {0} of {1} photos', japanese: '{1}枚中{0}枚を表示中' }],

    [TranslationIdentity.Website, { english: 'Website', japanese: 'ウェブサイト' }],
    [TranslationIdentity.Award, { english: 'Award', japanese: 'アワード' }],
]);

export const LinkTranslation = (link: string): string => {
    let identitiesToCheck = [
        TranslationIdentity.Website,
        TranslationIdentity.Award
    ]

    let linkLower = link.toLowerCase().trim();
    for (let index = 0; index < identitiesToCheck.length; index++) {
        const identity = identitiesToCheck[index];
        let identityLower = TranslationStore.get(identity)?.english.toLowerCase().trim();
        if (linkLower == identityLower) {
            return GetTranslation(identity);
        }
    }

    return link;
}

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