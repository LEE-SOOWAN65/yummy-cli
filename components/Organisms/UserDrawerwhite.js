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
import DrawerButton from "../atoms/Icon/Botton/DrawerButtonwhite";
import DrawerLogo from "../atoms/Icon/DrawerLogo";
import styled from "styled-components";
import FaceBook from "../atoms/Icon/Botton/FacebookloginIcon";
import Link from "next/link";

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

            <FaceBook style={{ width: "15.31rem", margin: "0rem" }} />
            <FaceBook
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
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: normal;
  color: #f5f5f5;
`;
