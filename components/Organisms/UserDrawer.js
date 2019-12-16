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
import LoginIcon from "../atoms/Icon/Botton/Login";
import DrawerButton from "../atoms/Icon/Botton/DrawerButton";
import DrawerLogo from "../atoms/Icon/DrawerLogo";
import styled from "styled-components";
import FaceBook from "../atoms/Icon/Botton/FacebookloginIcon";
import KakaoLogin from "../atoms/Icon/Botton/KakaoIogin";
import Modal from "@material-ui/core/Modal";

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
      onClick={toggleDrawer(side, false)}
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
                <h2 id="simple-modal-title">Text in a modal</h2>
                <p id="simple-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor
                  ligula.
                </p>
                <a
                  onClick={() => router.back()}
                  type="button"
                  onClick={handleClose}
                >
                  close Modal
                </a>
              </PopWrapper>
            </Modal>
            <KakaoLogin
              style={{
                width: "15.31rem",
                margin: "1.12rem 1.59rem 4.28rem 7rem"
              }}
            />
            <hr style={{ width: "23rem", borderTop: "0.1rem solid #707070" }} />
          </Logo>
        </DrawerBox>
        <Divider />
        <List>
          {[
            "공지사항",
            "학교 변경하기",
            "카카오톡 문의하기",
            "바로가기 생성하기"
          ].map((text, index) => (
            <>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 4 === 0 && <SpeakerIcon />}
                  {index % 4 === 1 && <Setting />}
                  {index % 4 === 2 && <QuestionIcon />}
                  {index % 4 === 3 && <HomeIcon />}
                </ListItemIcon>
                <DrawerItemText primary={text} />
              </ListItem>
            </>
          ))}
        </List>
        <Divider />
        <List>
          {["홈 바로가기"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <DrawerItemText primary={text} />
            </ListItem>
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
