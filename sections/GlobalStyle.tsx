import { createGlobalStyle } from "styled-components";
import { color } from "../system";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    
    html,
    body {
        font-family: 'Noto Sans', Helvetics, sans-serif;
        max-width: 100vw;
        overflow-x: hidden;
        background-color: ${color.chroma.creme100};
        color: ${color.chroma.brown100};
    }
`;

export default GlobalStyle;