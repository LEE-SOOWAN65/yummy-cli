import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Setting from "../atoms/Icon/Botton/DrawerSetting";
import SpeakerIcon from "../atoms/Icon/Botton/Speaker";
import QuestionIcon from "../atoms/Icon/Botton/Question";
import HomeIcon from "../atoms/Icon/Botton/Home";
import PlusFriendIcon from "../atoms/Icon/Botton/PlusFriend";
import DrawerButton from "../atoms/Icon/Botton/DrawerButtonwhite";
import DrawerLogo from "../atoms/Icon/DrawerLogo";
import styled from "styled-components";
import FaceBook from "../atoms/Icon/Botton/FacebookloginIcon";
import KakaoLogin from "../atoms/Icon/Botton/KakaoIogin";
import Modal from "@material-ui/core/Modal";
import ModalIcon from "../atoms/Icon/PopAlert";

const useStyles = makeStyles({
  list: {
    width: 250,
    height: "100%"
  },
  fullList: {
    width: "auto",
    height: "100%",
    fill: "#ff6565"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false
  });

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onKeyDown={toggleDrawer(side, false)}
    >
      <ListWrapper>
        <DrawerBox>
          <Logo>
            <DrawerLogo
              style={{
                padding: "8.96rem 1.13rem 0 2.47rem"
              }}
            />
            <FaceBook
              onClick={() => {
                handleOpen();
              }}
              style={{ width: "15.31rem", margin: "0rem" }}
            />
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
                    margin: "1rem 1rem 1rem 25.5rem",
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
                  <ModalIcon
                    style={{
                      width: "8.8rem",
                      height: "8.8rem",
                      marginBottom: "1rem"
                    }}
                  />
                  <text
                    style={{
                      fontFamily: "S-CoreDream-6",
                      fontSize: "1.8rem",
                      color: "#ff6565",
                      marginBottom: "1.6rem"
                    }}
                  >
                    알림
                  </text>
                  <hr style={{ width: "80%" }} />
                  <MadalText>
                    베타서비스 중에는 가입 / 로그인 없이 <br />
                    서비스이용이 가능합니다
                  </MadalText>
                </div>
              </PopWrapper>
            </Modal>
            <KakaoLogin
              onClick={() => {
                handleOpen();
              }}
              style={{
                width: "15.31rem",
                margin: "1.12rem 1.59rem 4.28rem 7rem"
              }}
            />{" "}
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
                    margin: "1rem 1rem 1rem 25.5rem",
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
                  <ModalIcon
                    style={{
                      width: "8.8rem",
                      height: "8.8rem",
                      marginBottom: "1rem"
                    }}
                  />
                  <text
                    style={{
                      fontFamily: "S-CoreDream-6",
                      fontSize: "1.8rem",
                      color: "#ff6565",
                      marginBottom: "1.6rem"
                    }}
                  >
                    알림
                  </text>
                  <hr style={{ width: "80%" }} />
                  <MadalText>
                    베타서비스 중에는 가입 / 로그인 없이 <br />
                    서비스이용이 가능합니다
                  </MadalText>
                </div>
              </PopWrapper>
            </Modal>
            <hr style={{ width: "23rem", borderTop: "0.1rem solid #707070" }} />
            <UserDetail>
              <div style={{ display: "flex", flex: 1 }} />
              <Detail>
                <hr
                  style={{
                    display: "flex",
                    flex: 1,
                    width: "1rem",
                    borderTop: "0.05rem solid #707070"
                  }}
                />
                평가
              </Detail>
              <div style={{ display: "flex", flex: 1 }} />
              <Detail>
                <hr
                  style={{
                    display: "flex",
                    flex: 1,
                    width: "1rem",
                    borderTop: "0.05rem solid #707070"
                  }}
                />
                찜하기
              </Detail>
              <div style={{ display: "flex", flex: 1 }} />
              <Detail>
                <hr
                  style={{
                    display: "flex",
                    flex: 1,
                    width: "1rem",
                    borderTop: "0.05rem solid #707070"
                  }}
                />
                알림
              </Detail>
              <div style={{ display: "flex", flex: 1 }} />
            </UserDetail>
          </Logo>
        </DrawerBox>

        <List>
          {["공지사항", "학교 변경하기"].map((text, index) => (
            <>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 && <SpeakerIcon />}
                  {index % 2 === 1 && <Setting />}
                </ListItemIcon>
                <DrawerItemText primary={text} />
              </ListItem>
            </>
          ))}
        </List>
        <hr
          style={{
            width: "23rem",
            borderTop: "0.02rem solid #ffffff"
          }}
        />
        <List>
          {[
            "카카오톡 문의하기",
            "카카오톡 플러스친구",
            "바로가기 생성하기"
          ].map((text, index) => (
            <>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 3 === 0 && <QuestionIcon />}
                  {index % 3 === 1 && <PlusFriendIcon />}
                  {index % 3 === 2 && <HomeIcon />}
                </ListItemIcon>
                <DrawerItemText primary={text} />
              </ListItem>
            </>
          ))}
        </List>
      </ListWrapper>
    </div>
  );

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    ></div>
  );

  return (
    <div>
      <Button onClick={toggleDrawer("right", true)}>
        <DrawerButton />
      </Button>

      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        {sideList("right")}
      </Drawer>
    </div>
  );
}

const DrawerBox = styled.div`
  width: 25rem;
  height: 30.2rem;
  object-fit: contain;
  background-color: #efefef;
  display: flex;
  flex-direction: row;
`;
const ListWrapper = styled.div`
  width: 100%;
  height:100%
  object-fit: contain;
  background-color: #ff6565;
`;

const Logo = styled.div`
  position: flex;
  flex-direction: row;
  width: 100%;
`;

const DrawerItemText = styled(ListItemText)`
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 1.3rem;
  font-weight: bold;
  line-height: 1.46;
  color: #f5f5f5;
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
const Detail = styled.p`
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 1rem;
  font-weight: bold;
  line-height: 1.8;
  text-align: center;
  color: #707070;
  display: flex;
  flex-direction: column;
  width: 3rem;
  text-align: center;
  align-items: center;
`;
const MadalText = styled.p`
  height: 7.2rem;
  object-fit: contain;
  font-family: S-CoreDream-6;
  font-size: 1.5rem;
  line-height: 1.8;
  text-align: center;
  color: #707070;
`;

const UserDetail = styled.p`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: justify;
`;
