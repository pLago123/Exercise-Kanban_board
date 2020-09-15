import styled, { css, keyframes } from 'styled-components';

export const Container = styled.div`
  min-height: 70px;
  width: auto;

  padding: 8px;
  margin-bottom: 10px;

  background-color: white;

  border-radius: 3px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.03);

  transition-property: background-color, box-shadow;
  transition-duration: 0.2s, 0.5s;

  cursor: pointer;

  ${(props) =>
    props.isDragging &&
    css`
      box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.2);
    `}

  &:hover {
    background-color: #eaeaea;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 8px;

  font-weight: 700;
`;

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  max-width: 70vw;
  min-width: 50vw;

  margin: auto;

  @media only screen and (max-width: 426px) {
    min-width: 80vw;
    max-height: 60vh;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  width: 100%;
  height: 100%;

  padding: 20px;

  border-radius: 3px;

  background-color: white;

  animation: ${appearFromTop} 0.5s;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  button {
    display: flex;

    padding: 5px;

    border: 0;
    border-radius: 50%;

    background-color: white;

    transition-property: background-color;
    transition-duration: 0.15s;

    cursor: pointer;
    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
`;

export const DateTagWrapper = styled.div`
  display: flex;
`;

export const DateTagDivider = styled.div`
  margin: 0px 10px;
`;

export const ModalTag = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

export const ModalDate = styled.div``;
export const ModalBody = styled.div``;
export const TaskTitle = styled.h2``;

export const TaskDescription = styled.div`
  width: 100%;

  margin-top: 20px;

  h3 {
    margin-bottom: 10px;

    font-size: 16px;
    font-weight: bold;
    font-family: sans-serif;
  }

  p {
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1.5px;

  margin: 20px 0px;

  border-radius: 2px;

  background-color: rgb(230, 230, 230);
`;

export const DeleteButton = styled.button`
  display: block;

  padding: 5px 8px;
  margin-left: auto;

  border: 0px;
  border-radius: 2px;

  color: white;
  background-color: #fa8b92;

  transition-property: box-shadow, background-color;
  transition-duration: 0.2s, 0.2s;

  cursor: pointer;

  &:hover {
    background-color: #f7535d;
    box-shadow: 0px 0px 0px 1px #fa8b92;
  }
`;
