export const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export const toggleScroll = (enabled: boolean) => {
    if (enabled) {
        document.body.style.overflow = "auto";
    } else {
        document.body.style.overflow = "hidden";
    }
}

export function formatString(template: string, ...args: any[]): string {
    return template.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined' ? args[index] : match;
    });
}