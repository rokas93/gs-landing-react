import styled from 'styled-components';

export const MediaButtonStyled = styled.a`
  display: flex;
  align-items: center;

  justify-content: flex-start;

  border: none;
  border-radius: 4px;

  background-color: #51515b;
  transition: background-color 300ms ease-in-out;

  &:hover {
    background-color: #464552;
  }
`;

export const MediaButtonTextStyled = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.64px;

  padding-left: 20px;
`;

export const MediaButtonIconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 15px;
  background-color: ${({ color }) => color};

  width: 50px;
  height: 50px;

  border-radius: 4px;
`;

export const MediaPointerWrapperStyled = styled.div`
  display: flex;

  padding: 20px;

  margin-left: auto;
  transform: rotate(270deg);

  color: #7a7a8b;

  & svg {
    width: 9px;
    height: 9px;
  }
`;
