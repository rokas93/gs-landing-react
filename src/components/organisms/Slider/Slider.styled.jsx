import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const SliderStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 90px 0;
  width: 100%;

  @media screen and (min-width: ${brakepoints.md}px) {
    width: 50%;
    align-items: flex-start;
  }
`;

export const SliderHeadingStyled = styled.h1`
  color: #3d3c45;
  font-size: 28px;
  letter-spacing: 1.44px;
  text-align: center;

  @media screen and (min-width: ${brakepoints.md}px) {
    text-align: left;
  }
`;

export const SliderParagraphStyled = styled.p`
  margin-top: 20px;
  margin-bottom: 50px;

  color: #3d3c45;
  letter-spacing: 0.88px;
  text-align: center;

  @media screen and (min-width: ${brakepoints.md}px) {
    text-align: left;
  }
`;

export const SliderPointersWrapperStyled = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 50px;
`;

export const SliderPointerStyled = styled.div`
  width: 12px;
  height: 12px;

  background-color: ${({ isActive }) => (isActive ? '#3d3c45' : '#B1B1B4')};
  box-shadow: 0px 6px 14px #9dcc9442;
  border-radius: 2px;

  cursor: pointer;
`;
