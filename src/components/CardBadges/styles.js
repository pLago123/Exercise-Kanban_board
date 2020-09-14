import styled from 'styled-components';

export const Badge = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 14px;
  height: 14px;

  margin-right: 5px;

  border-radius: 2.5px;

  background-color: ${(props) => props.color};

  pointer-events: none;
`;
