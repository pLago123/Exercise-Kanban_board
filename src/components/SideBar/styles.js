import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  min-width: 75px;
  width: auto;

  padding: 10px;

  border-right: 2px solid #e4e4e4;

  background-color: white;

  @media only screen and (max-width: 768px) {
    flex-direction: row;

    max-height: 70px;
    width: 100%;

    border-top: 2px solid #e4e4e4;
  }
`;

export const TopButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 35px;
    height: 35px;

    padding: 5px;
    margin-bottom: 15px;

    border: 0;
    border-radius: 4px;

    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: row;

    button {
      margin-bottom: 0;
      margin-right: 15px;
    }
  }
`;

export const DashTopButton = styled.button`
  color: white;

  background-color: #2f64e4;

  transition-property: background-color;
  transition-duration: 0.25s;

  &:hover {
    background-color: #1f4fc5;
  }
`;

export const RegularTopButton = styled.button`
  background-color: transparent;

  transition-property: background-color;
  transition-duration: 0.25s;

  &:hover {
    background-color: rgba(230, 230, 230);
  }
`;

export const BottomButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    justify-content: center;

    button {
      margin-bottom: 0;
    }
  }
`;

export const NotificationsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 5px;
  margin-bottom: 15px;

  border-radius: 50%;
  border: 0;

  background-color: transparent;

  transition-property: background-color;
  transition-duration: 0.25s;

  cursor: pointer;

  &:hover {
    background-color: rgba(230, 230, 230);
  }

  @media only screen and (max-width: 728px) {
    margin-right: 10px;
  }
`;

export const AvatarButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 3px;
  margin-bottom: 10px;

  height: 55px;
  width: 55px;

  border-radius: 50%;
  border: 0;

  background-color: transparent;

  transition-property: background-color;
  transition-duration: 0.25s;

  cursor: pointer;

  img {
    height: 100%;
    width: 100%;

    border-radius: 50%;
  }

  &:hover {
    background-color: rgba(230, 230, 230);
  }
`;
