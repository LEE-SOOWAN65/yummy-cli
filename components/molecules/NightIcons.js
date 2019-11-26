import React, { useState } from "react";
import styled from "styled-components";
import SunSetLight from "../atoms/Icon/SunSetLight";
import SunLight from "../atoms/Icon/SunLight";
import Night from "../atoms/Icon/Night";
function App() {
  return (
    <Wrapper>
      <SunSetLight style={{ padding: "1.3rem" }} />
      <SunLight style={{ padding: "1.3rem" }} />
      <Night style={{ padding: "1.3rem" }} />
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
