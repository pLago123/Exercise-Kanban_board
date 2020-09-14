import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';

const Input = ({ name, type, placeholder }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} hasError={!!error}>
      <label htmlFor={name}>
        <input
          ref={inputRef}
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoComplete="off"
        />
      </label>
    </Container>
  );
};

export default Input;
