import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Smile1 from "../atoms/Icon/smile1";
import Smile2 from "../atoms/Icon/smile2";
import Smile3 from "../atoms/Icon/smile3";
import Smile4 from "../atoms/Icon/smile4";
import Smile5 from "../atoms/Icon/smile5";

export default function TopDialog(props) {
  return (
    <Wrapper>
      <Smile>
        <Bar />
        <Smile1 />
        <Text>존맛</Text>
      </Smile>
      <Smile>
        <Bar />
        <Smile2 />
        <Text>굿굿</Text>
      </Smile>
      <Smile>
        <Bar />
        <Smile3 />
        <Text>쏘쏘</Text>
      </Smile>
      <Smile>
        <Bar />
        <Smile4 />
        <Text>별로</Text>
      </Smile>
      <Smile>
        <Bar />
        <Smile5 />
        <Text>우엑</Text>
      </Smile>
    </Wrapper>
  );
}
// const BackgroundImage = url("../atoms/Bubble.svg");
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: auto;
  position: "fixed";
`;

const Bar = styled.div`
  width: 0.6rem;
  height: 5rem;
  object-fit: contain;
  border-radius: 1.3rem;
  border: solid 0.1rem #707070;
  background-color: #ffffff;
  margin-bottom: 1.15rem;
`;

const Smile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1.8rem;
`;
const Text = styled.div`
  font-size: 0.8rem;
  text-align: left;
  color: #000000;
`;
