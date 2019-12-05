import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMutation } from "../../lib";

//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  const router = useRouter();
  const handleSubmit = () => {
    var tmp = {
      rating: props.rating,
      comment: props.comment,
      written_by: 2,
      dish: Number(router.query.id)
    };
    const result = useMutation(
      process.env.API_HOST + "/review/create/",
      JSON.stringify(tmp)
    );

    console.log("success" + props.rating + "/" + props.comment);
  };

  return (
    <Wrapper>
      <a
        onClick={() => router.back()}
        style={{ textDecoration: "none", flex: 2 }}
      >
        <Text>취소</Text>
      </a>
      <div style={{ flex: 2 }} />
      <a onClick={handleSubmit} style={{ textDecoration: "none", flex: 0.7 }}>
        <Text>등록</Text>
      </a>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  overflow: auto;
  padding-top: 2.55rem;
  padding-left: 2.41rem;
  padding-right: 2.19;
  align-items: center;
  padding-bottom: 1.8rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #707070;
`;
