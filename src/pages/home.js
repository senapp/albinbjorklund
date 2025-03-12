"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const home_module_css_1 = require("./home.module.css");
const translation_1 = require("../framework/translation");
const connection_1 = require("../utils/connection");
const settings_1 = require("../framework/settings");
const HomePage = () => {
    const mobileView = (0, settings_1.isPortrait)() || (0, settings_1.isMobile)();
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    React.useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, { className: home_module_css_1.default.homeContainer + " " + (mobileView ? home_module_css_1.default.mobileHomeContainer : "") },
            React.createElement("div", { className: !mobileView ? home_module_css_1.default.pictureContainer : home_module_css_1.default.mobilePicture },
                React.createElement("div", { className: home_module_css_1.default.backgroundShape }),
                React.createElement("img", { src: "/resources/portfolio/full_body_cropped.png", className: home_module_css_1.default.picture + " " + (mobileView ? home_module_css_1.default.pictureWidthMobile : "") })),
            React.createElement("div", { className: !mobileView ? home_module_css_1.default.introductionContainer : home_module_css_1.default.mobileIntroduction },
                React.createElement("div", null,
                    React.createElement("span", null, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Introduction1)),
                    React.createElement("a", { href: (0, connection_1.toUrl)(`/pages/resume`), className: home_module_css_1.default.introductionName }, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Name)),
                    React.createElement("span", null, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Introduction2))),
                React.createElement("div", null,
                    React.createElement("span", null, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Introduction3))),
                React.createElement("div", null,
                    React.createElement("span", null, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Introduction4))),
                React.createElement("div", null,
                    React.createElement("span", null, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Introduction5)),
                    React.createElement("a", { href: (0, connection_1.toUrl)(`/pages/projects`), className: home_module_css_1.default.introductionLink }, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Projects)),
                    React.createElement("span", null, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Introduction6)))))));
};
exports.HomePage = HomePage;
ReactDOM.render(React.createElement(exports.HomePage, null), document.getElementById('root'));
//# sourceMappingURL=home.js.map