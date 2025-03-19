import * as React from 'react';
import { useEffect, useState } from 'react';
import css from './TextInput.module.css';

type Props = {
    label?: string;
    containerClassName?: string;
    value?: string;
    maxLength?: number;
    type?: string;
    multiline?: boolean;
    onChange?: (value: string) => void;
}

export const TextInput: React.FC<Props> = ({ label, containerClassName = '', maxLength, multiline, type = "text", value, onChange  }) => {
    const onValueChange = (newValue: string): void => {
        if (maxLength && newValue.length > maxLength) {
            newValue = newValue.slice(0, maxLength);
        }

        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className={`${css.container} ${containerClassName}`.trimEnd()}>
            { label && <div className={css.label}> {label} </div> }
            { multiline
                ? <textarea className={css.input} value={value} onChange={(e) => onValueChange(e.target.value)}/>
                : <input className={css.input} type={type} value={value} onChange={(e) => onValueChange(e.target.value)} />
            }
        </div>
    );
};