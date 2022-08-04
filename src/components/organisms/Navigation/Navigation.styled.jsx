import styled from 'styled-components';
import brakepoints from '../../../shared/constants/brakepoints';

export const NavigationWrapperStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 35px;
  justify-content: space-between;
  align-items: center;
  padding: 35px 30px;
  line-height: 0.5;

  max-width: 1280px;
  width: 100%;

  @media screen and (min-width: ${brakepoints.md}px) {
    padding: 35px 15px;
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

export const NavigationListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 32px;
  list-style: none;

  @media screen and (min-width: ${brakepoints.md}px) {
    & {
      flex-direction: row;
    }
  }
`;

export const NavigationLinkItemStyled = styled.a`
  color: #4d4d57;

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

  @media screen and (min-width: ${brakepoints.md}px) {
    & {
      display: none;
    }
  }
`;
