import React from 'react';
import {
  NewCardContentWrapperStyled,
  NewCardHeadingStyled,
  NewCardImgWrapperStyled,
  NewCardInfoStyled,
  NewCardStyled,
} from './NewCard.styled';
import placeholderBg from '../../../assets/images/placeholder-bg.jpg';

const NewCard = ({ url, title, date, author }) => {
  return (
    <NewCardStyled href={url}>
      <NewCardImgWrapperStyled>
        <img src={placeholderBg} alt='' />
      </NewCardImgWrapperStyled>
      <NewCardContentWrapperStyled>
        <NewCardHeadingStyled>{title}</NewCardHeadingStyled>
        <NewCardInfoStyled>
          Parašė <span>{`${author}`}</span>, {`${date}`}
        </NewCardInfoStyled>
      </NewCardContentWrapperStyled>
    </NewCardStyled>
  );
};

export default NewCard;
