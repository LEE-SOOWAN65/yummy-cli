import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Bubble from "../atoms/Icon/ReviewBubble";
//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

function App() {
  const router = useRouter();
  return (
    <Wrapper>
      <Bubble />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default App;
