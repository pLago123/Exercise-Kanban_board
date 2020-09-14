import styled, { css } from 'styled-components';

export const Container = styled.div`
  label,
  .react-datepicker-wrapper {
    @media only screen and (max-width: 426px) {
      width: 100%;
    }
  }
  .react-datepicker__day--selected {
    background-color: #3b73fb;
  }
`;

export const FormInput = styled.input`
  display: none;
`;

export const InputButton = styled.div`
  button {
    padding: 3px 5px;

    border: 1px solid #e4e4e4;
    border-radius: 2px;

    background-color: white;

    transition-property: box-shadow, background-color;
    transition-duration: 0.1s, 0.2s;

    cursor: pointer;

    ${(props) =>
      props.isFocused &&
      css`
        box-shadow: 0px 0px 0px 1px #e4e4e4;
      `};

    &:hover {
      background-color: rgb(230, 230, 230);
    }

    @media only screen and (max-width: 426px) {
      width: 100%;
    }
  }
`;
