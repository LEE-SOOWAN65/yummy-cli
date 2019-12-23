import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Nav from "../components/Organisms/ReviewNav";
import ReviewGraph from "../components/Organisms/ReviewGraph";
import RedBox from "../components/Organisms/RedBox";
import Reviews from "../components/Templates/Reviews";
import Icons from "../components/atoms/Icon/NoReviewIcon";
import Link from "next/link";
import { useQuery } from "../lib";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

function App(props) {
  const router = useRouter();

  const apiUrl = process.env.API_HOST + `/dish/${router.query.id}/`;

  const data = useQuery(apiUrl);

  if (data) {
    console.log(data.reviews);
  }
  return (
    <div
      className="App"
      style={{
        display: "flex",
        overflowY: "hidden",
        width: "100%",
        height: "100%"
      }}
    >
      <Wrapper>
        <RedBox />
        {data && (
          <>
            <ReviewGraph
              pt5_cnt={data.pt5_cnt}
              pt4_cnt={data.pt4_cnt}
              pt3_cnt={data.pt3_cnt}
              pt2_cnt={data.pt2_cnt}
              pt1_cnt={data.pt1_cnt}
            />
          </>
        )}

        {data && data.reviews.length !== 0 && (
          <Reviews reviews={data.reviews} />
        )}
        {data && data.reviews.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: " center",
              margin: "5.37rem auto 0 ",
              backgroundColor: "white",
              width: "100%",
              height: "100%"
            }}
          >
            <div
              style={{
                width: "100%"
              }}
            />

            <Icons />
            <NoReviewText>작성된 리뷰가 없습니다</NoReviewText>
          </div>
        )}
        <Link
          href={`/ReviewWrite?id=${router.query.id}&name=${router.query.name}&buildingName=${router.query.buildingName}`}
        >
          <a style={{ textDecoration: "none" }}>
            <Nav />
          </a>
        </Link>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 36rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const NoReviewText = styled.p`
  height: 2.3rem;
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-align: center;

  line-height: 0.55;
  letter-spacing: normal;
  text-align: left;
  margin-top: 2.88rem;
  color: #c7c7c7;
`;

export default App;
