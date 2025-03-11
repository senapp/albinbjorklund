"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectsView_1 = require("../components/projects/ProjectsView");
const projects_module_css_1 = require("./projects.module.css");
const ProjectsPage = () => (React.createElement(PageContainer_1.PageContainer, null,
    React.createElement(PageContent_1.PageContent, { className: projects_module_css_1.default.container },
        React.createElement("div", { className: projects_module_css_1.default.title }, "Projects"),
        React.createElement(ProjectsView_1.ProjectsView, { showPrivate: true }))));
exports.ProjectsPage = ProjectsPage;
ReactDOM.render(React.createElement(exports.ProjectsPage, null), document.getElementById('root'));
//# sourceMappingURL=projects.js.map