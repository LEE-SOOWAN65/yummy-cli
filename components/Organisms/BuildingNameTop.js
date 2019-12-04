import React from "react";
import styled from "styled-components";

import ForkIcon from "../atoms/Icon/ForkRed";

function BuildingNameTop(props) {
  return (
    <Wrapper>
      <ForkIcon />
      <BuildingName>{props.name}</BuildingName>
    </Wrapper>
  );
}
const Icon = styled.div`
  display: flex;
  flex-direction: Row;
  align-items: center;
  overflow: auto;
  position: "fixed";
`;

const Wrapper = styled.div`
  display: flex
  flex-direction: row;
  margin:0 auto;
`;

const BuildingName = styled.div`
  ispaly: flex;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;
export default BuildingNameTop;
