import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import TopButton from "../components/Templates/TopButton";
import Nav from "../components/Organisms/ReviewNav";
import ReviewInfo from "../components/Organisms/ReviewInfo";
import ReviewGraph from "../components/Organisms/ReviewGraph";
// import ReviewList from "../components/templates/ReviewList";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

function App() {
  const router = useRouter();
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
        <TopButton />
        <ReviewInfo />
        <ReviewGraph />
        {/* <ReviewList /> */}
        <Nav position={{ position: "absolute", bottom: 0 }} />
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export default App;
