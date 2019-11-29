import React, { useEffect, useState } from "react";
import DialogButton from "../Organisms/DialogButton";
import styled from "styled-components";
import { useQuery } from "../../lib/";

export default function BuildingDialog(props) {
  const data = useQuery(
    process.env.API_HOST + "/organization/1/2019/11/24/LUNCH/"
  );

  if (data) {
    return (
      <Wrapper>
        {data.map((value, index) => {
          return (
            <DialogButton
              id={value.id}
              name={value.name}
              sikdans={value.sikdans}
              key={index}
            />
          );
        })}
      </Wrapper>
    );
  }
  return <div>loading...</div>;
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
