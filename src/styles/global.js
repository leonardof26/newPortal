import { createGlobalStyle } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
import 'react-datepicker/dist/react-datepicker.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');

  .Toastify__toast--warning{
    background: #7159c1;
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html, body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
    font-family: 'Nunito', sans-serif !important;
    font-size: 12px;
  }

  body, input, button{
    font-family: 'Nunito', sans-serif !important;
    font-size: 14px !important;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  button{
    cursor: pointer;
  }

`
