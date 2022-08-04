// IMPORTS
import { useState } from 'react';
// -- Styles
import {
  NavigationButtonStyled,
  NavigationLinkItemStyled,
  NavigationListStyled,
  NavigationStyled,
  NavigationWrapperStyled,
} from './Navigation.styled';
// -- Other
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../../../shared/constants/navLinks';

// COMPONENT
const Navigation = () => {
  // State
  const [isExpand, setIsExpand] = useState(false);

  return (
    <NavigationWrapperStyled>
      <a href='/'>
        <Logo />
      </a>

      <NavigationButtonStyled onClick={() => setIsExpand(!isExpand)}>
        {isExpand ? <FaTimes /> : <FaBars />}
      </NavigationButtonStyled>

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
