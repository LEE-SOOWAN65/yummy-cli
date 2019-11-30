import React from "react";
import styled from "styled-components";
import Logo from "../components/atoms/Icon/LoadingLogo";

export default function BuildingDialog(props) {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo />
        <Text>끼니끼니</Text>
      </LogoWrapper>
      <LoadingBox>
        <TextLoad>Loading...</TextLoad>
      </LoadingBox>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #e54b4b;
`;
const Text = styled.p`
  font-size: 3.4rem;
  text-align: left;
  color: #ffffff;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.46rem 0 17.3rem;
  backgroundcolor: transparent;
`;

const LoadingBox = styled.div`
  width: 19.6rem;
  height: 5.7rem;
  border-radius: 5.9rem;
  box-shadow: 0 10px 10px 0 rgba(88, 29, 29, 0.75);
  background-color: #ffffff;
`;
const TextLoad = styled.p`
  font-size: 2rem;
  text-align: center;
  color: #ffffff;
  border: none;
  backgroundcolor: transparent;
`;
