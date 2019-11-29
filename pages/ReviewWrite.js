import React, { useState } from "react";
import styled from "styled-components";
import TopButton from "../components/Organisms/TopButton";
import WriteButton from "../components/Organisms/WriteButton";
import ReviewText from "../components/Organisms/ReviewText";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  return (
    <>
      <TopButton />
      <WriteButton rating={rating} comment={comment} />
      <ReviewText
        rating={rating}
        setRating={setRating}
        comment={comment}
        setComment={setComment}
      />
    </>
  );
}
const Wrapper = styled.div`
  width: 31.7rem;
  height: 63.2rem;
  display: flex;
  border-radius: 3.1rem;
  box-shadow: 0 0.5rem 2rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
  justify-content: center;
`;
