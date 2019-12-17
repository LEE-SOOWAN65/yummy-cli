import React from "react";
import styled from "styled-components";
import { stringifyPassedTime } from "../Molecules/TimePass";

export default function Reviews(props) {
  return (
    <>
      <div style={{ height: "37.4rem" }} />
      {props.reviews.map((value, index) => (
        <ReviewBox key={index}>
          <NameLine>
            <UserName>{value.nickname}</UserName>
            <Time>{stringifyPassedTime(value.timestamp)}</Time>
          </NameLine>
          <Comment>{value.comment}</Comment>
        </ReviewBox>
      ))}
      <div style={{ height: "5rem" }} />
    </>
  );
}
const ReviewBox = styled.div`
  width: 32.77rem;
  object-fit: contain;
  border-radius: 1.2rem;
  background-color: #f5f5f5;
  overflow: hidden;
  display: flex;
  margin-bottom: 1.6rem;
  flex-direction: column;
`;

const NameLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 3rem 0;
`;

const UserName = styled.p`
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1;
  text-align: left;
  color: #000000;
  width: 23.6rem;
`;

const Time = styled.p`
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 0.9rem;
  line-height: 2.11;
  text-align: right;
  color: #000000;
  width: 4rem;
`;

const Comment = styled.p`
  width: 17.9rem;
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 1.1rem;
  line-height: 1.55;
  text-align: left;
  color: #000000;
  margin: 0 0 1rem 3rem;
`;
