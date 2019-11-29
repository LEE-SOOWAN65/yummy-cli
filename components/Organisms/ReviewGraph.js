import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import StarIcon from "../atoms/Icon/BigStar";
import Graph from "../Molecules/Graph";
function App() {
  const router = useRouter();
  return (
    <Wrapper>
      <BoxWrapper>
        <Average>
          <StarIcon style={{ paddingRight: "0.98rem" }} />
          <AverageText>4.3</AverageText>
        </Average>

        <Graph />
      </BoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.69rem;
  padding-top: 3.3rem;
  align-items: center;
`;

const BoxWrapper = styled.div`
  width: 84%;
  height: 12.4rem;
  object-fit: contain;
  border-radius: 1.6rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
`;

const AverageText = styled.div`
  font-size: 1.8rem;
  text-align: left;
  color: #000000;
`;

const Average = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1.91rem;
  padding-top: 2.37rem;
  height: 2.21rem;
  padding-right: 5.5rem;
`;

const SmileBoxWrapper = styled.div`
  border: none;
  background-color: #ffffff;
`;

export default App;
