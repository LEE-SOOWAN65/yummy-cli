import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Periods from "../Molecules/Periods";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";
import TodayText from "../Molecules/Message";

export default function TopDialog(props) {
  const { timePeriod, month, day, textIndex } = props;

  const [today, setToday] = useState(
    new Date(new Date().setDate(day)).getDay()
  );
  const week = new Array("일", "월", "화", "수", "목", "금", "토");
  const [available, setAvailable] = useState(true);
  useEffect(() => {
    setToday(new Date(new Date().setDate(day)).getDay());
  }, [day]);
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
            }}
          />

          <div
            style={{
              fontSize: "1.4rem",
              fontFamily: "S-CoreDream-7",
              color: "#707070",
              padding: "10px"
            }}
          >
            {month}월{day}일 {week[today]}
          </div>

          <RightIcon
            onClick={() => {
              if (available) {
                props.setDay(day + 1);
              } else setAvailable(true);

              if (today === 6 && day > new Date().getDate()) {
                setAvailable(false);
              }
            }}
          />
        </ButtonWrapper>
      </div>

      <div
        style={{
          width: "30.7rem",
          height: "4.81rem",
          position: "relative",
          backgroundImage: "url(/bubble.png)",
          backgroundSize: "100%",
          display: "flex",
          flexDirection: "row",
          paddingLeft: "1rem",
          textAlign: "center"
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
  max-width: 36rem;
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
  margintop: 1rem;
`;
