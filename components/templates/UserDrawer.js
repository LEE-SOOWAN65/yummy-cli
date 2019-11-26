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
import FacebookLogin from "../atoms/Icon/Botton/facebooklogin";

const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
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
      style={{ backgroundolor: "#ff6565" }}
    >
      <DrawerBox position={{ position: "absolute", top: "0" }}>
        <LogoWrapper>
          <DrawerLogo
            style={{ paddingLeft: "2.47rem", paddingTop: "8.96rem" }}
          />
          <FacebookLogin />
        </LogoWrapper>
      </DrawerBox>
      <Divider />
      <List>
        {["공지사항", "학교 변경하기", "피드백", "홈 아이콘 바로가기"].map(
          (text, index) => (
            <>
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 4 === 0 && <SpeakerIcon />}
                  {index % 4 === 1 && <Setting />}
                  {index % 4 === 2 && <QuestionIcon />}
                  {index % 4 === 3 && <HomeIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </>
          )
        )}
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
