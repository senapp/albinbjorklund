"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Topbar = void 0;
const React = require("react");
const images_1 = require("../../framework/images");
const connection_1 = require("../../utils/connection");
const BarItem_1 = require("./BarItem");
const Image_1 = require("../common/Image");
const Topbar_module_css_1 = require("./Topbar.module.css");
const settings_1 = require("../../framework/settings");
const react_1 = require("react");
const utils_1 = require("../../utils/utils");
const translation_1 = require("../../framework/translation");
const Topbar = ({ customBackground = false }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(false);
    const mobileView = (0, settings_1.isPortrait)() || (0, settings_1.isMobile)();
    const [, forceUpdate] = (0, react_1.useReducer)(x => x + 1, 0);
    (0, react_1.useEffect)(() => { window.addEventListener('resize', forceUpdate); }, []);
    const isEnglish = (0, translation_1.getLanguage)() === translation_1.Language.English;
    const getBarItems = () => {
        return (React.createElement(React.Fragment, null,
            React.createElement("ul", { className: !mobileView ? Topbar_module_css_1.default.barListLeft : (Topbar_module_css_1.default.mobileList + " " + Topbar_module_css_1.default.barItemsExpanded) },
                React.createElement("div", { className: Topbar_module_css_1.default.myNameContainer + " " + (mobileView ? Topbar_module_css_1.default.nameMobile : "") },
                    isEnglish
                        ? React.createElement("div", { className: Topbar_module_css_1.default.myName },
                            React.createElement("span", null, "Carl"),
                            "Albin Bj\u00F6rklund")
                        : React.createElement("div", { className: Topbar_module_css_1.default.myName },
                            "\u30D3\u30E7\u30EB\u30AF\u30EB\u30F3\u30C9",
                            React.createElement("span", null, "\u30AB\u30FC\u30EB"),
                            "\u30A2\u30EB\u30D3\u30F3"),
                    React.createElement("div", { className: Topbar_module_css_1.default.greeting }, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Greeting)))),
            React.createElement("div", { className: !mobileView ? Topbar_module_css_1.default.languageContainer : (Topbar_module_css_1.default.mobileList + " " + Topbar_module_css_1.default.barItemsExpanded + " " + Topbar_module_css_1.default.languageMobileList), onClick: () => (0, translation_1.switchLanguage)() },
                React.createElement(Image_1.Image, { containerClassName: Topbar_module_css_1.default.languageImageContainer, imageClassName: Topbar_module_css_1.default.languageImage, imageIdentity: images_1.ImageIdentity.Translation }),
                React.createElement("div", { className: Topbar_module_css_1.default.languageText }, isEnglish ? "> 日本語" : "> English")),
            React.createElement("ul", { className: !mobileView ? Topbar_module_css_1.default.barListRight : (Topbar_module_css_1.default.mobileList + " " + Topbar_module_css_1.default.barItemsExpanded) },
                React.createElement(BarItem_1.BarItem, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Home), url: (0, connection_1.toUrl)(`/pages/home`) }),
                React.createElement(BarItem_1.BarItem, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Projects), url: (0, connection_1.toUrl)(`/pages/projects`) }),
                React.createElement(BarItem_1.BarItem, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Contact), url: (0, connection_1.toUrl)(`/pages/contact`) }))));
    };
    const createTopLeftView = () => {
        if (mobileView) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Image_1.Image, { onClick: () => {
                        setExpanded(!expanded);
                        (0, utils_1.toggleScroll)(expanded);
                        (0, utils_1.scrollToTop)();
                    }, containerClassName: Topbar_module_css_1.default.expandContainer, imageClassName: Topbar_module_css_1.default.expand, imageIdentity: expanded ? images_1.ImageIdentity.Close : images_1.ImageIdentity.Expand }),
                React.createElement("div", { className: Topbar_module_css_1.default.mobileListContainer + " " + (expanded ? Topbar_module_css_1.default.barExpanded : "") }, getBarItems())));
        }
        else {
            return (getBarItems());
        }
    };
    return (React.createElement("div", { className: Topbar_module_css_1.default.topbar + " " + (customBackground ? Topbar_module_css_1.default.customBackground : "") }, createTopLeftView()));
};
exports.Topbar = Topbar;
//# sourceMappingURL=Topbar.js.map