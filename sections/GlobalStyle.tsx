import { ExecutionProps, createGlobalStyle } from "styled-components";
import { color } from "../system";
import { NamedExoticComponent } from "react";

const GlobalStyle: NamedExoticComponent<ExecutionProps & TemplateStringsArray> = createGlobalStyle`
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
        background-color: hsl(21, 90%, 92%);
        color: hsl(21, 67%, 27%);
    }
`;

export default GlobalStyle;