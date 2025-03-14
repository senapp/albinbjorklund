import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from './components/page/PageContainer';
import css from './404.module.css';

export const NotFound: React.FC = () => (
    <PageContainer>
        <div className={css.base}>
            404 - Page not found
        </div>
    </PageContainer>
);

ReactDOM.render(<NotFound />, document.getElementById('root'));