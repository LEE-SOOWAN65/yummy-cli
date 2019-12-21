import React from "react";
import styled from "styled-components";
import TopButton from "../components/Organisms/TopButton";
import Logo from "../components/atoms/Icon/indexPage";
import Speaker from "../components/atoms/Icon/TitleSpeaker";
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
          <Logo style={{ width: "50%", margin: "5.14rem 0 9rem 15.6rem" }} />
        </Arrary>

        <BoxWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              textAlign: "center",
              height: "5rem",
              marginTop: "1rem"
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
const BoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 12rem;
  opacity: 0.8;
  box-shadow: 0 0.3rem 0.6rem 0 rgba(255, 101, 101, 0.44);
  border: solid 0.1rem #707070;
  background-color: #f5f5f5;
  margin-bottom: 2rem;
`;
const Title = styled.p`
  display: flex;
  object-fit: contain;
  font-size: 1.7rem;
  font-weight: bold;
  line-height: 1.18;
  text-align: center;
  align-items: center;
  font-family: S-CoreDream-6;
  color: #ff6565;
  margin: 0;
`;
const Context = styled.p`
  object-fit: contain;
  font-size: 1.4rem;
  font-weight: bold;
  line-height: 1.6;
  letter-spacing: normal;
  text-align: center;
  color: #707070;
  font-family: S-CoreDream-6;
  margin: 0;
`;

const Button = styled.div`
  display: flex;
  width: 27.5rem;
  object-fit: contain;
  opacity: 1;
  border-radius: 5.9rem;
  box-shadow: 0 1rem 1rem 0 rgba(88, 29, 29, 0.8);
  background-color: #e54b4b;
  margin: 0 auto 2rem;
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
