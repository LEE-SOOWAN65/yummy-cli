import React from "react";
import styled from "styled-components";
import Arrow from "../atoms/Icon/Botton/LeftArrowwhite";
import ForkIcon from "../atoms/Icon/Fork";
import Link from "next/link";

function BuildingNameTop() {
  return (
    <Wrapper>
      <Link href="/BuildingMenus">
        <a style={{ textDecoration: "none" }}>
          <Arrow style={{ paddingLeft: "1.8rem" }} />
        </a>
      </Link>
      <IconWrapper>
        <NameWrapper>
          <MenuName>카레돈카스</MenuName>
        </NameWrapper>
        <BuildingWrapper>
          <ForkIcon style={{ paddingLeft: "" }} />
          <Text>생활관</Text>
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
  padding-top:2.88rem;
`;

const MenuName = styled.p`
  width: 8.6rem;
  height: 2.1rem;
  font-size: 1.8rem;
  text-align: center;
  color: #e54b4b;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
`;

const NameWrapper = styled.div`
  width: 12.6rem;

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
  width: 12.6rem;
`;

const Text = styled.p`
  width: 5.2rem;
  height: 2.1rem;
  font-size: 1.8rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;
  text-align: center;
  color: #f5f5f5;
`;

export default BuildingNameTop;
