import styled, { createGlobalStyle } from 'styled-components';

export const Row = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  overflow: hidden;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  overflow: hidden;
`;

export const BlueGradient = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  background-image: radial-gradient(
    circle at bottom left,
    #f6ffff,
    rgba(0, 0, 0, 0)
  );
`;

export const PinkGradient = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  background-image: radial-gradient(
    circle at bottom right,
    #fdf7fb,
    rgba(0, 0, 0, 0)
  );
`;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    font: 14px 'Nunito', sans-serif;
    background-image: linear-gradient(#d6dde6, #fdf7fb);
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }

  ul {
    list-style: none;
  }
`;
