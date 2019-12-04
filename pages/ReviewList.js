import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Nav from "../components/Organisms/ReviewNav";
import ReviewGraph from "../components/Organisms/ReviewGraph";
import RedBox from "../components/Organisms/RedBox";
// import ReviewList from "../components/templates/ReviewList";
import Link from "next/link";

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
        <RedBox />
        <ReviewGraph />
        {/* <ReviewList /> */}
        <Link href={`/ReviewWrite?id=${router.query.id}`}>
          <a style={{ textDecoration: "none" }}>
            <Nav position={{ position: "absolute", bottom: 0 }} />
          </a>
        </Link>
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
