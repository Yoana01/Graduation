import { createGlobalStyle } from "styled-components";
import Background from "../Background.svg"

export const GlobalStyle = createGlobalStyle`
    body{
        /* background: linear-gradient(180deg, #6D6875 37.2%, #FFCDB2 85.3%); */
        /* background-image: url(${Background}); */
        background-color: #6D6875;
        width: auto;
        /* height: 180vh; */
        margin: 0px;
        padding: 0px;
        color: #ffffff;
        font-family: 'Lato-Light', sans-serif;
        line-height: 22px;
        padding-bottom: 56px;
    }
   
`

