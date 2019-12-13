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

  let review_set;

  if (data && data.reviews) {
    console.log(data.reviews.length);
    review_set = <Reviews reviews={data.reviews} />;
  } else {
    review_set = <p>아직 리뷰가 없어요 ㅠㅠ</p>;
  }

  return (
    <Wrapper>
      <div
        style={{
          height: "43rem"
        }}
      >
        <TopWrapper>
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
        </TopWrapper>
      </div>
      <div style={{ marginBottom: "5rem" }}>{review_set}</div>
      <Link
        href={`/ReviewWrite?id=${router.query.id}&name=${router.query.name}&buildingName=${router.query.buildingName}`}
      >
        <a style={{ textDecoration: "none" }}>
          <Nav style={{ position: "fixed", bottom: 0 }} />
        </a>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
`;
const TopWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

export default App;
