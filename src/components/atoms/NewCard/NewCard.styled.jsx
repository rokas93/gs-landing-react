import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const NewCardStyled = styled.a`
  display: flex;
  align-items: center;
  flex-direction: column;

  background-color: #fff;

  border-radius: 0 0 4px 4px;

  width: 100%;
  cursor: pointer;

  @media screen and (min-width: ${brakepoints.md}px) {
    width: calc((100% - 25px) / 2);
  }

  @media screen and (min-width: ${brakepoints.lg}px) {
    flex-direction: row;
    width: 100%;
    border-radius: 0 4px 4px 0;
  }
`;

export const NewCardImgWrapperStyled = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 125px;
  overflow: hidden;

  @media screen and (min-width: ${brakepoints.lg}px) {
    width: 40%;
    height: 150px;
  }

  & img {
    width: 100%;
    object-fit: cover;
  }
`;

export const NewCardContentWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: auto;

  border-width: 0px 1px 1px 1px;
  border-color: #dadada;
  border-style: solid;

  border-radius: 0 0 4px 4px;

  padding: 30px;

  @media screen and (min-width: ${brakepoints.lg}px) {
    width: 60%;
    height: 100%;

    border-width: 1px 1px 1px 0px;
    border-radius: 0 4px 4px 0;
  }
`;

export const NewCardHeadingStyled = styled.h4`
  color: #3d3c45;
  font-size: 18px;
  font-weight: 500;
`;

export const NewCardInfoStyled = styled.p`
  color: #3d3c45;
  font-size: 14px;

  & span {
    color: #ff3939;
  }
`;
