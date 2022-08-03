import React from 'react';
import Monitor from '../../components/organisms/Monitor/Monitor';
import Navigation from '../../components/organisms/Navigation/Navigation';
import Slider from '../../components/organisms/Slider/Slider';
import {
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
    </HomePageStyled>
  );
};

export default HomePage;
