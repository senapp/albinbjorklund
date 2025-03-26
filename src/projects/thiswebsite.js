"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThisWebsitePage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectView_1 = require("../components/projects/ProjectView");
const projects_1 = require("../framework/projects");
const ThisWebsitePage = () => {
    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.ThisWebsite);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, null,
            React.createElement(ProjectView_1.ProjectView, { project: project }))));
};
exports.ThisWebsitePage = ThisWebsitePage;
ReactDOM.render(React.createElement(exports.ThisWebsitePage, null), document.getElementById('root'));
//# sourceMappingURL=thiswebsite.js.map