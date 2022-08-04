import React from 'react';
import {
  SeperatorElementStyled,
  SeperatorHeadingStyled,
  SeperatorStyled,
} from './Seperator.styled';

const Seperator = ({ text }) => {
  return (
    <SeperatorStyled>
      <SeperatorElementStyled />
      <SeperatorHeadingStyled>{text}</SeperatorHeadingStyled>
    </SeperatorStyled>
  );
};

export default Seperator;
