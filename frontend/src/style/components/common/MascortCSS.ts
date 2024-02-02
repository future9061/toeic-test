import styled from 'styled-components';
import { MascortProps } from '../../../components/common/Mascort';
import { media } from '../../mediaQuery';

export const MascortCSS = styled.div<MascortProps>`
  justify-content: center;
  align-items: center;
  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  ${media.smallMobile`
  width:50px
  `}

  ${media.largeMobile`
  width:60px
  `}
  
  ${media.tablet`
  width:70px
  `}
  
  ${media.desktop`
  width:75px
  `}
`;
