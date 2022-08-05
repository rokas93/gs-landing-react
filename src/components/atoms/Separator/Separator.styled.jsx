import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const SeperatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: center;
  align-items: center;

  @media screen and (min-width: ${brakepoints.md}px) {
    flex-direction: row;
  }
`;

export const SeperatorElementStyled = styled.div`
  width: 34px;
  height: 6px;
  background-color: #9dcc94;
`;

export const SeperatorHeadingStyled = styled.h3`
  color: #3d3c45;
  font-size: 28px;
  letter-spacing: 1.44px;
  font-weight: 600;
`;
