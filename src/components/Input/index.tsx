import React, { InputHTMLAttributes } from 'react';

import './style.css'

interface Input extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

const Input: React.FC<Input> = ({ id, label, ...rest }) => {
    return (
        <div className="input-block">
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} {...rest}/>
        </div>
    );
}

export default Input;