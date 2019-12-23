import React from "react";
import FacebookLoginWithButton from "react-facebook-login";

const responseFacebook = response => {
  console.log(response.id);
};

const componentClicked = () => {
  console.log("Clicked!");
};

export default function App() {
  return (
    <FacebookLoginWithButton
      appId="454851518494669"
      autoLoad
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook}
      icon="fa-facebook"
    />
  );
}
