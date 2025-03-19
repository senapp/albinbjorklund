import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PageContainer } from '../components/page/PageContainer';
import { PageContent } from '../components/page/PageContent';
import css from './contact.module.css';
import { toUrl } from '../utils/connection';
import { TextInput } from '../components/common/TextInput';
import { useEffect, useReducer, useState } from 'react';
import { Button } from '../components/common/Button';
import { isMobile, isPortrait } from '../framework/settings';
import { getLanguage, GetTranslation, Language, TranslationIdentity } from '../framework/translation';
import { Image } from '../components/common/Image';
import { ImageIdentity } from '../framework/images';

export const ContactPage: React.FC = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [organization, setOrganization] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [showEmail, setShowEmail] = useState(false);

    const mobileView = isPortrait() || isMobile();
    const [, forceUpdate] = useReducer(x => x + 1, 0);
    useEffect(() => { window.addEventListener('resize', forceUpdate); }, []);

    const validation = (): boolean => {
        if (firstName.length <= 0) {
            alert(GetTranslation(TranslationIdentity.FirstNameError));
            return false;
        } else if (lastName.length <= 0) {
            alert(GetTranslation(TranslationIdentity.LastNameError));
            return false;
        } else if (organization.length < 3) {
            alert(GetTranslation(TranslationIdentity.OrganizationError));
            return false;
        } else if (email.length <= 4 || !email.includes('@') || !email.includes('.')) {
            alert(GetTranslation(TranslationIdentity.EmailError));
            return false;
        } else if (subject.length < 3) {
            alert(GetTranslation(TranslationIdentity.SubjectError));
            return false;
        } else if (message.length < 10) {
            alert(GetTranslation(TranslationIdentity.MessageError));
            return false;
        }

        return true;
    }

    const sendEmail = (targetEmail: string) => {
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

    const isEnglish = getLanguage() === Language.English;

    return (<PageContainer>
        <PageContent className={css.container}>
        <div className={css.title}>
                {GetTranslation(TranslationIdentity.Contact)}
            </div>
          <div className={mobileView ? css.boxContainerMobile : css.boxContainer}>
            <div className={css.mailContainer}>
                <img src="/resources/portfolio/face.png" className={css.picture} />
                {isEnglish
                        ? <div className={css.myName}><span>Carl</span>Albin Björklund</div>
                        : <div className={css.myName}>ビョルクルンド<span>カール</span>アルビン</div>
                    }
                <div className={css.textRow}>
                    <Image containerClassName={css.icon} imageClassName={css.iconImage} imageIdentity={ImageIdentity.Location} />
                    <div className={css.rowRight}>{GetTranslation(TranslationIdentity.Location)}</div>
                </div>
                <div className={css.textRow}>
                    <Image containerClassName={css.icon} imageClassName={css.iconImage} imageIdentity={ImageIdentity.Mail} />
                    <div className={css.rowRight}>bjoerklundcarlalbin@gmail.com</div>
                </div>
                <div className={css.snsRow}>
                    <Image target='_blank' href='https://www.instagram.com/albin_bjorklund/' containerClassName={css.icon} imageClassName={css.iconImage} imageIdentity={ImageIdentity.Instagram} />
                    <Image target='_blank' href='https://www.linkedin.com/in/albin-b-4623411b6/' containerClassName={css.icon} imageClassName={css.iconImage} imageIdentity={ImageIdentity.LinkedIn} />
                </div>
            </div>
            <div className={css.mailContainer}>
                <div className={css.inputRow}>
                    <TextInput label={GetTranslation(TranslationIdentity.FirstName) + " *"} value={firstName} onChange={setFirstName} />
                    <TextInput label={GetTranslation(TranslationIdentity.LastName) + " *"} value={lastName} onChange={setLastName} />
                </div>
                <div className={css.inputRow}>
                    <TextInput label={GetTranslation(TranslationIdentity.Organization) + " *"} value={organization} onChange={setOrganization} />
                    <TextInput label={GetTranslation(TranslationIdentity.Position)} value={position} onChange={setPosition} />
                </div>
                <div className={css.inputRow}>
                    <TextInput label={GetTranslation(TranslationIdentity.Email) + " *"} value={email} onChange={setEmail} />
                    <TextInput label={GetTranslation(TranslationIdentity.Phone)} value={phone} onChange={setPhone} />
                </div>
                <div className={css.inputRow}>
                    <TextInput containerClassName={css.subjectInput} label={GetTranslation(TranslationIdentity.Subject) + " *"} value={subject} onChange={setSubject} />
                </div>
                <div className={css.inputRow}>
                    <TextInput containerClassName={css.messageContainer} value={message} multiline={true} label={GetTranslation(TranslationIdentity.Message) + " *"} onChange={setMessage} />
                </div>
                <div className={css.mailText}>{GetTranslation(TranslationIdentity.EmailExplain)}</div>
                <div className={css.buttonDisplay}>
                    <Button label={GetTranslation(TranslationIdentity.Send)} className={css.buttonStyle} onClick={() => sendEmail("bjoerklundcarlalbin@gmail.com")} />
                </div>

            </div>
          </div>
        </PageContent>
    </PageContainer>);
}

ReactDOM.render(<ContactPage />, document.getElementById('root'));
