import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const NavigationWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 30px;

  max-width: 1280px;
  margin: 0 auto;

  line-height: 50px;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 0 15px;
    line-height: 70px;
  }
`;

export const NavigationStyled = styled.nav`
  display: ${({ isExpand }) => (isExpand ? 'flex' : 'none')};
  justify-content: center;
  width: 100%;

  @media screen and (min-width: ${brakepoints.md}px) {
    & {
      display: block;
      width: auto;
    }
  }
`;

export const NavigationLogoWrapper = styled.a`
  & img {
    vertical-align: middle;
  }
`;

export const NavigationListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  column-gap: 32px;
  list-style: none;

  @media screen and (min-width: ${brakepoints.md}px) {
    & {
      flex-direction: row;
    }
  }
`;

export const NavigationLinkItemStyled = styled.a`
  color: #4d4d57;
  display: block;

  &:hover {
    color: #3d3c45;
    text-shadow: 0 0 0.01px #3d3c45;
  }
`;

export const NavigationButtonStyled = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
`;
