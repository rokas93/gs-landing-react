import React from 'react';
import Navigation from '../../components/organisms/Navigation/Navigation';
import Slider from '../../components/organisms/Slider/Slider';
import {
  HomePageStyled,
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
    </HomePageStyled>
  );
};

export default HomePage;
