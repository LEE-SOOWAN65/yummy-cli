import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import { useMutation } from "../../lib";
import Modal from "@material-ui/core/Modal";

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
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          <a onClick={() => router.back()} type="button" onClick={handleClose}>
            close Modal
          </a>
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
  top: 9rem;
`;

const Text = styled.div`
  font-size: 1.5rem;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;

const PopWrapper = styled.div`
width: 29.6rem;
  height: 29.5rem;
  object-fit: contain;
  border-radius: 2.2rem;
  box-shadow: 0 0.5rem 1rem 0 rgba(229, 75, 75, 0.3);
  background-color: #ffffff;
  position:absolute;
  top:23.9rem;
  left:3.9rem;

}
`;
