import React from 'react';
import Button from '../../atoms/Button/Button';
import Separator from '../../atoms/Separator/Separator';
import {
  NewsParallelogramElementStyled,
  NewsHeaderStyled,
  NewsLeftWrapperStyled,
  NewsStyled,
  NewsParallelogramStyled,
  NewsRightWrapperStyled,
} from './News.styled';
import useViewport from '../../../hooks/useViewport';
import brakepoints from '../../../shared/constants/brakepoints';
import newsElement from '../../../assets/images/news-element.png';
import NewCard from '../../atoms/NewCard/NewCard';

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
      {width > brakepoints.lg && (
        <NewsLeftWrapperStyled>
          <NewsParallelogramStyled>
            <NewsParallelogramElementStyled src={newsElement} />
          </NewsParallelogramStyled>
        </NewsLeftWrapperStyled>
      )}
      <NewsRightWrapperStyled>
        <NewCard
          title={'Karo su neaktyviais žaidėjais rezultatai „no. 7“'}
          author={'Hitautas'}
          date={'Spalis 31, 2021'}
        />
        <NewCard
          title={'Karo su neaktyviais žaidėjais rezultatai „no. 7“'}
          author={'Hitautas'}
          date={'Spalis 31, 2021'}
        />
        <NewCard
          title={'Karo su neaktyviais žaidėjais rezultatai „no. 7“'}
          author={'Hitautas'}
          date={'Spalis 31, 2021'}
        />
        <NewCard
          title={'Karo su neaktyviais žaidėjais rezultatai „no. 7“'}
          author={'Hitautas'}
          date={'Spalis 31, 2021'}
        />
      </NewsRightWrapperStyled>
    </NewsStyled>
  );
};

export default News;
