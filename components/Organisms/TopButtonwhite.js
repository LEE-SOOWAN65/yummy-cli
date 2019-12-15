import React from "react";
import styled from "styled-components";
import UserDrawer from "./UserDrawerwhite";
import KinnyLogo from "../atoms/Icon/Botton/kinnykinnyWhite";
import Link from "next/link";

export default function Topbutton(props) {
  return (
    <Wrapper>
      <Link href="/index">
        <a
          style={{
            textDecoration: "none",
            flex: 2
          }}
        >
          <KinnyLogo style={{ marginLeft: "2rem" }} />
        </a>
      </Link>
      <div style={{ flex: 1.5 }} />
      <UserDrawer style={{ display: "flex", flex: 1 }} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  width: 100%;
  max-width: 36rem;
  position: fixed;
  top: 2.7rem;
`;
