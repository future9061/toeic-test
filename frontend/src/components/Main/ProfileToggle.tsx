import React from 'react';
import styled from 'styled-components';
import { media } from '../../style/mediaQuery';

const Wrapper = styled.div`
  ${media.smallMobile`
    top: 36px;
    padding: 10px;
  `}
  ${media.largeMobile`
    top: 41px;
    padding: 10px;
  `}
  position: absolute;
  top: 53px;
  right: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  border-radius: 5px;
  border: 0.5px solid #d3d3d3;
  background: #fff;
  p {
    display: flex;
  }
`;

const ModalBox = styled.div`
  ${media.largeMobile`
    gap: 8px;
    p {
      font-size: 12px;
    }
  `}
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

const ModalIconBox = styled.div<{ color: string }>`
  ${media.smallMobile`
    width: 18px;
    height: 18px;
  `}
  ${media.largeMobile`
    width: 20px;
    height: 20px;
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ModalImg = styled.img<{ size: string }>`
  ${media.smallMobile`
    width: 10px;
    height: 10px;
  `}
  ${media.largeMobile`
    width: 12px;
    height: 12px;
  `}
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

function ProfileToggle() {
  return (
    <Wrapper>
      <ModalBox>
        <ModalIconBox color="#FF2868">
          <ModalImg
            size="15px"
            src={`${process.env.PUBLIC_URL}/img/logout.webp`}
            alt="connect"
          />
        </ModalIconBox>
        <p>로그아웃</p>
      </ModalBox>
      <ModalBox>
        <ModalIconBox color="#5562EA">
          <ModalImg
            size="15px"
            src={`${process.env.PUBLIC_URL}/img/profile.webp`}
            alt="connect"
          />
        </ModalIconBox>
        <p>회원정보</p>
      </ModalBox>
    </Wrapper>
  );
}

export default ProfileToggle;
