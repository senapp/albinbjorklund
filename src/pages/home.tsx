import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './home.module.css';
import { GetTranslation, TranslationIdentity } from '../framework/translation';
import { toUrl } from '../utils/connection';
import { isPortrait, isMobile } from '../framework/settings';

export const HomePage: React.FC = () => {
    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = React.useReducer(x => x + 1, 0);
    React.useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    return (<PageContainer>
        <PageContent className={css.homeContainer + " " + (mobileView ? css.mobileHomeContainer : "")}>
            <div className={!mobileView ? css.pictureContainer : css.mobilePicture}>
                <div className={css.backgroundShape}></div>
                <img src="/resources/portfolio/full_body_cropped.png" className={css.picture + " " + (mobileView ? css.pictureWidthMobile : "")} />
            </div>
            <div className={!mobileView ? css.introductionContainer : css.mobileIntroduction}>
                <div>
                    <span>{GetTranslation(TranslationIdentity.Introduction1)}</span>
                    <a href={toUrl(`/pages/contact`)} className={css.introductionName}>{GetTranslation(TranslationIdentity.Albin)}</a>
                    <span>{GetTranslation(TranslationIdentity.Introduction2)}</span>
                </div>
                <div>
                    <span>{GetTranslation(TranslationIdentity.Introduction3)}</span>
                </div>
                <div>
                    <span>{GetTranslation(TranslationIdentity.Introduction4)}</span>
                </div>
                <div>
                    <span>{GetTranslation(TranslationIdentity.Introduction5)}</span>
                    <a href={toUrl(`/pages/projects`)} className={css.introductionLink}>{GetTranslation(TranslationIdentity.Projects)}</a>
                    <span>{GetTranslation(TranslationIdentity.Introduction6)}</span>
                </div>
            </div>
        </PageContent>
    </PageContainer>);
};

ReactDOM.render(<HomePage />, document.getElementById('root'));