import styled from 'styled-components';
import bg from '../../../assets/images/monitor-bg.jpg';
import brakepoints from '../../../utils/brakepoints';

export const MonitorStyled = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: 0% 85%;
  background-size: cover;
  padding: 70px 30px;

  position: relative;

  @media screen and (min-width: ${brakepoints.md}px) {
    margin-right: -50vmax;
    padding: 70px;
  }
`;

export const MonitorBlurStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background-color: #3d3c45;
  opacity: 0.7;
  backdrop-filter: blur(12px);
  mix-blend-mode: color;
`;

export const MonitorColorBledStyled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: #3d3c45 0% 0% no-repeat padding-box;
  mix-blend-mode: color;
  opacity: 1;
`;

export const MonitorContentStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;

  @media screen and (min-width: ${brakepoints.md}px) {
    flex-direction: row;
  }
`;

export const MonitorInfoWrapperStyled = styled.div``;

export const MonitorInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  color: #ccc;
  font-weight: 300;
  letter-spacing: 0.88px;

  margin-top: 22px;

  & p {
    text-align: center;

    @media screen and (min-width: ${brakepoints.md}px) {
      text-align: left;
    }
  }

  & span {
    color: #9dcc94;
    font-weight: 600;
  }

  @media screen and (min-width: ${brakepoints.md}px) {
    margin-bottom: 40px;
  }
`;

export const MonitorHeadingStyled = styled.h2`
  color: #fff;
  letter-spacing: 1.28px;
  font-weight: 500;
  font-size: 28px;
  text-align: center;

  @media screen and (min-width: ${brakepoints.md}px) {
    text-align: left;
  }
`;

export const MonitorElementStyled = styled.div`
  position: absolute;
  bottom: -15%;
  right: -10%;

  width: 100%;

  & img {
    width: 1200px;
  }
`;

export const MonitorIconsWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-direction: row;

  @media screen and (min-width: ${brakepoints.md}px) {
    flex-direction: column;
    gap: 15px;
  }
`;
