import * as React from 'react';
import { ProjectInformation } from '../../framework/projects';
import { Image } from '../common/Image';
import css from './ProjectView.module.css';
import { useEffect, useReducer, useState } from 'react';
import { isMobile, isPortrait } from '../../framework/settings';
import { Button } from '../common/Button';
import { getLanguage, GetTranslation, Language, LinkTranslation, TranslationIdentity } from '../../framework/translation';
import { formatString } from '../../utils/utils';

type Props = {
    project: ProjectInformation | undefined;
}

export const ProjectView: React.FC<Props> = ({ project }) => {
    if (!project) {
        return null;
    }

    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    const createLinksInText = (text: string): string => {
        var exp = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
        let linkText = getLanguage() === Language.English ? "Link" : "リンク";
        return text.replace(exp,`<a class=${css.link} href='$1'>${linkText}</a>`);
    };

    useEffect(() => {
        let element = document.getElementById("#description");
        if (element){
            element.innerHTML = createLinksInText(getLanguage() === Language.English ? project.descriptionEN : project.descriptionJP);
        }
    }, []);

    const [galleryLimit, setGalleryLimit] = useState(5);
    
    return (
        <div className={css.projectContainer}>
            <div className={mobileView ? css.projectMainMobile : css.projectMain}>
                <Image containerClassName={mobileView ? css.projectIconContainerMobile  : css.projectIconContainer} imageClassName={css.projectIcon} imageIdentity={project.icon} />
                <div className={css.projectInfoRight}>
                    <div className={css.projectName}>
                        <h3>{GetTranslation(TranslationIdentity.Name)}</h3>
                        <h1>{getLanguage() === Language.English ? project.nameEN : project.nameJP}</h1>
                    </div>
                    <div className={css.projectLinks}>
                        <h3>{GetTranslation(TranslationIdentity.Links)}</h3>
                        <div className={css.projectLinksContainer}>
                            {project.links.map((link, index) => <>
                                {index !== 0 && <span className={css.linkSeperator}>{', '}</span>}
                                <a target="_blank" className={css.link} key={index} href={link.url}>{LinkTranslation(link.name)}</a>
                            </>)}
                        </div>
                    </div>
                    <div className={css.projectTools}>
                        <h3>{GetTranslation(TranslationIdentity.Tools)}</h3>
                        <p className={css.projectToolsText}>{project.tools.join(', ')}</p>
                    </div>
                </div>
            </div>
            <div className={mobileView ? css.projectInfoMobile : css.projectInfo}>
                <h2>{GetTranslation(TranslationIdentity.Description)}</h2>
                <p id="#description"></p>
                {project.photos.length > 0 &&
                <div className={mobileView ? css.projectPhotosMobile : css.projectPhotos}>
                    <div className={css.galleryTopBar}>
                        <h2>{GetTranslation(TranslationIdentity.Gallery)}</h2>
                        {project.photos.length >= galleryLimit &&
                            <Button className={css.showMoreButton} onClick={() => setGalleryLimit(galleryLimit + 5)} label="Show more" />
                        }
                    </div>
                    <div className={css.galleryContainer}>
                        {project.photos.map((photo, index) => {
                            if (index >= galleryLimit) {
                                return null;
                            }
                            return <img className={mobileView ? css.galleryPhotoMobile : css.galleryPhoto} src={photo} />;
                        })}
                    </div>
                    <div className={css.galleryPhotosText}>{formatString(GetTranslation(TranslationIdentity.GalleryPhotosText), Math.min(galleryLimit, project.photos.length), project.photos.length)}</div>
                </div>
                }
            </div>
        </div>
    );
};
