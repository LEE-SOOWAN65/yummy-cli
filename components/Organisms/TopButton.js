import React from "react";
import styled from "styled-components";
import UserDrawer from "./UserDrawer";
import KinnyLogo from "../atoms/Icon/Botton/kinnykinny";
import Link from "next/link";

export default function Topbutton(props) {
  return (
    <Wrapper>
      <Link href="/index">
        <a style={{ textDecoration: "none", flex: "2" }}>
          <KinnyLogo style={{ flex: 2 }} />
        </a>
      </Link>

      <div style={{ flex: 1.5 }} />
      <UserDrawer style={{ flex: 2 }} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  max-width: 33.5rem;
  padding-left: 2.5rem;
  margin-top: 2.5rem;
`;
