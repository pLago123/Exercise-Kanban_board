import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  forwardRef,
} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useField } from '@unform/core';
import { format } from 'date-fns';

import { Container, FormInput, InputButton } from './styles';

const ButtonInput = forwardRef(({ value, onClick, isFocused }, ref) => {
  return (
    <InputButton isFocused={isFocused}>
      <button ref={ref} type="button" onClick={onClick}>
        {value}
      </button>
    </InputButton>
  );
});

const DateInput = ({ name }) => {
  const inputRef = useRef(null);
  const inputButtonRef = useRef(null);
  const [startDate, setStartDate] = useState(new Date());
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(format(new Date(), 'yyyy-MM-dd'));
  const { fieldName, defaultValue, registerField } = useField(name);

  const handleChange = useCallback((date) => {
    setStartDate(date);
    setValue(format(date, 'yyyy-MM-dd'));
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <label htmlFor="picker">
        <DatePicker
          id="picker"
          selected={startDate}
          onChange={(date) => handleChange(date)}
          onCalendarOpen={() => setIsFocused(true)}
          onCalendarClose={() => setIsFocused(false)}
          popperModifiers={{
            preventOverflow: {
              enabled: true,
            },
          }}
          customInput={
            <ButtonInput ref={inputButtonRef} isFocused={isFocused} />
          }
        />
      </label>
      <FormInput
        ref={inputRef}
        defaultValue={defaultValue}
        type="date"
        id={name}
        name={name}
        value={value}
        readOnly
      />
    </Container>
  );
};

export default DateInput;
