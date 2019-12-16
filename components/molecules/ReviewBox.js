import React, { useState } from "react";
import styled, { css } from "styled-components";
import Smile1 from "../atoms/Icon/Bigsmile1";
import Smile2 from "../atoms/Icon/Bigsmile2";
import Smile3 from "../atoms/Icon/Bigsmile3";
import Smile4 from "../atoms/Icon/Bigsmile4";
import Smile5 from "../atoms/Icon/Bigsmile5";
import { useRouter } from "next/router";

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
  const [selected, setSelected] = useState(false);
  const router = useRouter();
  return (
    <>
      <TextWrapper>
        <Text>
          <MenuName>{router.query.name}</MenuName>
          <BuildingName>{router.query.buildingName}</BuildingName>
        </Text>
        <SmileIcons>
          {BUTTON_DATA.map((value, index) => (
            <Smile
              key={index}
              onClick={() => {
                setSelected(prev => !prev);
                setRating(5 - index);
              }}
            >
              <IconWrapper selected={rating === 5 - index} id={index}>
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

const colorHandler = id => {
  switch (id) {
    case 0:
      return `#ffe98d`;
    case 1:
      return ` #ffca67`;
    case 2:
      return `linear-gradient(to top, #ffca67 100%, #ffb655 80%, #ff3e31 0%)
      `;
    case 3:
      return ` linear-gradient(to top, #ff9c55 100%, #ff3e31 20%, #9a021f 0%)`;
    case 4:
      return ` linear-gradient(to top, #ff9c55, #ff3e31 70%, #c6021f 0%)`;
    default:
  }
};

const IconWrapper = styled.div`
  width: 2.9rem;
  height: 3rem;

  border-radius: 0.5rem;
  ${props => css`
    ${props.selected &&
      `
  background: ${colorHandler(props.id)}
    `}
  `}
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
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

const MenuName = styled.p`
  padding-bottom: 1rem;
  height: 2.2rem;
  object-fit: contain;
  font-size: 1.9rem;

  font-family: S-CoreDream-6;
  line-height: 1.21;
  text-align: left;
  color: #000000;
  margin: 0;
`;

const BuildingName = styled.p`
  height: 1.7rem;
  object-fit: contain;
  font-size: 1.4rem;
  font-family: S-CoreDream-4;
  line-height: 1.29;
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
  font-family: S-CoreDream-5;
  text-align: center;
  color: #000000;
`;
