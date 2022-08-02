import styled from 'styled-components';

export const ButtonStyled = styled.a`
  display: inline-block;
  padding: 15px 30px;

  border-radius: 5px;

  color: #fff;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.72px;

  cursor: pointer;

  box-shadow: 0px 6px 14px #9dcc9442;

  background: linear-gradient(to right, #9cce93, #8eb58d);

  &:hover {
    background: linear-gradient(to right, #aae0a1, #9cc69c);
  }
`;
