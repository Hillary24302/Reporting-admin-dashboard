import { createContext, useMemo, useState } from "react";
import { createTheme } from "@mui/material/styles";

//Color design token
export const tokens = (mode) => ({
  ...(mode === 'light'
  ? {
    primary: {
      100: "#2F80ED",
      200: "#9ea9c4",
      300: "#FFFFFF",
      400: "#3d5289",
      500: "#0c276c",
      600: "#0a1f56",
      700: "#071741",
      800: "#05102b",
      900: "#020816"
    },
    textBlack: {
      100: "#d3ccd6",
      200: "#a799ad",
      300: "#7a6784",
      400: "#4e345b",
      500: "#220132",
      600: "#1b0128",
      700: "#14011e",
      800: "#0e0014",
      900: "#07000a"
    },
    textWhite: {
      100: "#fefeff",
      200: "#fdfdff",
      300: "#fdfdfe",
      400: "#fcfcfe",
      500: "#fbfbfe",
      600: "#c9c9cb",
      700: "#979798",
      800: "#646466",
      900: "#323233"
    },
    backgroundWhite: {
      100: "#fefeff",
      200: "#fdfdff",
      300: "#fdfdfe",
      400: "#fcfcfe",
      500: "#ffffff",
      600: "#c9c9cb",
      700: "#979798",
      800: "#646466",
      900: "#323233"
    },
    textBlue: {
      100: "#cce0ff",
      200: "#99c2ff",
      300: "#66a3ff",
      400: "#3385ff",
      500: "#3564DB",
      600: "#0052cc",
      700: "#003d99",
      800: "#002966",
      900: "#001433"
    },
    textGray: {
      100: "#ffffff",
      200: "#ffffff",
      300: "#ffffff",
      400: "#ffffff",
      500: "#220132",
      600: "#BDC1CC",
      700: "#999999",
      800: "#666666",
      900: "#333333"
  },
  
  }:
  {
    primary: {
      100: "#ced4e2",
      200: "#9ea9c4",
      300: "#6d7da7",
      400: "#3d5289",
      500: "#0c276c",
      600: "#0a1f56",
      700: "#071741",
      800: "#05102b",
      900: "#020816" 
    },
  }
  )
})

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === 'light'
        ? {
          background: {
            main: colors.primary[500],
          },
          secondary: {
            main: colors.textBlack[500],
          },
          neutral: {
            main: colors.textGray[500],
          },
          primary: {
            main: colors.textBlue[500],
          },
          whitecolor: {
            main: colors.textWhite[500],
          },
          backgroundWhite: {
            main: colors.backgroundWhite[500],
          },
        } :
        {
          background: {
            main: colors.primary[500],
          },
        }
      ),

    },
    Typography: {
      fontFamily: ["Avenir Next", "Abel"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Avenir Next"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Avenir Next"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Able"].join(","),
        fontSize: 24,
        fontWeight: 400,
      },
      h4: {
        fontFamily: ["Avenir Next"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Avenir Next"].join(","),
        fontSize: 18,
        fontWeight: 400,
      },
      h5: {
        fontFamily: ["Avenir Next"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Avenir Next"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
  toggleColorMode: () => {}
})
export const useMode = () => {
  const [mode, setMode] = useState('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
      setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return [theme, colorMode];
}