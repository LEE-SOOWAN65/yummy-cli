import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function BuildingDialog(props) {
  return (
    <ReviewBox>
      <NameLine>
        {" "}
        <Time>시간</Time>
        <UserName>아이디</UserName>
      </NameLine>

      <Comment>내용</Comment>
    </ReviewBox>
  );
}
const ReviewBox = styled.div`
  width: 32.77rem;
  object-fit: contain;
  border-radius: 1.2px;
  background-color: #f5f5f5;
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
  line-height: 1;
  text-align: left;
  color: #000000;
`;

const Time = styled.p`
  width: 3.1rem;
  height: 1rem;
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 0.9rem;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

const Comment = styled.p`
  width: 17.9rem;
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 1.1rem;
  line-height: 1.55;
  text-align: left;
  color: #000000;
`;
