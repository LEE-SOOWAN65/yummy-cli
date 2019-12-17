import React from "react";
import App from "next/app";
import Head from "next/head";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face { font-family: 'HSSummer'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/HSSummer.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'S-CoreDream-4'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-4Regular.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'S-CoreDream-6'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-6Bold.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'S-CoreDream-5'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-5Medium.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'Beta'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/OTEnjoystoriesBA.woff') format('woff'); font-weight: normal; font-style: normal; }
@font-face { font-family: 'S-CoreDream-7'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/S-CoreDream-7ExtraBold.woff') format('woff'); font-weight: normal; font-style: normal; }
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@media (max-width: 262px) {
  html {
    font-size: 7px;
  }
}
@media (min-width: 263px) and (max-width: 300px) {
  html {
    font-size: 8px;
  }
}
@media (min-width: 301px) and (max-width: 337px) {
  html {
    font-size: 9px;
  }
}
@media (min-width: 338px) and (max-width: 375px) {
  html {
    font-size: 10px;
  }
}
@media (min-width: 376px) and (max-width: 412px) {
  html {
    font-size: 11px;
  }
}
@media (min-width: 413px) and (max-width: 450px) {
  html {
    font-size: 12px;
  }
}
@media (min-width: 451px){
  html {
    font-size: 13px;
  }
}


body {
  margin: 0;
  padding: 0;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.1rem;
  background-color:#ccc;
}
::-webkit-scrollbar {
  display: none;
}
input {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
}
html,
          body,
          body > div:first-child{
            height: 100%;
          }
`;

class PickkApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle />
        <Head>
          <title>끼니끼니</title>
        </Head>
        <BestWrapper>
          <Grey />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Grey />
        </BestWrapper>
      </>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 36rem;
  min-height: 100%;
  background-color: white;
  position: relatvie;
`;

const Grey = styled.div`
  flex: 1;
  background-color: #ccc;
  z-index: 100;
`;

const BestWrapper = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100%;
`;

export default PickkApp;
