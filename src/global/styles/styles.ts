import { createGlobalStyle } from "styled-components";

type Theme = {
    light: {
      colors: { primary: string, secondary: string, background: string };
    };
    dark: {
      colors: { primary: string, secondary: string, background: string };
    };
  };
  
  interface iProps {
    theme: Theme;
    themeValue: keyof Theme;
}

export const GlobalStyles = createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif;
    }
    body {
      background: ${({ theme, themeValue }: iProps) => theme[themeValue].colors.background};
      transition: background 1s ease-in-out;
    }
`