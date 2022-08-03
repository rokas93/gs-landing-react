import React from 'react';
import Button from '../../atoms/Button/Button';
import {
  MonitorBlurStyled,
  MonitorHeadingStyled,
  MonitorContentStyled,
  MonitorStyled,
  MonitorInfoStyled,
  MonitorColorBledStyled,
  MonitorElementStyled,
} from './Monitor.styled';
import useViewport from '../../../hooks/useViewport';
import brakepoints from '../../../utils/brakepoints';
import monitorElement from '../../../assets/images/monitor-element.png';

const Monitor = () => {
  const { width } = useViewport();

  return (
    <MonitorStyled>
      <MonitorBlurStyled />
      <MonitorColorBledStyled />
      {width > brakepoints.md && (
        <MonitorElementStyled>
          <img src={monitorElement} alt='asd' />
        </MonitorElementStyled>
      )}

      <MonitorContentStyled>
        <MonitorHeadingStyled>SA-MP serveris</MonitorHeadingStyled>
        <MonitorInfoStyled>
          <p>Serverio IP: samp.greenside.lt</p>
          <p>
            Serverio žaidėjai: <span>104/300</span>
          </p>
        </MonitorInfoStyled>
        {width > brakepoints.md && <Button text={'Jungtis į serverį'} />}
      </MonitorContentStyled>
    </MonitorStyled>
  );
};

export default Monitor;
