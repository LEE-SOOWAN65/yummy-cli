import React, { useState } from "react";
import styled, { css } from "styled-components";
import Smile1 from "../atoms/Icon/Bigsmile1";
import Smile2 from "../atoms/Icon/Bigsmile2";
import Smile3 from "../atoms/Icon/Bigsmile3";
import Smile4 from "../atoms/Icon/Bigsmile4";
import Smile5 from "../atoms/Icon/Bigsmile5";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

const BUTTON_DATA = [
  {
    icon: Smile1,
    text: "존맛"
  },
  {
    icon: Smile2,
    text: "굿굿"
  },
  {
    icon: Smile3,
    text: "쏘쏘"
  },
  {
    icon: Smile4,
    text: "별로"
  },
  {
    icon: Smile5,
    text: "우웩"
  }
];

export default function Topbutton(props) {
  const { rating, setRating } = props;
  return (
    <>
      <TextWrapper>
        <Text>
          <MenuName>카레돈까스</MenuName>
          <BuildingName>생활관식당</BuildingName>
        </Text>
        <SmileIcons>
          {BUTTON_DATA.map((value, index) => (
            <Smile
              key={index}
              onClick={() => {
                setRating(5 - index);
              }}
            >
              <IconWrapper selected={rating === 5 - index}>
                <value.icon selected={rating === 5 - index} />
              </IconWrapper>
              <Smilename>{value.text}</Smilename>
            </Smile>
          ))}
        </SmileIcons>
      </TextWrapper>
    </>
  );
}

const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 0.3rem;
  ${props => css`
    ${props.selected &&
      `
  background-image: linear-gradient(to top, #eb8242 99%, #da2f2e 22%, #da2d2d 0%)
  `}
  `}
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.7rem;
`;
const SmileIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
const TextWrapper = styled.div`
  width: 100%;
  height: 18.8rem;
  object-fit: contain;
  opacity: 0.6;
  border-radius: 2.2rem;
  background-color: #f5f5f5;
  padding: 4.4rem 2.9rem 2.5rem;
  box-sizing: border-box;
`;

const MenuName = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: left;
  color: #000000;
  padding-bottom: 1rem;
`;

const BuildingName = styled.div`
  font-size: 1.4rem;
  text-align: left;
  color: #000000;
`;
const Smile = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border: none;
`;
const Smilename = styled.div`
  font-size: 0.9rem;
  text-align: center;
  color: #000000;
`;
