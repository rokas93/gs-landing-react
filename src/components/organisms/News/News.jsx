import React from 'react';
import Button from '../../atoms/Button/Button';
import Separator from '../../atoms/Separator/Separator';
import {
  NewsParallelogramElementStyled,
  NewsHeaderStyled,
  NewsLeftWrapperStyled,
  NewsStyled,
  NewsParallelogramStyled,
} from './News.styled';
import useViewport from '../../../hooks/useViewport';
import brakepoints from '../../../shared/constants/brakepoints';
import newsElement from '../../../assets/images/news-element.png';

const News = () => {
  const { width } = useViewport();

  return (
    <NewsStyled>
      <NewsHeaderStyled>
        <Separator text={'Naujienos'} />
        {width > brakepoints.md && (
          <Button text={'Visos naujienos'} type={'secondary'} />
        )}
      </NewsHeaderStyled>
      {width > brakepoints.md && (
        <NewsLeftWrapperStyled>
          <NewsParallelogramStyled>
            <NewsParallelogramElementStyled src={newsElement} />
          </NewsParallelogramStyled>
        </NewsLeftWrapperStyled>
      )}
    </NewsStyled>
  );
};

export default News;
