import styled from 'styled-components';
import { SubmitBtnProps } from '../../../types/SubmitBtnProps';
import { media } from '../../mediaQuery';

export const SubmitBtnCSS = styled.button<SubmitBtnProps>`
  background: ${(props) => props.bgColor || '#fff'};
  color: ${(props) => props.color || '#7AC3CE'};
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.35);
  margin-top: 10px;

  &:hover {
    background-color: ${(props) => props.color || '#7AC3CE'};
    color: ${(props) => props.bgColor || '#fff'};
  }

  ${media.smallMobile`
  font-size:13px;
  height: 35px;
  width: 90px;
  padding: 4px;
  border-radius: 7px;
  `}

  ${media.largeMobile`
  font-size:15px;
  height: 42px;
  width: 110px;
  padding: 5px;
  border-radius: 8px;
  `}

  ${media.tablet`
  font-size:16px;
  height: 45px;
  width: 115px;
  padding: 5px;
  border-radius: 9px;
  `}

  ${media.desktop`
  font-size:16px;
  height: 45px;
  width: 115px;
  padding: 5px;
  border-radius: 9px;`}
`;
