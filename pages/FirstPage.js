import React from "react";
import styled from "styled-components";
import TopButton from "../components/Organisms/TopButton";

import Logo from "../components/atoms/Icon/BigLogo";
import Speaker from "../components/atoms/Icon/TitleSpeaker";
function FirstPage() {
  return (
    <Wrapper>
      <TopButton />
      <div
        style={{
          backgroundImage: "url(/BackgroundImage.png)",
          width: "100%",
          height: "100%",
          backgroundSize: "100%",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Arrary>
          <Logo />
          <Name>끼니끼니</Name>
          <Intro>
            매일매일 학식 메뉴부터 <br />
            리뷰까지 한번에!
          </Intro>
        </Arrary>
        <BoxWrapper>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Speaker style={{ paddingLeft: "1.46rem" }} />
            <Title>베타서비스 오픈</Title>
          </div>
          <Context>
            베타서비스 중에는 가입/로그인 없이
            <br />
            서비스이용이 가능합니다.
          </Context>
        </BoxWrapper>
        <Button>학교 선택하고 학식 바로 확인!</Button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex
  flex-direction: column;
  width: 100%;
`;

const Arrary = styled.div`
  display: flex
  flex-direction: column;
  text-align:left;
`;
const Name = styled.p`
  font-size: 4.8remx;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;
const Intro = styled.p`
  width: 18.3rem;
  height: 5.1rem;
  object-fit: contain;
  font-size: 1.8rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
`;
const BoxWrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width: 100%
height: 12.7rem;
opacity: 0.8;
box-shadow: 0 0.3rem 0.6rem 0 rgba(255, 101, 101, 0.44);
border: solid 0.1rem #707070;
background-color: #f5f5f5;
`;
const Title = styled.p`
  object-fit: contain;
  font-size: 1.7rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: center;
  color: #ff6565;
`;
const Context = styled.p`
  object-fit: contain;
  font-size: 1.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
`;

const Button = styled.div`
  width: 27.5rem;
  height: 4.6rem;
  object-fit: contain;
  opacity: 1;
  border-radius: 5.9rem;
  box-shadow: 0 1rem 1rem 0 rgba(88, 29, 29, 0.8);
  background-color: #e54b4b;
  bottom: 8.67rem;
`;

export default FirstPage;
