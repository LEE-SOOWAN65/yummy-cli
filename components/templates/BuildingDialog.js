import React from "react";
import DialogButton from "../Organisms/DialogButton";
import styled from "styled-components";

export default function BuildingDialog(prps) {
  return (
    <Wrapper>
      <DialogButton />
      <DialogButton />
      <DialogButton />
      <DialogButton />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
