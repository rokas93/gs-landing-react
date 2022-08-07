import styled from 'styled-components';
import brakepoints from '../../shared/constants/brakepoints';
import mainBg from '../../assets/images/main-bg.jpg';

export const HomePageStyled = styled.main`
  background-color: #f7f7f7;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 5% top 0;

  overflow: hidden;
`;

export const NavigationContainerStyled = styled.section`
  box-shadow: 0px 12px 28px #0000000d;
`;

export const SliderContainerStyled = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
  }
`;

export const MonitorContainerStyled = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding-left: 15px;
    padding: 0 15px;
  }
`;

export const FaqContainerStyled = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
  }
`;

export const NewsContainerStyled = styled.section`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
  }
`;

export const FooterContainerStyled = styled.section``;
