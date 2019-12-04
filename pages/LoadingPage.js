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
  height: 81.2rem;
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
  /
`;

const LoadingBox = styled.div`
  width: 19.6rem;
  height: 5.7rem;
  object-fit: contain;
  opacity: 0.15;
  border-radius: 5.9rem;
  box-shadow: 0 1rem 1rem 0 rgba(88, 29, 29, 0.75);
  background-color: #ffffff;
`;
const TextLoad = styled.p`
  font-size: 2rem;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  text-align: left;
`;
