import React, { useState } from "react";
import TopButton from "../components/Organisms/TopButton";
import WriteButton from "../components/Organisms/WriteButton";
import ReviewText from "../components/Organisms/ReviewText";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");
  const [nickname, setnickname] = useState("");

  return (
    <>
      <TopButton />
      <WriteButton rating={rating} comment={comment} />
      <ReviewText
        rating={rating}
        setRating={setRating}
        comment={comment}
        setComment={setComment}
        nickname={nickname}
        setnickname={setnickname}
      />
    </>
  );
}
