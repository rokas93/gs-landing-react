import React from 'react';
import { MediaIconStyled } from './MediaIcon.styled';

const MediaIcon = ({ link }) => {
  return (
    <MediaIconStyled href={link.url}>
      <img src={link.icon} alt={link.text} />
      {console.log(link)}
    </MediaIconStyled>
  );
};

export default MediaIcon;
