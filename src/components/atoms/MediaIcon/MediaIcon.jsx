import React from 'react';
import { MediaIconStyled } from './MediaIcon.styled';

const MediaIcon = ({ link }) => {
  return (
    <MediaIconStyled href={link.url} target='_blank'>
      <img src={link.icon} alt={link.text} />
    </MediaIconStyled>
  );
};

export default MediaIcon;
