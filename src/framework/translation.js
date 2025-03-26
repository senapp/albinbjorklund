"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTranslation = exports.LinkTranslation = exports.TranslationStore = exports.TranslationIdentity = exports.switchLanguage = exports.getLanguage = exports.setLangauge = exports.Language = void 0;
var Language;
(function (Language) {
    Language[Language["English"] = 0] = "English";
    Language[Language["Japanese"] = 1] = "Japanese";
})(Language = exports.Language || (exports.Language = {}));
const setLangauge = (language) => {
    window.localStorage.setItem('language', language.toString());
    window.location.reload();
};
exports.setLangauge = setLangauge;
const getLanguage = () => {
    var _a;
    const languageIndex = Number((_a = window.localStorage.getItem('language')) !== null && _a !== void 0 ? _a : '0');
    return Language[Language[languageIndex]];
};
exports.getLanguage = getLanguage;
const switchLanguage = () => {
    if ((0, exports.getLanguage)() === Language.English) {
        (0, exports.setLangauge)(Language.Japanese);
    }
    else {
        (0, exports.setLangauge)(Language.English);
    }
};
exports.switchLanguage = switchLanguage;
var TranslationIdentity;
(function (TranslationIdentity) {
    TranslationIdentity[TranslationIdentity["Home"] = 0] = "Home";
    TranslationIdentity[TranslationIdentity["Greeting"] = 1] = "Greeting";
    TranslationIdentity[TranslationIdentity["Projects"] = 2] = "Projects";
    TranslationIdentity[TranslationIdentity["Resume"] = 3] = "Resume";
    TranslationIdentity[TranslationIdentity["Contact"] = 4] = "Contact";
    TranslationIdentity[TranslationIdentity["Albin"] = 5] = "Albin";
    TranslationIdentity[TranslationIdentity["Introduction1"] = 6] = "Introduction1";
    TranslationIdentity[TranslationIdentity["Introduction2"] = 7] = "Introduction2";
    TranslationIdentity[TranslationIdentity["Introduction3"] = 8] = "Introduction3";
    TranslationIdentity[TranslationIdentity["Introduction4"] = 9] = "Introduction4";
    TranslationIdentity[TranslationIdentity["Introduction5"] = 10] = "Introduction5";
    TranslationIdentity[TranslationIdentity["Introduction6"] = 11] = "Introduction6";
    TranslationIdentity[TranslationIdentity["EmailExplain"] = 12] = "EmailExplain";
    TranslationIdentity[TranslationIdentity["FirstName"] = 13] = "FirstName";
    TranslationIdentity[TranslationIdentity["LastName"] = 14] = "LastName";
    TranslationIdentity[TranslationIdentity["Organization"] = 15] = "Organization";
    TranslationIdentity[TranslationIdentity["Position"] = 16] = "Position";
    TranslationIdentity[TranslationIdentity["Email"] = 17] = "Email";
    TranslationIdentity[TranslationIdentity["Phone"] = 18] = "Phone";
    TranslationIdentity[TranslationIdentity["Subject"] = 19] = "Subject";
    TranslationIdentity[TranslationIdentity["Message"] = 20] = "Message";
    TranslationIdentity[TranslationIdentity["Send"] = 21] = "Send";
    TranslationIdentity[TranslationIdentity["FirstNameError"] = 22] = "FirstNameError";
    TranslationIdentity[TranslationIdentity["LastNameError"] = 23] = "LastNameError";
    TranslationIdentity[TranslationIdentity["OrganizationError"] = 24] = "OrganizationError";
    TranslationIdentity[TranslationIdentity["EmailError"] = 25] = "EmailError";
    TranslationIdentity[TranslationIdentity["SubjectError"] = 26] = "SubjectError";
    TranslationIdentity[TranslationIdentity["MessageError"] = 27] = "MessageError";
    TranslationIdentity[TranslationIdentity["Location"] = 28] = "Location";
    TranslationIdentity[TranslationIdentity["Games"] = 29] = "Games";
    TranslationIdentity[TranslationIdentity["Websites"] = 30] = "Websites";
    TranslationIdentity[TranslationIdentity["Business"] = 31] = "Business";
    TranslationIdentity[TranslationIdentity["Applications"] = 32] = "Applications";
    TranslationIdentity[TranslationIdentity["Name"] = 33] = "Name";
    TranslationIdentity[TranslationIdentity["Links"] = 34] = "Links";
    TranslationIdentity[TranslationIdentity["Tools"] = 35] = "Tools";
    TranslationIdentity[TranslationIdentity["Description"] = 36] = "Description";
    TranslationIdentity[TranslationIdentity["Gallery"] = 37] = "Gallery";
    TranslationIdentity[TranslationIdentity["GalleryPhotosText"] = 38] = "GalleryPhotosText";
    TranslationIdentity[TranslationIdentity["Website"] = 39] = "Website";
    TranslationIdentity[TranslationIdentity["Award"] = 40] = "Award";
})(TranslationIdentity = exports.TranslationIdentity || (exports.TranslationIdentity = {}));
exports.TranslationStore = new Map([
    [TranslationIdentity.Home, { english: 'Home', japanese: 'ホーム' }],
    [TranslationIdentity.Greeting, { english: 'Hello! 👋', japanese: 'こんにちは！ 👋' }],
    [TranslationIdentity.Projects, { english: 'Projects', japanese: 'プロジェクト' }],
    [TranslationIdentity.Resume, { english: 'Resume', japanese: '履歴書' }],
    [TranslationIdentity.Contact, { english: 'Contact', japanese: '連絡先' }],
    [TranslationIdentity.Albin, { english: 'Albin', japanese: 'アルビン' }],
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
    [TranslationIdentity.Location, { english: 'Japan, Oita 🇯🇵', japanese: '日本、大分 🇯🇵' }],
    [TranslationIdentity.Games, { english: 'Games', japanese: 'ゲーム' }],
    [TranslationIdentity.Websites, { english: 'Websites', japanese: 'ウェブサイト' }],
    [TranslationIdentity.Business, { english: 'Business', japanese: 'ビジネス' }],
    [TranslationIdentity.Applications, { english: 'Applications', japanese: 'アプリケーション' }],
    [TranslationIdentity.Name, { english: 'Name', japanese: '名前' }],
    [TranslationIdentity.Links, { english: 'Links', japanese: 'リンク' }],
    [TranslationIdentity.Tools, { english: 'Tools', japanese: 'ツール' }],
    [TranslationIdentity.Description, { english: 'Description', japanese: '説明' }],
    [TranslationIdentity.Gallery, { english: 'Gallery', japanese: 'ギャラリー' }],
    [TranslationIdentity.GalleryPhotosText, { english: '`Showing {0} of {1} photos`', japanese: '{1}枚中{0}枚を表示中' }],
    [TranslationIdentity.Website, { english: 'Website', japanese: 'ウェブサイト' }],
    [TranslationIdentity.Award, { english: 'Award', japanese: 'アワード' }],
]);
const LinkTranslation = (link) => {
    var _a;
    let identitiesToCheck = [
        TranslationIdentity.Website,
        TranslationIdentity.Award
    ];
    let linkLower = link.toLowerCase().trim();
    for (let index = 0; index < identitiesToCheck.length; index++) {
        const identity = identitiesToCheck[index];
        let identityLower = (_a = exports.TranslationStore.get(identity)) === null || _a === void 0 ? void 0 : _a.english.toLowerCase().trim();
        if (linkLower == identityLower) {
            return (0, exports.GetTranslation)(identity);
        }
    }
    return link;
};
exports.LinkTranslation = LinkTranslation;
const GetTranslation = (identity) => {
    const language = (0, exports.getLanguage)();
    const translation = exports.TranslationStore.get(identity);
    if (translation) {
        return language === Language.English ? translation.english : translation.japanese;
    }
    else {
        return 'ERROR';
    }
};
exports.GetTranslation = GetTranslation;
//# sourceMappingURL=translation.js.map