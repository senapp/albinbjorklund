import * as React from 'react';
import { ImageIdentity } from '../../framework/images';
import { getTheme, switchTheme, Theme } from '../../framework/theme';
import { toUrl } from '../../utils/connection';
import { BarItem } from './BarItem';
import { Image } from '../common/Image';

import css from './Topbar.module.css';
import { isMobile, isPortrait } from '../../framework/settings';
import { useEffect, useReducer, useState } from 'react';
import { scrollToTop, toggleScroll } from '../../utils/utils';
import { getLanguage, GetTranslation, Language, switchLanguage, TranslationIdentity } from '../../framework/translation';

type Props = {
    className?: string;
    customBackground?: boolean;
}


export const Topbar: React.FC<Props> = ({ customBackground = false }) => {
    const [expanded, setExpanded] = useState(false);
    
    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    const isEnglish = getLanguage() === Language.English;

    const getBarItems = () => {
        return(<>
            <ul className={!mobileView ? css.barListLeft : (css.mobileList + " " + css.barItemsExpanded)}>
                <div className={css.myNameContainer + " " + (mobileView ? css.nameMobile : "")}>
                    {isEnglish
                        ? <div className={css.myName}><span>Carl</span>Albin Björklund</div>
                        : <div className={css.myName}>ビョルクルンド<span>カール</span>アルビン</div>
                    }
                    <div className={css.greeting}>{GetTranslation(TranslationIdentity.Greeting)}</div>
                </div>
            </ul>
            <div className={!mobileView ? css.languageContainer : (css.mobileList + " " + css.barItemsExpanded + " " + css.languageMobileList)} onClick={() => switchLanguage()}>
                <Image containerClassName={css.languageImageContainer} imageClassName={css.languageImage} imageIdentity={ImageIdentity.Translation} />
                <div className={css.languageText}>{isEnglish ? "> 日本語" : "> English"}</div>
            </div>
            <ul className={!mobileView ? css.barListRight : (css.mobileList + " " + css.barItemsExpanded)}>
                <BarItem label={GetTranslation(TranslationIdentity.Home)} url={toUrl(`/pages/home`)} />
                <BarItem label={GetTranslation(TranslationIdentity.Projects)} url={toUrl(`/pages/projects`)} />
                {/*<BarItem label={GetTranslation(TranslationIdentity.Resume)} url={toUrl(`/pages/resume`)} />*/}
                <BarItem label={GetTranslation(TranslationIdentity.Contact)} url={toUrl(`/pages/contact`)} />
            </ul>
        </>);
    }

    const createTopLeftView = () => {
        if (mobileView) {
            return (<>
                <Image onClick={() => {
                    setExpanded(!expanded)
                    toggleScroll(expanded);
                    scrollToTop();
                }} containerClassName={css.expandContainer} imageClassName={css.expand} imageIdentity={expanded ? ImageIdentity.Close : ImageIdentity.Expand} />
                <div className={css.mobileListContainer + " " + (expanded ? css.barExpanded : "")}>
                    {getBarItems()}
                </div>
            </>);
        } else {
            return (getBarItems());
        }
    }

    return (
        <div className={css.topbar + " " + (customBackground ? css.customBackground : "")}>
            {createTopLeftView()}
        </div>
    );
};