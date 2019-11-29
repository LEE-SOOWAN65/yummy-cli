import React from "react";
import styled from "styled-components";
import Arrow from "../atoms/Icon/Botton/LeftArrow";
import ForkIcon from "../atoms/Icon/Fork";
import Link from "next/link";

function BuildingNameTop() {
  return (
    <Wrapper>
      <Link href="/index">
        <a style={{ textDecoration: "none" }}>
          <Arrow style={{ paddingLeft: "1.8rem" }} />
        </a>
      </Link>
      <IconWrapper>
        <ForkIcon />
        <BuildingName>생활관 카레돈카스</BuildingName>
      </IconWrapper>
    </Wrapper>
  );
}
const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  position: "fixed";
  width: 80%;
`;

const Wrapper = styled.div`
  display: flex
  flex-direction: row;
  overflow: auto;
  position: "fixed";
  width: 100%;
  padding-top:2.88rem;
`;

const BuildingName = styled.div`
  ispaly: flex;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;
export default BuildingNameTop;
