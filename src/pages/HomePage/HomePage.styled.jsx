import styled from 'styled-components';
import brakepoints from '../../shared/constants/brakepoints';
import mainBg from '../../assets/images/main-bg.jpg';

export const HomePageStyled = styled.div`
  overflow: hidden;
  background-color: #f7f7f7;
  background-image: url(${mainBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
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
  width: 100%;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding-left: 15px;
    padding: 0 15px 20px 15px;
  }
`;

export const FaqContainerStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  padding-top: 50px;
  padding-bottom: 50px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
    padding-top: 150px;
    padding-bottom: 150px;
  }
`;

export const NewsContainerStyled = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
  padding-bottom: 50px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
    padding-bottom: 150px;
  }
`;
