import React from 'react';
import {
  FooterBottomStyled,
  FooterContainerStyled,
  FooterHeadingStyled,
  FooterLeftStyled,
  FooterLeftWrapperStyled,
  FooterListStyled,
  FooterMediaWrapperStyled,
  FooterMiddleStyled,
  FooterMiddleWrapperStyled,
  FooterRightStyled,
  FooterRightWrapperStyled,
  FooterSeparatorStyled,
  FooterTopStyled,
  FooterWrapperStyled,
} from './Footer.styled';
import getYears from '../../../shared/func/getYears';
import logoIcon from '../../../assets/icons/gs-light-icon.svg';
import Button from '../../atoms/Button/Button';
import useViewport from '../../../hooks/useViewport';
import brakepoints from '../../../shared/constants/brakepoints';
import MediaButton from '../../atoms/MediaButton/MediaButton';
import mediaLinks from '../../../shared/constants/mediaLinks';

const Footer = () => {
  const { width } = useViewport();

  return (
    <FooterWrapperStyled>
      <FooterTopStyled>
        <FooterContainerStyled>
          <FooterLeftStyled>
            <FooterLeftWrapperStyled>
              <a href='/'>
                <img src={logoIcon} alt='asd' />
              </a>
              <span>Išbandyk kitokią SA-MP žaidimo patirtį!</span>
              {width > brakepoints.lg && (
                <Button text={'Jungtis į serverį'} type={'primary'} />
              )}
            </FooterLeftWrapperStyled>
          </FooterLeftStyled>

          <FooterSeparatorStyled />

          <FooterMiddleStyled>
            <FooterMiddleWrapperStyled>
              <FooterHeadingStyled>Nuorodos</FooterHeadingStyled>
              <FooterListStyled>
                <li>
                  <a href='www.google.lt'>Projekto komanda</a>
                </li>
                <li>
                  <a href='www.google.lt'>Serverio taisyklės</a>
                </li>
                <li>
                  <a href='www.google.lt'>Žaidėjo susigrąžinimas</a>
                </li>
                <li>
                  <a href='www.google.lt'>Paslaugos</a>
                </li>
                <li>
                  <a href='www.google.lt'>Aksesuarai</a>
                </li>
              </FooterListStyled>
            </FooterMiddleWrapperStyled>
          </FooterMiddleStyled>

          <FooterSeparatorStyled />

          <FooterRightStyled>
            <FooterRightWrapperStyled>
              <FooterHeadingStyled>Socialiniai tinklai</FooterHeadingStyled>
              <FooterMediaWrapperStyled>
                {mediaLinks.slice(1).map((link) => (
                  <MediaButton key={link.id} link={link} />
                ))}
              </FooterMediaWrapperStyled>
            </FooterRightWrapperStyled>
          </FooterRightStyled>
        </FooterContainerStyled>
      </FooterTopStyled>
      <FooterBottomStyled>
        <span>{`${getYears()}`} &copy; greenside.lt</span>
      </FooterBottomStyled>
    </FooterWrapperStyled>
  );
};

export default Footer;
