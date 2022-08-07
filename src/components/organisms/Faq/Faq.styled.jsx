import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const FaqStyled = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;

  @media screen and (min-width: ${brakepoints.md}px) {
    gap: 50px;
    padding: 150px 0;
  }
`;

export const FaqContentWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  @media screen and (min-width: ${brakepoints.md}px) {
    gap: 20px;
  }
`;
