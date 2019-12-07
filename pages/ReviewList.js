import React, { useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import Nav from "../components/Organisms/ReviewNav";
import ReviewGraph from "../components/Organisms/ReviewGraph";
import RedBox from "../components/Organisms/RedBox";
import Reviews from "../components/Templates/Reviews";
import Link from "next/link";
import { useQuery } from "../lib";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

function App(props) {
  const router = useRouter();

  const apiUrl = process.env.API_HOST + `/dish/${router.query.id}/`;

  const data = useQuery(apiUrl);

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
        {data && data.reviews ? ( <Reviews reviews={data.reviews} /> ) : ( <p>아직 리뷰가 없어요 ㅠㅠ</p> )}
        <Link
          href={`/ReviewWrite?id=${router.query.id}&name=${router.query.name}&buildingName=${router.query.buildingName}`}
        >
          <a style={{ textDecoration: "none" }}>
            <Nav position={{ position: "absolute", bottom: 0 }} />
          </a>
        </Link>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;

export default App;
