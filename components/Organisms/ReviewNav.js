import React from "react";

import styled from "styled-components";

import PenIcon from "../../public/Pen";

export default function bottom(props) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        ...props.style
      }}
    >
      <PenIcon style={{ paddingRight: "1.25rem" }} />
      <Text>리뷰 작성</Text>
    </Box>
  );
}

const Box = styled.button`
  width: 96.5%;
  flex-direction: row;
  border: none;
  height: 4.53rem;
  align-items: center;
  box-shadow: 0 -0.2rem 0.5rem 0 rgba(229, 75, 75, 0.2);
  background-color: #ffffff;
  border-radius: 2rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  letter-spacing: normal;
  display: flex;
  justify-contents: center;
  align-items: center;
  color: #e54b4b;
`;
