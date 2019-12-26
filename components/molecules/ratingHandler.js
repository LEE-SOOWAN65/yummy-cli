import React from "react";
import styled from "styled-components";

import Smile1 from "../atoms/Icon/smile1";
import Smile2 from "../atoms/Icon/smile2";
import Smile3 from "../atoms/Icon/smile3";
import Smile4 from "../atoms/Icon/smile4";
import Smile5 from "../atoms/Icon/smile5";

const text1 = "우엑";
const text2 = "노맛";
const text3 = "쏘쏘";
const text4 = "굿굿";
const text5 = "존맛";

export default props => {
  const { rate } = props;
  switch (rate) {
    case 1:
      return (
        <Wrapper>
          <Smile1 fill="#e54b4b" />
          <Label>{text1}</Label>
        </Wrapper>
      );
    case 2:
      return (
        <Wrapper>
          <Smile2 fill="#e54b4b" />
          <Label>{text2}</Label>
        </Wrapper>
      );
    case 3:
      return (
        <Wrapper>
          <Smile3 fill="#e54b4b" />
          <Label>{text3}</Label>
        </Wrapper>
      );
    case 4:
      return (
        <Wrapper>
          <Smile4 fill="#e54b4b" />
          <Label>{text4}</Label>
        </Wrapper>
      );
    case 5:
      return (
        <Wrapper>
          <Smile5 fill="#e54b4b" />
          <Label>{text5}</Label>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <Smile1 fill="#e54b4b" />
          <Label>{text1}</Label>
        </Wrapper>
      );
  }
};

const Wrapper = styled.div`
  flexdirection: column;
  align-items: center;
`;

const Label = styled.p`
  font-family: S-CoreDream-5;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 1.14;
  text-align: center;
  color: #e54b4b;
  margin-bottom: 0;
  margin-top: 0.4rem;
`;
