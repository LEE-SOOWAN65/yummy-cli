import React from "react";
import styled from "styled-components";

export default function Reviews(props) {
  return (
    <>
      <div style={{ height: "37.4rem" }} />
      {props.reviews.map((value, index) => (
        <ReviewBox key={index}>
          <NameLine>
            <Time>{value.written_at}</Time>
            <UserName>{value.nickname}</UserName>
          </NameLine>

          <Comment>{value.comment}</Comment>
        </ReviewBox>
      ))}
      <div style={{ height: "10rem" }} />
    </>
  );
}
const ReviewBox = styled.div`
  width: 32.77rem;
  object-fit: contain;
  border-radius: 1.2px;
  background-color: #f5f5f5;
  overflow: hidden;
  display: flex;
  height: 10rem;
`;
const NameLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const UserName = styled.p`
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 1.1rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const Time = styled.p`
  height: 1rem;
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.11;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;

const Comment = styled.p`
  width: 17.9rem;
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 1.1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.55;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
