import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface InputParams {
  name: string;
  [key: string]: string;
}

const Input = ({ name, ...rest }: InputParams) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

export default Input;
