import styled from 'styled-components';
import { media } from '../../mediaQuery';

export const DoubleCheckCSS = styled.button`
  padding: 3px 5px;
  border-radius: 5px;
  color: #fff;
  background: #77aacc;
  text-wrap: nowrap;

  ${media.smallMobile`
  font-size: 8px;
  `}

  ${media.largeMobile`
  font-size: 9px;
  `}

  ${media.tablet`
  font-size: 10px;
  `}
 
  ${media.desktop`
  font-size: 12px;
  `}
`;
