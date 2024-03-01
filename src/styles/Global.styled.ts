import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle =createGlobalStyle`
*, 
*::before,
*::after {
    margin: 0; 
    padding:0;
    box-sizing: border-box;
}
body {
    margin: 0;
    font-family: 'Poppins', 'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.color.fontColor};

}


a {
    text-decoration: none;
    color: inherit; 
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none; 
}

section:nth-of-type(odd) {
    background-color: ${theme.color.primaryBg};
}

section:nth-of-type(even) {
    background-color: ${theme.color.secondaryBg};
}



`



//   /* .josefin-sans {
//     font-family: "Josefin Sans", sans-serif;
//     font-optical-sizing: auto;
//     font-weight: 700;
//     font-style: normal;
//   }
  
//   .poppins-regular {
//     font-family: "Poppins", sans-serif;
//     font-weight: 400;
//     font-style: normal;
//   } */