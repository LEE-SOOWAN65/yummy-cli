import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import StarIcon from "../atoms/Icon/BigStar";

function App() {
  const router = useRouter();
  return (
    <Wrapper>
      <BoxWrapper>
        <Average>
          <StarIcon />
          <AverageText>4.3</AverageText>
        </Average>
      </BoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.69rem;
  align-items: center;
`;

const BoxWrapper = styled.div`
  width: 84%;
  height: 12.4rem;
  object-fit: contain;
  border-radius: 1.6rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
`;

const AverageText = styled.text`
  font-size: 1.8rem;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #000000;
`;

const Average = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: "fixed";
  padding-top: 1.7rem;
  padding-left: 1.91rem;
`;

export default App;
