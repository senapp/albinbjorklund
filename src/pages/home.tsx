import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './home.module.css';
import { GetTranslation, TranslationIdentity } from '../framework/translation';
import { toUrl } from '../utils/connection';

export const HomePage: React.FC = () => {
    return (<PageContainer>
        <PageContent className={css.homeContainer}>
            <div className={css.pictureContainer}>
                <div className={css.backgroundShape}></div>
                <img src="/resources/portfolio/full_body_cropped.png" className={css.picture} />
            </div>
            <div className={css.introductionContainer}>
                <div>
                    <span>{GetTranslation(TranslationIdentity.Introduction1)}</span>
                    <a href={toUrl(`/pages/resume`)} className={css.introductionName}>{GetTranslation(TranslationIdentity.Name)}</a>
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