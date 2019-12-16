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
  align-items: center;
  position: fixed;
  top:16.9rem;
  left: 0;
  right: 0;

`;

const BuildingName = styled.div`
  ispaly: flex;
  font-size: 1.8rem;
  font-family: S-CoreDream-6;
  font-weight: bold;
  text-align: center;
  color: #000000;
`;
export default BuildingNameTop;
