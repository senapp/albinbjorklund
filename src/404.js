"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFound = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("./components/page/PageContainer");
const _404_module_css_1 = require("./404.module.css");
const NotFound = () => (React.createElement(PageContainer_1.PageContainer, null,
    React.createElement("div", { className: _404_module_css_1.default.base }, "404 - Page not found")));
exports.NotFound = NotFound;
ReactDOM.render(React.createElement(exports.NotFound, null), document.getElementById('root'));
//# sourceMappingURL=404.js.map