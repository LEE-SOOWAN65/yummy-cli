import React, { useState } from "react";
import styled from "styled-components";
function App() {
  return (
    <Wrapper>
      <TextWrapper>
        <Textnow>아침</Textnow>
      </TextWrapper>
      <Text>점심</Text>

      <Text>저녁</Text>
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
const Text = styled.text`
  font-size: 1.4rem;
  text-align: left;
  color: #b9b9b9;
  padding: 1.3rem;
  border: none;
  backgroundcolor: transparent;
`;

const Textnow = styled.text`
  font-size: 1.4rem;
  text-align: left;
  color: #ffffff;
  padding: 1.3rem;
  border: none;
  backgroundcolor: transparent;
`;
const TextWrapper = styled.text`
  border-radius: 1.7rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #e54b4b;
`;

export default App;
