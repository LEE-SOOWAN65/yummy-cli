import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import { useQuery } from "../lib";
import TopButton from "../components/Organisms/TopButton";
import TopDialog from "../components/Templates/TopDialog";
import BuildingNameTop from "../components/Organisms/BuildingNameTop";
import MenuDialog from "../components/Templates/MenuDialog";
import Icons from "../components/atoms/Icon/NoReviewIcon";

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
  }, [timePeriod, day]);

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

        {data && <BuildingNameTop name={data.name} />}
      </TopWrapper>
      {data && data.sikdans.length !== 0 && (
        <>
          <div style={{ height: "15rem", width: "100%" }} />

          <MenuDialog name={data.name} sikdans={data.sikdans} />
        </>
      )}

      {data && data.sikdans.length === 0 && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: " center",
            margin: "5.37rem auto 0 ",
            backgroundColor: "white",
            width: "100%",
            marginTop: "10rem"
          }}
        >
          <div
            style={{
              width: "100%"
            }}
          />

          <Icons />
          <NoReviewText>식단이 없습니다</NoReviewText>
        </div>
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
  height: 17rem;
  background-color: #ffffff;
  position: fixed;
  top: 0;
  width: 100%;
  max-width: 36rem;
  text-align: center;
  align-self: center;
`;
const NoReviewText = styled.p`
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 2rem;
  line-height: 0.55;
  color: #c7c7c7;
  margin-top: 2.8rem;
`;

export default App;

App.getInitialProps = () => {
  return {};
};
