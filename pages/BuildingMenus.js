import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useQuery } from "../lib";

import TopButton from "../components/Organisms/TopButton";
import BuildingNameTop from "../components/Organisms/BuildingNameTop";
import MenuDialog from "../components/Templates/MenuDialog";
// import ReviewList from "../components/templates/ReviewList";

//건물별 조식, 중식, 저녁 메뉴 리스트

function App() {
  const router = useRouter();
  const buildingId = Number(router.query.id);
  const data = useQuery(
    process.env.API_HOST + "/cafeteria/1/2019/11/24/LUNCH/"
  );

  return (
    <Wrapper>
      <TopButton />
      {data && (
        <>
          <BuildingNameTop name={data.name} />
          <MenuDialog sikdans={data.sikdans} />
        </>
      )}
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

App.getInitialProps = () => {
  return {};
};
