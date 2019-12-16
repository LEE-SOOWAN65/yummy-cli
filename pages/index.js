import React from "react";
import styled from "styled-components";
import TopButton from "../components/Organisms/TopButton";

import Logo from "../components/atoms/Icon/BigLogo";
import Speaker from "../components/atoms/Icon/TitleSpeaker";
import Beta from "../components/atoms/Icon/Beta";
import Link from "next/link";
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
          <Logo style={{ marginTop: "5.1rem", marginLeft: " 22rem" }} />
          <Beta style={{ paddingLeft: "31rem" }} />
          <Name>끼니끼니</Name>
          <Intro>
            매일매일 학식 메뉴부터 <br />
            리뷰까지 한번에!
          </Intro>
        </Arrary>

        <BoxWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Speaker style={{ paddingRight: "1.46rem" }} />
            <Title>베타서비스 오픈</Title>
          </div>
          <Context>
            베타서비스 중에는 가입/로그인 없이
            <br />
            서비스이용이 가능합니다.
          </Context>
        </BoxWrapper>

        <Link href="/BuildingList">
          <a style={{ textDecoration: "none" }}>
            <Button>
              <Text>이화여자대학교 오늘의 학식은?</Text>
            </Button>
          </a>
        </Link>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex
  flex-direction: column;
  width: 100%;
  hight:100%
  
`;

const Arrary = styled.div`
  display: flex
  flex-direction: column;
  text-align:right;
  maring-right:3.6rem 
`;
const Name = styled.p`
  font-size: 4.8rem;
  font-family: HSSummer;
  line-height: 1.21;
  text-align: right;
  color: #ffffff;
  margin: 0;
  height: 4.8rem;
  padding-right: 3.6rem;
`;
const Intro = styled.p`
  height: 5.1rem;
  object-fit: contain;
  font-size: 1.8rem;
  line-height: 1.67;
  font-family: S-CoreDream-6;
  text-align: right;
  color: #ffffff;
  padding-right: 3.6rem;
`;
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12.7rem;
  opacity: 0.8;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(255, 101, 101, 0.44);
  border: solid 0.1rem #707070;
  background-color: #f5f5f5;
  margin-bottom: 2.5rem;
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
  font-family: S-CoreDream-6;
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
  margin-top: 1rem;
  font-family: S-CoreDream-6;
`;

const Button = styled.div`
  display: flex;
  width: 27.5rem;
  object-fit: contain;
  opacity: 1;
  border-radius: 5.9rem;
  box-shadow: 0 1rem 1rem 0 rgba(88, 29, 29, 0.8);
  background-color: #e54b4b;
  margin: 0 auto 3.5rem;
`;

const Text = styled.p`
  display: flex;
  font-family: S-CoreDream-6;
  height: 1.8rem;
  font-size: 1.5rem;
  font-weight: 800;
  text-align: center;
  align-items: center;
  color: #ffffff;
  margin: 1.4rem auto;
`;

export default FirstPage;
