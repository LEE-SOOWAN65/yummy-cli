import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Periods from "../Molecules/Periods";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";
import Arrow from "../atoms/Icon/Botton/LeftArrow";
import { useRouter } from "next/router";

export default function TopDialog(props) {
  const { timePeriod, month, day } = props;
  const router = useRouter();
  const week = new Array("일", "월", "화", "수", "목", "금", "토");

  const [today, setToday] = useState(
    new Date(new Date().setDate(day)).getDay()
  );
  const [available, setAvailable] = useState(true);
  const [topdialogDate, setTopdialogDate] = useState(
    new Date(new Date().setDate(day))
  );

  useEffect(() => {
    setToday(new Date(new Date().setDate(day)).getDay());
    setTopdialogDate(new Date(new Date().setDate(day)));
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
            props.setDay(parseInt(day) - 1);
            setAvailable(true);
          }}
          style={{ marginRight: "1.8rem" }}
        />

        <p
          style={{
            fontSize: "1.4rem",
            fontFamily: "S-CoreDream-7",
            color: "#707070"
          }}
        >
          {`${topdialogDate.getMonth() + 1}월 ${topdialogDate.getDate()}일 ${
            week[today]
          }`}
        </p>

        <RightIcon
          onClick={() => {
            if (available) {
              props.setDay(parseInt(day) + 1);
            }

            console.log(day, new Date().getDate(), available);
            if (today === 6 && parseInt(day) > new Date().getDate()) {
              setAvailable(false);
            }
          }}
          style={{ marginLeft: "1.8rem" }}
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
