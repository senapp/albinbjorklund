import * as React from 'react';
import { ProjectInformation, ProjectStore } from '../../framework/projects';
import { Project } from './Project';
import css from './ProjectsView.module.css';
import { GetTranslation, TranslationIdentity } from '../../framework/translation';

type Props = {
    showPrivate: boolean;
}

export const ProjectsView: React.FC<Props> = ({ showPrivate }) => {
    const availableProjects: ProjectInformation[] = [];

    ProjectStore.forEach((value) => {
        if (showPrivate || value.public) {
            availableProjects.push(value);
        }
    });

    const getProjectsWithTagTitle = (tag: string, title: string) => {
        let placedTitle = false;
        return (availableProjects.map((project) => {
            const isTag = project.tags.includes(tag);
            if (!isTag) {
                return <></>;
            }

            const returnObject = !placedTitle ?
                <><Project showPrivate={showPrivate} key={project.type} project={project} /><div className={css.categoryTitle}>{title}</div></>
                : <Project showPrivate={showPrivate} key={project.type} project={project} />;
            placedTitle = true;
            return returnObject;
        }));
    }

    return (
        <div className={css.container}>
            <div className={css.categoryContainer}>
                    {getProjectsWithTagTitle('Game', GetTranslation(TranslationIdentity.Games))}
                    {getProjectsWithTagTitle('Website', GetTranslation(TranslationIdentity.Websites))}
                    {getProjectsWithTagTitle('Business', GetTranslation(TranslationIdentity.Business))}
                    {getProjectsWithTagTitle('Application', GetTranslation(TranslationIdentity.Applications))}
            </div>
            {/*availableProjects.map(project => <Project showPrivate={showPrivate} key={project.type} project={project} />)*/}
        </div>
    );
};
