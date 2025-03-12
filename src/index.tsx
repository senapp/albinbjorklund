import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from './components/page/PageContainer';
import css from './404.module.css';

export const IndexPage: React.FC = () => {
    return (<PageContainer>
        <div className={css.base}>
        </div>
    </PageContainer>);
}

ReactDOM.render(<IndexPage />, document.getElementById('root'));