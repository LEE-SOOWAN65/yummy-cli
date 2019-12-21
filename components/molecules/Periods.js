import React, { useState } from "react";
import styled from "styled-components";

import DayTime from "./DayTime";

function App(props) {
  const TIME_TEXT_KOR = ["아침", "점심", "저녁"];

  return (
    <Wrapper>
      {Array.apply(null, Array(3)).map((_v, i) => {
        return (
          <TimeWrapper
            key={i}
            onClick={() => {
              props.setTimePeriod(i);
            }}
          >
            <DayTime name={TIME_TEXT_KOR[i]} selected={props.timePeriod == i} />
          </TimeWrapper>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
`;

const TimeWrapper = styled.div`
  flex: 1;
`;

export default App;
