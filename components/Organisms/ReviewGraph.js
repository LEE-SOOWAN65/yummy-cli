import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import StarIcon from "../atoms/Icon/BigStar";
import Graph from "../Molecules/Graph";
function App(props) {
  const router = useRouter();
  return (
    <Wrapper>
      <BoxWrapper>
        <Average>
          <StarIcon style={{ paddingRight: "0.98rem" }} />
          <AverageText>
            {parseFloat(router.query.avg_rating).toFixed(1)}
          </AverageText>
        </Average>

        <Graph
          pt5_cnt={props.pt5_cnt}
          pt4_cnt={props.pt4_cnt}
          pt3_cnt={props.pt3_cnt}
          pt2_cnt={props.pt2_cnt}
          pt1_cnt={props.pt1_cnt}
        />
      </BoxWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 2.69rem;
  position: fixed;
  top: 20rem;
`;

const BoxWrapper = styled.div`
  width: 33.8rem;
  height: 15rem;
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

export default App;
