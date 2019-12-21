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
          setTimePeriod={tp => setToday(tp)}
          setTimePeriod={tp => setTimePeriod(tp)}
          setDay={day => {
            setDay(day);
          }}
          today={router.query.today}
        />
      </TopWrapper>

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

const TopWrapper = styled.div`
  height: 14rem;
  background-color: #ffffff;
`;

export default App;

App.getInitialProps = () => {
  return {};
};
