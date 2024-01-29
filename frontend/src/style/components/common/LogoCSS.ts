import styled from 'styled-components';
import { LogoProps } from '../../../components/common/Logo';
import { media } from '../../mediaQuery';

export const LogoCSS = styled.div<LogoProps>`
  cursor: pointer;
  z-index: 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &.small {
    ${media.desktop`
    height: auto;
    width: 110px;
    
  `}

    ${media.tablet`
    height: auto;
    width: 100px;
  `}

  ${media.largeMobile`
  height: auto;
  width: 90px; 
  `}

  ${media.smallMobile`
  height: auto;
  width: 80px;
  `}
  }

  &.large {
    ${media.desktop`
      height: 170px;
      width: 350px;
    `}

    ${media.tablet`
      width: 270px;
      height: 140px;
    `}

    ${media.largeMobile`
      width: 240px;
      height: 120px;
    `}

    ${media.smallMobile`
      width: 220px;
      height: 110px;
    `}
  }
`;
