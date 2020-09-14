import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 10px;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: white;

  height: 60px;
  width: 100%;

  border-radius: 6px;

  padding: 5px 20px;
`;

export const LeftSideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArrowLeftButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  border-radius: 50%;

  height: 30px;
  width: 30px;

  background-color: #f2f2f2;

  transition-property: background-color;
  transition-duration: 0.25s;

  cursor: pointer;

  &:hover {
    background-color: rgba(230, 230, 230);
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 40px;

  margin: 0px 10px;

  border-radius: 8px;

  color: white;
  background-color: #49bf49;
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RightSideWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CogButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 35px;
  width: 35px;

  border: 2px solid black;
  border-radius: 4px;

  background-color: transparent;

  transition-property: background-color;
  transition-duration: 0.25s;

  cursor: pointer;

  &:hover {
    background-color: rgba(230, 230, 230);
  }
`;
