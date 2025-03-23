import * as React from 'react';
import { ProjectInformation } from '../../framework/projects';
import { Image } from '../common/Image';
import css from './Project.module.css';
import { getLanguage, Language, LinkTranslation } from '../../framework/translation';

type Props = {
    project: ProjectInformation;
    showPrivate: boolean;
}

export const Project: React.FC<Props> = ({ project, showPrivate }) => (
    <div className={css.container}>
        <Image href={project.url} aClassName={css.imageA} containerClassName={css.imageContainer} imageClassName={css.image} imageIdentity={project.icon} />
        <div className={css.title}>{getLanguage() === Language.English ? project.nameEN : project.nameJP}</div>
        <div className={css.links}>
            {project.links.map((link, index) => <>
                {index !== 0 && <span className={css.linkSeperator}>{', '}</span>}
                <a target="_blank" className={css.link} key={index} href={link.url}>{LinkTranslation(link.name)}</a>
            </>)}
        </div>
    </div>
);
