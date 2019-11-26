import React, { useState } from "react";
import styled from "styled-components";
import SunSetLight from "../atoms/Icon/SunSetLight";
import Sun from "../atoms/Icon/Sun";
import NightLight from "../atoms/Icon/NightLight";
function App() {
  return (
    <Wrapper>
      <SunSetLight style={{ padding: "1.3rem" }} />
      <Sun style={{ padding: "1.3rem" }} />
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
