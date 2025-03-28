enum ConnectionType {
    LocalHost,
    LocalHostNumber,
    Public
}

const getConnectionType = (): ConnectionType => {
    if (document.location.hostname.includes('localhost')) {
        return ConnectionType.LocalHost;
    } if (document.location.hostname.includes('127.0.0.1')) {
        return ConnectionType.LocalHostNumber;
    } else {
        return ConnectionType.Public;
    }
};

export const getRootPath = (type?: ConnectionType): string => {
    switch (type ?? getConnectionType()) {
        case ConnectionType.LocalHost:
            return 'http://localhost:5500';
        case ConnectionType.LocalHostNumber:
            return 'http://127.0.0.1:5500';
        case ConnectionType.Public:
        default:
            return 'https://www.albinbjoerklund.com';
    }
};

export const toUrl = (path: string, parameters = ''): string => {
    const type = getConnectionType();

    switch (type) {
        case ConnectionType.LocalHost:
        case ConnectionType.LocalHostNumber:
            return `${getRootPath(type)}${path}.html${parameters}`;
        case ConnectionType.Public:
        default:
            return `${getRootPath(type)}${path}${parameters}`;
    }
};

const alternativeUrl = "senapp.github.io/albinbjorklund";

export const isCurrentUrl = (url: string | undefined): boolean => {
    if (!url) {
        return false;
    }

    const current = document.location.href.toLowerCase();
    const target = url.toLowerCase();

    return current.includes(target) || current.includes(alternativeUrl);
};