import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;

  width: 100%;

  label {
    display: flex;
    flex: 1;
    align-items: center;

    border: 1px solid #e4e4e4;
    border-radius: 2px;

    padding: 3px 5px;

    transition-property: box-shadow;
    transition-duration: 0.1s;

    background-color: white;

    ${(props) =>
      props.isFocused &&
      css`
        box-shadow: 0px 0px 0px 1px #e4e4e4;
      `}

    ${(props) =>
      props.hasError &&
      css`
        background-color: #ffb3b3;
        border: 1px solid #c53030;
        box-shadow: 0px 0px 0px 1px #c53030;
      `}

    input {
      height: 16px;
      width: 100%;

      border: 0;

      ${(props) =>
        props.hasError &&
        css`
          background-color: #ffb3b3;
        `}
    }
  }
`;
