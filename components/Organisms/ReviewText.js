import React, { useState } from "react";
import styled from "styled-components";
import ReviewBox from "../Molecules/ReviewBox";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  return (
    <>
      <Wrapper>
        <ReviewBox />
        <textarea
          placeholder="리뷰를 작성해주세요."
          style={{ width: "29.7rem", border: "none" }}
        ></textarea>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0.5rem 2rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
  margin: 0 auto;
  width: 33.8rem;
  height: 63.2rem;
  border-radius: 2.1rem;
`;
