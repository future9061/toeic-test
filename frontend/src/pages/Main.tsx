import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '../style/mediaQuery';
import { useNavigate } from 'react-router-dom';
import ProfileToggle from '../components/Main/ProfileToggle';
import ClickNavigationBox from '../components/common/ClickNavigationBox';

const Wrapper = styled.div`
  ${media.smallMobile`
    p {
    font-size: 13px;
    }
  `}
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #2e66dd 0%, #639fc8 72.5%, #7ac3ce 100%);
`;

const Header = styled.div`
  ${media.smallMobile`
    height: 35px;
    padding: 8px;
  `}
  ${media.largeMobile`
    height: 40px;
    padding: 10px;
  `}
  position: fixed;
  top: 0;
  width: 100%;
  height: 52px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 18px;
  background-color: #fff;
`;

const Btn = styled.button`
  background: none;
`;

const HomeBtn = styled.div`
  ${media.smallMobile`
    width: 50px;
    height: 50px;
  `}
  ${media.largeMobile`
    width: 60px;
    height: 60px;
  `}
  position: absolute;
  top: 0;
  left: 0;
  width: 77px;
  height: 77px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50%;
`;

const HomeImg = styled.img`
  ${media.smallMobile`
    width: 25px;
    height: 25px;
  `}
  ${media.largeMobile`
    width: 30px;
    height: 30px;
  `}
  width: 40px;
  height: 40px;
`;

const SkillImg = styled.img`
  ${media.smallMobile`
    width: 15px;
    height: 15px;
  `}
  ${media.largeMobile`
    width: 20px;
    height: 20px;
  `}
  width: 25px;
  height: 25px;
`;

const LetText = styled.h2`
  ${media.smallMobile`
    font-size: 40px;
  `}
  ${media.largeMobile`
    font-size: 50px;
  `}
  font-size: 70px;
  color: rgba(19, 18, 62, 0.1);
  font-size: 70px;
  font-weight: 700;
`;

const ProblemBox = styled.div`
  ${media.smallMobile`
    width: 200px;
    height: 120px;
    border-radius: 8px;
    margin-bottom:12px;
    padding: 10px;

  `}
  ${media.largeMobile`
    width: 300px;
    height: 150px;
    margin-bottom:15px;
    border-radius: 10px;
    padding: 15px;
  `}
  display:flex;
  flex-direction: column;
  width: 400px;
  height: 186px;
  padding: 20px;
  margin-bottom: 29px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Title = styled.p`
  ${media.largeMobile`
    font-size: 16px;
    font-weight: 800;
  `}
  display:flex;
  color: #609098;
  font-size: 20px;
  font-weight: 600;
`;

const ContBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex: 1;
`;

const DescBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const IconBox = styled.div<{ color: string }>`
  ${media.smallMobile`
    width: 25px;
    height: 25px;
  `}
  ${media.largeMobile`
    width: 30px;
    height: 30px;
  `}
  display:flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const Img = styled.img<{ size: string }>`
  ${media.smallMobile`
    width: 15px;
    height: 15px;
  `}
  ${media.largeMobile`
    width: 19px;
    height: 19px;
  `}
  width: ${(props) => props.size};
  height: ${(props) => props.size};
`;

const SubTitle = styled.p`
  ${media.largeMobile`
    font-size: 16px;
  `}
  color: #000;
  font-size: 19px;
  font-weight: 400;
`;

const Arrow = styled.p`
  ${media.largeMobile`
    font-size: 20px;  
    font-weight: 400;
  `}
  color: #000;
  font-size: 25px;
  font-weight: 500;
`;

function Main() {
  const navigate = useNavigate();
  const [isShowing, setShowing] = useState(false);
  return (
    <Wrapper>
      <Header>
        <HomeBtn
          onClick={() => {
            navigate('/');
          }}
        >
          <HomeImg src={`${process.env.PUBLIC_URL}/img/home.webp`} alt="home" />
        </HomeBtn>
        <Btn onClick={() => setShowing((pre) => !pre)}>
          <SkillImg
            src={`${process.env.PUBLIC_URL}/img/skill.webp`}
            alt="skill"
          />
        </Btn>
        {isShowing && <ProfileToggle />}
      </Header>
      <LetText>Let’s Go</LetText>
      <ProblemBox>
        <Title>문제풀기</Title>
        <ContBox>
          <DescBox>
            <IconBox color="#395aa2">
              <Img
                size="21px"
                src={`${process.env.PUBLIC_URL}/img/connectIcon.webp`}
                alt="connect"
              />
            </IconBox>
            <SubTitle>실전 기출문제 풀러가기</SubTitle>
          </DescBox>
          <Arrow>{'>'}</Arrow>
        </ContBox>
      </ProblemBox>
      <ProblemBox>
        <Title>복습</Title>
        <ContBox>
          <DescBox>
            <IconBox color="#DE3755">
              <Img
                size="24px"
                src={`${process.env.PUBLIC_URL}/img/wrongIcon.webp`}
                alt="connect"
              />
            </IconBox>
            <SubTitle>내가 틀린 문제</SubTitle>
          </DescBox>
          <Arrow>{'>'}</Arrow>
        </ContBox>
        <ContBox>
          <DescBox>
            <IconBox color="#EED600">
              <Img
                size="24px"
                src={`${process.env.PUBLIC_URL}/img/favoriteIcon.webp`}
                alt="connect"
              />
            </IconBox>
            <SubTitle>즐겨찾기한 문제</SubTitle>
          </DescBox>
          <Arrow>{'>'}</Arrow>
        </ContBox>
      </ProblemBox>
      <ClickNavigationBox
        color="#5562EA"
        size="22px"
        path="reportIcon"
        title="문제 제보하기"
      />
    </Wrapper>
  );
}

export default Main;
