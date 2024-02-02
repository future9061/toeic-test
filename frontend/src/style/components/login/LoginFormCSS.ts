import styled from 'styled-components';
import { media } from '../../mediaQuery';

export const LoginFormCSS = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 80vh;

  > fieldset {
    background-color: #fff;
    border: none;
    display: flex;
    filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.35));

    > label {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #7ac3ce;
      width: 20%;
      color: #fff;
      font-weight: bold;
    }

    > input {
      border: none;
      width: 80%;
      outline: none;
    }
  }

  > span {
    color: #a10909;
  }

  ${media.smallMobile`
  gap: 15px;
  

  > fieldset {
    border-radius: 10px;
    width: 250px;
    height: 30px;


    > label {
      width: 20%;
      height: 30px;
      border-radius: 10px;
      margin-right:5px;
    }

    > input {
      font-size: 11px;
      border-radius: 10px;
      
    }
  }
  > span {
    font-size: 9px;
    transform: translateY(-5px);
  }
  `}

  ${media.largeMobile`
  gap: 15px;
  

  > fieldset {
    border-radius: 15px;
    width: 300px;
    height: 40px;


    > label {
      width: 20%;
      height: 40px;
      border-radius: 15px;
      margin-right:5px;
    }

    > input {
      font-size: 12px;
      border-radius: 15px;
      
    }
  }
  > span {
    font-size: 11px;
    transform: translateY(-10px);
  }
  `}


  ${media.tablet`
  gap: 20px;
  

  > fieldset {
    border-radius: 15px;
    width: 400px;
    height: 50px;


    > label {
      width: 20%;
      height: 50px;
      border-radius: 15px;
      margin-right:5px;
    }

    > input {
      font-size: 14px;
      border-radius: 15px;
      
    }
  }
  > span {
    font-size: 12px;
    transform: translateY(-10px);
  }
  `}


  ${media.desktop`
  gap: 20px;
  

  > fieldset {
    border-radius: 15px;
    width: 400px;
    height: 50px;


    > label {
      width: 20%;
      height: 50px;
      border-radius: 15px;
      margin-right:5px;
    }

    > input {
      font-size: 14px;
      border-radius: 15px;
      
    }
  }
  > span {
    font-size: 12px;
    transform: translateY(-10px);
  }
  `}
`;
