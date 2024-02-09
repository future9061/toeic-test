import React from 'react';
import styled from 'styled-components';
import { media } from '../../style/mediaQuery';
import { NavigationBarProps } from '../../types/NavigationBarProps';

const Wrapper = styled.div`
  ${media.smallMobile`
    width: 200px;
    height: 50px;
    border-radius: 8px;
  `}
  ${media.largeMobile`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 0px;
  `}
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  width: 400px;
  height: 64px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const Box = styled.div`
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

const DescBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.p`
  display: flex;
  color: #838383;
  font-size: 10px;
  font-weight: 400;
  margin-left: 2px;
`;

const Title = styled.p`
  ${media.largeMobile`
    font-size: 16px;
  `}
  display: flex;
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

function ClickNavigationBox({
  color,
  size,
  path,
  sub,
  title,
}: NavigationBarProps) {
  return (
    <Wrapper>
      {/* 아이콘 + 제목 박스 */}
      <Box>
        {/* 아이콘 박스의 색깔을 string으로 받습니다 */}

        <IconBox color={color}>
          {/* desktop 사이즈의 img size와 path를 string으로 받습니다 */}
          <Img
            size={size}
            src={`${process.env.PUBLIC_URL}/img/${path}.webp`}
            alt="connect"
          />
        </IconBox>
        {/* subTitle이 있으면 넣고 없으면 빼주세요 */}
        <DescBox>
          <SubTitle>{sub}</SubTitle>
          <Title>{title}</Title>
        </DescBox>
      </Box>
      {/* 화살표 */}
      <Arrow>{'>'}</Arrow>
    </Wrapper>
  );
}

export default ClickNavigationBox;
