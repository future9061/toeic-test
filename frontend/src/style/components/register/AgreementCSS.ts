import styled from 'styled-components';
import { media } from '../../mediaQuery';

export const AgreementCSS = styled.div`
  overflow-y: scroll;
  text-align: start;
  background: #fff;
  margin: 20px 0px 5px 0px;
  border-radius: 5px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #747474;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: #7ac3ce;
  }

  ${media.smallMobile`
  width:200px;
  height:100px;  
  font-size: 9px;
  padding: 3px;
  `}

  ${media.largeMobile`
  width:300px;
  height:100px;    
  font-size: 11px;
  padding: 6px;
  `}

  ${media.tablet`
  width:400px;
  height:100px;  
  font-size: 12px;
  padding: 10px;
`}

  ${media.desktop`
  width:400px;
  height:100px;  
  font-size: 12px;
  padding: 10px;
  `}
`;
