import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Smile1 from "../atoms/Icon/smile1";
import Smile2 from "../atoms/Icon/smile2";
import Smile3 from "../atoms/Icon/smile3";
import Smile4 from "../atoms/Icon/smile4";
import Smile5 from "../atoms/Icon/smile5";

export default function TopDialog(props) {
  const pt5_ratio =
    (props.pt5_cnt /
      (props.pt5_cnt +
        props.pt4_cnt +
        props.pt3_cnt +
        props.pt2_cnt +
        props.pt1_cnt)) *
    100;

  const pt4_ratio =
    (props.pt4_cnt /
      (props.pt5_cnt +
        props.pt4_cnt +
        props.pt3_cnt +
        props.pt2_cnt +
        props.pt1_cnt)) *
    100;

  const pt3_ratio =
    (props.pt3_cnt /
      (props.pt5_cnt +
        props.pt4_cnt +
        props.pt3_cnt +
        props.pt2_cnt +
        props.pt1_cnt)) *
    100;
  const pt2_ratio =
    (props.pt2_cnt /
      (props.pt5_cnt +
        props.pt4_cnt +
        props.pt3_cnt +
        props.pt2_cnt +
        props.pt1_cnt)) *
    100;
  const pt1_ratio =
    (props.pt1_cnt /
      (props.pt5_cnt +
        props.pt4_cnt +
        props.pt3_cnt +
        props.pt2_cnt +
        props.pt1_cnt)) *
    100;

  return (
    <Wrapper>
      <Smile>
        <Number>{props.pt5_cnt}</Number>
        <Bar>
          <SmallBar5 pt5_ratio={pt5_ratio} />
        </Bar>
        <Smile1 />
        <Text>존맛</Text>
      </Smile>
      <Smile>
        <Number>{props.pt4_cnt}</Number>
        <Bar>
          <SmallBar4 pt4_ratio={pt4_ratio} />
        </Bar>
        <Smile2 />
        <Text>굿굿</Text>
      </Smile>
      <Smile>
        <Number>{props.pt3_cnt}</Number>
        <Bar>
          <SmallBar3 pt3_ratio={pt3_ratio} />
        </Bar>
        <Smile3 />
        <Text>쏘쏘</Text>
      </Smile>
      <Smile>
        <Number>{props.pt2_cnt}</Number>
        <Bar>
          <SmallBar2 pt2_ratio={pt2_ratio} />
        </Bar>
        <Smile4 />
        <Text>별로</Text>
      </Smile>
      <Smile>
        <Number>{props.pt1_cnt}</Number>
        <Bar>
          <SmallBar1 pt1_ratio={pt1_ratio} />
        </Bar>
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
`;

const Bar = styled.div`
  width: 0.75rem;
  height: 5rem;
  object-fit: contain;
  border-radius: 1.3rem;
  border: solid 0.1rem #707070;
  background-color: #ffffff;
  margin-bottom: 1.15rem;
  display: flex;
  align-items: flex-end;
`;

const SmallBar5 = styled.div`
  width: 0.75rem;
  height: ${props => props.pt5_ratio}%;
  object-fit: contain;
  border-radius: 1.3rem;
  background-color: #aaaaaa;
`;
const SmallBar4 = styled.div`
  width: 0.75rem;
  height: ${props => props.pt4_ratio}%;
  object-fit: contain;
  border-radius: 1.3rem;
  background-color: #aaaaaa;
`;
const SmallBar3 = styled.div`
  width: 0.75rem;
  height: ${props => props.pt3_ratio}%;
  object-fit: contain;
  border-radius: 1.3rem;
  background-color: #aaaaaa;
`;
const SmallBar2 = styled.div`
  width: 0.75rem;
  height: ${props => props.pt2_ratio}%;
  object-fit: contain;
  border-radius: 1.3rem;
  background-color: #aaaaaa;
`;
const SmallBar1 = styled.div`
  width: 0.75rem;
  height: ${props => props.pt1_ratio}%;
  object-fit: contain;
  border-radius: 1.3rem;
  background-color: #aaaaaa;
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
  font-family: S-CoreDream-5;
`;
const Number = styled.p`
  font-size: 8px;
  font-weight: normal;
  font-family: S-CoreDream-5;
  font-style: normal;
  line-height: 1.13;
  text-align: center;
  color: #000000;
`;
