import React, { InputHTMLAttributes } from 'react';

import './style.css'

interface TextArea extends InputHTMLAttributes<HTMLTextAreaElement> {
    id: string;
    label: string;
}

const TextArea: React.FC<TextArea> = ({ id, label, ...rest }) => {
    return (
        <div className="textarea-block">
            <label htmlFor={id}>{label}</label>
            <textarea id={id} {...rest}/>
        </div>
    );
}

export default TextArea;