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
        <DrawerBox position={{ position: "absolute", top: "0" }}>
          <LogoWrapper>
            <DrawerLogo
              style={{ paddingLeft: "2.47rem", paddingTop: "8.96rem" }}
            />
          </LogoWrapper>
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
                  <Link href="https://open.kakao.com/o/ss85X3Mb">
                    <a>{index % 4 === 2 && <QuestionIcon />}</a>
                  </Link>
                  {index % 4 === 3 && <HomeIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
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
              <ListItemText primary={text} />
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
        ` `{sideList("right")}
      </Drawer>
    </div>
  );
}

const DrawerBox = styled.div`
  width: 25rem;
  height: 30.2rem;
  object-fit: contain;
  background-color: #efefef;
`;
const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const ListWrapper = styled.div`
  width: 100%;
  height: 81.2rem;
  object-fit: contain;
  background-color: #ff6565;
`;
