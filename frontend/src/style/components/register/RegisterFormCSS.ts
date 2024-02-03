import styled from 'styled-components';
import { media } from '../../mediaQuery';

export const RegisterFormCSS = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;

  > span {
    color: #a10909;
  }

  > fieldset:not(.radio-filed) {
    background-color: #fff;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    border: none;
    margin: 10px auto;

    > input {
      border: none;
      background-color: transparent;
      outline: none;
    }
  }

  > .radio-filed {
    display: flex;
    flex-direction: row;
    border: none;

    > label {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
  }

  ${media.smallMobile`
  margin-top:10px;
  > span {
    font-size: 11px;
    transform: translateY(-5px);
  }

  > fieldset:not(.radio-filed) {
    width: 200px;
    height: 30px;
    border-radius: 10px;


    > input {
      font-size: 12px;
      width: 90%;
      height: 30px;
    }
  }

  > .radio-filed {
    font-size: 10px;
    gap: 10px;
    margin-bottom: 10px;
  }
  `}

  ${media.largeMobile`
  > span {
    font-size: 12px;
    transform: translateY(-5px);
  }

  > fieldset:not(.radio-filed) {
    width: 300px;
    height: 40px;
    border-radius: 10px;
  
    > input {
      font-size: 13px;
      width: 90%;
      height: 40px;
    }
  }

  > .radio-filed {
    font-size: 11px;
    gap: 15px;
    margin-bottom: 10px;
  }
  `}

  ${media.tablet`
  > span {
    font-size: 12px;
    transform: translateY(-5px);
  }

  > fieldset:not(.radio-filed) {
    width: 400px;
    height: 45px;
    border-radius: 10px;
  
    > input {
      font-size: 13px;
      width: 90%;
      height: 45px;
    }
  }

  > .radio-filed {
    font-size: 11px;
    gap: 15px;
    margin-bottom: 10px;
  }  
`}

  ${media.desktop`
  > span {
    font-size: 12px;
    transform: translateY(-5px);
  }

  > fieldset:not(.radio-filed) {
    width: 400px;
    height: 45px;
    border-radius: 10px;
  
    > input {
      font-size: 14px;
      width: 90%;
      height: 45px;
    }
  }

  > .radio-filed {
    font-size: 11px;
    gap: 15px;
    margin-bottom: 10px;
  }  
  `}
`;
