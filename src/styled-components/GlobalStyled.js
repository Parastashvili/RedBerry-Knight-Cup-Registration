import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{padding: 0;
  margin: 0;
}
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default GlobalStyle;
