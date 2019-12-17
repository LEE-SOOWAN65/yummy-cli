import React, { useState } from "react";
import styled from "styled-components";

import TopButton from "../components/Organisms/TopButtonwhite";
import WriteButton from "../components/Organisms/WriteButton";
import ReviewText from "../components/Organisms/ReviewText";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [nickname, setnickname] = useState("");

  return (
    <Wrapper>
      <TopWrapper>
        <TopButton />
        <WriteButton rating={rating} comment={comment} nickname={nickname} />
      </TopWrapper>
      <ReviewText
        rating={rating}
        setRating={setRating}
        comment={comment}
        setComment={com => {
          setComment(com);
        }}
        nickname={nickname}
        setnickname={nick => {
          setnickname(nick);
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const TopWrapper = styled.div`
  height: 24rem;
  background-color: #e54b4b;
  display: flex;
  position: fixed;
  top:0
  width: 100%;
  max-width: 36rem;
`;
