import styled from 'styled-components';
import brakepoints from '../../utils/brakepoints';

export const HomePageStyled = styled.div`
  overflow: hidden;
`;

export const NavigationContainerStyled = styled.div`
  display: flex;
  justify-content: center;

  box-shadow: 0px 12px 28px #0000000d;
`;

export const SliderContainerStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
  }
`;

export const MonitorContainerStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 0 20px 0;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding-left: 15px;
    padding: 0 15px 20px 15px;
  }
`;
