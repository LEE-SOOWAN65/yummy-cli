import React from "react";
import styled from "styled-components";
import Logo from "../components/atoms/Icon/LoadingLogo";

export default function BuildingDialog(props) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo style={{ margin: "0 auto" }} />
        <Text>끼니끼니</Text>
      </LogoWrapper>
      <TextLoad>열심히 로딩중입니다~~</TextLoad>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  height: 100%;
  border-radius: 2.2rem;
  margin: 2.6rem 0 0;
  object-fit: contain;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #e54b4b;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
const Text = styled.p`
  object-fit: contain;
  font-family: HSSummer;
  font-size: 3.5rem;
  line-height: 1.2;
  text-align: left;
  color: #ffffff;
  margin-bottom: 0;
`;

const LogoWrapper = styled.div`
  margin: 25% auto 13.2rem;
  display: flex;
  flex-direction: column;
`;

const TextLoad = styled.p`
  width: 23.7rem;
  height: 5rem;
  object-fit: contain;
  border-radius: 5.9rem;
  box-shadow: 0 1rem 1rem 0 #581d1d;
  background-color: #fa535a;
  font-family: S-CoreDream-6;
  font-size: 1.7rem;
  font-weight: bold;
  line-height: 1.18;
  text-align: center;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;
