import React, { useState } from "react";
import styled from "styled-components";

import DayTime from "./DayTime";

function App(props) {
  const [selected, setSelected] = useState(props.timePeriod);
  return (
    <Wrapper>
      <TimeWrapper
        onClick={() => {
          setSelected(0);
          props.setTimePeriod(0);
        }}
      >
        <DayTime name="아침" selected={selected === 0 ? true : false} />
      </TimeWrapper>
      <TimeWrapper
        onClick={() => {
          setSelected(1);
          props.setTimePeriod(1);
        }}
      >
        <DayTime name="점심" selected={selected === 1 ? true : false} />
      </TimeWrapper>
      <TimeWrapper
        onClick={() => {
          setSelected(2);
          props.setTimePeriod(2);
        }}
      >
        <DayTime name="저녁" selected={selected === 2 ? true : false} />
      </TimeWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  overflow: auto;
  position: "fixed";
`;

const TimeWrapper = styled.div`
  flex: 1;
`;

export default App;
