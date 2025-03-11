"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageContainer = void 0;
const React = require("react");
const Topbar_1 = require("./Topbar");
const PageContainer_module_css_1 = require("./PageContainer.module.css");
const theme_1 = require("../../framework/theme");
const PageContainer = ({ className = "", customBackground = true, children }) => {
    if ((0, theme_1.getTheme)() === theme_1.Theme.Light) {
        require('./LightTheme.module.css');
    }
    else {
        require('./DarkTheme.module.css');
    }
    require('./PageContainer.module.css');
    return (React.createElement("div", null,
        React.createElement(Topbar_1.Topbar, { customBackground: customBackground }),
        React.createElement("div", { className: PageContainer_module_css_1.default.pageContainer + " " + className + " " + (customBackground ? PageContainer_module_css_1.default.customBackground : "") }, children)));
};
exports.PageContainer = PageContainer;
//# sourceMappingURL=PageContainer.js.map