import React from "react";
import styled from "styled-components";
import Arrow from "../atoms/Icon/Botton/LeftArrowwhite";
import ForkIcon from "../atoms/Icon/Fork";
import { useRouter } from "next/router";

function BuildingNameTop() {
  const router = useRouter();

  return (
    <Wrapper>
      <a onClick={() => router.back()} style={{ textDecoration: "none" }}>
        <Arrow style={{ paddingLeft: "1.8rem" }} />
      </a>
      <IconWrapper>
        <NameWrapper>
          <MenuName>{router.query.name}</MenuName>
        </NameWrapper>
        <BuildingWrapper>
          <ForkIcon style={{ paddingRight: "1.2rem" }} />
          <Text>{router.query.buildingName}</Text>
        </BuildingWrapper>
      </IconWrapper>
    </Wrapper>
  );
}
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  overflow: auto;
  width: 80%;
`;

const Wrapper = styled.div`
  display: flex
  flex-direction: row;
  overflow: auto;
  width: 100%;
  max-width:36rem;
  padding-top:2.88rem;
  position:fixed;
  top:6.5rem;
`;

const MenuName = styled.p`
  height: 2.1rem;
  font-size: 1.8rem;
  text-align: center;
  color: #e54b4b;
  font-weight: 800;
  line-height: 1.22;
  font-family: S-CoreDream-6;
  padding: 0 2rem;
`;

const NameWrapper = styled.div`
  display: flex;
  height: 3.6rem;
  border-radius: 1.5rem;
  box-shadow: 0 0.5rem 1rem 0 #bc3535;
  background-color: #ffffff;
  text-align: center;
  align-items: center;
`;

const BuildingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
`;

const Text = styled.p`
  height: 2.1rem;
  font-size: 1.8rem;
  font-weight: 800;
  font-family: S-CoreDream-6;
  line-height: 1.22;
  text-align: center;
  color: #f5f5f5;
`;

export default BuildingNameTop;
