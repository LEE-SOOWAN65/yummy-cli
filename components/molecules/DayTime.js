import React, { useState } from "react";
import styled, { css } from "styled-components";

function App(props) {
  const { selected, name } = props;

  return (
    <TextWrapper selected={selected}>
      <Textnow selected={selected}>{name}</Textnow>
    </TextWrapper>
  );
}

const Textnow = styled.p`
  font-size: 1.3rem;
  text-align: left;
  font-family: S-CoreDream-7;
  color: ${props =>
    css`
      ${props.selected ? "#ffffff" : "#b9b9b9"}
    `};
  padding: 1.3rem;
  border: none;
  backgroundcolor: transparent;
`;
const TextWrapper = styled.div`
  display: flex;
  height: 2.5rem;
  border-radius: 1.7rem;
  align-items: center;

  background-color: ${props => (props.selected ? "#e54b4b" : "none")};
`;

export default App;
