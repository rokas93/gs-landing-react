import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ text, url, type }) => {
  return (
    <ButtonStyled href={url} type={type}>
      {text}
    </ButtonStyled>
  );
};

export default Button;
