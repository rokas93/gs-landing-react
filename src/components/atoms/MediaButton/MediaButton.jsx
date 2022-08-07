import React from 'react';
import {
  MediaButtonIconStyled,
  MediaButtonStyled,
  MediaButtonTextStyled,
  MediaPointerWrapperStyled,
} from './MediaButton.styled';
import { ReactComponent as Pointer } from '../../../assets/icons/pointer-icon.svg';

const MediaButton = ({ link }) => {
  return (
    <MediaButtonStyled href={link.url}>
      <MediaButtonIconStyled color={link.color}>
        <img src={link.icon} alt={link.text} />
      </MediaButtonIconStyled>
      <MediaButtonTextStyled>{link.text}</MediaButtonTextStyled>
      <MediaPointerWrapperStyled>
        <Pointer />
      </MediaPointerWrapperStyled>
    </MediaButtonStyled>
  );
};

export default MediaButton;
