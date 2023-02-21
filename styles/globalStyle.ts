import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    //16x0,9375 = 15px
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    //16x0,9375 = 14px
    font-size: 87.5%;
  }
}
:root{
  --fira: "Fira Sans", sans-serif;
    --roboto: "Roboto", sans-serif;
    --white: #fff;
    --orange: #EF6C09;
    --grey: #525252;
    --black: #000;
    --dark-gray: #343a40;

}

body,
input,
textarea,
select,
button {
  font: 400 1rem "Poppins", sans-serif;
}

  body {
  color: #FFF;
  overflow-x: hidden;
  
  }
  
  ul {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }
  
  .swiperArticle {
    width: 100%;
  overflow-x: hidden;

  }
  `;
