import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const NewsStyled = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  @media screen and (min-width: ${brakepoints.lg}px) {
    grid-template-columns: repeat(2, 50%);
    grid-template-rows: repeat(2, auto);
  }
`;

export const NewsHeaderStyled = styled.div`
  display: flex;
  justify-content: center;

  grid-column-start: 1;

  padding-bottom: 50px;

  @media screen and (min-width: ${brakepoints.md}px) {
    justify-content: space-between;
  }

  @media screen and (min-width: ${brakepoints.lg}px) {
    grid-column-start: 2;
    justify-content: space-between;
  }
`;

export const NewsLeftWrapperStyled = styled.div`
  position: relative;

  display: flex;
  justify-content: center;

  width: 100%;

  grid-column-start: 1;
  grid-row-start: 2;
`;

export const NewsParallelogramStyled = styled.div`
  width: 400px;
  height: auto;

  transform: skew(-5deg);
  background: linear-gradient(
    10deg,
    rgba(141, 181, 141, 1) 58%,
    rgba(157, 204, 148, 1) 42%,
    rgba(157, 204, 148, 1) 100%
  );

  box-shadow: inset 0 -10em 10em -10em rgba(0, 0, 0, 0.8);
`;

export const NewsParallelogramElementStyled = styled.img`
  position: absolute;
  filter: drop-shadow(-4px -5px 0 rgba(0, 0, 0, 0.1));
  width: 150%;
  height: auto;
  top: -10%;
  left: -50%;
  transform: skew(5deg);
`;

export const NewsRightWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media screen and (min-width: ${brakepoints.md}px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
