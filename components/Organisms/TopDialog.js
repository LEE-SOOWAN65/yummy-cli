import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SunsetIcons from "../Molecules/SunsetIcons";
import SunIcons from "../Molecules/Periods";
import NightIcons from "../Molecules/NightIcons";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";

export default function TopDialog(props) {
  const [available, setAvailable] = useState(true);
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
            {month}월{day}일
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

const Text = styled.div`
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
