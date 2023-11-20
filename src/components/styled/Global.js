import { createGlobalStyle } from "styled-components";

 export const GlobalStyles = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 10px;
    }

    #root{
        display: flex;
        align-items: center;
        background-color: #EBF1EF;
    }
`