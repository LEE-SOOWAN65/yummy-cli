import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SunsetIcons from "../molecules/SunsetIcons";
import SunIcons from "../molecules/SunIcons";
import NightIcons from "../molecules/NightIcons";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";

const TIME_PERIOD = [930, 1430, 2000];
const TodayText = [
  "오늘 뭐 먹지?",
  "한국인은 밥심!",
  "밥은 먹고 다니니?",
  "밥밥디라라!",
  "오늘 밥 뭐 나오냐?",
  "아까부터 밥먹을 생각뿐..",
  "학식 먹었다면 리뷰 좀 써주세요~❤",
  "끼니는 제때 제때!",
  "오늘은 외식이다..",
  "밥이나 먹자",
  "메뉴 뭐냐?",
  "학식으로 뿌링클 나왔으면...",
  "오늘 메뉴 괜찮네^0^"
];

export default function TopDialog(props) {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const getCurrentTimePeriod = () => {
    const nowTime = new Date();
    const hour = nowTime.getHours();
    const minute = nowTime.getMinutes();

    for (let i = 0; i < 3; ++i) {
      if (hour * 100 + minute < TIME_PERIOD[i]) {
        return i;
      }
    }
    return 0;
  };

  const getMonthDay = () => {
    const nowTime = new Date();
    setMonth(nowTime.getMonth() + 1);
    setDay(nowTime.getDate());
  };
  const [timePeriod] = useState(getCurrentTimePeriod());

  useEffect(() => {
    getMonthDay();
  }, []);
  useEffect(() => {
    setTextIndex(day % 13);
  }, [day]);
  return (
    <Wrapper>
      <Icon>
        {timePeriod === 0 && <SunsetIcons />}
        {timePeriod === 1 && <SunIcons />}
        {timePeriod === 2 && <NightIcons />}
      </Icon>

      <div
        style={{
          flexDirection: "row",
          display: "flex",
          alignItems: "center"
        }}
      >
        <ButtonWrapper>
          <LeftIcon />

          <div style={{ fontSize: "13px", color: "#707070", padding: "10px" }}>
            {month}월{day}일
          </div>
          <RightIcon />
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
          paddingLeft: "1rem"
        }}
      >
        <Text>{TodayText[textIndex]}</Text>
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
  position: "fixed";
  width: 100%;
`;

const Text = styled.text`
  font-size: 13px;
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
  position: "fixed";
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
`;
