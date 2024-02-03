import styled from 'styled-components';
import { media } from '../mediaQuery';

export const HomeCSS = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;

  > .banner {
    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 40%;

    > .rotate_box {
      background: #fff;
      position: absolute;
      z-index: 1;
    }
  }

  > .btn_wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 60%;

    > .line {
      height: 0px;
      border: 1px dashed #fff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }
  }

  .footer {
    position: absolute;
    bottom: 20px;
    right: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
    transition: 0.2s;
    color: #609098;

    &:hover {
      transform: scale(1.1);
    }
  }

  ${media.desktop`
 > .banner {
  padding: 50px;

    > .rotate_box {
      border-radius: 50px;
      filter: blur(30px);
      width: 200px;
      height: 200px;
    }
  }
    > .btn_wrap {
    gap: 15px;
   
    > .line {
      width: 400px;
      margin: 15px 0px;
    }
  }

  .footer {
    font-size: 20px;
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }
  `}

  ${media.tablet`
  > .banner {
    padding: 40px;
    > .rotate_box {
      border-radius: 45px;
      filter: blur(25px);
      width: 180px;
      height: 180px;
    }
  }

  > .btn_wrap {
    gap: 15px;
    

    > .line {
      width: 330px;
      margin: 10px 0px;
    }
  }

  .footer {
    font-size: 18px;
    width: 37px;
    height: 37px;
    border-radius: 8px;
  }
`}

  ${media.largeMobile`
  > .banner {
    padding: 50px;
    > .rotate_box {
      border-radius: 40px;
      filter: blur(25px);
      width: 170px;
      height: 170px;
    }
  }

  > .btn_wrap {
    gap: 15px;
    

    > .line {
      width: 290px;
      margin:7px 0px;
    }
  }

  .footer {
    font-size: 18px;
    width: 35px;
    height: 35px;
    border-radius: 7px;
  }
  `}

  ${media.smallMobile`
  > .banner {
    padding: 60px;
    > .rotate_box {
      border-radius: 35px;
      filter: blur(25px);
      width: 160px;
      height: 160px;
    }
  }
  
  > .btn_wrap {
    gap: 10px;
    

    > .line {
      width: 190px;
      margin:7px 0px;
    }
  }

  .footer {
    font-size: 17px;
    width: 34px;
    height: 34px;
    border-radius: 7px;
  }
`}
`;
