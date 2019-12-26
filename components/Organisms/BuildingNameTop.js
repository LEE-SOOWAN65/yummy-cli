import React from "react";
import styled from "styled-components";

import ForkIcon from "../atoms/Icon/ForkRed";

function BuildingNameTop(props) {
  return (
    <Wrapper>
      <ForkIcon style={{ paddingRight: "1.2rem" }} />
      <BuildingName>{props.name}</BuildingName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex
  flex-direction: row;
  text-align: center;
  width:100%
  align-items:center
justify-content:center
`;

const BuildingName = styled.p`
  dispaly: flex;
  font-size: 1.8rem;
  font-family: S-CoreDream-6;
  color: #000000;
  margin: 0;
`;
export default BuildingNameTop;
