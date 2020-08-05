import React, { SelectHTMLAttributes } from 'react';

import './style.css'

interface Select extends SelectHTMLAttributes<HTMLSelectElement> {
    id: string;
    label: string;
    options: Array<{ value: string; label: string }>;
}

const Select: React.FC<Select> = ({ id, label, options, ...rest }) => {
    return (
        <div className="select-block">
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                {...rest}
            >
                <option
                    value=""
                    disabled
                    hidden
                >
                    Selecione uma Opção
                </option>
                {
                    options.map((x, i) => <option key={i} value={x.value}>{x.label}</option>)
                }
            </select>
        </div>
    );
}

export default Select;