import React from "react";
import styled from "styled-components";
import Arrow from "../atoms/Icon/Botton/LeftArrow";
import ForkIcon from "../atoms/Icon/Fork";

function BuildingNameTop() {
  return (
    <Wrapper>
      <Arrow style={{ paddingLeft: "1.8rem" }} />
      <IconWrapper>
        <ForkIcon />
        <BuildingName>한우리집</BuildingName>
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

const BuildingName = styled.text`dispaly:flex;
flex-direction: row
align-items: center;
font-size: 1.8rem;
font-weight: bold;
color: #000000;
`;
export default BuildingNameTop;
