import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const FooterWrapperStyled = styled.div``;

// FOOTER TOP STYLED COMPONENT
export const FooterTopStyled = styled.div`
  background-color: #3d3c45;

  padding: 40px 0;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 60px 0;
  }
`;

export const FooterContainerStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  max-width: 1280px;
  margin: 0 auto;

  padding: 0 30px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
  }
`;

// -- FOOTER LEFT STYLED COMPONENT
export const FooterLeftStyled = styled.div`
  width: 100%;

  @media screen and (min-width: ${brakepoints.lg}px) {
    width: calc(100% / 3);
  }
`;

export const FooterLeftWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: #ffffffb8;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 0.64px;

  & span {
    padding: 15px 0 35px 0;
  }
`;

// -- FOOTER MIDDLE STYLED COMPONENT
export const FooterMiddleStyled = styled.div`
  display: flex;

  width: 100%;

  padding-top: 30px;
  padding-bottom: 40px;

  @media screen and (min-width: ${brakepoints.lg}px) {
    width: calc((100% / 3) - 2px);
    justify-content: center;

    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const FooterMiddleWrapperStyled = styled.div``;

// -- FOOTER RIGHT STYLED COMPONENT
export const FooterRightStyled = styled.div`
  display: flex;
  justify-content: flex-start;

  padding-top: 40px;

  width: 100%;

  @media screen and (min-width: ${brakepoints.lg}px) {
    width: calc(100% / 3);
    justify-content: flex-end;
    padding-top: 0;
  }
`;

export const FooterRightWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  @media screen and (min-width: ${brakepoints.md}px) {
    justify-content: flex-start;
    max-width: 320px;
  }
`;

// -- FOOTER OTHER STYLED COMPONENTS
export const FooterHeadingStyled = styled.h5`
  color: #fff;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.8px;

  padding-bottom: 30px;
`;

export const FooterListStyled = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: column;

  list-style: none;

  & li {
    line-height: 1;
  }

  & li a {
    color: #ffffffb8;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.64px;

    &:hover {
      color: #fff;
    }
  }

  @media screen and (min-width: ${brakepoints.md}px) {
    gap: 10px;
  }
`;

export const FooterSeparatorStyled = styled.div`
  height: 1px;
  width: 100%;

  background-color: #51515b;

  @media screen and (min-width: ${brakepoints.lg}px) {
    width: 1px;
    height: auto;
    margin-top: 55px;
  }
`;

export const FooterMediaWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

// FOOTER BOTTOM
export const FooterBottomStyled = styled.div`
  background-color: #323139;
  padding: 30px 0;

  text-align: center;

  & span {
    color: #ffffffb8;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 0.64px;
  }
`;
