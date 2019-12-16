import React from "react";

import styled from "styled-components";

import PenIcon from "../../public/Pen";

export default function bottom(props) {
  return (
    <Box>
      <PenIcon style={{ paddingRight: "1.25rem" }} />
      <Text>리뷰 작성</Text>
    </Box>
  );
}

const Box = styled.div`
  width: 97%;
  flex-direction: row;
  border: none;
  height: 4.53rem;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 -0.2rem 0.5rem 0 rgba(229, 75, 75, 0.2);
  background-color: #ffffff;
  border-radius: 2rem 2rem 0 0;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Text = styled.p`
  font-family: S-CoreDream-6;
  font-size: 1.5rem;
  color: #e54b4b;
`;
