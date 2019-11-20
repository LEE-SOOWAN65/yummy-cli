import React from "react";

import styled from "styled-components";

import BellIcon from "../atoms/Icon/Botton/ButtomNavBell";
import HomeIcon from "../atoms/Icon/Botton/ButtomNavHome";
import UserIcon from "../atoms/Icon/Botton/ButtomNavUser";

export default function bottom(props) {
  return (
    <Box style={props.style}>
      <NavIcon style={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <BellIcon />
        </Wrapper>
      </NavIcon>

      <NavIcon style={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <HomeIcon />
        </Wrapper>
      </NavIcon>

      <NavIcon style={{ display: "flex", justifyContent: "center" }}>
        <Wrapper>
          <UserIcon />
        </Wrapper>
      </NavIcon>
    </Box>
  );
}

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

const Box = styled.div`
  display: flex;
  flexdirection: row;
  width: 100%;
  object-fit: contain;
  box-shadow: 0 -11px 50px 0 rgba(0, 0, 0, 0.04);
  background-color: #ffffff;
  border-top-radius: 20px;
`;

const NavIcon = styled.button`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex: 1;
  border: none;
  background-color: #ffffff;
`;
