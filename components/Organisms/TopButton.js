import React from "react";
import styled from "styled-components";
import UserDrawer from "./UserDrawer";
import KinnyLogo from "../atoms/Icon/Botton/kinnykinny";
import Link from "next/link";

export default function Topbutton(props) {
  return (
    <Wrapper>
      <Link href="/BuildingList">
        <a style={{ textDecoration: "none", flex: 2 }}>
          <KinnyLogo style={{ flex: 1 }} />
        </a>
      </Link>

      <div style={{ flex: 2 }} />
      <UserDrawer style={{ flex: 1 }} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  padding-top: 2.55rem;
  padding-left: 2.41rem;
  padding-right: 2.19;
`;
