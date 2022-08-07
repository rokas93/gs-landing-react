// IMPORTS
import { useState } from 'react';
// -- Styles
import {
  NavigationButtonStyled,
  NavigationLinkItemStyled,
  NavigationListStyled,
  NavigationLogoWrapper,
  NavigationStyled,
  NavigationWrapperStyled,
} from './Navigation.styled';
// -- Other
import logoIcon from '../../../assets/icons/gs-dark-icon.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../../../shared/constants/navLinks';
import brakepoints from '../../../shared/constants/brakepoints';
import useViewport from '../../../hooks/useViewport';

// COMPONENT
const Navigation = () => {
  // State
  const [isExpand, setIsExpand] = useState(false);
  const { width } = useViewport();

  return (
    <NavigationWrapperStyled>
      <NavigationLogoWrapper href='/'>
        <img src={logoIcon} alt='asd' />
      </NavigationLogoWrapper>

      {width < brakepoints.md && (
        <NavigationButtonStyled onClick={() => setIsExpand(!isExpand)}>
          {isExpand ? <FaTimes /> : <FaBars />}
        </NavigationButtonStyled>
      )}

      <NavigationStyled isExpand={isExpand}>
        <NavigationListStyled>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavigationLinkItemStyled href={link.url}>
                {link.text}
              </NavigationLinkItemStyled>
            </li>
          ))}
        </NavigationListStyled>
      </NavigationStyled>
    </NavigationWrapperStyled>
  );
};

export default Navigation;
