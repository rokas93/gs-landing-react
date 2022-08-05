import { useState } from 'react';
import FaqCard from '../../atoms/FaqCard/FaqCard';
import Separator from '../../atoms/Separator/Separator';
import { FaqContentWrapperStyled, FaqStyled } from './Faq.styled';
import FAQ_TEXTS from '../../../shared/texts/faqTexts';

const Faq = () => {
  const [selectedId, setselectedId] = useState(null);

  const handleSelect = (id) => {
    if (selectedId !== id) return setselectedId(id);
    setselectedId(null);
  };

  return (
    <FaqStyled>
      <Separator text={'Dažniausiai užduodami klausimai'} />
      <FaqContentWrapperStyled>
        {FAQ_TEXTS.map((text) => (
          <FaqCard
            key={text.id}
            text={text}
            handleSelect={handleSelect}
            isActive={selectedId === text.id}
          />
        ))}
      </FaqContentWrapperStyled>
    </FaqStyled>
  );
};

export default Faq;
