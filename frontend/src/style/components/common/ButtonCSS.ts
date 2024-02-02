import styled from 'styled-components';
import { ButtonProps } from '../../../types/ButtonPtops';
import { media } from '../../mediaQuery';

export const ButtonCSS = styled.button<ButtonProps>`
  cursor: pointer;
  font-weight: 500;
  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.35));
  font-size: ${(props) => props.textsize || '30px'};
  background-color: ${(props) => props.bgcolor || '#7AC3CE'};
  color: ${(props) => props.color || '#fff'};

  &:hover {
    background-color: ${(props) => props.color || '#fff'};
    color: ${(props) => props.bgcolor || '#7AC3CE'};
  }

  ${media.desktop`
    height: 60px;
    width: 180px;  
    padding: 10px;
    border-radius:5px;
    font-size : 26px;
    `}

  ${media.tablet`        
  height: 55px;
  width: 165px;  
  padding: 5px;
  border-radius:5px;
  font-size : 25px;
  `}

    ${media.largeMobile`
    height: 45px;
    width: 145px;  
    padding: 5px;
    border-radius:6px;
    font-size : 18px;
    `}

    ${media.smallMobile`
    height: 40px;
    width: 120px;  
    padding: 5px;
    border-radius:5px;
    font-size : 14px;
    `}
`;
