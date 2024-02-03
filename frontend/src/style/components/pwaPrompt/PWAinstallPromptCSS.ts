import styled from 'styled-components';
import { media } from '../../mediaQuery';

export const PWAInstallPromptCSS = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  min-height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.3);

  > .bg {
    background: #fff;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 35vh;
    box-shadow: 5px 0px 20px 3px rgba(0, 0, 0, 0.3);

    > section {
      > p {
        span {
          font-weight: bold;
          color: #2e66dd;
        }
      }

      > strong {
        font-weight: bold;
        color: #2e66dd;
      }

      > .btn-wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        > button {
          font-weight: bold;
          color: #fff;
          padding: 5px;

          &:first-child {
            background: #609098;

            &:hover {
              background: #dadada;
            }
          }

          &:last-child {
            background: #dadada;
            &:hover {
              background: #609098;
            }
          }
        }
      }
    }
  }

  ${media.smallMobile`
  > .bg {

    > section {
      > p {
 
        font-size:13px;
        span {
          font-size:15px;
        }
      }

      > strong {
        font-size:21px;
      }

      > .btn-wrap {
        gap: 5px;
        margin-top:3px;
        >button{
          padding:5px;
          width:120px;
          height:30px;
          border-radius:10px;
          font-size:16px;
        }
      }
    }

    >.img-wrap{
      width:160px;

      >img{
        object-fit:cover;
        width:100%;
        height:auto;
        margin-top:5px;
      }
    }
  }
  `}

  ${media.largeMobile`
  > .bg {
    
    > section {
      > p {

        font-size:15px;
        span {
          font-size:17px;
        }
      }

      > strong {
        font-size:24px;
      }

      > .btn-wrap {
        gap: 8px;
        margin-top:5px;
        >button{
          padding:5px;
          width:150px;
          height:40px;
          border-radius:10px;
          font-size:18px;
        }
      }
    }

    >.img-wrap{
      width:200px;

      >img{
        object-fit:cover;
        width:100%;
        height:auto;
        margin-top:5px;
      }
    }
  }
  `}

  ${media.tablet`
    
  > .bg {
    gap: 5px;

    > section {
      > p {

        font-size:20px;
        span {
          font-size:22px;
        }
      }

      > strong {
        font-size:30px;
      }

      > .btn-wrap {
        gap: 10px;
        margin-top: 10px;
        >button{
          padding:10px;
          width:170px;
          height:50px;
          border-radius:10px;
          font-size:25px;
        }
      }
    }

    >.img-wrap{
      width:300px;


      >img{
        object-fit:cover;
        width:100%;
        height:auto;
        margin-top:5px;
      }
    }
  }
    `}

    ${media.desktop`
    
  > .bg {
    border-radius: 10px;
    padding: 20px 0px;
    bottom: calc(50% - 30%);
    left:calc(50% - 25%);
    width: 50%;
    min-height: 50%;
    box-shadow: 5px 0px 20px 3px rgba(0, 0, 0, 0.3);
 

    > section {
      > p {   
        font-size:20px;

        span {
     
          font-weight: bold;
          color: #2e66dd;      
         
        }
      }

      > strong {
        font-weight: bold;
        color: #2e66dd;
        font-size:30px;
      }

      > .btn-wrap {
        flex-direction: row;
        gap:20px;
       margin-top:20px;
      

        > button {
          font-weight: bold;
          color: #fff;
          padding:10px 15px;  
          font-size:20px;
          border-radius: 10px;


          &:last-child {
            background: #dadada;
            &:hover {
              background: #609098;
            }
          }
        }
      }
    }

    >.img-wrap{
      width:300px;


      >img{
        object-fit:cover;
        width:100%;
        height:auto;
        margin-top:5px;
      }
    }
  }
    `}
`;
