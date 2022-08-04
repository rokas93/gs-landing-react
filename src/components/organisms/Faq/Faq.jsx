import React from 'react';
import FaqCard from '../../atoms/FaqCard/FaqCard';
import Seperator from '../../atoms/Seperator/Seperator';
import { FaqContentWrapperStyled, FaqStyled } from './Faq.styled';
import FAQ_TEXTS from '../../../shared/texts/faqTexts';

const Faq = () => {
  return (
    <FaqStyled>
      <Seperator text={'Dažniausiai užduodami klausimai'} />
      <FaqContentWrapperStyled>
        {FAQ_TEXTS.map((faq) => (
          <FaqCard key={faq.id} text={faq} />
        ))}
      </FaqContentWrapperStyled>
    </FaqStyled>
  );
};

export default Faq;
