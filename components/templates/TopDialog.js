import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Periods from "../Molecules/Periods";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";
import Arrow from "../atoms/Icon/Botton/LeftArrow";
import { useRouter } from "next/router";
export default function TopDialog(props) {
  const { timePeriod, month, day } = props;
  const [today, setToday] = useState(
    new Date(new Date().setDate(day)).getDay()
  );
  const [available, setAvailable] = useState(true);

  const week = new Array("일", "월", "화", "수", "목", "금", "토");
  const router = useRouter();
  useEffect(() => {
    setToday(new Date(new Date().setDate(day)).getDay());
  }, [day]);
  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: "0 18px",
          boxSizing: "border-box"
        }}
      >
        <a onClick={() => router.back()} style={{ textDecoration: "none" }}>
          <Arrow />
        </a>
        <Icon>
          <Periods
            timePeriod={timePeriod}
            setTimePeriod={tp => props.setTimePeriod(tp)}
          />
        </Icon>
        <div style={{ width: 20, height: 20 }} />
      </div>

      <ButtonWrapper>
        <LeftIcon
          onClick={() => {
            props.setDay(day - 1);
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

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  width: fit-content;
`;
