import styled, { css } from 'styled-components';

export const ButtonStyled = styled.a`
  /* display: inline-block; */

  border-radius: 5px;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.72px;

  cursor: pointer;

  ${({ type }) =>
    type === 'primary' &&
    css`
      color: #fff;

      background: linear-gradient(to right, #9cce93, #8eb58d);
      box-shadow: 0px 6px 14px #9dcc9442;

      padding: 15px 30px;

      &:hover {
        background: linear-gradient(to right, #aae0a1, #9cc69c);
      }
    `}

  ${({ type }) =>
    type === 'secondary' &&
    css`
      color: #3d3c45;

      background-color: #fff;
      box-shadow: 0px 6px 14px #00000020;

      padding: 10px 20px;
    `}
`;
