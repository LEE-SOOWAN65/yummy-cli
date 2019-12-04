import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Periods from "../Molecules/Periods";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";
import Link from "next/link";
import Arrow from "../atoms/Icon/Botton/LeftArrow";

export default function TopDialog(props) {
  const { timePeriod, month, day } = props;

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
        <Link href="/index">
          <a style={{ textDecoration: "none" }}>
            <Arrow style={{ paddingleft: "3.8rem" }} />
          </a>
        </Link>
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

        <div style={{ fontSize: "13px", color: "#707070", padding: "10px" }}>
          {month}월{day}일
        </div>

        <RightIcon
          onClick={() => {
            props.setDay(day + 1);
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
  position: "fixed";
  width: 100%;
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
  align-items: center;
  flex-direction: row;
  margin: 0 auto;
  width: fit-content;
`;
