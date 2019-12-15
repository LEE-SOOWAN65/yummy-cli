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
  height: 61.1rem;
  object-fit: contain;
  border-radius: 2.2rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #e54b4b;
  display:flex;
  align-items:center
  text-align:center
  flex-direction:column;
`;
const Text = styled.p`
  object-fit: contain;
  font-family: HSSummer;
  font-size: 3.5rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
  margin-bottom: 0;
`;

const LogoWrapper = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
`;

const TextLoad = styled.p`
  width: 23.7rem;
  height: 5rem;
  object-fit: contain;
  opacity: 0.15;
  border-radius: 5.9rem;
  box-shadow: 0 1rem 1rem 0 rgba(88, 29, 29, 0.75);
  background-color: #ffffff;
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 17px;
  font-weight: bold;
  line-height: 1.18;
  color: #000000;
`;
