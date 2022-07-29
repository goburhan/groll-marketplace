import { createGlobalStyle, withTheme } from "styled-components";
import ThemeProps from "./themes";

export const screens = {
  mobile: "586px",
  tablet: "1024px",
  bigscreen: "2000px",
};



const GlobalStyle = createGlobalStyle<{ theme: ThemeProps }>`
@tailwind base;
@tailwind components;
@tailwind utilities;

  * {
font-family: "Poppins", normal;

}
  body {

    margin: 0;

    -webkit-font-smoothing: antialiased;  
    -moz-osx-font-smoothing: grayscale;
    background:${({ theme }) => theme.background};
  }
  


`;

export default withTheme(GlobalStyle);
