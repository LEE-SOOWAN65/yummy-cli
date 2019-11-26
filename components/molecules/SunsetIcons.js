import React, { useState } from "react";
import styled from "styled-components";
import SunSet from "../atoms/Icon/Sunset";
import SunLight from "../atoms/Icon/SunLight";
import NightLight from "../atoms/Icon/NightLight";
function App() {
  return (
    <Wrapper>
      <SunSet style={{ padding: "1.3rem" }} />
      <SunLight style={{ padding: "1.3rem" }} />
      <NightLight style={{ padding: "1.3rem" }} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  position: "fixed";
`;

export default App;
