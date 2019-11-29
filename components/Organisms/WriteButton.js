import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  return (
    <Wrapper>
      <Link href="/ReviewList">
        <a style={{ textDecoration: "none", flex: 2 }}>
          <Text>취소</Text>
        </a>
      </Link>
      <div style={{ flex: 2 }} />
      <Link href="/">
        <a style={{ textDecoration: "none", flex: 0.7 }}>
          <Text>등록</Text>
        </a>
      </Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  padding-top: 2.55rem;
  padding-left: 2.41rem;
  padding-right: 2.19;
  align-items: center;
  padding-bottom: 1.8rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
`;
