import React, { useState } from "react";
import styled from "styled-components";
import MainTopDialog from "../components/templates/MainTopDialog";

import HomeBottomNav from "../components/templates/HomeBottomNav";

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        overflowY: "hidden",
        width: "100%",
        height: "100%"
      }}
    >
      <Wrapper>
        <MainTopDialog />
        <HomeBottomNav style={{ position: "absolute", bottom: "0" }} />
      </Wrapper>
    </div>
  );
}
const Background = styled.header`
  text-align: center;
`;

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export default App;
