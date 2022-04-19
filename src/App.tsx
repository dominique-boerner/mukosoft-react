import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./style/theme";
import Router from "./features/router/Router";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
