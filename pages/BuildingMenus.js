import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useQuery } from "../lib";
import TopButton from "../components/Organisms/TopButton";
import TopDialog from "../components/Templates/TopDialog";
import BuildingNameTop from "../components/Organisms/BuildingNameTop";
import MenuDialog from "../components/Templates/MenuDialog";

//건물별 조식, 중식, 저녁 메뉴 리스트

function App(props) {
  const router = useRouter();
  const month = Number(router.query.month);
  const day = Number(router.query.day);
  const timePeriod = Number(router.query.timePeriod);
  const buildingId = Number(router.query.id);

  let meal;
  if (timePeriod === 0) {
    meal = "BREAKFAST";
  } else if (timePeriod === 1) {
    meal = "LUNCH";
  } else if (timePeriod === 2) {
    meal = "DINNER";
  }
  // console.log(timePeriod, meal);

  const data = useQuery(
    process.env.API_HOST +
      `/cafeteria/${buildingId}/2019/${month}/${day}/${meal}/`
  );

  return (
    <Wrapper>
      <TopButton />
      <TopDialog month={month} day={day} timePeriod={timePeriod} />
      {data && (
        <>
          <BuildingNameTop name={data.name} />
          <MenuDialog name={data.name} sikdans={data.sikdans} />
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
