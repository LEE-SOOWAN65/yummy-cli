import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useQuery } from "../lib";
// import TopDialog from "../components/Templates/TopDialog";
import TopButton from "../components/Organisms/TopButton";
import TopDialog from "../components/Templates/TopDialog";
import BuildingNameTop from "../components/Organisms/BuildingNameTop";
import MenuDialog from "../components/Templates/MenuDialog";
// import ReviewList from "../components/templates/ReviewList";

//건물별 조식, 중식, 저녁 메뉴 리스트

function App(props) {
  const router = useRouter();
  const buildingId = Number(router.query.id);
  const data = useQuery(
    process.env.API_HOST + `/cafeteria/${buildingId}/2019/12/3/DINNER/`
  );

  return (
    <Wrapper>
      <TopButton />
      <TopDialog />
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
