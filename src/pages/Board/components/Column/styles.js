import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;

  padding: 10px;
  margin: 0px 10px;

  h3 {
    margin-bottom: 10px;

    color: #636d80;
    font-weight: 700;
    font-size: 18px;
  }

  & + div {
    margin-left: 0px;
  }
`;

export const ColumnBody = styled.div`
  width: 250px;
  height: auto;

  padding: 15px;

  border-radius: 4px;

  background: #f9fafb;
`;

export const TaskList = styled.div`
  width: 100%;
  height: auto;

  margin-bottom: 20px;
`;

export const AddTaskButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  padding: 5px;

  border: none;
  border-radius: 4px;

  font-family: 'Nunito';
  font-weight: bold;
  color: #2f64e4;

  cursor: pointer;

  background-color: #ebf0ff;

  transition-property: background-color;
  transition-duration: 0.2s;

  span {
    margin-right: 5px;
  }

  &:hover {
    background-color: #d6e0ff;
  }
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

    cursor: pointer;

    transition-property: background-color;
    transition-duration: 0.15s;

    &:hover {
      background-color: rgb(230, 230, 230);
    }
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex: 1;

  form {
    display: flex;
    flex: 1;
  }
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > div {
    margin-bottom: 20px;
  }
`;

export const TypeDateWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const FormButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  padding: 3px 5px;
  margin-left: auto;

  border: 1px solid #2f64e4;
  border-radius: 2px;

  color: white;
  background-color: #3b73fb;

  transition-property: box-shadow, background-color;
  transition-duration: 0.1s, 0.2s;

  cursor: pointer;

  &:hover {
    border: 1px solid #aec4fa;
    background-color: #2f64e4;
  }
`;
