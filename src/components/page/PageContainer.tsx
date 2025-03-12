import * as React from 'react';
import { Topbar } from './Topbar';

import css from './PageContainer.module.css';
import { getTheme, Theme } from '../../framework/theme';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";

type Props = {
    className?: string;
    customBackground?: boolean;
}

export const PageContainer: React.FC<Props> = ({ className = "", customBackground = true, children }) => {
    if (getTheme() === Theme.Light) {
        require('./LightTheme.module.css');
    } else {
        require('./DarkTheme.module.css');
    }

    require('./PageContainer.module.css');
    polyfillCountryFlagEmojis();

    return (
        <div>
            <Topbar customBackground={customBackground} />
            <div className={css.pageContainer + " " + className + " " + (customBackground ? css.customBackground : "")}>
                {children}
            </div>
        </div>
    );
};