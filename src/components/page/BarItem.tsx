import * as React from 'react';
import { ImageIdentity } from '../../framework/images';
import { isCurrentUrl } from '../../utils/connection';
import { filterCssClasses } from '../../utils/css';
import { Image } from '../common/Image';

import css from './BarItem.module.css';
import { GetTranslation, TranslationIdentity } from '../../framework/translation';

type Props = {
    label?: string;
    imageIdentity?: ImageIdentity;
    url?: string;
    action?: () => void;
    containerClassName?: string;
    className?: string;
    newPage?: boolean;
}

export const BarItem: React.FC<Props> = ({ label = '', imageIdentity, url, action, containerClassName = '', className = '', newPage = false }) => {
    let isActive = isCurrentUrl(url);
    if (document.location.href.toLowerCase().includes('project') && label.toLowerCase().includes(GetTranslation(TranslationIdentity.Projects).toLowerCase())) {
        isActive = true;
    }

    const itemClasses = filterCssClasses({
        [css.barItem]: true,
        [containerClassName]: !!containerClassName,
    });

    const aClasses = filterCssClasses({
        [css.barItemContent]: true,
        [css.active]: !!url && isActive,
        [className]: !!className
    });

    return (
        <li className={itemClasses}>
            <a className={aClasses} onClick={action} href={url} target={newPage ? '_blank' : undefined} rel="noreferrer">
                {label && label}
                {imageIdentity && <Image imageIdentity={imageIdentity} />}
            </a>
        </li>
    );
};