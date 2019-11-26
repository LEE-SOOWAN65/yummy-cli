import React from "react";
import styled from "styled-components";
import TopButton from "../components/Templates/TopButton";
import BuildingNameTop from "../components/Organisms/BuildingNameTop";
import MenuDialog from "../components/Templates/MenuDialog";
// import ReviewList from "../components/templates/ReviewList";

//건물별 조식, 중식, 저녁 메뉴 리스트

function App() {
  return (
    <Wrapper>
      <TopButton />
      <BuildingNameTop />
      <MenuDialog />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export default App;
