import React, { memo, useState, useEffect, useRef, useCallback } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useField } from '@unform/core';

import { Container, Options, SelectedInput, OptionItem } from './styles';

const SelectInput = ({ name, data, labels }) => {
  const optionsRef = useRef(null);
  const inputRef = useRef(null);
  const [openSelect, setOpenSelect] = useState(false);
  const [selected, setSelected] = useState(0);
  const { fieldName, defaultValue, error, registerField } = useField(name);

  const handleClickOutside = useCallback((e) => {
    if (optionsRef.current && e.target.parentElement !== optionsRef.current) {
      setOpenSelect(false);
    }
  }, []);

  const handleToggleSelect = () => {
    setOpenSelect(!openSelect);
  };

  const handleSelectOption = useCallback((index) => {
    setSelected(index);
    setOpenSelect(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [handleClickOutside]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container hasError={!!error}>
      <label htmlFor={name}>
        <SelectedInput onClick={handleToggleSelect}>
          <div>{labels[selected]}</div>
          {openSelect ? (
            <IoIosArrowUp size={18} />
          ) : (
            <IoIosArrowDown size={18} />
          )}
        </SelectedInput>
        {openSelect && (
          <Options ref={optionsRef}>
            {labels.map((_, index) => (
              <OptionItem key={index} onClick={() => handleSelectOption(index)}>
                {labels[index]}
              </OptionItem>
            ))}
          </Options>
        )}
        <input
          ref={inputRef}
          defaultValue={defaultValue}
          type="text"
          id={name}
          name={name}
          value={data[selected]}
          readOnly
        />
      </label>
    </Container>
  );
};

export default memo(SelectInput);
