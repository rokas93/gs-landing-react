import styled, { css } from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const FaqCardStyled = styled.div`
  border: 1px solid #dadada;
  border-radius: 4px;

  flex-grow: 2;

  width: 100%;

  background-color: #fff;

  cursor: pointer;

  @media screen and (min-width: ${brakepoints.md}px) {
    width: ${({ isActive }) => (isActive ? '100%' : 'calc((100% - 20px) / 2)')};
  }
`;

export const FaqCardHeadStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px;

  color: #3d3c45;
  letter-spacing: 0.88px;

  ${({ isActive }) =>
    isActive &&
    css`
      font-weight: 600;
    `}
`;

export const FaqCardBodyStyled = styled.div`
  padding: 20px;

  color: #3d3c45;
  font-size: 14px;
  letter-spacing: 0.64px;

  border-top: 1px solid #dadada;
`;

export const FaqCardPointerStyled = styled.div`
  display: flex;
  justify-content: center;

  width: 25px;
  height: 25px;
  background: #ebebeb;
  border-radius: 2px;

  padding: 8px;

  & svg {
    ${({ isActive }) =>
      isActive &&
      css`
        color: #fff;
        transform: rotate(180deg);
      `}
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: linear-gradient(to right, #9cce93, #8eb58d);
      box-shadow: 0px 6px 14px #9dcc9442;
    `}
`;
