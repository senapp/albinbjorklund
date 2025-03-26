"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatString = exports.toggleScroll = exports.scrollToTop = void 0;
const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
exports.scrollToTop = scrollToTop;
const toggleScroll = (enabled) => {
    if (enabled) {
        document.body.style.overflow = "auto";
    }
    else {
        document.body.style.overflow = "hidden";
    }
};
exports.toggleScroll = toggleScroll;
function formatString(template, ...args) {
    return template.replace(/{(\d+)}/g, (match, index) => {
        return typeof args[index] !== 'undefined' ? args[index] : match;
    });
}
exports.formatString = formatString;
//# sourceMappingURL=utils.js.map