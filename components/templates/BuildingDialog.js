import React, { useCallback } from "react";
import DialogButton from "../Organisms/DialogButton";
import styled from "styled-components";
import { useQuery } from "../../lib/";
import LoadingPage from "../../pages/LoadingPage";

export default function BuildingDialog(props) {
  const { month, day, timePeriod, today } = props;

  const mealHandler = useCallback(() => {
    let meal;
    if (timePeriod === 0) {
      meal = "BREAKFAST";
    } else if (timePeriod === 1) {
      meal = "LUNCH";
    } else if (timePeriod === 2) {
      meal = "DINNER";
    }
    // console.log(timePeriod, meal);
    return `/organization/1/2019/${month}/${day}/${meal}/`;
  }, [month, day, timePeriod]);

  const data = useQuery(process.env.API_HOST + mealHandler());
  // console.log(data, mealHandler());
  if (data) {
    return (
      <Wrapper>
        {data.map((value, index) => {
          return (
            <DialogButton
              id={value.id}
              month={month}
              day={day}
              timePeriod={timePeriod}
              name={value.name}
              sikdans={value.sikdans}
              key={index}
              today={today}
            />
          );
        })}
      </Wrapper>
    );
  }
  return <LoadingPage />;
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;
