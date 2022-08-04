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
  MonitorInfoWrapperStyled,
  MonitorIconsWrapperStyled,
} from './Monitor.styled';
import useViewport from '../../../hooks/useViewport';
import brakepoints from '../../../shared/constants/brakepoints';
import monitorElement from '../../../assets/images/monitor-element.png';
import mediaLinks from '../../../shared/constants/mediaLinks';
import MediaIcon from '../../atoms/MediaIcon/MediaIcon';

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
        <MonitorInfoWrapperStyled>
          <MonitorHeadingStyled>SA-MP serveris</MonitorHeadingStyled>
          <MonitorInfoStyled>
            <p>Serverio IP: samp.greenside.lt</p>
            <p>
              Serverio žaidėjai: <span>104/300</span>
            </p>
          </MonitorInfoStyled>
          {width > brakepoints.md && <Button text={'Jungtis į serverį'} />}
        </MonitorInfoWrapperStyled>
        <MonitorIconsWrapperStyled>
          {width > brakepoints.md && <MediaIcon link={mediaLinks[0]} />}
          <MediaIcon link={mediaLinks[1]} />
          <MediaIcon link={mediaLinks[2]} />
        </MonitorIconsWrapperStyled>
      </MonitorContentStyled>
    </MonitorStyled>
  );
};

export default Monitor;
