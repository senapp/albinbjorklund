"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectsView = void 0;
const React = require("react");
const projects_1 = require("../../framework/projects");
const Project_1 = require("./Project");
const ProjectsView_module_css_1 = require("./ProjectsView.module.css");
const translation_1 = require("../../framework/translation");
const ProjectsView = ({ showPrivate }) => {
    const availableProjects = [];
    projects_1.ProjectStore.forEach((value) => {
        if (showPrivate || value.public) {
            availableProjects.push(value);
        }
    });
    const getProjectsWithTagTitle = (tag, title) => {
        let placedTitle = false;
        return (availableProjects.map((project) => {
            const isTag = project.tags.includes(tag);
            if (!isTag) {
                return React.createElement(React.Fragment, null);
            }
            const returnObject = !placedTitle ?
                React.createElement(React.Fragment, null,
                    React.createElement(Project_1.Project, { showPrivate: showPrivate, key: project.type, project: project }),
                    React.createElement("div", { className: ProjectsView_module_css_1.default.categoryTitle }, title))
                : React.createElement(Project_1.Project, { showPrivate: showPrivate, key: project.type, project: project });
            placedTitle = true;
            return returnObject;
        }));
    };
    return (React.createElement("div", { className: ProjectsView_module_css_1.default.container },
        React.createElement("div", { className: ProjectsView_module_css_1.default.categoryContainer },
            getProjectsWithTagTitle('Game', (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Games)),
            getProjectsWithTagTitle('Website', (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Websites)),
            getProjectsWithTagTitle('Business', (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Business)),
            getProjectsWithTagTitle('Application', (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Applications)))));
};
exports.ProjectsView = ProjectsView;
//# sourceMappingURL=ProjectsView.js.map