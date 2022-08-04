import styled from 'styled-components';

export const MediaIconStyled = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  background-color: #51515b;
  border-radius: 4px;

  width: 40px;
  height: 40px;

  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: #212125;
  }
`;
