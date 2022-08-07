import { useState, useEffect, useCallback } from 'react';
import Button from '../../atoms/Button/Button';
import {
  SliderContentWrapperStyled,
  SliderHeadingStyled,
  SliderParagraphStyled,
  SliderPointerStyled,
  SliderPointersWrapperStyled,
  SliderStyled,
} from './Slider.styled';
import useViewport from '../../../hooks/useViewport';
import brakepoints from '../../../shared/constants/brakepoints';
import { motion } from 'framer-motion';

const SliderContentMotion = motion(SliderContentWrapperStyled);

const data = [
  {
    id: 0,
    title: 'Metai bėga ypač greit.',
    description: 'Esame be galo laimingi',
    url: 'http://localhost:3000/1',
  },
  {
    id: 1,
    title: 'Nespėjome pastebėti.',
    description: 'Nes projektui šie metai',
    url: 'http://localhost:3000/2',
  },
  {
    id: 2,
    title: 'O projektui jau 7-eri!',
    description: 'Buvo vieni geriausių.',
    url: 'http://localhost:3000/3',
  },
];

const Slider = () => {
  // States
  const [dataId, setDataId] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isNext, setIsNext] = useState(true);

  const { width } = useViewport();

  // Functions
  const handleNextChange = (id) => {
    setIsNext(true);

    if (id >= data.length - 1) {
      return setDataId(data.length - data.length);
    }

    return setDataId(id + 1);
  };

  const handlePrevChange = (id) => {
    setIsNext(false);

    if (id <= 0) {
      return setDataId(data.length - 1);
    }

    return setDataId(id - 1);
  };

  // onTouchStart
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  // onTouchEnd
  const handleTouchEnd = (e) => {
    if (touchStart === null) {
      return;
    }

    const touchLength = touchStart - e.changedTouches[0].clientX;

    if (touchLength > 5) {
      return handleNextChange(dataId);
    }

    if (touchLength < 5) {
      return handlePrevChange(dataId);
    }

    setTouchStart(null);
  };

  const memoizedCallback = useCallback(() => {
    handleNextChange(dataId);
  }, [dataId]);

  // Side effects
  useEffect(() => {
    const timer = setTimeout(() => {
      memoizedCallback();
    }, 3000);

    return () => clearTimeout(timer);
  }, [memoizedCallback]);

  // Motion variants
  const slider = {
    next: { x: '300px', opacity: 0 },
    prev: { x: '-300px', opacity: 0 },
  };

  return (
    <SliderStyled>
      <SliderContentMotion
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        key={dataId}
        initial={isNext ? 'next' : 'prev'}
        animate={{ x: 0, opacity: 1 }}
        exit={isNext ? 'next' : 'prev'}
        variants={slider}
      >
        <SliderHeadingStyled>{data[dataId].title}</SliderHeadingStyled>
        <SliderParagraphStyled>
          {data[dataId].description}
        </SliderParagraphStyled>
      </SliderContentMotion>

      <Button
        text={'Skaityti toliau'}
        url={data[dataId].url}
        type={'primary'}
      />
      {width > brakepoints.md && (
        <SliderPointersWrapperStyled>
          {data.map((item) => (
            <SliderPointerStyled
              key={item.id}
              onClick={() => setDataId(item.id)}
              isActive={item.id === dataId}
            />
          ))}
        </SliderPointersWrapperStyled>
      )}
    </SliderStyled>
  );
};

export default Slider;
