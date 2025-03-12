"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("./components/page/PageContainer");
const _404_module_css_1 = require("./404.module.css");
const IndexPage = () => {
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement("div", { className: _404_module_css_1.default.base })));
};
exports.IndexPage = IndexPage;
ReactDOM.render(React.createElement(exports.IndexPage, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map