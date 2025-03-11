"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTranslation = exports.TranslationStore = exports.TranslationIdentity = exports.switchLanguage = exports.getLanguage = exports.setLangauge = exports.Language = void 0;
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
    TranslationIdentity[TranslationIdentity["Name"] = 5] = "Name";
    TranslationIdentity[TranslationIdentity["Introduction1"] = 6] = "Introduction1";
    TranslationIdentity[TranslationIdentity["Introduction2"] = 7] = "Introduction2";
    TranslationIdentity[TranslationIdentity["Introduction3"] = 8] = "Introduction3";
    TranslationIdentity[TranslationIdentity["Introduction4"] = 9] = "Introduction4";
    TranslationIdentity[TranslationIdentity["Introduction5"] = 10] = "Introduction5";
    TranslationIdentity[TranslationIdentity["Introduction6"] = 11] = "Introduction6";
})(TranslationIdentity = exports.TranslationIdentity || (exports.TranslationIdentity = {}));
exports.TranslationStore = new Map([
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