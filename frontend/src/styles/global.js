import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    background: #F0F2F5;
  }

  body {
    -webkit-font-smoothing: antialiased;

  }

  body, input, button {
    font: 400 14px/24px 'Roboto', sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    font-weight: bold;
    border-radius: 4px;
  }

  .card{
    background: #fff;
    box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);
    padding: 24px;
    margin-bottom: 24px;
  }

`;
