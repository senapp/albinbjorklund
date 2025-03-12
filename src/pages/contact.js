"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactPage = void 0;
const React = require("react");
const ReactDOM = require("react-dom");
const PageContainer_1 = require("../components/page/PageContainer");
const PageContent_1 = require("../components/page/PageContent");
const contact_module_css_1 = require("./contact.module.css");
const TextInput_1 = require("../components/common/TextInput");
const react_1 = require("react");
const Button_1 = require("../components/common/Button");
const settings_1 = require("../framework/settings");
const translation_1 = require("../framework/translation");
const Image_1 = require("../components/common/Image");
const images_1 = require("../framework/images");
const ContactPage = () => {
    const [firstName, setFirstName] = (0, react_1.useState)("");
    const [lastName, setLastName] = (0, react_1.useState)("");
    const [organization, setOrganization] = (0, react_1.useState)("");
    const [position, setPosition] = (0, react_1.useState)("");
    const [email, setEmail] = (0, react_1.useState)("");
    const [phone, setPhone] = (0, react_1.useState)("");
    const [message, setMessage] = (0, react_1.useState)("");
    const [subject, setSubject] = (0, react_1.useState)("");
    const [showEmail, setShowEmail] = (0, react_1.useState)(false);
    const mobileView = (0, settings_1.isPortrait)() || (0, settings_1.isMobile)();
    const [, forceUpdate] = (0, react_1.useReducer)(x => x + 1, 0);
    (0, react_1.useEffect)(() => { window.addEventListener('resize', forceUpdate); }, []);
    const validation = () => {
        if (firstName.length <= 0) {
            alert((0, translation_1.GetTranslation)(translation_1.TranslationIdentity.FirstNameError));
            return false;
        }
        else if (lastName.length <= 0) {
            alert((0, translation_1.GetTranslation)(translation_1.TranslationIdentity.LastNameError));
            return false;
        }
        else if (organization.length <= 3) {
            alert((0, translation_1.GetTranslation)(translation_1.TranslationIdentity.OrganizationError));
            return false;
        }
        else if (email.length <= 4 || !email.includes('@') || !email.includes('.')) {
            alert((0, translation_1.GetTranslation)(translation_1.TranslationIdentity.EmailError));
            return false;
        }
        else if (subject.length <= 3) {
            alert((0, translation_1.GetTranslation)(translation_1.TranslationIdentity.SubjectError));
            return false;
        }
        else if (message.length <= 10) {
            alert((0, translation_1.GetTranslation)(translation_1.TranslationIdentity.MessageError));
            return false;
        }
        return true;
    };
    const sendEmail = (targetEmail) => {
        if (!validation()) {
            return;
        }
        const email_subject = `${subject}`;
        const email_body = `${message}

        Organization: ${organization}
        Name: ${firstName} ${lastName}
        Position: ${position.length > 0 ? position : 'N/A'}

        Email: ${email}
        Phone: ${phone.length > 0 ? phone : 'N/A'}`;
        window.location.href = `mailto:${targetEmail}?subject=${encodeURI(email_subject)}&body=${encodeURI(email_body)}`;
    };
    const isEnglish = (0, translation_1.getLanguage)() === translation_1.Language.English;
    return (React.createElement(PageContainer_1.PageContainer, null,
        React.createElement(PageContent_1.PageContent, { className: contact_module_css_1.default.container },
            React.createElement("div", { className: contact_module_css_1.default.title }, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Contact)),
            React.createElement("div", { className: mobileView ? contact_module_css_1.default.boxContainerMobile : contact_module_css_1.default.boxContainer },
                React.createElement("div", { className: contact_module_css_1.default.mailContainer },
                    React.createElement("img", { src: "/resources/portfolio/face.png", className: contact_module_css_1.default.picture }),
                    isEnglish
                        ? React.createElement("div", { className: contact_module_css_1.default.myName },
                            React.createElement("span", null, "Carl"),
                            "Albin Bj\u00F6rklund")
                        : React.createElement("div", { className: contact_module_css_1.default.myName },
                            "\u30D3\u30E7\u30EB\u30AF\u30EB\u30F3\u30C9",
                            React.createElement("span", null, "\u30AB\u30FC\u30EB"),
                            "\u30A2\u30EB\u30D3\u30F3"),
                    React.createElement("div", { className: contact_module_css_1.default.textRow },
                        React.createElement(Image_1.Image, { containerClassName: contact_module_css_1.default.icon, imageClassName: contact_module_css_1.default.iconImage, imageIdentity: images_1.ImageIdentity.Location }),
                        React.createElement("div", { className: contact_module_css_1.default.rowRight }, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Location))),
                    React.createElement("div", { className: contact_module_css_1.default.textRow },
                        React.createElement(Image_1.Image, { containerClassName: contact_module_css_1.default.icon, imageClassName: contact_module_css_1.default.iconImage, imageIdentity: images_1.ImageIdentity.Mail }),
                        React.createElement("div", { className: contact_module_css_1.default.rowRight }, "bjoerklundcarlalbin@gmail.com")),
                    React.createElement("div", { className: contact_module_css_1.default.snsRow },
                        React.createElement(Image_1.Image, { target: '_blank', href: 'https://www.instagram.com/albin_bjorklund/', containerClassName: contact_module_css_1.default.icon, imageClassName: contact_module_css_1.default.iconImage, imageIdentity: images_1.ImageIdentity.Instagram }),
                        React.createElement(Image_1.Image, { target: '_blank', href: 'https://www.linkedin.com/in/albin-b-4623411b6/', containerClassName: contact_module_css_1.default.icon, imageClassName: contact_module_css_1.default.iconImage, imageIdentity: images_1.ImageIdentity.LinkedIn }))),
                React.createElement("div", { className: contact_module_css_1.default.mailContainer },
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.FirstName) + " *", value: firstName, onChange: setFirstName }),
                        React.createElement(TextInput_1.TextInput, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.LastName) + " *", value: lastName, onChange: setLastName })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Organization) + " *", value: organization, onChange: setOrganization }),
                        React.createElement(TextInput_1.TextInput, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Position), value: position, onChange: setPosition })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Email) + " *", value: email, onChange: setEmail }),
                        React.createElement(TextInput_1.TextInput, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Phone), value: phone, onChange: setPhone })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { containerClassName: contact_module_css_1.default.subjectInput, label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Subject) + " *", value: subject, onChange: setSubject })),
                    React.createElement("div", { className: contact_module_css_1.default.inputRow },
                        React.createElement(TextInput_1.TextInput, { containerClassName: contact_module_css_1.default.messageContainer, value: message, multiline: true, label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Message) + " *", onChange: setMessage })),
                    React.createElement("div", { className: contact_module_css_1.default.mailText }, (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.EmailExplain)),
                    React.createElement("div", { className: contact_module_css_1.default.buttonDisplay },
                        React.createElement(Button_1.Button, { label: (0, translation_1.GetTranslation)(translation_1.TranslationIdentity.Send), className: contact_module_css_1.default.buttonStyle, onClick: () => sendEmail("bjoerklundcarlalbin@gmail.com") })))))));
};
exports.ContactPage = ContactPage;
ReactDOM.render(React.createElement(exports.ContactPage, null), document.getElementById('root'));
//# sourceMappingURL=contact.js.map