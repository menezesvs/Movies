import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: none;
        list-style: none;
        text-decoration: none;
        box-sizing: border-box;
        font-family: 'Open Sans', sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }
    button{
        cursor: pointer;
    }
    body::-webkit-scrollbar {
    width: 10px;
}
    body::-webkit-scrollbar-track {
    background-color: #000;
}
    body::-webkit-scrollbar-thumb {
    background-color: #ffffff50;
    border: solid 2px black;
    border-radius: 5px;
}
`;