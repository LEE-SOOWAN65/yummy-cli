import React from "react";
import styled from "styled-components";
import MenuBox from "../Organisms/MenuBox";

export default function MenuDialog(props) {
  return (
    <Wrapper>
      {props.sikdans.map((value, index) => (
        <MenuBox
          name={props.name}
          key={index}
          dishes={value.dishes}
          number={index + 1}
        />
      ))}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.7rem;
`;
