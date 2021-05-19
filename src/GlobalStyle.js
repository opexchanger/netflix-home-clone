import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::after, ::before {
        box-sizing: inherit;
    }

    html {
        font-size: 50%;
        box-sizing: border-box;

        @media (min-width: 600px) {
            font-size: 62.5%;
        }
        @media (min-width: 1000px) {
            font-size: 62.5%;
        }
        @media (min-width: 1800px) {
            font-size: 75%;
        }
    }

    body {
        margin: 0;
        font-size: 1.6rem;
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000;
        color: #757575;

        @media (max-width: 600px) {
            font-size: 1.8rem;
        }
    }
`;

export default GlobalStyle;
