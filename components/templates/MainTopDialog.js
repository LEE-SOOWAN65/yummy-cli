import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SunIcon from "../atoms/Icon/Sun";
import SunsetIcon from "../atoms/Icon/sunset";
import NightIcon from "../atoms/Icon/Night";
import SmileIcon from "../atoms/Icon/smile";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";

const TIME_PERIOD = [930, 1430, 2000];

export default function TopDialog(props) {
  const [month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

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

  return (
    <Wrapper>
      <Icon>
        {timePeriod === 0 && <SunIcon />}
        {timePeriod === 1 && <SunsetIcon />}
        {timePeriod === 2 && <NightIcon />}
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
          width: "84%",
          height: "65.3px",
          position: "relative",
          backgroundImage: "url(/bubble.png)",
          backgroundSize: "100%",
          display: "flex",
          alignItems: "center",
          paddingLeft: "10px"
        }}
      >
        <TodayText>
          <SmileIcon style={{ paddingRight: "10px" }} />
          오늘 뭐 먹지?
        </TodayText>
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
  padding-top: 59px;
`;

const TodayText = styled.div`
  display: flex;
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  position: "fixed";
  padding-bottom: 10px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: row;
`;
