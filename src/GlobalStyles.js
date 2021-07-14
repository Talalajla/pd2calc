import {createGlobalStyle} from "styled-components";
import bg from "./images/background.png";

const GlobalStyle = createGlobalStyle`

    html {
        height: 100%;
        box-sizing: border-box;
        filter: grayscale(20%);
        overflow-x: hidden;
    }

    *,*::before,*::after {
        box-sizing: inherit;
    }

    body {
        margin: 0;
        height: 100%;
        background: url(${bg}) ;    
        overflow-x: hidden;
    }

    #root {
        height: 100%;
        padding-top: 15px;
        display: grid;
        grid-template-rows: auto 1fr;
        background-color: rgba(0,0,0,0.3);
        overflow-y: auto;
        overflow-x: hidden;
    }

    a {
        text-decoration: none;
        color: #000;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

`;

export default GlobalStyle;