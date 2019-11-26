import React, { useState } from "react";
import styled from "styled-components";
import MainTopDialog from "../components/Templates/MainTopDialog";
import TopButton from "../components/Templates/TopButton";
import BuildingDialog from "../components/Templates/BuildingDialog";

// import FacebookLogin from "react-facebook-login";
// import HomeBottomNav from "../components/templates/HomeBottomNav";

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
      {/* <FacebookLogin
        appId="1425008167650893"
        autoLoad={true}
        fields="name,email,picture"
        callback={response => {
          console.log(response);
        }}
      /> */}
      <Wrapper>
        <TopButton />
        <MainTopDialog />
        <BuildingDialog />
      </Wrapper>
    </div>
  );
}
// const Background = styled.header`
//   text-align: center;
// `;

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
`;

export default App;
