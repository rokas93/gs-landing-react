import React from 'react';
import Button from '../../atoms/Button/Button';
import {
  SliderHeadingStyled,
  SliderParagraphStyled,
  SliderPointerStyled,
  SliderPointersWrapperStyled,
  SliderStyled,
} from './Slider.styled';
import useViewport from '../../../hooks/useViewport';
import brakepoints from '../../../shared/constants/brakepoints';

const Slider = () => {
  const { width } = useViewport();

  return (
    <SliderStyled>
      <SliderHeadingStyled>
        Metai bėga ypač greit. Nespėjome pastebėti, o projektui jau 7-eri!
      </SliderHeadingStyled>
      <SliderParagraphStyled>
        Esame be galo laimingi šiais metais, nes projektui šie metai buvo vieni
        geriausių.
      </SliderParagraphStyled>
      <Button
        text={'Skaityti toliau'}
        url={'http://google.lt'}
        type={'primary'}
      />
      {width > brakepoints.md && (
        <SliderPointersWrapperStyled>
          <SliderPointerStyled isActive />
          <SliderPointerStyled />
          <SliderPointerStyled />
        </SliderPointersWrapperStyled>
      )}
    </SliderStyled>
  );
};

export default Slider;
