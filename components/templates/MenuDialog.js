import React from "react";
import styled from "styled-components";
import MenuBox from "../Organisms/MenuBox";

export default function MenuDialog(props) {
  return (
    <Wrapper>
      <MenuBox MenuType="조식" />
      <MenuBox MenuType="중식" />
      <MenuBox MenuType="저녁" />
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
