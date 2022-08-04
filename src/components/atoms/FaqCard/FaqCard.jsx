import React from 'react';
import {
  FaqCardBodyStyled,
  FaqCardHeadStyled,
  FaqCardStyled,
} from './FaqCard.styled';

const FaqCard = ({ text }) => {
  return (
    <FaqCardStyled>
      <FaqCardHeadStyled>
        <p>{text.question}</p>
        <div></div>
      </FaqCardHeadStyled>
      <FaqCardBodyStyled>{text.answer}</FaqCardBodyStyled>
    </FaqCardStyled>
  );
};

export default FaqCard;
