import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: auto;
  height: auto;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: auto;
    height: auto;

    position: relative;

    border-radius: 4px;

    background-color: white;

    user-select: none;

    cursor: pointer;

    input {
      display: none;
    }

    @media only screen and (max-width: 426px) {
      flex: 1;
    }
  }
`;

export const SelectedInput = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;

  padding: 3px 5px;

  border-radius: 3px;

  transition-property: background-color;
  transition-duration: 0.2s;

  &:hover {
    background-color: rgb(230, 230, 230);
  }

  div {
    display: flex;
    align-items: center;

    margin-right: 5px;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: column;

  width: 100px;
  height: auto;

  border-radius: 3px;

  position: absolute;
  top: 33px;
  left: 0;
  z-index: 10;

  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);

  background-color: white;

  overflow: hidden;
`;

export const OptionItem = styled.div`
  display: flex;
  align-items: center;

  padding: 8px 12px;

  &:hover {
    background-color: rgb(230, 230, 230);
  }

  svg {
    pointer-events: none;
  }
`;
