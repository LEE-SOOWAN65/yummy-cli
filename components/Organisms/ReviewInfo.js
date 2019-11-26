import React from "react";
import styled from "styled-components";

function App() {
  return (
    <TextWrapper>
      <BuildingName>한우리관</BuildingName>
      <MenuName>쌀국수</MenuName>
    </TextWrapper>
  );
}

const TextWrapper = styled.div`
  display: flex;
  padding: 3rem;
  flex-direction: column;
  align-items: left;
`;

const BuildingName = styled.text`
  display: flex;
  flex-direction: column;
  font-size: 4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
const MenuName = styled.text`
  display: flex;
  flex-direction: column;
  font-size: 1.7rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: left;
  color: #000000;
`;
export default App;
