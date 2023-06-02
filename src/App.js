import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import WebRoutes from "./router/routes";
import { useRoutes } from "react-router-dom";

function App() {
  const routing = useRoutes(WebRoutes);
  const [ theme, colorMode ] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
      <CssBaseline />
        {routing}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
