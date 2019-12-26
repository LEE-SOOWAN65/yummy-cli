import React from "react";
import styled from "styled-components";
import { stringifyPassedTime } from "../Molecules/TimePass";
import Icon from "../Molecules/ratingHandler";

export default function Reviews(props) {
  return (
    <>
      <div style={{ height: "33.5rem" }} />
      {props.reviews.map((value, index) => (
        <ReviewBox key={index}>
          <IconContainer>
            <Icon rate={value.rating} />
          </IconContainer>
          <Content>
            <NameLine>
              <UserName>{value.nickname}</UserName>
              <div style={{ display: "flex", flex: 2 }} />
              <Time>{stringifyPassedTime(value.timestamp)}</Time>
            </NameLine>
            <Comment>{value.comment}</Comment>
          </Content>
        </ReviewBox>
      ))}
      <div style={{ height: "5rem" }} />
    </>
  );
}
const ReviewBox = styled.div`
  width: 90%
  object-fit: contain;
  border-radius: 1.2rem;
  background-color: #f5f5f5;
  overflow: hidden;
  display: flex;
  margin-bottom: 1.6rem;
  flex-direction: row;
  
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
  display: flex;
  flex: 2;
`;

const Time = styled.p`
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 0.9rem;
  line-height: 2.11;
  text-align: right;
  color: #000000;
  display: flex;
  flex: 1;
`;

const Comment = styled.p`
  object-fit: contain;
  font-family: S-CoreDream-4;
  font-size: 1.1rem;
  line-height: 1.55;
  text-align: left;
  color: #000000;
  margin-top: 0;
`;

const IconContainer = styled.div`
  width: 13%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ebeded;
`;

const Content = styled.div`
  display: flex;
  width: 87%;
  padding: 0 1.5rem;
  border-radius: 1.2rem 1.2rem 0 0;
  background-color: #f5f5f5;
  flex-direction: column;
`;
