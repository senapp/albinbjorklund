"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenappPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const ProjectView_1 = require("../components/projects/ProjectView");
const projects_1 = require("../framework/projects");
const SenappPage = () => {
    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.Senapp);
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, null,
            React.createElement(ProjectView_1.ProjectView, { project: project }))));
};
exports.SenappPage = SenappPage;
ReactDOM.render(React.createElement(exports.SenappPage, null), document.getElementById('root'));
//# sourceMappingURL=senapp.js.map