import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import { ProjectsView } from '../components/projects/ProjectsView';
import css from './projects.module.css';
import { GetTranslation, TranslationIdentity } from '../framework/translation';

export const ProjectsPage: React.FC = () => (
    <PageContainer>
        <PageContent className={css.container}>
            <div className={css.title}>{GetTranslation(TranslationIdentity.Projects)}</div>
            <ProjectsView showPrivate={true} />
        </PageContent>
    </PageContainer>
);

ReactDOM.render(<ProjectsPage />, document.getElementById('root'));