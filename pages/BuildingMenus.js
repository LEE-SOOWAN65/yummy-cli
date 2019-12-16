import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useQuery } from "../lib";
import TopButton from "../components/Organisms/TopButton";
import TopDialog from "../components/Templates/TopDialog";
import BuildingNameTop from "../components/Organisms/BuildingNameTop";
import MenuDialog from "../components/Templates/MenuDialog";

//건물별 조식, 중식, 저녁 메뉴 리스트

const TIME_TEXT = ["BREAKFAST", "LUNCH", "DINNER"];

function App(props) {
  const router = useRouter();
  const { month, id } = router.query;
  const [timePeriod, setTimePeriod] = useState(router.query.timePeriod);
  const [day, setDay] = useState(parseInt(router.query.day));
  const [apiUrl, setApiUrl] = useState(
    process.env.API_HOST +
      `/cafeteria/${id}/2019/${month}/${day}/${TIME_TEXT[timePeriod]}/`
  );
  useEffect(() => {
    setApiUrl(
      process.env.API_HOST +
        `/cafeteria/${id}/2019/${month}/${day}/${TIME_TEXT[timePeriod]}/`
    );
  }, [day]);

  const data = useQuery(apiUrl);

  return (
    <Wrapper>
      <TopWrapper>
        <TopButton />
        <TopDialog
          month={month}
          day={day}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
          setDay={day => {
            setDay(day);
          }}
          today={router.query.today}
          setTimePeriod={tp => setToday(tp)}
        />
      </TopWrapper>

      {data && (
        <>
          <BuildingNameTop name={data.name} />
          <div style={{ height: "20rem" }} />
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

const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 21.1rem;
  background-color: #ffffff;
`;

export default App;

App.getInitialProps = () => {
  return {};
};
