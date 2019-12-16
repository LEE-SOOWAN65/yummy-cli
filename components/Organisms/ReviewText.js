import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import ReviewBox from "../Molecules/ReviewBox";
import UserIcon from "../atoms/Icon/NickName";
//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  const router = useRouter();
  const {
    rating,
    setRating,
    comment,
    setComment,
    nickname,
    setnickname
  } = props;
  return (
    <>
      <Wrapper>
        <ReviewBox rating={rating} setRating={setRating} />
        <TextWrapper>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <UserIcon style={{ marginRight: "1.58rem" }} />
            <textarea
              value={nickname}
              onChange={e => {
                setnickname(e.target.value);
              }}
              placeholder="닉네임"
              style={{
                border: "none",
                margin: "0.3rem 0 0.67rem",
                height: "1.5rem",
                objectFit: "contain",
                fontFamily: "S-CoreDream-4",
                fontSize: "1.3rem",
                lineHeight: "1.23",
                textAlign: "left",
                color: "#707070"
              }}
            ></textarea>
          </div>
          <hr style={{ width: "11rem", margin: "0" }} />

          <textarea
            value={comment}
            onChange={e => {
              setComment(e.target.value);
            }}
            placeholder="리뷰를 작성해주세요."
            style={{
              border: "none",
              marginTop: "2.9rem",
              width: "95%",
              height: "70%",
              objectFit: "contain",
              fontFamily: "S-CoreDream-4",
              fontSize: "1.3rem",
              lineHeight: "1.23",
              textAlign: "left",
              color: "#707070"
            }}
          />

          <div
            style={{ position: "absolute", bottom: "5.9rem", width: "100%" }}
          >
            <div>
              <hr style={{ width: "27rem", margin: "0" }} />
            </div>
            <DetailWrapper>
              #{router.query.name} #{router.query.buildingName}
            </DetailWrapper>
          </div>
        </TextWrapper>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0.5rem 2rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
  width: 33.8rem;
  height: 47.8rem;
  border-radius: 2.1rem;
  position: fixed;
  top: 14.3rem;
`;

const TextWrapper = styled.div`
  text-algin: left;
  width: 80%;
  margin-top: 1.8rem;
  padding: 0 2.9rem 0;
`;

const DetailWrapper = styled.p`
  height: 1.3rem;
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 1.1rem;
  line-height: 1.18;
  text-align: left;
  color: #707070;
`;
