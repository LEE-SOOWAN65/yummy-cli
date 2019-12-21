import React from "react";
import styled from "styled-components";
import UserDrawer from "./UserDrawerwhite";
import KinnyLogo from "../atoms/Icon/Botton/kinnykinnyWhite";
import Link from "next/link";

export default function Topbutton(props) {
  return (
    <Wrapper>
      <a
        onClick={() => router.back()}
        style={{ textDecoration: "none", flex: 2 }}
      >
        <KinnyLogo style={{ flex: "1.5", marginTop: "2rem" }} />
      </a>

      <div style={{ flex: 2 }} />
      <UserDrawer style={{ flex: 2 }} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  position: fixed;
  top: 0;
  max-width: 33.5rem;
  padding-left: 2.5rem;
  align-items: center;
`;
