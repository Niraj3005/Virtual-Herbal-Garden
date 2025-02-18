import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-family: ${(props) => props.theme.font};
        margin: 0;
        padding: 0;
    }
    h2 {
        color: ${(props) => props.theme.colors.primary};
    }
    button {
        background-color: ${(props) => props.theme.colors.primary};
        color: white;
        border: none;
        padding: 10px 20px;
        margin-top: 10px;
        cursor: pointer;
        border-radius: 5px;
    }
    button:hover {
        background-color: ${(props) => props.theme.colors.secondary};
    }
`;

export default GlobalStyle;
