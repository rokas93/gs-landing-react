import React from 'react';
import { ButtonStyled } from './Button.styled';

const Button = ({ text, url }) => {
  return <ButtonStyled href={url}>{text}</ButtonStyled>;
};

export default Button;
