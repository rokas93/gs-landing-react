import React from 'react';
import {
  SeperatorElementStyled,
  SeperatorHeadingStyled,
  SeperatorStyled,
} from './Separator.styled';

const Seperator = ({ text }) => {
  return (
    <SeperatorStyled>
      <SeperatorElementStyled />
      <SeperatorHeadingStyled>{text}</SeperatorHeadingStyled>
    </SeperatorStyled>
  );
};

export default Seperator;
