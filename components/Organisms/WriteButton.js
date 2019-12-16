import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMutation } from "../../lib";
import Modal from "@material-ui/core/Modal";
import Logo from "../atoms/Icon/ReviewLogo";
//메뉴별 리뷰 페이지(아래 리뷰작성버튼)

export default function Topbutton(props) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();
  const handleSubmit = () => {
    var tmp = {
      nickname: props.nickname,
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
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    router.back();
    setOpen(false);
  };

  return (
    <Wrapper>
      <a
        onClick={() => router.back()}
        style={{ textDecoration: "none", flex: 2 }}
      >
        <Text>취소</Text>
      </a>
      <div style={{ flex: 2 }}></div>
      <Text
        onClick={() => {
          handleSubmit();
          handleOpen();
        }}
        style={{ flex: 1 }}
      >
        등록
      </Text>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <PopWrapper>
          <a
            onClick={() => router.back()}
            type="button"
            onClick={handleClose}
            style={{
              fontFamily: "S-CoreDream-6",
              fontSize: "1.3rem",
              color: "#aaaaaa",
              margin: "1rem 1rem 4.5rem 25.5rem",
              display: "flex",
              textAlign: "center",
              alignItems: "center"
            }}
          >
            닫기
          </a>
          <div
            style={{
              display: "flex",
              textAlign: "center",
              alignItems: "center",
              flexDirection: "column"
            }}
          >
            <Logo
              style={{
                width: "8.8rem",
                height: "8.8rem",
                marginBottom: "1rem"
              }}
            />
            <hr style={{ width: "80%" }} />
            <ModalText>리뷰가 등록되었습니다!</ModalText>
          </div>
        </PopWrapper>
      </Modal>
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
  width: 100%;
  max-width: 36rem;
  position: fixed;
  top: 7rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  text-align: left;
  font-family: S-CoreDream-6;
  color: #ffffff;
`;
const ModalText = styled.p`
  font-family: S-CoreDream-6;
  font-size: 1.5rem;
  line-height: 1.8;
  text-align: center;
  color: #707070;
`;
const PopWrapper = styled.div`
  width: 29.6rem;
  height: 29.5rem;
  object-fit: contain;
  border-radius: 2.2rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
  position: absolute;
  top: 23.9rem;
  left: 3.9rem;
`;
