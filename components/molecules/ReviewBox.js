import React, { useState } from "react";
import styled from "styled-components";
import Smile1 from "../atoms/Icon/Bigsmile1";
import Smile2 from "../atoms/Icon/Bigsmile2";
import Smile3 from "../atoms/Icon/Bigsmile3";
import Smile4 from "../atoms/Icon/Bigsmile4";
import Smile5 from "../atoms/Icon/Bigsmile5";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  return (
    <>
      <TextWrapper>
        <Text>
          <MenuName>카레돈까스</MenuName>
          <BuildingName>생활관식당</BuildingName>
        </Text>
        <SmileIcons>
          <Smile>
            <Smile1 />
            <Smilename>존맛</Smilename>
          </Smile>
          <Smile>
            <Smile2 />
            <Smilename>굿굿</Smilename>
          </Smile>
          <Smile>
            <Smile3 />
            <Smilename>쏘쏘</Smilename>
          </Smile>
          <Smile>
            <Smile4 />
            <Smilename>별로</Smilename>
          </Smile>
          <Smile>
            <Smile5 />
            <Smilename>우엑</Smilename>
          </Smile>
        </SmileIcons>
      </TextWrapper>
    </>
  );
}
const Text = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 2.74rem;
  padding-left: 2.1rem;
  padding-top: 3.7rem;
`;
const SmileIcons = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 3.15rem;
  align-items: center;
  text-align: center;
  padding-left: 2.15rem;
`;
const TextWrapper = styled.div`
  width: 33.8rem;
  height: 18.8rem;
  object-fit: contain;
  opacity: 0.6;
  border-radius: 2.2rem;
  background-color: #f5f5f5;
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
  padding-right: 2.94rem;
  background-color: #f5f5f5;
  border: none;
`;
const Smilename = styled.div`
  font-size: 0.9rem;
  text-align: center;
  color: #000000;
`;
