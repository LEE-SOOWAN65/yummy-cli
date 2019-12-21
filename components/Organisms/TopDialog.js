import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Periods from "../Molecules/Periods";
import LeftIcon from "../atoms/Icon/Botton/left";
import RightIcon from "../atoms/Icon/Botton/right";

export default function TopDialog(props) {
  const [available, setAvailable] = useState(true);

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
              padding: "1rem"
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
  flex-direction: column;
  align-items: center;
  flex-direction: row;
`;
