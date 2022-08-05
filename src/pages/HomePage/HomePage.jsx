import React from 'react';
import Faq from '../../components/organisms/Faq/Faq';
import Monitor from '../../components/organisms/Monitor/Monitor';
import Navigation from '../../components/organisms/Navigation/Navigation';
import News from '../../components/organisms/News/News';
import Slider from '../../components/organisms/Slider/Slider';
import {
  FaqContainerStyled,
  HomePageStyled,
  MonitorContainerStyled,
  NavigationContainerStyled,
  NewsContainerStyled,
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
      <NewsContainerStyled>
        <News />
      </NewsContainerStyled>
    </HomePageStyled>
  );
};

export default HomePage;
