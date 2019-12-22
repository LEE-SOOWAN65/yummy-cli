import React from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import TopButton from "./TopButtonwhite";
import WriteButton from "../Organisms/WriteButton";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

function App() {
  const router = useRouter();
  return (
    <>
      <Wrapper>
        <TopButton />
        <WriteButton />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  height: 24rem;
  background-color: #e54b4b;
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100%;
  max-width: 36rem;
`;

export default App;
