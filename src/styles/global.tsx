import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';
import 'bulma/css/bulma.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    background: #191920 !important;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px Roboto, sans-serif;
  }

  #root {
  }

  button {
    cursor: pointer;
    background: #01c873;
    color: #fff;
    border: 0;
    border-radius: 4px;
    overflow: hidden;
    margin-top: auto;

    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#01C873')};
    }

    div {
      display: flex;
      align-items: center;
      padding: 12px;
      background: rgba(0, 0, 0, 0.1);

      svg {
        margin-right: 5px;
      }
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }

  .no-padding-top {
    padding-top: 0px !important;
  }

  .no-padding-bottom {
    padding-bottom: 0px !important;
  }

  .progress:indeterminate {
    background-image: linear-gradient(to right, #01c873 30%, #ededed 30%) !important;
  }

  .Toastify__toast--success {
    color: white !important;
    background-color: #01c873 !important;
    border-color: #01c873 !important;
  }
`;
