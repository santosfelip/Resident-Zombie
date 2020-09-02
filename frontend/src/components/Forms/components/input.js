import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

export default function Input({ name,label, ...rest }) {
    const inputRef = useRef(null);
    const { fieldName, registerField, error } = useField(name);


    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField]);

    return (
        <div>
            {label && <label htmlFor={fieldName}>{label}</label>}
            {error && <span style={{ color: '#f00'}}>{error}</span>}
            <input ref={inputRef}{...rest}/>
        </div>
    );
}