import React from 'react';
import Faq from '../../components/organisms/Faq/Faq';
import Monitor from '../../components/organisms/Monitor/Monitor';
import Navigation from '../../components/organisms/Navigation/Navigation';
import Slider from '../../components/organisms/Slider/Slider';
import {
  FaqContainerStyled,
  HomePageStyled,
  MonitorContainerStyled,
  NavigationContainerStyled,
  SliderContainerStyled,
} from './HomePage.styled';

const HomePage = () => {
  return (
    <HomePageStyled>
      <NavigationContainerStyled>
        <Navigation />
      </NavigationContainerStyled>
      <SliderContainerStyled>
        <Slider />
      </SliderContainerStyled>
      <MonitorContainerStyled>
        <Monitor />
      </MonitorContainerStyled>
      <FaqContainerStyled>
        <Faq />
      </FaqContainerStyled>
    </HomePageStyled>
  );
};

export default HomePage;
