import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Periods from "../Molecules/Periods";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";
import TodayText from "../Molecules/Message";

export default function TopDialog(props) {
  const { timePeriod, month, day, textIndex, today, setToday } = props;
  var week = new Array("일", "월", "화", "수", "목", "금", "토");
  var todayLabel = week[today];
  return (
    <Wrapper>
      <Icon>
        <Periods
          timePeriod={timePeriod}
          setTimePeriod={tp => props.setTimePeriod(tp)}
        />
      </Icon>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center"
        }}
      >
        <ButtonWrapper>
          <LeftIcon
            onClick={() => {
              props.setDay(day - 1);
              props.setToday((today - 1) % 7);
            }}
          />

          <div
            style={{
              fontSize: "13px",
              fontFamily: "S-CoreDream-6",
              color: "#707070",
              padding: "10px"
            }}
          >
            {month}월{day}일 {todayLabel}
          </div>

          <RightIcon
            onClick={() => {
              props.setDay(day + 1);
              props.setToday((today + 1) % 7);
            }}
          />
        </ButtonWrapper>
      </div>

      <div
        style={{
          width: "83%",
          height: "4.98rem",
          position: "relative",
          backgroundImage: "url(/bubble.png)",
          backgroundSize: "100%",
          display: "flex",
          flexDirection: "row",
          paddingLeft: "1rem",
          textAlign: "cneter"
        }}
      >
        <Text style={{ marginTop: "0.1rem" }}>{TodayText[textIndex]}</Text>
      </div>
    </Wrapper>
  );
}
// const BackgroundImage = url("../atoms/Bubble.svg");
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;

  width: 100%;
`;

const Text = styled.p`
  font-size: 13px;
  fontfamily: S-CoreDream-6;
  color: #ffffff;
  padding-left: 4rem;
  padding-top: 1.7rem;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
`;
