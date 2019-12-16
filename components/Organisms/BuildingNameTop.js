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
  width:fit-content;
  flex-direction: row;
  align-items: center;
  position: fixed;
  top:16.9rem;
  left: 50%;
  right: 0;
  text-align: center;

`;

const BuildingName = styled.p`
  dispaly: flex;
  font-size: 1.8rem;
  font-family: S-CoreDream-6;
  color: #000000;
  margin: 0;
`;
export default BuildingNameTop;
